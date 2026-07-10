// Package spine is the longitudinal student model: misconception genealogy,
// mastery evidence and rollup, and the snapshot the tutor teaches from. Every
// layer reads and writes through this package so the data stays coherent.
package spine

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/ids"
)

// Mastery score deltas per evidence kind. Scores are clamped to [0,1];
// levels are thresholds over the score.
const (
	weightCheckCorrect     = 0.15
	weightCheckIncorrect   = -0.10
	weightTutorObservation = 0.05 // signed by direction
	weightActivityComplete = 0.05
)

// Level thresholds (score >= threshold → level).
var levelThresholds = []struct {
	Min   float64
	Level string
}{
	{0.85, "mastered"},
	{0.60, "proficient"},
	{0.30, "developing"},
	{0.0001, "emerging"},
	{-1, "unseen"},
}

func levelFor(score float64) string {
	for _, t := range levelThresholds {
		if score >= t.Min {
			return t.Level
		}
	}
	return "unseen"
}

// Store wraps all spine operations over the shared database.
type Store struct {
	DB *sql.DB
}

// MisconceptionEvent is one observed error, linked into its recurrence chain.
type MisconceptionEvent struct {
	ID              string  `json:"id"`
	MisconceptionID string  `json:"misconception_id"`
	Code            string  `json:"code"`
	Title           string  `json:"title"`
	ParentEventID   *string `json:"parent_event_id"`
	Source          string  `json:"source"`
	Evidence        string  `json:"evidence"`
	ObservedAt      string  `json:"observed_at"`
	ResolvedAt      *string `json:"resolved_at"`
	Depth           int     `json:"depth"` // recurrence count including this event
}

// RecordMisconception inserts an event whose parent is the student's most
// recent unresolved event of the same misconception — the genealogy link.
// It also writes negative mastery evidence against the related standard when
// one is provided. Returns the recurrence depth (1 = first occurrence).
func (s *Store) RecordMisconception(ctx context.Context, studentID, misconceptionCode, source, sourceRef, evidence string, standardID string) (int, error) {
	depth := 0
	err := db.InTx(ctx, s.DB, func(tx *sql.Tx) error {
		var misconceptionID string
		err := tx.QueryRowContext(ctx, `SELECT id FROM misconceptions WHERE code = ?`, misconceptionCode).Scan(&misconceptionID)
		if errors.Is(err, sql.ErrNoRows) {
			return fmt.Errorf("spine: unknown misconception code %q", misconceptionCode)
		}
		if err != nil {
			return fmt.Errorf("spine: lookup misconception %q: %w", misconceptionCode, err)
		}

		// Genealogy link: parent is the latest unresolved event of the same
		// misconception. Depth is total lifetime occurrences (error ancestry).
		var parentID sql.NullString
		err = tx.QueryRowContext(ctx, `
			SELECT id FROM misconception_events
			WHERE student_id = ? AND misconception_id = ? AND resolved_at IS NULL
			ORDER BY observed_at DESC, id DESC LIMIT 1`,
			studentID, misconceptionID).Scan(&parentID)
		if err != nil && !errors.Is(err, sql.ErrNoRows) {
			return fmt.Errorf("spine: find parent event: %w", err)
		}
		var priorCount int
		if err := tx.QueryRowContext(ctx, `
			SELECT COUNT(*) FROM misconception_events WHERE student_id = ? AND misconception_id = ?`,
			studentID, misconceptionID).Scan(&priorCount); err != nil {
			return fmt.Errorf("spine: count prior events: %w", err)
		}

		eventID := ids.New("mce")
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO misconception_events (id, student_id, misconception_id, parent_event_id, source, source_ref, evidence, observed_at)
			VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
			eventID, studentID, misconceptionID, nullable(parentID), source, sourceRef, evidence, db.Now()); err != nil {
			return fmt.Errorf("spine: insert misconception event: %w", err)
		}
		depth = priorCount + 1

		if standardID != "" {
			if err := addEvidenceTx(ctx, tx, studentID, standardID, "check_incorrect", weightCheckIncorrect,
				"misconception "+misconceptionCode, sourceRef); err != nil {
				return err
			}
		}
		return nil
	})
	return depth, err
}

// ResolveMisconception marks all of a student's open events for a
// misconception code as resolved (evidence of repair observed).
func (s *Store) ResolveMisconception(ctx context.Context, studentID, misconceptionCode string) error {
	res, err := s.DB.ExecContext(ctx, `
		UPDATE misconception_events SET resolved_at = ?
		WHERE student_id = ? AND resolved_at IS NULL
		  AND misconception_id = (SELECT id FROM misconceptions WHERE code = ?)`,
		db.Now(), studentID, misconceptionCode)
	if err != nil {
		return fmt.Errorf("spine: resolve misconception %q: %w", misconceptionCode, err)
	}
	if n, _ := res.RowsAffected(); n == 0 {
		// Not an error: the tutor may report a repair we never logged as open.
		return nil
	}
	return nil
}

