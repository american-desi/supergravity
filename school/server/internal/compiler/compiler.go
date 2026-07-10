// Package compiler implements Layer 1: standards document + learner profile
// in, complete course out — lesson arcs, misconception-mapped distractors,
// formative checks, and self-contained interactive HTML activities — with a
// verifiable provenance chain from the standards document to every artifact.
//
// Jobs are queued in compile_jobs and executed by a single background worker
// (one course at a time is the v1 reality; the queue makes retries and
// restarts safe). Every stage is resumable: lessons already generated are
// skipped on retry.
package compiler

import (
	"context"
	"crypto/sha256"
	"database/sql"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"log/slog"
	"strings"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/ids"
	"github.com/american-desi/supergravity/school/server/internal/llm"
)

const (
	planMaxTokens     = 8000
	lessonMaxTokens   = 8000
	activityMaxTokens = 16000
	// maxActivityBytes rejects runaway generations.
	maxActivityBytes = 400 * 1024
	// maxJobAttempts before a job is marked failed for teacher intervention.
	maxJobAttempts = 3
	pollInterval   = 3 * time.Second
)

// Compiler owns the compile queue and pipeline.
type Compiler struct {
	DB  *sql.DB
	LLM llm.Client
}

// planOutput mirrors the JSON contract in planSystemPrompt.
type planOutput struct {
	CourseTitle string `json:"course_title"`
	Units       []struct {
		Title    string `json:"title"`
		Overview string `json:"overview"`
		Lessons  []struct {
			Title        string `json:"title"`
			Objective    string `json:"objective"`
			StandardCode string `json:"standard_code"`
		} `json:"lessons"`
	} `json:"units"`
}

// lessonOutput mirrors the JSON contract in lessonSystemPrompt.
type lessonOutput struct {
	NarrativeMD string `json:"narrative_md"`
	Items       []struct {
		StemMD        string `json:"stem_md"`
		CorrectLabel  string `json:"correct_label"`
		CorrectText   string `json:"correct_text"`
		ExplanationMD string `json:"explanation_md"`
		Distractors   []struct {
			Label             string `json:"label"`
			Text              string `json:"text"`
			MisconceptionCode string `json:"misconception_code"`
			FeedbackMD        string `json:"feedback_md"`
		} `json:"distractors"`
	} `json:"items"`
}

// Enqueue creates a course shell and a queued compile job for it.
func (c *Compiler) Enqueue(ctx context.Context, standardsDocumentID, learnerProfileNote, createdBy string) (courseID, jobID string, err error) {
	courseID = ids.New("crs")
	jobID = ids.New("job")
	now := db.Now()
	err = db.InTx(ctx, c.DB, func(tx *sql.Tx) error {
		var docExists int
		if err := tx.QueryRowContext(ctx, `SELECT COUNT(*) FROM standards_documents WHERE id = ?`, standardsDocumentID).Scan(&docExists); err != nil {
			return fmt.Errorf("compiler: check standards document: %w", err)
		}
		if docExists == 0 {
			return fmt.Errorf("compiler: standards document %s not found", standardsDocumentID)
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO courses (id, title, standards_document_id, learner_profile_note, status, model, created_by, created_at)
			VALUES (?, '(compiling…)', ?, ?, 'compiling', ?, ?, ?)`,
			courseID, standardsDocumentID, learnerProfileNote, c.LLM.Model(), createdBy, now); err != nil {
			return fmt.Errorf("compiler: insert course: %w", err)
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO compile_jobs (id, course_id, status, stage, created_at, updated_at)
			VALUES (?, ?, 'queued', 'plan', ?, ?)`, jobID, courseID, now, now); err != nil {
			return fmt.Errorf("compiler: insert job: %w", err)
		}
		return nil
	})
	if err != nil {
		return "", "", err
	}
	return courseID, jobID, nil
}

// RunWorker polls the queue until ctx is canceled. Call in a goroutine.
func (c *Compiler) RunWorker(ctx context.Context) {
	slog.Info("compiler: worker started")
	ticker := time.NewTicker(pollInterval)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			slog.Info("compiler: worker stopped")
			return
		case <-ticker.C:
			if err := c.RunNext(ctx); err != nil && !errors.Is(err, context.Canceled) {
				slog.Error("compiler: job run failed", "error", err)
			}
		}
	}
}

