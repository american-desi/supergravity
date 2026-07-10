package api

import (
	"database/sql"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
	"github.com/american-desi/supergravity/school/server/internal/ids"
	"github.com/american-desi/supergravity/school/server/internal/seeddata"
)

// handleTeacherOverview returns the dashboard: roster with mastery summary,
// courses with compile status, feature flags, and both kill-signal metrics.
func (s *Server) handleTeacherOverview(w http.ResponseWriter, r *http.Request) error {
	ctx := r.Context()

	type studentRow struct {
		ID              string  `json:"id"`
		DisplayName     string  `json:"display_name"`
		CreatedAt       string  `json:"created_at"`
		AvgMastery      float64 `json:"avg_mastery"`
		OpenMisconcepts int     `json:"open_misconceptions"`
		// Week3Unprompted is the L2 kill-signal input: sessions the student
		// opened themselves during their third week after joining.
		Week3Unprompted int `json:"week3_unprompted_sessions"`
	}
	rows, err := s.DB.QueryContext(ctx, `
		SELECT u.id, u.display_name, u.created_at,
			COALESCE((SELECT AVG(score) FROM mastery_state m WHERE m.student_id = u.id), 0),
			(SELECT COUNT(*) FROM misconception_events e WHERE e.student_id = u.id AND e.resolved_at IS NULL),
			(SELECT COUNT(*) FROM tutor_sessions ts WHERE ts.student_id = u.id AND ts.opened_by = 'student'
				AND datetime(ts.started_at) >= datetime(u.created_at, '+14 days') AND datetime(ts.started_at) < datetime(u.created_at, '+21 days'))
		FROM users u WHERE u.role = 'student' AND u.active = 1 ORDER BY u.display_name`)
	if err != nil {
		return fmt.Errorf("api: load roster: %w", err)
	}
	defer rows.Close()
	students := []studentRow{}
	for rows.Next() {
		var st studentRow
		if err := rows.Scan(&st.ID, &st.DisplayName, &st.CreatedAt, &st.AvgMastery, &st.OpenMisconcepts, &st.Week3Unprompted); err != nil {
			return fmt.Errorf("api: scan roster: %w", err)
		}
		students = append(students, st)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate roster: %w", err)
	}

	type flagRow struct {
		Key     string `json:"key"`
		Enabled bool   `json:"enabled"`
		Note    string `json:"note"`
	}
	fRows, err := s.DB.QueryContext(ctx, `SELECT key, enabled, note FROM feature_flags ORDER BY key`)
	if err != nil {
		return fmt.Errorf("api: load flags: %w", err)
	}
	defer fRows.Close()
	flags := []flagRow{}
	for fRows.Next() {
		var f flagRow
		var enabled int
		if err := fRows.Scan(&f.Key, &enabled, &f.Note); err != nil {
			return fmt.Errorf("api: scan flag: %w", err)
		}
		f.Enabled = enabled == 1
		flags = append(flags, f)
	}
	if err := fRows.Err(); err != nil {
		return fmt.Errorf("api: iterate flags: %w", err)
	}

	// L2 kill signal rollup: of students at least 3 weeks in, how many came
	// back unprompted in week three.
	var eligible, returned int
	if err := s.DB.QueryRowContext(ctx, `
		SELECT COUNT(*),
			COALESCE(SUM(CASE WHEN (SELECT COUNT(*) FROM tutor_sessions ts WHERE ts.student_id = u.id
				AND ts.opened_by = 'student'
				AND datetime(ts.started_at) >= datetime(u.created_at, '+14 days')
				AND datetime(ts.started_at) < datetime(u.created_at, '+21 days')) > 0 THEN 1 ELSE 0 END), 0)
		FROM users u WHERE u.role = 'student' AND u.active = 1
			AND datetime(u.created_at) <= datetime('now', '-21 days')`).Scan(&eligible, &returned); err != nil {
		return fmt.Errorf("api: kill signal rollup: %w", err)
	}

	httpx.WriteJSON(w, http.StatusOK, map[string]any{
		"students":       students,
		"feature_flags":  flags,
		"enrollment_cap": s.Cfg.EnrollmentCap,
		"kill_signals": map[string]any{
			"l2_week3_eligible_students": eligible,
			"l2_week3_returned_students": returned,
		},
	})
	return nil
}

func (s *Server) handleCreateInvite(w http.ResponseWriter, r *http.Request) error {
	user := auth.FromContext(r.Context())
	code, err := s.Auth.CreateInvite(r.Context(), user.ID)
	if err != nil {
		return err
	}
	httpx.WriteJSON(w, http.StatusCreated, map[string]any{
		"code":       code,
		"expires_in": auth.InviteTTL.String(),
	})
	return nil
}

