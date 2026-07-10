package compiler

import (
	"context"
	"database/sql"
	"strings"
	"testing"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/ids"
	"github.com/american-desi/supergravity/school/server/internal/llm"
	"github.com/american-desi/supergravity/school/server/internal/testutil"
)

func newTeacher(t *testing.T, sqlDB *sql.DB) string {
	t.Helper()
	id := ids.New("usr")
	if _, err := sqlDB.Exec(
		`INSERT INTO users (id, role, email, display_name, password_hash, created_at) VALUES (?, 'teacher', ?, 'T', 'x', ?)`,
		id, id+"@example.com", db.Now()); err != nil {
		t.Fatalf("insert teacher: %v", err)
	}
	return id
}

// runToCompletion drives the worker loop synchronously until the job leaves
// queued/running. Deterministic: no ticker, no sleeps.
func runToCompletion(t *testing.T, c *Compiler, jobID string) string {
	t.Helper()
	ctx := context.Background()
	for i := 0; i < 10; i++ {
		if err := c.RunNext(ctx); err != nil {
			// Pipeline errors are recorded on the job; keep driving retries.
			t.Logf("runNext: %v", err)
		}
		var status string
		if err := c.DB.QueryRow(`SELECT status FROM compile_jobs WHERE id = ?`, jobID).Scan(&status); err != nil {
			t.Fatalf("read job status: %v", err)
		}
		if status == "done" || status == "failed" {
			return status
		}
	}
	t.Fatal("job did not settle after 10 worker passes")
	return ""
}

func TestPipelineCompilesCourse(t *testing.T) {
	sqlDB, docID := testutil.OpenDB(t)
	teacher := newTeacher(t, sqlDB)
	ctx := context.Background()

	codeA := testutil.StandardCode(t, sqlDB, 0)
	codeB := testutil.StandardCode(t, sqlDB, 1)
	mc := [3]string{"MC-NEG-DIST", "MC-ORDER-OPS", "MC-LIKETERMS"}

	fake := &llm.Fake{Responses: []string{
		testutil.PlanJSON(codeA, codeB), // stage: plan
		testutil.LessonJSON(mc),         // lesson 1
		testutil.LessonJSON(mc),         // lesson 2
		testutil.ActivityHTML,           // activity 1
		testutil.ActivityHTML,           // activity 2
	}}
	c := &Compiler{DB: sqlDB, LLM: fake}

	courseID, jobID, err := c.Enqueue(ctx, docID, "8th grader, strong on fractions, SHSAT in October", teacher)
	if err != nil {
		t.Fatalf("enqueue: %v", err)
	}
	if status := runToCompletion(t, c, jobID); status != "done" {
		t.Fatalf("job status = %s, want done", status)
	}

	var courseStatus, title string
	if err := sqlDB.QueryRow(`SELECT status, title FROM courses WHERE id = ?`, courseID).Scan(&courseStatus, &title); err != nil {
		t.Fatalf("read course: %v", err)
	}
	if courseStatus != "ready" || title != "Test Course" {
		t.Fatalf("course = (%s, %s), want (ready, Test Course)", courseStatus, title)
	}

	var lessons, items, distractors, activities int
	row := sqlDB.QueryRow(`
		SELECT
			(SELECT COUNT(*) FROM lessons l JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?),
			(SELECT COUNT(*) FROM items i JOIN lessons l ON l.id = i.lesson_id JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?),
			(SELECT COUNT(*) FROM item_distractors d JOIN items i ON i.id = d.item_id JOIN lessons l ON l.id = i.lesson_id JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?),
			(SELECT COUNT(*) FROM activities a JOIN lessons l ON l.id = a.lesson_id JOIN units u ON u.id = l.unit_id WHERE u.course_id = ?)`,
		courseID, courseID, courseID, courseID)
	if err := row.Scan(&lessons, &items, &distractors, &activities); err != nil {
		t.Fatalf("count artifacts: %v", err)
	}
	if lessons != 2 || items != 8 || distractors != 24 || activities != 2 {
		t.Fatalf("artifacts = (%d lessons, %d items, %d distractors, %d activities), want (2, 8, 24, 2)",
			lessons, items, distractors, activities)
	}

	// Provenance: every lesson/item/activity row must chain to the standards
	// document root through non-null parents.
	var orphans int
	if err := sqlDB.QueryRow(`
		SELECT COUNT(*) FROM provenance
		WHERE artifact_kind != 'standards_document' AND parent_id IS NULL`).Scan(&orphans); err != nil {
		t.Fatalf("count orphans: %v", err)
	}
	if orphans != 0 {
		t.Fatalf("%d provenance rows have no parent; chain is broken", orphans)
	}
}