// RunNext claims and executes at most one queued job. Exposed for the
// worker loop and for deterministic test drivers.
func (c *Compiler) RunNext(ctx context.Context) error {
	var jobID, courseID string
	err := c.DB.QueryRowContext(ctx, `
		SELECT id, course_id FROM compile_jobs
		WHERE status = 'queued' AND attempts < ?
		ORDER BY created_at LIMIT 1`, maxJobAttempts).Scan(&jobID, &courseID)
	if errors.Is(err, sql.ErrNoRows) {
		return nil
	}
	if err != nil {
		return fmt.Errorf("compiler: claim job: %w", err)
	}
	if _, err := c.DB.ExecContext(ctx, `
		UPDATE compile_jobs SET status = 'running', attempts = attempts + 1, updated_at = ? WHERE id = ?`,
		db.Now(), jobID); err != nil {
		return fmt.Errorf("compiler: mark job running: %w", err)
	}

	runErr := c.execute(ctx, jobID, courseID)
	if runErr != nil {
		slog.Error("compiler: pipeline error", "job", jobID, "course", courseID, "error", runErr)
		var attempts int
		if err := c.DB.QueryRowContext(ctx, `SELECT attempts FROM compile_jobs WHERE id = ?`, jobID).Scan(&attempts); err != nil {
			return fmt.Errorf("compiler: read attempts: %w", err)
		}
		status := "queued" // retry on next poll; stages skip completed work
		if attempts >= maxJobAttempts {
			status = "failed"
			if _, err := c.DB.ExecContext(ctx, `UPDATE courses SET status = 'failed' WHERE id = ?`, courseID); err != nil {
				slog.Error("compiler: mark course failed", "error", err)
			}
		}
		if _, err := c.DB.ExecContext(ctx, `
			UPDATE compile_jobs SET status = ?, error = ?, updated_at = ? WHERE id = ?`,
			status, sanitizeErr(runErr), db.Now(), jobID); err != nil {
			return fmt.Errorf("compiler: record job error: %w", err)
		}
		return runErr
	}
	return nil
}

// sanitizeErr keeps job errors human-useful without leaking prompt payloads.
func sanitizeErr(err error) string {
	msg := err.Error()
	if len(msg) > 500 {
		msg = msg[:500] + "…"
	}
	return msg
}

func (c *Compiler) setProgress(ctx context.Context, jobID, stage, detail string) {
	if _, err := c.DB.ExecContext(ctx, `
		UPDATE compile_jobs SET stage = ?, detail = ?, updated_at = ? WHERE id = ?`,
		stage, detail, db.Now(), jobID); err != nil {
		slog.Warn("compiler: progress update failed", "error", err)
	}
}

// execute runs the pipeline stages in order, skipping completed work.
func (c *Compiler) execute(ctx context.Context, jobID, courseID string) error {
	var lessonCount int
	if err := c.DB.QueryRowContext(ctx, `
		SELECT COUNT(*) FROM lessons l JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?`, courseID).Scan(&lessonCount); err != nil {
		return fmt.Errorf("compiler: count lessons: %w", err)
	}
	if lessonCount == 0 {
		c.setProgress(ctx, jobID, "plan", "Planning course arc from standards + learner profile")
		if err := c.stagePlan(ctx, courseID); err != nil {
			return fmt.Errorf("stage plan: %w", err)
		}
	}
	if err := c.stageLessons(ctx, jobID, courseID); err != nil {
		return fmt.Errorf("stage lessons: %w", err)
	}
	if err := c.stageActivities(ctx, jobID, courseID); err != nil {
		return fmt.Errorf("stage activities: %w", err)
	}
	c.setProgress(ctx, jobID, "done", "Course compiled")
	if _, err := c.DB.ExecContext(ctx, `UPDATE compile_jobs SET status = 'done', updated_at = ? WHERE id = ?`, db.Now(), jobID); err != nil {
		return fmt.Errorf("compiler: mark job done: %w", err)
	}
	if _, err := c.DB.ExecContext(ctx, `UPDATE courses SET status = 'ready' WHERE id = ?`, courseID); err != nil {
		return fmt.Errorf("compiler: mark course ready: %w", err)
	}
	return nil
}

