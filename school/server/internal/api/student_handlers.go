package api

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"log/slog"
	"net/http"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
	"github.com/american-desi/supergravity/school/server/internal/ids"
)

// handleItemAttempt grades a formative-check answer server-side. A wrong
// answer whose distractor maps to a misconception records a misconception
// event (genealogy-linked); a right answer records positive mastery evidence.
func (s *Server) handleItemAttempt(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		Label string `json:"label"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	if in.Label != "A" && in.Label != "B" && in.Label != "C" && in.Label != "D" {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", "label must be A, B, C, or D.")
	}
	user := auth.FromContext(r.Context())
	ctx := r.Context()
	itemID := r.PathValue("id")

	var correctLabel, explanation, standardID, courseID, lessonID string
	err := s.DB.QueryRowContext(ctx, `
		SELECT i.correct_label, i.explanation_md, l.standard_id, u.course_id, l.id
		FROM items i JOIN lessons l ON l.id = i.lesson_id JOIN units u ON u.id = l.unit_id
		WHERE i.id = ?`, itemID).Scan(&correctLabel, &explanation, &standardID, &courseID, &lessonID)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Question not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load item: %w", err)
	}
	if err := s.canAccessCourse(ctx, user, courseID); err != nil {
		return err
	}

	correct := in.Label == correctLabel
	response := map[string]any{"correct": correct}

	var misconceptionCode string
	if correct {
		response["explanation_md"] = explanation
		if err := s.Spine.AddEvidence(ctx, user.ID, standardID, "check_correct", "item answered correctly", itemID, 0); err != nil {
			return err
		}
	} else {
		var feedback string
		var mcCode sql.NullString
		err := s.DB.QueryRowContext(ctx, `
			SELECT d.feedback_md, mc.code FROM item_distractors d
			LEFT JOIN misconceptions mc ON mc.id = d.misconception_id
			WHERE d.item_id = ? AND d.label = ?`, itemID, in.Label).Scan(&feedback, &mcCode)
		if errors.Is(err, sql.ErrNoRows) {
			// Label exists in A-D but isn't a choice on this item.
			return httpx.Fail(http.StatusBadRequest, "invalid_input", "That choice does not exist on this question.")
		}
		if err != nil {
			return fmt.Errorf("api: load distractor: %w", err)
		}
		response["feedback_md"] = feedback
		if mcCode.Valid {
			misconceptionCode = mcCode.String
			depth, err := s.Spine.RecordMisconception(ctx, user.ID, misconceptionCode,
				"check", itemID, "chose distractor "+in.Label+" on lesson "+lessonID, standardID)
			if err != nil {
				return err
			}
			response["recurrence"] = depth
		} else {
			// No misconception mapping: still negative evidence.
			if err := s.Spine.AddEvidence(ctx, user.ID, standardID, "check_incorrect", "wrong answer (unmapped)", itemID, 0); err != nil {
				return err
			}
		}
	}

	var mcID any
	if misconceptionCode != "" {
		var id string
		if err := s.DB.QueryRowContext(ctx, `SELECT id FROM misconceptions WHERE code = ?`, misconceptionCode).Scan(&id); err == nil {
			mcID = id
		}
	}
	if _, err := s.DB.ExecContext(ctx, `
		INSERT INTO check_attempts (id, student_id, item_id, selected_label, correct, misconception_id, attempted_at)
		VALUES (?, ?, ?, ?, ?, ?, ?)`,
		ids.New("att"), user.ID, itemID, in.Label, boolInt(correct), mcID, db.Now()); err != nil {
		return fmt.Errorf("api: record attempt: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, response)
	return nil
}

func boolInt(b bool) int {
	if b {
		return 1
	}
	return 0
}

// handleActivityComplete records positive evidence when a student finishes an
// interactive. Idempotent per (student, activity): repeat completions don't
// stack mastery.
func (s *Server) handleActivityComplete(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	ctx := r.Context()
	activityID := r.PathValue("id")

	var standardID, courseID string
	err := s.DB.QueryRowContext(ctx, `
		SELECT l.standard_id, u.course_id FROM activities a
		JOIN lessons l ON l.id = a.lesson_id JOIN units u ON u.id = l.unit_id
		WHERE a.id = ?`, activityID).Scan(&standardID, &courseID)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Activity not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load activity: %w", err)
	}
	if err := s.canAccessCourse(ctx, user, courseID); err != nil {
		return err
	}
	var already int
	if err := s.DB.QueryRowContext(ctx, `
		SELECT COUNT(*) FROM mastery_evidence
		WHERE student_id = ? AND kind = 'activity_complete' AND source_ref = ?`, user.ID, activityID).Scan(&already); err != nil {
		return fmt.Errorf("api: check prior completion: %w", err)
	}
	if already == 0 {
		if err := s.Spine.AddEvidence(ctx, user.ID, standardID, "activity_complete", "activity completed", activityID, 0); err != nil {
			return err
		}
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"status": "recorded", "first_completion": already == 0})
	return nil
}

func (s *Server) handleOpenTutorSession(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		CourseID string `json:"course_id"`
		LessonID string `json:"lesson_id"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	if in.CourseID == "" {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", "course_id is required.")
	}
	user := auth.FromContext(r.Context())
	sess, err := s.Tutor.Open(r.Context(), user.ID, in.CourseID, in.LessonID, "student")
	if err != nil {
		return err
	}
	httpx.WriteJSON(w, http.StatusCreated, map[string]any{"session": sess})
	return nil
}

