package spine

import (
	"context"
	"database/sql"
	"strings"
	"testing"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/ids"
	"github.com/american-desi/supergravity/school/server/internal/testutil"
)

func newStudent(t *testing.T, sqlDB *sql.DB) string {
	t.Helper()
	id := ids.New("usr")
	if _, err := sqlDB.Exec(
		`INSERT INTO users (id, role, display_name, password_hash, created_at) VALUES (?, 'student', ?, 'x', ?)`,
		id, "Student "+id[:8], db.Now()); err != nil {
		t.Fatalf("insert student: %v", err)
	}
	if _, err := sqlDB.Exec(`INSERT INTO learner_profiles (student_id, updated_at) VALUES (?, ?)`, id, db.Now()); err != nil {
		t.Fatalf("insert profile: %v", err)
	}
	return id
}

func TestMisconceptionGenealogy(t *testing.T) {
	sqlDB, _ := testutil.OpenDB(t)
	store := &Store{DB: sqlDB}
	ctx := context.Background()
	student := newStudent(t, sqlDB)
	stdID := testutil.StandardID(t, sqlDB, testutil.StandardCode(t, sqlDB, 0))

	depth1, err := store.RecordMisconception(ctx, student, "MC-NEG-DIST", "check", "item1", "5-(x+3)=5-x+3", stdID)
	if err != nil {
		t.Fatalf("first record: %v", err)
	}
	if depth1 != 1 {
		t.Fatalf("first occurrence depth = %d, want 1", depth1)
	}
	depth2, err := store.RecordMisconception(ctx, student, "MC-NEG-DIST", "tutor", "sess1", "same error again", stdID)
	if err != nil {
		t.Fatalf("second record: %v", err)
	}
	if depth2 != 2 {
		t.Fatalf("second occurrence depth = %d, want 2", depth2)
	}

	// The second event's parent must be the first event.
	var parent sql.NullString
	if err := sqlDB.QueryRow(`
		SELECT parent_event_id FROM misconception_events
		WHERE student_id = ? AND source_ref = 'sess1'`, student).Scan(&parent); err != nil {
		t.Fatalf("load second event: %v", err)
	}
	if !parent.Valid {
		t.Fatal("second event has no parent; genealogy link missing")
	}

	// Unknown codes are rejected, not silently dropped.
	if _, err := store.RecordMisconception(ctx, student, "MC-DOES-NOT-EXIST", "check", "x", "", stdID); err == nil {
		t.Fatal("expected error for unknown misconception code")
	}

	// Resolution closes the chain; the next event starts a new chain rooted
	// at no parent but with lifetime depth 3.
	if err := store.ResolveMisconception(ctx, student, "MC-NEG-DIST"); err != nil {
		t.Fatalf("resolve: %v", err)
	}
	snap, err := store.BuildSnapshot(ctx, student)
	if err != nil {
		t.Fatalf("snapshot: %v", err)
	}
	if len(snap.OpenEvents) != 0 {
		t.Fatalf("open events after resolve = %d, want 0", len(snap.OpenEvents))
	}
	depth3, err := store.RecordMisconception(ctx, student, "MC-NEG-DIST", "check", "item2", "back again", stdID)
	if err != nil {
		t.Fatalf("third record: %v", err)
	}
	if depth3 != 3 {
		t.Fatalf("lifetime depth after resolve = %d, want 3", depth3)
	}
	var parent3 sql.NullString
	if err := sqlDB.QueryRow(`
		SELECT parent_event_id FROM misconception_events
		WHERE student_id = ? AND source_ref = 'item2'`, student).Scan(&parent3); err != nil {
		t.Fatalf("load third event: %v", err)
	}
	if parent3.Valid {
		t.Fatal("post-resolution event should start a fresh chain (no parent)")
	}
}

func TestMasteryRollup(t *testing.T) {
	sqlDB, _ := testutil.OpenDB(t)
	store := &Store{DB: sqlDB}
	ctx := context.Background()
	student := newStudent(t, sqlDB)
	stdID := testutil.StandardID(t, sqlDB, testutil.StandardCode(t, sqlDB, 1))

	level := func() (float64, string) {
		var score float64
		var lvl string
		if err := sqlDB.QueryRow(
			`SELECT score, level FROM mastery_state WHERE student_id = ? AND standard_id = ?`,
			student, stdID).Scan(&score, &lvl); err != nil {
			t.Fatalf("read mastery: %v", err)
		}
		return score, lvl
	}

	if err := store.AddEvidence(ctx, student, stdID, "check_correct", "", "i1", 0); err != nil {
		t.Fatalf("add evidence: %v", err)
	}
	if score, lvl := level(); score != 0.15 || lvl != "emerging" {
		t.Fatalf("after 1 correct: score=%v level=%s, want 0.15 emerging", score, lvl)
	}

	// Six correct answers should reach proficient (0.15*7 = 1.05 clamped to 1 → mastered).
	for i := 0; i < 6; i++ {
		if err := store.AddEvidence(ctx, student, stdID, "check_correct", "", "i", 0); err != nil {
			t.Fatalf("add evidence: %v", err)
		}
	}
	if score, lvl := level(); score != 1.0 || lvl != "mastered" {
		t.Fatalf("after 7 correct: score=%v level=%s, want clamped 1.0 mastered", score, lvl)
	}

	// Negative evidence pulls it back down but never below 0.
	for i := 0; i < 15; i++ {
		if err := store.AddEvidence(ctx, student, stdID, "check_incorrect", "", "i", 0); err != nil {
			t.Fatalf("add negative evidence: %v", err)
		}
	}
	if score, lvl := level(); score != 0 || lvl != "unseen" {
		t.Fatalf("after floor: score=%v level=%s, want 0 unseen", score, lvl)
	}

	// Direction validation on tutor observations.
	if err := store.AddEvidence(ctx, student, stdID, "tutor_observation", "", "s", 0); err == nil {
		t.Fatal("expected error for tutor_observation with direction 0")
	}
	if err := store.AddEvidence(ctx, student, stdID, "bogus_kind", "", "s", 0); err == nil {
		t.Fatal("expected error for unknown evidence kind")
	}
}

func TestSnapshotPromptSummary(t *testing.T) {
	sqlDB, _ := testutil.OpenDB(t)
	store := &Store{DB: sqlDB}
	ctx := context.Background()
	student := newStudent(t, sqlDB)
	stdID := testutil.StandardID(t, sqlDB, testutil.StandardCode(t, sqlDB, 0))

	if _, err := store.RecordMisconception(ctx, student, "MC-ORDER-OPS", "check", "item9", "3+4x2=14", stdID); err != nil {
		t.Fatalf("record: %v", err)
	}
	snap, err := store.BuildSnapshot(ctx, student)
	if err != nil {
		t.Fatalf("snapshot: %v", err)
	}
	summary := snap.PromptSummary()
	for _, want := range []string{"MC-ORDER-OPS", "1 occurrence", "MASTERY MAP"} {
		if !strings.Contains(summary, want) {
			t.Errorf("prompt summary missing %q:\n%s", want, summary)
		}
	}
}