// standardsJSON loads the document's standards as the JSON fed to the plan
// prompt, plus a code->id index for validation.
func (c *Compiler) standardsJSON(ctx context.Context, courseID string) (docJSON string, codeToID map[string]string, docProvID string, profileNote string, err error) {
	var docID string
	err = c.DB.QueryRowContext(ctx, `
		SELECT c.standards_document_id, c.learner_profile_note FROM courses c WHERE c.id = ?`, courseID).
		Scan(&docID, &profileNote)
	if err != nil {
		return "", nil, "", "", fmt.Errorf("compiler: load course: %w", err)
	}

	rows, err := c.DB.QueryContext(ctx, `
		SELECT id, code, title, description, domain FROM standards WHERE document_id = ? ORDER BY position`, docID)
	if err != nil {
		return "", nil, "", "", fmt.Errorf("compiler: load standards: %w", err)
	}
	defer rows.Close()
	type stdRow struct {
		Code        string `json:"code"`
		Title       string `json:"title"`
		Description string `json:"description"`
		Domain      string `json:"domain"`
	}
	var stds []stdRow
	codeToID = map[string]string{}
	for rows.Next() {
		var id string
		var s stdRow
		if err := rows.Scan(&id, &s.Code, &s.Title, &s.Description, &s.Domain); err != nil {
			return "", nil, "", "", fmt.Errorf("compiler: scan standard: %w", err)
		}
		codeToID[s.Code] = id
		stds = append(stds, s)
	}
	if err := rows.Err(); err != nil {
		return "", nil, "", "", fmt.Errorf("compiler: iterate standards: %w", err)
	}
	if len(stds) == 0 {
		return "", nil, "", "", errors.New("compiler: standards document has no standards")
	}
	buf, err := json.Marshal(stds)
	if err != nil {
		return "", nil, "", "", fmt.Errorf("compiler: marshal standards: %w", err)
	}

	// Provenance root: the standards document row (created at import time).
	err = c.DB.QueryRowContext(ctx, `
		SELECT id FROM provenance WHERE artifact_kind = 'standards_document' AND artifact_id = ?`, docID).Scan(&docProvID)
	if err != nil {
		return "", nil, "", "", fmt.Errorf("compiler: load document provenance: %w", err)
	}
	return string(buf), codeToID, docProvID, profileNote, nil
}

