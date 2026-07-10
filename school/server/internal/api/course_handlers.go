package api

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/http"
	"sort"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
)

// canAccessCourse: teachers see everything; students only courses they are
// enrolled in.
func (s *Server) canAccessCourse(ctx context.Context, user *auth.User, courseID string) error {
	if user.Role == "teacher" {
		return nil
	}
	var n int
	if err := s.DB.QueryRowContext(ctx,
		`SELECT COUNT(*) FROM enrollments WHERE student_id = ? AND course_id = ?`, user.ID, courseID).Scan(&n); err != nil {
		return fmt.Errorf("api: check enrollment: %w", err)
	}
	if n == 0 {
		return httpx.Fail(http.StatusForbidden, "forbidden", "You are not enrolled in that course.")
	}
	return nil
}

func (s *Server) handleListCourses(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	query := `
		SELECT c.id, c.title, c.status, c.model, c.created_at,
			(SELECT COUNT(*) FROM enrollments e WHERE e.course_id = c.id),
			COALESCE((SELECT r.verdict FROM course_reviews r WHERE r.course_id = c.id ORDER BY r.reviewed_at DESC LIMIT 1), '')
		FROM courses c`
	args := []any{}
	if user.Role == "student" {
		query += ` JOIN enrollments e2 ON e2.course_id = c.id AND e2.student_id = ? WHERE c.status = 'ready'`
		args = append(args, user.ID)
	}
	query += ` ORDER BY c.created_at DESC`

	rows, err := s.DB.QueryContext(r.Context(), query, args...)
	if err != nil {
		return fmt.Errorf("api: list courses: %w", err)
	}
	defer rows.Close()
	type courseRow struct {
		ID          string `json:"id"`
		Title       string `json:"title"`
		Status      string `json:"status"`
		Model       string `json:"model"`
		CreatedAt   string `json:"created_at"`
		Enrolled    int    `json:"enrolled_count"`
		LastVerdict string `json:"last_verdict"`
	}
	courses := []courseRow{}
	for rows.Next() {
		var c courseRow
		if err := rows.Scan(&c.ID, &c.Title, &c.Status, &c.Model, &c.CreatedAt, &c.Enrolled, &c.LastVerdict); err != nil {
			return fmt.Errorf("api: scan course: %w", err)
		}
		courses = append(courses, c)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate courses: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"courses": courses})
	return nil
}

func (s *Server) handleCourseOutline(w http.ResponseWriter, r *http.Request) error {
	courseID := r.PathValue("id")
	user := auth.FromContext(r.Context())
	ctx := r.Context()
	if err := s.canAccessCourse(ctx, user, courseID); err != nil {
		return err
	}

	var course struct {
		ID     string `json:"id"`
		Title  string `json:"title"`
		Status string `json:"status"`
		Note   string `json:"learner_profile_note"`
	}
	err := s.DB.QueryRowContext(ctx,
		`SELECT id, title, status, learner_profile_note FROM courses WHERE id = ?`, courseID).
		Scan(&course.ID, &course.Title, &course.Status, &course.Note)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Course not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load course: %w", err)
	}
	if user.Role == "student" {
		course.Note = "" // profile notes are teacher-only
	}

	type lessonRow struct {
		ID           string   `json:"id"`
		Title        string   `json:"title"`
		Objective    string   `json:"objective"`
		Status       string   `json:"status"`
		StandardCode string   `json:"standard_code"`
		Mastery      *float64 `json:"mastery,omitempty"`
	}
	type unitRow struct {
		ID       string      `json:"id"`
		Title    string      `json:"title"`
		Overview string      `json:"overview"`
		Lessons  []lessonRow `json:"lessons"`
	}

	rows, err := s.DB.QueryContext(ctx, `
		SELECT u.id, u.title, u.overview, l.id, l.title, l.objective, l.status, st.code, l.standard_id
		FROM units u JOIN lessons l ON l.unit_id = u.id JOIN standards st ON st.id = l.standard_id
		WHERE u.course_id = ? ORDER BY u.position, l.position`, courseID)
	if err != nil {
		return fmt.Errorf("api: load outline: %w", err)
	}
	defer rows.Close()

	// Single mastery lookup avoids an N+1 over lessons for students.
	masteryByStandard := map[string]float64{}
	if user.Role == "student" {
		mRows, err := s.DB.QueryContext(ctx,
			`SELECT standard_id, score FROM mastery_state WHERE student_id = ?`, user.ID)
		if err != nil {
			return fmt.Errorf("api: load mastery: %w", err)
		}
		defer mRows.Close()
		for mRows.Next() {
			var id string
			var score float64
			if err := mRows.Scan(&id, &score); err != nil {
				return fmt.Errorf("api: scan mastery: %w", err)
			}
			masteryByStandard[id] = score
		}
		if err := mRows.Err(); err != nil {
			return fmt.Errorf("api: iterate mastery: %w", err)
		}
	}

	units := []unitRow{}
	unitIndex := map[string]int{}
	for rows.Next() {
		var uID, uTitle, uOverview, stdID string
		var l lessonRow
		if err := rows.Scan(&uID, &uTitle, &uOverview, &l.ID, &l.Title, &l.Objective, &l.Status, &l.StandardCode, &stdID); err != nil {
			return fmt.Errorf("api: scan outline: %w", err)
		}
		if user.Role == "student" {
			if score, ok := masteryByStandard[stdID]; ok {
				l.Mastery = &score
			}
		}
		idx, ok := unitIndex[uID]
		if !ok {
			units = append(units, unitRow{ID: uID, Title: uTitle, Overview: uOverview})
			idx = len(units) - 1
			unitIndex[uID] = idx
		}
		units[idx].Lessons = append(units[idx].Lessons, l)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate outline: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"course": course, "units": units})
	return nil
}

