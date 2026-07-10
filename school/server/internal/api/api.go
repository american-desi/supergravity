// Package api wires HTTP routes to the auth, compiler, tutor, and spine
// services. Handlers validate at the boundary and return httpx errors.
package api

import (
	"database/sql"
	"net/http"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/compiler"
	"github.com/american-desi/supergravity/school/server/internal/config"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
	"github.com/american-desi/supergravity/school/server/internal/spine"
	"github.com/american-desi/supergravity/school/server/internal/tutor"
)

// Rate limits for abuse-prone endpoints.
const (
	loginPerMinute     = 5
	registerPerMinute  = 5
	tutorSendPerMinute = 10
)

// Server aggregates the services handlers need.
type Server struct {
	DB       *sql.DB
	Cfg      config.Config
	Auth     *auth.Service
	Compiler *compiler.Compiler
	Tutor    *tutor.Service
	Spine    *spine.Store

	loginLimiter    *httpx.RateLimiter
	registerLimiter *httpx.RateLimiter
	tutorLimiter    *httpx.RateLimiter
}

// Routes returns the fully-wired handler with all middleware applied.
func (s *Server) Routes() http.Handler {
	s.loginLimiter = httpx.NewRateLimiter(loginPerMinute)
	s.registerLimiter = httpx.NewRateLimiter(registerPerMinute)
	s.tutorLimiter = httpx.NewRateLimiter(tutorSendPerMinute)

	mux := http.NewServeMux()

	// Liveness: no auth, no DB dependency beyond a ping.
	mux.Handle("GET /api/health", httpx.Handler(s.handleHealth))

	// Auth.
	mux.Handle("POST /api/auth/login", s.loginLimiter.LimitByIP(s.handleLogin))
	mux.Handle("POST /api/auth/register", s.registerLimiter.LimitByIP(s.handleRegister))
	mux.Handle("POST /api/auth/logout", httpx.Handler(s.handleLogout))
	mux.Handle("GET /api/auth/me", s.Auth.Require("", s.handleMe))

	// Teacher.
	mux.Handle("GET /api/teacher/overview", s.Auth.Require("teacher", s.handleTeacherOverview))
	mux.Handle("POST /api/teacher/invites", s.Auth.Require("teacher", s.handleCreateInvite))
	mux.Handle("GET /api/teacher/standards-documents", s.Auth.Require("teacher", s.handleListStandardsDocuments))
	mux.Handle("POST /api/teacher/standards-documents", s.Auth.Require("teacher", s.handleImportStandardsDocument))
	mux.Handle("POST /api/teacher/courses", s.Auth.Require("teacher", s.handleCompileCourse))
	mux.Handle("GET /api/teacher/jobs/{id}", s.Auth.Require("teacher", s.handleJobStatus))
	mux.Handle("POST /api/teacher/courses/{id}/review", s.Auth.Require("teacher", s.handleReviewCourse))
	mux.Handle("POST /api/teacher/courses/{id}/enrollments", s.Auth.Require("teacher", s.handleEnroll))
	mux.Handle("GET /api/teacher/students/{id}", s.Auth.Require("teacher", s.handleStudentDetail))
	mux.Handle("PUT /api/teacher/students/{id}/profile", s.Auth.Require("teacher", s.handleUpdateProfile))

	// Course content (both roles; per-request access checks inside).
	mux.Handle("GET /api/courses", s.Auth.Require("", s.handleListCourses))
	mux.Handle("GET /api/courses/{id}", s.Auth.Require("", s.handleCourseOutline))
	mux.Handle("GET /api/courses/{id}/provenance", s.Auth.Require("", s.handleProvenance))
	mux.Handle("GET /api/lessons/{id}", s.Auth.Require("", s.handleLesson))
	mux.Handle("GET /api/activities/{id}/html", s.Auth.Require("", s.handleActivityHTML))

	// Student.
	mux.Handle("POST /api/student/items/{id}/attempts", s.Auth.Require("student", s.handleItemAttempt))
	mux.Handle("POST /api/student/activities/{id}/complete", s.Auth.Require("student", s.handleActivityComplete))
	mux.Handle("POST /api/student/tutor/sessions", s.Auth.Require("student", s.handleOpenTutorSession))
	mux.Handle("GET /api/student/tutor/sessions", s.Auth.Require("student", s.handleListTutorSessions))
	mux.Handle("GET /api/student/tutor/sessions/{id}/messages", s.Auth.Require("student", s.handleTutorHistory))
	mux.Handle("POST /api/student/tutor/sessions/{id}/messages", s.Auth.Require("student", s.handleTutorSend))

	var h http.Handler = mux
	h = httpx.RequireOrigin(s.Cfg.PublicOrigin, h)
	h = httpx.SecurityHeaders(h)
	h = httpx.Log(h)
	h = httpx.Recover(h)
	return h
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) error {
	if err := s.DB.PingContext(r.Context()); err != nil {
		return httpx.Fail(http.StatusServiceUnavailable, "db_down", "Database unavailable.")
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]string{"status": "ok"})
	return nil
}