func (c *Compiler) stagePlan(ctx context.Context, courseID string) error {
	docJSON, codeToID, docProvID, profileNote, err := c.standardsJSON(ctx, courseID)
	if err != nil {
		return err
	}
	userMsg := fmt.Sprintf("STANDARDS DOCUMENT:\n%s\n\nLEARNER PROFILE NOTE:\n%s", docJSON, profileNote)
	var plan planOutput
	if err := llm.CompleteJSON(ctx, c.LLM, planSystemPrompt,
		[]llm.Message{{Role: "user", Content: userMsg}}, planMaxTokens, &plan); err != nil {
		return err
	}
	if plan.CourseTitle == "" || len(plan.Units) == 0 {
		return errors.New("compiler: plan output missing title or units")
	}
	for _, u := range plan.Units {
		if len(u.Lessons) == 0 {
			return fmt.Errorf("compiler: unit %q has no lessons", u.Title)
		}
		for _, l := range u.Lessons {
			if _, ok := codeToID[l.StandardCode]; !ok {
				return fmt.Errorf("compiler: plan references unknown standard code %q", l.StandardCode)
			}
		}
	}

	planJSON, err := json.Marshal(plan)
	if err != nil {
		return fmt.Errorf("compiler: marshal plan: %w", err)
	}
	return db.InTx(ctx, c.DB, func(tx *sql.Tx) error {
		now := db.Now()
		planProvID := ids.New("prv")
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO provenance (id, artifact_kind, artifact_id, parent_id, model, prompt_sha256, input_sha256, output_sha256, created_at)
			VALUES (?, 'course_plan', ?, ?, ?, ?, ?, ?, ?)`,
			planProvID, courseID, docProvID, c.LLM.Model(), hashOf(planSystemPrompt), hashOf(userMsg), hashOf(string(planJSON)), now); err != nil {
			return fmt.Errorf("compiler: insert plan provenance: %w", err)
		}
		if _, err := tx.ExecContext(ctx, `UPDATE courses SET title = ? WHERE id = ?`, plan.CourseTitle, courseID); err != nil {
			return fmt.Errorf("compiler: set course title: %w", err)
		}
		for ui, u := range plan.Units {
			unitID := ids.New("unt")
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO units (id, course_id, position, title, overview) VALUES (?, ?, ?, ?, ?)`,
				unitID, courseID, ui, u.Title, u.Overview); err != nil {
				return fmt.Errorf("compiler: insert unit: %w", err)
			}
			for li, l := range u.Lessons {
				lessonID := ids.New("lsn")
				if _, err := tx.ExecContext(ctx, `
					INSERT INTO lessons (id, unit_id, position, title, objective, standard_id, status)
					VALUES (?, ?, ?, ?, ?, ?, 'planned')`,
					lessonID, unitID, li, l.Title, l.Objective, codeToID[l.StandardCode]); err != nil {
					return fmt.Errorf("compiler: insert lesson: %w", err)
				}
			}
		}
		return nil
	})
}

// misconceptionCatalog renders the catalog for the lesson prompt and returns
// the code->id index used to validate generated distractors.
func (c *Compiler) misconceptionCatalog(ctx context.Context) (string, map[string]string, error) {
	rows, err := c.DB.QueryContext(ctx, `SELECT id, code, title, description FROM misconceptions ORDER BY code`)
	if err != nil {
		return "", nil, fmt.Errorf("compiler: load misconceptions: %w", err)
	}
	defer rows.Close()
	var b strings.Builder
	index := map[string]string{}
	for rows.Next() {
		var id, code, title, desc string
		if err := rows.Scan(&id, &code, &title, &desc); err != nil {
			return "", nil, fmt.Errorf("compiler: scan misconception: %w", err)
		}
		index[code] = id
		fmt.Fprintf(&b, "- %s (%s): %s\n", code, title, desc)
	}
	if err := rows.Err(); err != nil {
		return "", nil, fmt.Errorf("compiler: iterate misconceptions: %w", err)
	}
	if len(index) == 0 {
		return "", nil, errors.New("compiler: misconception catalog is empty; seed it before compiling")
	}
	return b.String(), index, nil
}