// handleLesson returns lesson content. Students get items WITHOUT answer
// keys; grading happens server-side on attempt.
func (s *Server) handleLesson(w http.ResponseWriter, r *http.Request) error {
	lessonID := r.PathValue("id")
	user := auth.FromContext(r.Context())
	ctx := r.Context()

	var courseID string
	var lesson struct {
		ID           string `json:"id"`
		Title        string `json:"title"`
		Objective    string `json:"objective"`
		NarrativeMD  string `json:"narrative_md"`
		Status       string `json:"status"`
		StandardCode string `json:"standard_code"`
	}
	err := s.DB.QueryRowContext(ctx, `
		SELECT l.id, l.title, l.objective, l.narrative_md, l.status, st.code, u.course_id
		FROM lessons l JOIN units u ON u.id = l.unit_id JOIN standards st ON st.id = l.standard_id
		WHERE l.id = ?`, lessonID).
		Scan(&lesson.ID, &lesson.Title, &lesson.Objective, &lesson.NarrativeMD, &lesson.Status, &lesson.StandardCode, &courseID)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Lesson not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load lesson: %w", err)
	}
	if err := s.canAccessCourse(ctx, user, courseID); err != nil {
		return err
	}

	type choice struct {
		Label string `json:"label"`
		Text  string `json:"text"`
	}
	type itemRow struct {
		ID      string   `json:"id"`
		StemMD  string   `json:"stem_md"`
		Choices []choice `json:"choices"`
		// Teacher-only fields:
		CorrectLabel string `json:"correct_label,omitempty"`
	}
	iRows, err := s.DB.QueryContext(ctx, `
		SELECT id, stem_md, correct_label, correct_text FROM items WHERE lesson_id = ? ORDER BY position`, lessonID)
	if err != nil {
		return fmt.Errorf("api: load items: %w", err)
	}
	defer iRows.Close()
	items := []itemRow{}
	for iRows.Next() {
		var it itemRow
		var correctText string
		if err := iRows.Scan(&it.ID, &it.StemMD, &it.CorrectLabel, &correctText); err != nil {
			return fmt.Errorf("api: scan item: %w", err)
		}
		it.Choices = append(it.Choices, choice{Label: it.CorrectLabel, Text: correctText})
		items = append(items, it)
	}
	if err := iRows.Err(); err != nil {
		return fmt.Errorf("api: iterate items: %w", err)
	}

	// One query for all distractors, merged in.
	dRows, err := s.DB.QueryContext(ctx, `
		SELECT d.item_id, d.label, d.text FROM item_distractors d
		JOIN items i ON i.id = d.item_id WHERE i.lesson_id = ?`, lessonID)
	if err != nil {
		return fmt.Errorf("api: load distractors: %w", err)
	}
	defer dRows.Close()
	byItem := map[string][]choice{}
	for dRows.Next() {
		var itemID string
		var c choice
		if err := dRows.Scan(&itemID, &c.Label, &c.Text); err != nil {
			return fmt.Errorf("api: scan distractor: %w", err)
		}
		byItem[itemID] = append(byItem[itemID], c)
	}
	if err := dRows.Err(); err != nil {
		return fmt.Errorf("api: iterate distractors: %w", err)
	}
	for i := range items {
		items[i].Choices = append(items[i].Choices, byItem[items[i].ID]...)
		sort.Slice(items[i].Choices, func(a, b int) bool {
			return items[i].Choices[a].Label < items[i].Choices[b].Label
		})
		if user.Role == "student" {
			items[i].CorrectLabel = ""
		}
	}

	type activityRow struct {
		ID    string `json:"id"`
		Title string `json:"title"`
	}
	aRows, err := s.DB.QueryContext(ctx,
		`SELECT id, title FROM activities WHERE lesson_id = ? ORDER BY position`, lessonID)
	if err != nil {
		return fmt.Errorf("api: load activities: %w", err)
	}
	defer aRows.Close()
	acts := []activityRow{}
	for aRows.Next() {
		var a activityRow
		if err := aRows.Scan(&a.ID, &a.Title); err != nil {
			return fmt.Errorf("api: scan activity: %w", err)
		}
		acts = append(acts, a)
	}
	if err := aRows.Err(); err != nil {
		return fmt.Errorf("api: iterate activities: %w", err)
	}

	httpx.WriteJSON(w, http.StatusOK, map[string]any{"lesson": lesson, "items": items, "activities": acts})
	return nil
}