// AddEvidence records mastery evidence and updates the rollup atomically.
// direction is +1 or -1 for tutor observations; ignored for other kinds.
func (s *Store) AddEvidence(ctx context.Context, studentID, standardID, kind, detail, sourceRef string, direction int) error {
	var weight float64
	switch kind {
	case "check_correct":
		weight = weightCheckCorrect
	case "check_incorrect":
		weight = weightCheckIncorrect
	case "activity_complete":
		weight = weightActivityComplete
	case "tutor_observation":
		weight = weightTutorObservation * float64(direction)
		if direction != 1 && direction != -1 {
			return fmt.Errorf("spine: tutor_observation direction must be ±1, got %d", direction)
		}
	default:
		return fmt.Errorf("spine: unknown evidence kind %q", kind)
	}
	return db.InTx(ctx, s.DB, func(tx *sql.Tx) error {
		return addEvidenceTx(ctx, tx, studentID, standardID, kind, weight, detail, sourceRef)
	})
}

func addEvidenceTx(ctx context.Context, tx *sql.Tx, studentID, standardID, kind string, weight float64, detail, sourceRef string) error {
	now := db.Now()
	if _, err := tx.ExecContext(ctx, `
		INSERT INTO mastery_evidence (id, student_id, standard_id, kind, weight, detail, source_ref, observed_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
		ids.New("mev"), studentID, standardID, kind, weight, detail, sourceRef, now); err != nil {
		return fmt.Errorf("spine: insert evidence: %w", err)
	}

	var score float64
	err := tx.QueryRowContext(ctx,
		`SELECT score FROM mastery_state WHERE student_id = ? AND standard_id = ?`,
		studentID, standardID).Scan(&score)
	if err != nil && !errors.Is(err, sql.ErrNoRows) {
		return fmt.Errorf("spine: read mastery state: %w", err)
	}
	score = clamp01(score + weight)
	if _, err := tx.ExecContext(ctx, `
		INSERT INTO mastery_state (student_id, standard_id, score, level, updated_at)
		VALUES (?, ?, ?, ?, ?)
		ON CONFLICT (student_id, standard_id) DO UPDATE SET score = excluded.score, level = excluded.level, updated_at = excluded.updated_at`,
		studentID, standardID, score, levelFor(score), now); err != nil {
		return fmt.Errorf("spine: upsert mastery state: %w", err)
	}
	return nil
}

func clamp01(v float64) float64 {
	if v < 0 {
		return 0
	}
	if v > 1 {
		return 1
	}
	return v
}

// StandardMastery is one row of the student's mastery map.
type StandardMastery struct {
	StandardID   string  `json:"standard_id"`
	StandardCode string  `json:"standard_code"`
	Title        string  `json:"title"`
	Score        float64 `json:"score"`
	Level        string  `json:"level"`
}

// Snapshot is the compact longitudinal view the tutor teaches from.
type Snapshot struct {
	StudentID       string               `json:"student_id"`
	DisplayName     string               `json:"display_name"`
	Profile         string               `json:"profile"`
	Mastery         []StandardMastery    `json:"mastery"`
	OpenEvents      []MisconceptionEvent `json:"open_misconceptions"`
	RecentlyRepaired []string            `json:"recently_repaired"`
}

// BuildSnapshot assembles the tutor's view of one student: profile, mastery
// per standard, open misconception chains with recurrence depth, and
// recently repaired misconceptions (last 30 days).
func (s *Store) BuildSnapshot(ctx context.Context, studentID string) (*Snapshot, error) {
	snap := &Snapshot{StudentID: studentID}

	var goals, notes, grade, exam string
	err := s.DB.QueryRowContext(ctx, `
		SELECT u.display_name, COALESCE(p.goals,''), COALESCE(p.notes,''), COALESCE(p.grade_level,''), COALESCE(p.target_exam,'')
		FROM users u LEFT JOIN learner_profiles p ON p.student_id = u.id
		WHERE u.id = ? AND u.role = 'student'`, studentID).
		Scan(&snap.DisplayName, &goals, &notes, &grade, &exam)
	if errors.Is(err, sql.ErrNoRows) {
		return nil, fmt.Errorf("spine: student %s not found", studentID)
	}
	if err != nil {
		return nil, fmt.Errorf("spine: load profile: %w", err)
	}
	var parts []string
	for _, kv := range [][2]string{{"grade", grade}, {"target exam", exam}, {"goals", goals}, {"teacher notes", notes}} {
		if kv[1] != "" {
			parts = append(parts, kv[0]+": "+kv[1])
		}
	}
	snap.Profile = strings.Join(parts, "; ")

	rows, err := s.DB.QueryContext(ctx, `
		SELECT m.standard_id, st.code, st.title, m.score, m.level
		FROM mastery_state m JOIN standards st ON st.id = m.standard_id
		WHERE m.student_id = ? ORDER BY st.position`, studentID)
	if err != nil {
		return nil, fmt.Errorf("spine: load mastery: %w", err)
	}
	defer rows.Close()
	for rows.Next() {
		var m StandardMastery
		if err := rows.Scan(&m.StandardID, &m.StandardCode, &m.Title, &m.Score, &m.Level); err != nil {
			return nil, fmt.Errorf("spine: scan mastery: %w", err)
		}
		snap.Mastery = append(snap.Mastery, m)
	}
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("spine: iterate mastery: %w", err)
	}

	// Open misconceptions with recurrence depth (total occurrences of that
	// misconception for this student — the "error ancestry" signal).
	evRows, err := s.DB.QueryContext(ctx, `
		SELECT e.id, e.misconception_id, mc.code, mc.title, e.parent_event_id, e.source, e.evidence, e.observed_at,
		       (SELECT COUNT(*) FROM misconception_events e2
		        WHERE e2.student_id = e.student_id AND e2.misconception_id = e.misconception_id) AS depth
		FROM misconception_events e JOIN misconceptions mc ON mc.id = e.misconception_id
		WHERE e.student_id = ? AND e.resolved_at IS NULL
		ORDER BY e.observed_at DESC LIMIT 20`, studentID)
	if err != nil {
		return nil, fmt.Errorf("spine: load open events: %w", err)
	}
	defer evRows.Close()
	for evRows.Next() {
		var e MisconceptionEvent
		var parent sql.NullString
		if err := evRows.Scan(&e.ID, &e.MisconceptionID, &e.Code, &e.Title, &parent, &e.Source, &e.Evidence, &e.ObservedAt, &e.Depth); err != nil {
			return nil, fmt.Errorf("spine: scan open event: %w", err)
		}
		if parent.Valid {
			e.ParentEventID = &parent.String
		}
		snap.OpenEvents = append(snap.OpenEvents, e)
	}
	if err := evRows.Err(); err != nil {
		return nil, fmt.Errorf("spine: iterate open events: %w", err)
	}

	cutoff := time.Now().UTC().AddDate(0, 0, -30).Format(time.RFC3339)
	repRows, err := s.DB.QueryContext(ctx, `
		SELECT DISTINCT mc.code FROM misconception_events e
		JOIN misconceptions mc ON mc.id = e.misconception_id
		WHERE e.student_id = ? AND e.resolved_at IS NOT NULL AND e.resolved_at > ?`, studentID, cutoff)
	if err != nil {
		return nil, fmt.Errorf("spine: load repaired: %w", err)
	}
	defer repRows.Close()
	for repRows.Next() {
		var code string
		if err := repRows.Scan(&code); err != nil {
			return nil, fmt.Errorf("spine: scan repaired: %w", err)
		}
		snap.RecentlyRepaired = append(snap.RecentlyRepaired, code)
	}
	if err := repRows.Err(); err != nil {
		return nil, fmt.Errorf("spine: iterate repaired: %w", err)
	}
	return snap, nil
}

// PromptSummary renders the snapshot as compact text for the tutor's system
// prompt. Deterministic ordering keeps prompts cache-friendly.
func (snap *Snapshot) PromptSummary() string {
	var b strings.Builder
	fmt.Fprintf(&b, "STUDENT: %s\n", snap.DisplayName)
	if snap.Profile != "" {
		fmt.Fprintf(&b, "PROFILE: %s\n", snap.Profile)
	}
	if len(snap.Mastery) > 0 {
		b.WriteString("MASTERY MAP (standard: level, score):\n")
		for _, m := range snap.Mastery {
			fmt.Fprintf(&b, "- %s %q: %s (%.2f)\n", m.StandardCode, m.Title, m.Level, m.Score)
		}
	}
	if len(snap.OpenEvents) > 0 {
		b.WriteString("OPEN MISCONCEPTIONS (error ancestry — occurrences means how many times this exact error has appeared across their history):\n")
		for _, e := range snap.OpenEvents {
			fmt.Fprintf(&b, "- %s %q: %d occurrence(s); latest evidence: %s\n", e.Code, e.Title, e.Depth, truncate(e.Evidence, 160))
		}
	}
	if len(snap.RecentlyRepaired) > 0 {
		fmt.Fprintf(&b, "RECENTLY REPAIRED (reinforce, don't reteach): %s\n", strings.Join(snap.RecentlyRepaired, ", "))
	}
	return b.String()
}

func truncate(s string, n int) string {
	if len(s) <= n {
		return s
	}
	return s[:n] + "…"
}

func nullable(ns sql.NullString) any {
	if ns.Valid {
		return ns.String
	}
	return nil
}