func (s *Server) handleListStandardsDocuments(w http.ResponseWriter, r *http.Request) error {
	rows, err := s.DB.QueryContext(r.Context(), `
		SELECT d.id, d.title, d.source, d.jurisdiction, d.imported_at,
			(SELECT COUNT(*) FROM standards st WHERE st.document_id = d.id)
		FROM standards_documents d ORDER BY d.imported_at DESC`)
	if err != nil {
		return fmt.Errorf("api: list documents: %w", err)
	}
	defer rows.Close()
	type docRow struct {
		ID           string `json:"id"`
		Title        string `json:"title"`
		Source       string `json:"source"`
		Jurisdiction string `json:"jurisdiction"`
		ImportedAt   string `json:"imported_at"`
		Standards    int    `json:"standards_count"`
	}
	docs := []docRow{}
	for rows.Next() {
		var d docRow
		if err := rows.Scan(&d.ID, &d.Title, &d.Source, &d.Jurisdiction, &d.ImportedAt, &d.Standards); err != nil {
			return fmt.Errorf("api: scan document: %w", err)
		}
		docs = append(docs, d)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate documents: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"documents": docs})
	return nil
}

func (s *Server) handleImportStandardsDocument(w http.ResponseWriter, r *http.Request) error {
	raw, err := io.ReadAll(io.LimitReader(r.Body, 1<<20))
	if err != nil {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", "Could not read request body.")
	}
	user := auth.FromContext(r.Context())
	docID, err := seeddata.Import(r.Context(), s.DB, raw, user.ID)
	if err != nil {
		return httpx.Fail(http.StatusBadRequest, "invalid_document", err.Error())
	}
	httpx.WriteJSON(w, http.StatusCreated, map[string]string{"document_id": docID})
	return nil
}

