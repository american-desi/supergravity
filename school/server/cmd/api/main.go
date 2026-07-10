// Command api runs the Supergravity School API server.
//
// Assumptions (stated per the production directive):
//   - Single-teacher deployment: the teacher account is bootstrapped from env
//     on first boot; students join via one-time invite codes.
//   - v1 scope is Layers 1+2 for <=20 students; SQLite in WAL mode on one
//     host is deliberately sufficient for ~10x that load. Layers 3-5 exist
//     only as schema + disabled feature flags.
//   - Caddy terminates TLS and proxies to this process on localhost.
package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/api"
	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/compiler"
	"github.com/american-desi/supergravity/school/server/internal/config"
	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/llm"
	"github.com/american-desi/supergravity/school/server/internal/seeddata"
	"github.com/american-desi/supergravity/school/server/internal/spine"
	"github.com/american-desi/supergravity/school/server/internal/tutor"
)

const (
	readHeaderTimeout = 10 * time.Second
	// writeTimeout must accommodate tutor streaming; the LLM call itself is
	// bounded by cfg.LLMTimeout.
	writeTimeout    = 6 * time.Minute
	idleTimeout     = 2 * time.Minute
	shutdownTimeout = 15 * time.Second
)

func main() {
	slog.SetDefault(slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{Level: slog.LevelInfo})))
	if err := run(); err != nil {
		slog.Error("fatal", "error", err)
		os.Exit(1)
	}
}

func run() error {
	cfg, err := config.Load()
	if err != nil {
		return err
	}

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	sqlDB, err := db.Open(ctx, cfg.DBPath)
	if err != nil {
		return err
	}
	defer sqlDB.Close()

	if docID, imported, err := seeddata.ImportEmbedded(ctx, sqlDB); err != nil {
		return err
	} else if imported {
		slog.Info("seed: imported embedded SHSAT standards document", "document_id", docID)
	}

	authSvc := &auth.Service{DB: sqlDB, SessionTTL: cfg.SessionTTL, SecureCookies: !cfg.Dev}
	if err := authSvc.BootstrapTeacher(ctx, cfg.TeacherEmail, cfg.TeacherPassword, "Teacher"); err != nil {
		return err
	}

	llmClient := llm.New(cfg.AnthropicAPIKey, cfg.LLMModel, cfg.LLMTimeout)
	spineStore := &spine.Store{DB: sqlDB}
	comp := &compiler.Compiler{DB: sqlDB, LLM: llmClient}
	tut := &tutor.Service{DB: sqlDB, LLM: llmClient, Spine: spineStore, DailyCap: cfg.TutorDailyMessageCap}

	// Recover jobs orphaned by a crash mid-run: stages are resumable, so
	// re-queueing is safe.
	if _, err := sqlDB.ExecContext(ctx,
		`UPDATE compile_jobs SET status = 'queued', updated_at = ? WHERE status = 'running'`, db.Now()); err != nil {
		return err
	}
	go comp.RunWorker(ctx)

	srv := &api.Server{DB: sqlDB, Cfg: cfg, Auth: authSvc, Compiler: comp, Tutor: tut, Spine: spineStore}
	httpServer := &http.Server{
		Addr:              cfg.Addr,
		Handler:           srv.Routes(),
		ReadHeaderTimeout: readHeaderTimeout,
		WriteTimeout:      writeTimeout,
		IdleTimeout:       idleTimeout,
	}

	errCh := make(chan error, 1)
	go func() {
		slog.Info("api: listening", "addr", cfg.Addr, "model", cfg.LLMModel)
		if err := httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			errCh <- err
		}
	}()

	select {
	case err := <-errCh:
		return err
	case <-ctx.Done():
		slog.Info("api: shutting down")
		shutdownCtx, cancel := context.WithTimeout(context.Background(), shutdownTimeout)
		defer cancel()
		if err := httpServer.Shutdown(shutdownCtx); err != nil {
			return err
		}
	}
	return nil
}