func (s *Server) handleListTutorSessions(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	rows, err := s.DB.QueryContext(r.Context(), `
		SELECT ts.id, ts.course_id, ts.lesson_id, COALESCE(l.title, ''), ts.opened_by, ts.started_at, ts.message_count
		FROM tutor_sessions ts LEFT JOIN lessons l ON l.id = ts.lesson_id
		WHERE ts.student_id = ? ORDER BY ts.started_at DESC LIMIT 50`, user.ID)
	if err != nil {
		return fmt.Errorf("api: list tutor sessions: %w", err)
	}
	defer rows.Close()
	type sessRow struct {
		ID           string  `json:"id"`
		CourseID     string  `json:"course_id"`
		LessonID     *string `json:"lesson_id"`
		LessonTitle  string  `json:"lesson_title"`
		OpenedBy     string  `json:"opened_by"`
		StartedAt    string  `json:"started_at"`
		MessageCount int     `json:"message_count"`
	}
	sessions := []sessRow{}
	for rows.Next() {
		var sr sessRow
		var lessonID sql.NullString
		if err := rows.Scan(&sr.ID, &sr.CourseID, &lessonID, &sr.LessonTitle, &sr.OpenedBy, &sr.StartedAt, &sr.MessageCount); err != nil {
			return fmt.Errorf("api: scan tutor session: %w", err)
		}
		if lessonID.Valid {
			sr.LessonID = &lessonID.String
		}
		sessions = append(sessions, sr)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate tutor sessions: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"sessions": sessions})
	return nil
}

func (s *Server) handleTutorHistory(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	sessionID := r.PathValue("id")
	var owned int
	if err := s.DB.QueryRowContext(r.Context(),
		`SELECT COUNT(*) FROM tutor_sessions WHERE id = ? AND student_id = ?`, sessionID, user.ID).Scan(&owned); err != nil {
		return fmt.Errorf("api: check session owner: %w", err)
	}
	if owned == 0 {
		return httpx.Fail(http.StatusNotFound, "not_found", "Tutor session not found.")
	}
	rows, err := s.DB.QueryContext(r.Context(), `
		SELECT id, role, content, created_at FROM tutor_messages
		WHERE session_id = ? ORDER BY created_at, id`, sessionID)
	if err != nil {
		return fmt.Errorf("api: load messages: %w", err)
	}
	defer rows.Close()
	type msgRow struct {
		ID        string `json:"id"`
		Role      string `json:"role"`
		Content   string `json:"content"`
		CreatedAt string `json:"created_at"`
	}
	messages := []msgRow{}
	for rows.Next() {
		var m msgRow
		if err := rows.Scan(&m.ID, &m.Role, &m.Content, &m.CreatedAt); err != nil {
			return fmt.Errorf("api: scan message: %w", err)
		}
		messages = append(messages, m)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate messages: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"messages": messages})
	return nil
}

// handleTutorSend streams the tutor's reply as newline-delimited JSON events:
// {"delta": "..."} fragments, then {"done": true} or {"error": "..."}.
// The client reads the response body incrementally (fetch + ReadableStream).
func (s *Server) handleTutorSend(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	if !s.tutorLimiter.Allow(user.ID) {
		return httpx.Fail(http.StatusTooManyRequests, "rate_limited", "You're sending messages very fast — take a breath.")
	}
	var in struct {
		Content string `json:"content"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}

	flusher, ok := w.(http.Flusher)
	if !ok {
		return errors.New("api: response writer does not support streaming")
	}
	// From here on we own the wire: errors are delivered inside the stream.
	w.Header().Set("Content-Type", "application/x-ndjson; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	w.Header().Set("X-Accel-Buffering", "no")
	w.WriteHeader(http.StatusOK)

	writeEvent := func(v any) {
		line, err := json.Marshal(v)
		if err != nil {
			slog.Warn("api: marshal stream event failed", "error", err)
			return
		}
		if _, err := w.Write(append(line, '\n')); err != nil {
			slog.Debug("api: client disconnected mid-stream", "error", err)
			return
		}
		flusher.Flush()
	}

	_, err := s.Tutor.Respond(r.Context(), user.ID, r.PathValue("id"), in.Content, func(delta string) {
		writeEvent(map[string]string{"delta": delta})
	})
	if err != nil {
		var he *httpx.Error
		if errors.As(err, &he) {
			writeEvent(map[string]any{"error": he.Message, "code": he.Code})
		} else {
			slog.Error("api: tutor send failed", "error", err)
			writeEvent(map[string]any{"error": "The tutor hit a problem; try again.", "code": "internal"})
		}
		return nil // already reported in-stream
	}
	writeEvent(map[string]any{"done": true})
	return nil
}