func (s *Server) handleCompileCourse(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		StandardsDocumentID string `json:"standards_document_id"`
		LearnerProfileNote  string `json:"learner_profile_note"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	if in.StandardsDocumentID == "" {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", "standards_document_id is required.")
	}
	if len(in.LearnerProfileNote) > 4000 {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", "Learner profile note too long (max 4000 chars).")
	}
	// Guard against runaway spend: one compile in flight at a time.
	var inFlight int
	if err := s.DB.QueryRowContext(r.Context(),
		`SELECT COUNT(*) FROM compile_jobs WHERE status IN ('queued', 'running')`).Scan(&inFlight); err != nil {
		return fmt.Errorf("api: count in-flight jobs: %w", err)
	}
	if inFlight > 0 {
		return httpx.Fail(http.StatusConflict, "compile_busy", "A compile is already in progress; wait for it to finish.")
	}
	user := auth.FromContext(r.Context())
	courseID, jobID, err := s.Compiler.Enqueue(r.Context(), in.StandardsDocumentID, in.LearnerProfileNote, user.ID)
	if err != nil {
		return err
	}
	httpx.WriteJSON(w, http.StatusAccepted, map[string]string{"course_id": courseID, "job_id": jobID})
	return nil
}

func (s *Server) handleJobStatus(w http.ResponseWriter, r *http.Request) error {
	var out struct {
		ID        string `json:"id"`
		CourseID  string `json:"course_id"`
		Status    string `json:"status"`
		Stage     string `json:"stage"`
		Detail    string `json:"detail"`
		Error     string `json:"error"`
		Attempts  int    `json:"attempts"`
		UpdatedAt string `json:"updated_at"`
	}
	err := s.DB.QueryRowContext(r.Context(), `
		SELECT id, course_id, status, stage, detail, error, attempts, updated_at
		FROM compile_jobs WHERE id = ?`, r.PathValue("id")).
		Scan(&out.ID, &out.CourseID, &out.Status, &out.Stage, &out.Detail, &out.Error, &out.Attempts, &out.UpdatedAt)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Compile job not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load job: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, out)
	return nil
}

// handleReviewCourse records the L1 kill-signal verdict. A "worse" verdict
// kills the course (and, by policy, the layer: fix the compiler before
// recompiling).
func (s *Server) handleReviewCourse(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		BaselineName string `json:"baseline_name"`
		Verdict      string `json:"verdict"`
		Notes        string `json:"notes"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	if in.Verdict != "better" && in.Verdict != "worse" && in.Verdict != "tie" {
		return httpx.Fail(http.StatusBadRequest, "invalid_input", `verdict must be "better", "worse", or "tie".`)
	}
	if strings.TrimSpace(in.BaselineName) == "" {
		in.BaselineName = "Math Relay Race"
	}
	courseID := r.PathValue("id")
	user := auth.FromContext(r.Context())
	err := db.InTx(r.Context(), s.DB, func(tx *sql.Tx) error {
		var status string
		err := tx.QueryRowContext(r.Context(), `SELECT status FROM courses WHERE id = ?`, courseID).Scan(&status)
		if errors.Is(err, sql.ErrNoRows) {
			return httpx.Fail(http.StatusNotFound, "not_found", "Course not found.")
		}
		if err != nil {
			return fmt.Errorf("api: load course: %w", err)
		}
		if _, err := tx.ExecContext(r.Context(), `
			INSERT INTO course_reviews (id, course_id, reviewer_id, baseline_name, verdict, notes, reviewed_at)
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
			ids.New("rev"), courseID, user.ID, in.BaselineName, in.Verdict, in.Notes, db.Now()); err != nil {
			return fmt.Errorf("api: insert review: %w", err)
		}
		if in.Verdict == "worse" {
			if _, err := tx.ExecContext(r.Context(), `UPDATE courses SET status = 'killed' WHERE id = ?`, courseID); err != nil {
				return fmt.Errorf("api: kill course: %w", err)
			}
		}
		return nil
	})
	if err != nil {
		return err
	}
	httpx.WriteJSON(w, http.StatusCreated, map[string]string{"verdict": in.Verdict})
	return nil
}

func (s *Server) handleEnroll(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		StudentID string `json:"student_id"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	courseID := r.PathValue("id")
	ctx := r.Context()
	var status string
	err := s.DB.QueryRowContext(ctx, `SELECT status FROM courses WHERE id = ?`, courseID).Scan(&status)
	if errors.Is(err, sql.ErrNoRows) {
		return httpx.Fail(http.StatusNotFound, "not_found", "Course not found.")
	}
	if err != nil {
		return fmt.Errorf("api: load course: %w", err)
	}
	if status != "ready" {
		return httpx.Fail(http.StatusConflict, "not_ready", "Only ready courses can take enrollments.")
	}
	var isStudent int
	if err := s.DB.QueryRowContext(ctx,
		`SELECT COUNT(*) FROM users WHERE id = ? AND role = 'student' AND active = 1`, in.StudentID).Scan(&isStudent); err != nil {
		return fmt.Errorf("api: check student: %w", err)
	}
	if isStudent == 0 {
		return httpx.Fail(http.StatusNotFound, "not_found", "Student not found.")
	}
	_, err = s.DB.ExecContext(ctx, `
		INSERT INTO enrollments (id, student_id, course_id, enrolled_at) VALUES (?, ?, ?, ?)
		ON CONFLICT (student_id, course_id) DO NOTHING`,
		ids.New("enr"), in.StudentID, courseID, db.Now())
	if err != nil {
		return fmt.Errorf("api: enroll: %w", err)
	}
	httpx.WriteJSON(w, http.StatusCreated, map[string]string{"status": "enrolled"})
	return nil
}

// handleStudentDetail returns the full longitudinal snapshot for one student.
func (s *Server) handleStudentDetail(w http.ResponseWriter, r *http.Request) error {
	snap, err := s.Spine.BuildSnapshot(r.Context(), r.PathValue("id"))
	if err != nil {
		return httpx.Fail(http.StatusNotFound, "not_found", "Student not found.")
	}
	// Recent tutor sessions round out the teacher's view.
	rows, err := s.DB.QueryContext(r.Context(), `
		SELECT id, started_at, opened_by, message_count FROM tutor_sessions
		WHERE student_id = ? ORDER BY started_at DESC LIMIT 20`, r.PathValue("id"))
	if err != nil {
		return fmt.Errorf("api: load sessions: %w", err)
	}
	defer rows.Close()
	type sessRow struct {
		ID           string `json:"id"`
		StartedAt    string `json:"started_at"`
		OpenedBy     string `json:"opened_by"`
		MessageCount int    `json:"message_count"`
	}
	sessions := []sessRow{}
	for rows.Next() {
		var sr sessRow
		if err := rows.Scan(&sr.ID, &sr.StartedAt, &sr.OpenedBy, &sr.MessageCount); err != nil {
			return fmt.Errorf("api: scan session: %w", err)
		}
		sessions = append(sessions, sr)
	}
	if err := rows.Err(); err != nil {
		return fmt.Errorf("api: iterate sessions: %w", err)
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"snapshot": snap, "tutor_sessions": sessions})
	return nil
}

func (s *Server) handleUpdateProfile(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		GradeLevel string `json:"grade_level"`
		TargetExam string `json:"target_exam"`
		Goals      string `json:"goals"`
		Notes      string `json:"notes"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	for _, v := range []string{in.GradeLevel, in.TargetExam, in.Goals, in.Notes} {
		if len(v) > 2000 {
			return httpx.Fail(http.StatusBadRequest, "invalid_input", "Profile fields must be under 2000 characters.")
		}
	}
	res, err := s.DB.ExecContext(r.Context(), `
		UPDATE learner_profiles SET grade_level = ?, target_exam = ?, goals = ?, notes = ?, updated_at = ?
		WHERE student_id = ?`,
		in.GradeLevel, in.TargetExam, in.Goals, in.Notes, db.Now(), r.PathValue("id"))
	if err != nil {
		return fmt.Errorf("api: update profile: %w", err)
	}
	if n, _ := res.RowsAffected(); n == 0 {
		return httpx.Fail(http.StatusNotFound, "not_found", "Student not found.")
	}
	httpx.WriteJSON(w, http.StatusOK, map[string]string{"status": "updated"})
	return nil
}