func (c *Compiler) stageLessons(ctx context.Context, jobID, courseID string) error {
	catalog, mcIndex, err := c.misconceptionCatalog(ctx)
	if err != nil {
		return err
	}
	_, _, _, profileNote, err := c.standardsJSON(ctx, courseID)
	if err != nil {
		return err
	}

	type pending struct {
		ID, Title, Objective, StandardID, StandardCode, StandardDesc string
	}
	rows, err := c.DB.QueryContext(ctx, `
		SELECT l.id, l.title, l.objective, l.standard_id, st.code, st.description
		FROM lessons l
		JOIN units u ON u.id = l.unit_id
		JOIN standards st ON st.id = l.standard_id
		WHERE u.course_id = ? AND l.status = 'planned'
		ORDER BY u.position, l.position`, courseID)
	if err != nil {
		return fmt.Errorf("compiler: load planned lessons: %w", err)
	}
	var todo []pending
	for rows.Next() {
		var p pending
		if err := rows.Scan(&p.ID, &p.Title, &p.Objective, &p.StandardID, &p.StandardCode, &p.StandardDesc); err != nil {
			rows.Close()
			return fmt.Errorf("compiler: scan planned lesson: %w", err)
		}
		todo = append(todo, p)
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return fmt.Errorf("compiler: iterate planned lessons: %w", err)
	}

	var total int
	if err := c.DB.QueryRowContext(ctx, `
		SELECT COUNT(*) FROM lessons l JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?`, courseID).Scan(&total); err != nil {
		return fmt.Errorf("compiler: count total lessons: %w", err)
	}

	for i, p := range todo {
		if ctx.Err() != nil {
			return ctx.Err()
		}
		c.setProgress(ctx, jobID, "lessons", fmt.Sprintf("Writing lesson %d/%d: %s", total-len(todo)+i+1, total, p.Title))
		userMsg := fmt.Sprintf("LESSON TITLE: %s\nOBJECTIVE: %s\nTARGET STANDARD: %s — %s\n\nLEARNER PROFILE NOTE:\n%s\n\nMISCONCEPTION CATALOG:\n%s",
			p.Title, p.Objective, p.StandardCode, p.StandardDesc, profileNote, catalog)
		var out lessonOutput
		if err := llm.CompleteJSON(ctx, c.LLM, lessonSystemPrompt,
			[]llm.Message{{Role: "user", Content: userMsg}}, lessonMaxTokens, &out); err != nil {
			return fmt.Errorf("lesson %q: %w", p.Title, err)
		}
		if err := validateLesson(&out, mcIndex); err != nil {
			return fmt.Errorf("lesson %q failed validation: %w", p.Title, err)
		}
		if err := c.persistLesson(ctx, p.ID, p.StandardID, courseID, userMsg, &out, mcIndex); err != nil {
			return fmt.Errorf("lesson %q: %w", p.Title, err)
		}
	}
	return nil
}

// validateLesson enforces the item contract before anything is persisted:
// 4 items, labels A-D exactly once each, and every distractor mapped to a
// real misconception code.
func validateLesson(out *lessonOutput, mcIndex map[string]string) error {
	if strings.TrimSpace(out.NarrativeMD) == "" {
		return errors.New("empty narrative")
	}
	if len(out.Items) != 4 {
		return fmt.Errorf("expected 4 items, got %d", len(out.Items))
	}
	for i, item := range out.Items {
		if strings.TrimSpace(item.StemMD) == "" || strings.TrimSpace(item.CorrectText) == "" {
			return fmt.Errorf("item %d has an empty stem or answer", i+1)
		}
		labels := map[string]bool{item.CorrectLabel: true}
		if !validLabel(item.CorrectLabel) {
			return fmt.Errorf("item %d has invalid correct label %q", i+1, item.CorrectLabel)
		}
		if len(item.Distractors) != 3 {
			return fmt.Errorf("item %d has %d distractors, expected 3", i+1, len(item.Distractors))
		}
		for _, d := range item.Distractors {
			if !validLabel(d.Label) || labels[d.Label] {
				return fmt.Errorf("item %d has duplicate or invalid label %q", i+1, d.Label)
			}
			labels[d.Label] = true
			if _, ok := mcIndex[d.MisconceptionCode]; !ok {
				return fmt.Errorf("item %d distractor %s uses unknown misconception code %q", i+1, d.Label, d.MisconceptionCode)
			}
		}
	}
	return nil
}

func validLabel(l string) bool {
	return l == "A" || l == "B" || l == "C" || l == "D"
}