func TestPipelineRejectsUnknownMisconceptionThenResumes(t *testing.T) {
	sqlDB, docID := testutil.OpenDB(t)
	teacher := newTeacher(t, sqlDB)
	ctx := context.Background()
	codeA := testutil.StandardCode(t, sqlDB, 0)

	badLesson := strings.ReplaceAll(testutil.LessonJSON([3]string{"MC-NEG-DIST", "MC-ORDER-OPS", "MC-LIKETERMS"}),
		"MC-NEG-DIST", "MC-INVENTED")
	fake := &llm.Fake{Responses: []string{
		testutil.PlanJSON(codeA),
		badLesson, // attempt 1 lesson: invalid code -> stage fails, job re-queued
		testutil.LessonJSON([3]string{"MC-NEG-DIST", "MC-ORDER-OPS", "MC-LIKETERMS"}), // attempt 2: plan is skipped (resume), lesson regenerates
		testutil.ActivityHTML,
	}}
	c := &Compiler{DB: sqlDB, LLM: fake}

	courseID, jobID, err := c.Enqueue(ctx, docID, "", teacher)
	if err != nil {
		t.Fatalf("enqueue: %v", err)
	}
	if status := runToCompletion(t, c, jobID); status != "done" {
		t.Fatalf("job status = %s, want done after resume", status)
	}
	// Plan must not have been regenerated: exactly one unit set exists.
	var units int
	if err := sqlDB.QueryRow(`SELECT COUNT(*) FROM units WHERE course_id = ?`, courseID).Scan(&units); err != nil {
		t.Fatalf("count units: %v", err)
	}
	if units != 1 {
		t.Fatalf("units = %d, want 1 (plan stage should not rerun on resume)", units)
	}
}

func TestPipelineFailsAfterMaxAttempts(t *testing.T) {
	sqlDB, docID := testutil.OpenDB(t)
	teacher := newTeacher(t, sqlDB)
	ctx := context.Background()

	fake := &llm.Fake{Responses: []string{"this is not json", "still not json", "nope", "no", "n", "-"}}
	c := &Compiler{DB: sqlDB, LLM: fake}
	courseID, jobID, err := c.Enqueue(ctx, docID, "", teacher)
	if err != nil {
		t.Fatalf("enqueue: %v", err)
	}
	if status := runToCompletion(t, c, jobID); status != "failed" {
		t.Fatalf("job status = %s, want failed", status)
	}
	var courseStatus, jobErr string
	if err := sqlDB.QueryRow(`SELECT status FROM courses WHERE id = ?`, courseID).Scan(&courseStatus); err != nil {
		t.Fatalf("read course: %v", err)
	}
	if courseStatus != "failed" {
		t.Fatalf("course status = %s, want failed", courseStatus)
	}
	if err := sqlDB.QueryRow(`SELECT error FROM compile_jobs WHERE id = ?`, jobID).Scan(&jobErr); err != nil {
		t.Fatalf("read job error: %v", err)
	}
	if jobErr == "" {
		t.Fatal("failed job should carry a human-readable error")
	}
}

func TestValidateActivityHTMLRejectsExternalReferences(t *testing.T) {
	cases := []struct {
		name string
		html string
		ok   bool
	}{
		{"valid", testutil.ActivityHTML, true},
		{"cdn script", `<!DOCTYPE html><html><script src="https://cdn.example.com/x.js"></script></html>`, false},
		{"fetch call", `<!DOCTYPE html><html><script>fetch('/api')</script></html>`, false},
		{"not a document", `<div>hello</div>`, false},
		{"svg namespace allowed", `<!DOCTYPE html><html><body><svg xmlns="http://www.w3.org/2000/svg"></svg></body></html>`, true},
	}
	for _, tc := range cases {
		err := validateActivityHTML(tc.html)
		if tc.ok && err != nil {
			t.Errorf("%s: unexpected reject: %v", tc.name, err)
		}
		if !tc.ok && err == nil {
			t.Errorf("%s: expected reject, got pass", tc.name)
		}
	}
}