// handleActivityHTML serves the self-contained interactive inside a strict
// no-network CSP. The frontend embeds it in a sandboxed iframe.
func (s *Server) handleActivityHTML(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	var html, courseID string
	err := s.DB.QueryRowContext(r.Context(), `
		SELECT a.html, u.course_id FROM activities a
		JOIN lessons l ON l.id = a.lesson_id JOIN units u ON u.id = l.unit_id
		WHERE a.id = ?`, r.PathValue("id")).Scan(&html, &courseID)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Activity not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load activity: %w", err)
	}
	if err := s.canAccessCourse(r.Context(), user, courseID); err != nil {
		return err
	}
	h := w.Header()
	h.Set("Content-Type", "text/html; charset=utf-8")
	// Defense in depth on top of generation-time validation: even if a
	// network reference slipped through, the CSP blocks it.
	h.Set("Content-Security-Policy",
		"default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; frame-ancestors 'self'")
	h.Del("X-Frame-Options") // frame-ancestors 'self' is the precise policy here
	h.Set("X-Frame-Options", "SAMEORIGIN")
	w.WriteHeader(http.StatusOK)
	if _, err := w.Write([]byte(html)); err != nil {
		return fmt.Errorf("api: write activity html: %w", err)
	}
	return nil
}

// handleProvenance returns the verifiable chain for a course: every artifact
// with its hashes and parent link, rooted at the standards document.
func (s *Server) handleProvenance(w http.ResponseWriter, r *http.Request) error {
	courseID := r.PathValue("id")
	user := auth.FromContext(r.Context())
	if err := s.canAccessCourse(r.Context(), user, courseID); err != nil {
		return err
	}
	rows, err := s.DB.QueryContext(r.Context(), `
		SELECT p.id, p.artifact_kind, p.artifact_id, COALESCE(p.parent_id, ''), COALESCE(st.code, ''),
			p.model, p.prompt_sha256, p.input_sha256, p.output_sha256, p.created_at
		FROM provenance p LEFT JOIN standards st ON st.id = p.standard_id
		WHERE p.artifact_id = ?                                   -- the course plan
		   OR (p.artifact_kind = 'standards_document' AND p.artifact_id =
		       (SELECT standards_document_id FROM courses WHERE id = ?))
		   OR p.artifact_id IN (SELECT l.id FROM lessons l JOIN units un ON un.id = l.unit_id WHERE un.course_id = ?)
		   OR p.artifact_id IN (SELECT i.id FROM items i JOIN lessons l ON l.id = i.lesson_id JOIN units un ON un.id = l.unit_id WHERE un.course_id = ?)
		   OR p.artifact_id IN (SELECT a.id FROM activities a JOIN lessons l ON l.id = a.lesson_id JOIN units un ON un.id = l.unit_id WHERE un.course_id = ?)
		ORDER BY p.created_at, p.id`, courseID, courseID, courseID, courseID, courseID)
	if err != nil {
		return fmt.Errorf("api: load provenance: %w", err)
	}
	defer rows.Close()
	type provRow struct {
		ID           string `json:"id"`
		ArtifactKind string `json:"artifact_kind"`
		ArtifactID   string `json:"artifact_id"`
		ParentID     string `json:"parent_id,omitempty"`
		StandardCode string `json:"standard_code,omitempty"`
		Model        string `json:"model,omitempty"`
		PromptSHA256 string `json:"prompt_sha256,omitempty"`
		InputSHA256  string `json:"input_sha256"`
		OutputSHA256 string `json:"output_sha256"`
		CreatedAt    string `json:"created_at"`
	}
	chain := []provRow{}
	for rows.Next() {
		var p provRow
		if err := rows.Scan(&p.ID, &p.ArtifactKind, &p.ArtifactID, &p.ParentID, &p.StandardCode,
			&p.Model, &p.PromptSHA256, &p.InputSHA256, &p.OutputSHA256, &p.CreatedAt); err != nil {
			return fmt.Errorf("api: scan provenance: %w", err)
		}
		chain = append(chain, p)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate provenance: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"chain": chain})
	return nil
}