func (c *Compiler) persistLesson(ctx context.Context, lessonID, standardID, courseID, userMsg string, out *lessonOutput, mcIndex map[string]string) error {
	outJSON, err := json.Marshal(out)
	if err != nil {
		return fmt.Errorf("compiler: marshal lesson output: %w", err)
	}
	var planProvID string
	if err := c.DB.QueryRowContext(ctx, `
		SELECT id FROM provenance WHERE artifact_kind = 'course_plan' AND artifact_id = ?`, courseID).Scan(&planProvID); err != nil {
		return fmt.Errorf("compiler: load plan provenance: %w", err)
	}
	return db.InTx(ctx, c.DB, func(tx *sql.Tx) error {
		now := db.Now()
		lessonProvID := ids.New("prv")
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO provenance (id, artifact_kind, artifact_id, parent_id, standard_id, model, prompt_sha256, input_sha256, output_sha256, created_at)
			VALUES (?, 'lesson', ?, ?, ?, ?, ?, ?, ?, ?)`,
			lessonProvID, lessonID, planProvID, standardID, c.LLM.Model(), hashOf(lessonSystemPrompt), hashOf(userMsg), hashOf(string(outJSON)), now); err != nil {
			return fmt.Errorf("compiler: insert lesson provenance: %w", err)
		}
		if _, err := tx.ExecContext(ctx, `
			UPDATE lessons SET narrative_md = ?, status = 'content_ready' WHERE id = ?`, out.NarrativeMD, lessonID); err != nil {
			return fmt.Errorf("compiler: update lesson narrative: %w", err)
		}
		for pos, item := range out.Items {
			itemID := ids.New("itm")
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO items (id, lesson_id, position, stem_md, correct_label, correct_text, explanation_md)
				VALUES (?, ?, ?, ?, ?, ?, ?)`,
				itemID, lessonID, pos, item.StemMD, item.CorrectLabel, item.CorrectText, item.ExplanationMD); err != nil {
				return fmt.Errorf("compiler: insert item: %w", err)
			}
			for _, d := range item.Distractors {
				if _, err := tx.ExecContext(ctx, `
					INSERT INTO item_distractors (id, item_id, label, text, misconception_id, feedback_md)
					VALUES (?, ?, ?, ?, ?, ?)`,
					ids.New("dst"), itemID, d.Label, d.Text, mcIndex[d.MisconceptionCode], d.FeedbackMD); err != nil {
					return fmt.Errorf("compiler: insert distractor: %w", err)
				}
			}
			itemJSON, err := json.Marshal(item)
			if err != nil {
				return fmt.Errorf("compiler: marshal item: %w", err)
			}
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO provenance (id, artifact_kind, artifact_id, parent_id, standard_id, model, prompt_sha256, input_sha256, output_sha256, created_at)
				VALUES (?, 'item', ?, ?, ?, ?, ?, ?, ?, ?)`,
				ids.New("prv"), itemID, lessonProvID, standardID, c.LLM.Model(), hashOf(lessonSystemPrompt), hashOf(userMsg), hashOf(string(itemJSON)), now); err != nil {
				return fmt.Errorf("compiler: insert item provenance: %w", err)
			}
		}
		return nil
	})
}

func (c *Compiler) stageActivities(ctx context.Context, jobID, courseID string) error {
	type pending struct {
		ID, Title, Objective, StandardID, NarrativeMD string
	}
	rows, err := c.DB.QueryContext(ctx, `
		SELECT l.id, l.title, l.objective, l.standard_id, l.narrative_md
		FROM lessons l JOIN units u ON u.id = l.unit_id
		WHERE u.course_id = ? AND l.status = 'content_ready'
		ORDER BY u.position, l.position`, courseID)
	if err != nil {
		return fmt.Errorf("compiler: load content_ready lessons: %w", err)
	}
	var todo []pending
	for rows.Next() {
		var p pending
		if err := rows.Scan(&p.ID, &p.Title, &p.Objective, &p.StandardID, &p.NarrativeMD); err != nil {
			rows.Close()
			return fmt.Errorf("compiler: scan lesson for activity: %w", err)
		}
		todo = append(todo, p)
	}
	rows.Close()
	if err := rows.Err(); err != nil {
		return fmt.Errorf("compiler: iterate lessons for activities: %w", err)
	}

	for i, p := range todo {
		if ctx.Err() != nil {
			return ctx.Err()
		}
		c.setProgress(ctx, jobID, "activities", fmt.Sprintf("Building activity %d/%d: %s", i+1, len(todo), p.Title))
		userMsg := fmt.Sprintf("LESSON: %s\nOBJECTIVE: %s\n\nLESSON CONTENT (for context):\n%s", p.Title, p.Objective, p.NarrativeMD)
		html, err := c.LLM.Complete(ctx, activitySystemPrompt, []llm.Message{{Role: "user", Content: userMsg}}, activityMaxTokens)
		if err != nil {
			return fmt.Errorf("activity for %q: %w", p.Title, err)
		}
		html = stripFences(html)
		if err := validateActivityHTML(html); err != nil {
			// One corrective retry with the validation error fed back.
			retryMsg := userMsg + "\n\nYour previous output was rejected: " + err.Error() + "\nRegenerate the FULL corrected HTML document."
			html, err = c.LLM.Complete(ctx, activitySystemPrompt, []llm.Message{{Role: "user", Content: retryMsg}}, activityMaxTokens)
			if err != nil {
				return fmt.Errorf("activity retry for %q: %w", p.Title, err)
			}
			html = stripFences(html)
			if err := validateActivityHTML(html); err != nil {
				return fmt.Errorf("activity for %q failed validation twice: %w", p.Title, err)
			}
		}
		if err := c.persistActivity(ctx, p.ID, p.StandardID, p.Title, userMsg, html); err != nil {
			return fmt.Errorf("activity for %q: %w", p.Title, err)
		}
	}
	return nil
}

func stripFences(s string) string {
	s = strings.TrimSpace(s)
	if strings.HasPrefix(s, "```") {
		if _, rest, ok := strings.Cut(s, "\n"); ok {
			s = rest
		}
		if idx := strings.LastIndex(s, "```"); idx >= 0 {
			s = s[:idx]
		}
	}
	return strings.TrimSpace(s)
}

// validateActivityHTML enforces the self-contained contract: a real HTML
// document, bounded size, and no external network references. Served later
// inside a sandboxed iframe with a no-network CSP as defense in depth.
func validateActivityHTML(html string) error {
	lower := strings.ToLower(html)
	if !strings.HasPrefix(lower, "<!doctype html") {
		return errors.New("output must start with <!DOCTYPE html>")
	}
	if len(html) > maxActivityBytes {
		return fmt.Errorf("output too large (%d bytes, max %d)", len(html), maxActivityBytes)
	}
	// XML namespace URIs are identifiers, not network requests; ignore them
	// before scanning for real external references.
	lower = strings.ReplaceAll(lower, "http://www.w3.org/", "w3-ns/")
	for _, banned := range []string{"http://", "https://", "//cdn.", "fetch(", "xmlhttprequest", "websocket", "import(", "<iframe"} {
		if strings.Contains(lower, banned) {
			return fmt.Errorf("output contains banned external reference %q; the file must be fully self-contained", banned)
		}
	}
	return nil
}

func (c *Compiler) persistActivity(ctx context.Context, lessonID, standardID, title, userMsg, html string) error {
	var lessonProvID string
	if err := c.DB.QueryRowContext(ctx, `
		SELECT id FROM provenance WHERE artifact_kind = 'lesson' AND artifact_id = ?`, lessonID).Scan(&lessonProvID); err != nil {
		return fmt.Errorf("compiler: load lesson provenance: %w", err)
	}
	return db.InTx(ctx, c.DB, func(tx *sql.Tx) error {
		now := db.Now()
		activityID := ids.New("act")
		htmlHash := hashOf(html)
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO activities (id, lesson_id, position, title, html, sha256) VALUES (?, ?, 0, ?, ?, ?)`,
			activityID, lessonID, "Interactive: "+title, html, htmlHash); err != nil {
			return fmt.Errorf("compiler: insert activity: %w", err)
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO provenance (id, artifact_kind, artifact_id, parent_id, standard_id, model, prompt_sha256, input_sha256, output_sha256, created_at)
			VALUES (?, 'activity', ?, ?, ?, ?, ?, ?, ?, ?)`,
			ids.New("prv"), activityID, lessonProvID, standardID, c.LLM.Model(), hashOf(activitySystemPrompt), hashOf(userMsg), htmlHash, now); err != nil {
			return fmt.Errorf("compiler: insert activity provenance: %w", err)
		}
		if _, err := tx.ExecContext(ctx, `UPDATE lessons SET status = 'ready' WHERE id = ?`, lessonID); err != nil {
			return fmt.Errorf("compiler: mark lesson ready: %w", err)
		}
		return nil
	})
}

func hashOf(s string) string {
	sum := sha256.Sum256([]byte(s))
	return hex.EncodeToString(sum[:])
}
