// Package testutil provides shared fixtures: a migrated temp SQLite database
// with the embedded seed imported, and canned LLM outputs for the compiler.
package testutil

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"path/filepath"
	"testing"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/seeddata"
)

// OpenDB returns a migrated, seeded database in t's temp dir.
func OpenDB(t *testing.T) (*sql.DB, string) {
	t.Helper()
	ctx := context.Background()
	sqlDB, err := db.Open(ctx, filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatalf("open db: %v", err)
	}
	t.Cleanup(func() { sqlDB.Close() })
	docID, _, err := seeddata.ImportEmbedded(ctx, sqlDB)
	if err != nil {
		t.Fatalf("seed: %v", err)
	}
	return sqlDB, docID
}

// StandardCode returns any standard code from the seeded document.
func StandardCode(t *testing.T, sqlDB *sql.DB, i int) string {
	t.Helper()
	var code string
	if err := sqlDB.QueryRow(`SELECT code FROM standards ORDER BY position LIMIT 1 OFFSET ?`, i).Scan(&code); err != nil {
		t.Fatalf("standard code: %v", err)
	}
	return code
}

// StandardID resolves a standard code to its id.
func StandardID(t *testing.T, sqlDB *sql.DB, code string) string {
	t.Helper()
	var id string
	if err := sqlDB.QueryRow(`SELECT id FROM standards WHERE code = ?`, code).Scan(&id); err != nil {
		t.Fatalf("standard id for %s: %v", code, err)
	}
	return id
}

// PlanJSON builds a valid compiler plan response covering the given codes,
// one lesson per code in a single unit.
func PlanJSON(codes ...string) string {
	type lesson struct {
		Title        string `json:"title"`
		Objective    string `json:"objective"`
		StandardCode string `json:"standard_code"`
	}
	lessons := make([]lesson, 0, len(codes))
	for i, c := range codes {
		lessons = append(lessons, lesson{
			Title:        fmt.Sprintf("Lesson %d", i+1),
			Objective:    "Master " + c,
			StandardCode: c,
		})
	}
	plan := map[string]any{
		"course_title": "Test Course",
		"units": []map[string]any{
			{"title": "Unit 1", "overview": "The one unit.", "lessons": lessons},
		},
	}
	buf, _ := json.Marshal(plan)
	return string(buf)
}

// LessonJSON builds a valid lesson response whose distractors all use the
// given misconception codes (must be exactly 3).
func LessonJSON(mcCodes [3]string) string {
	item := func(n int) map[string]any {
		return map[string]any{
			"stem_md":        fmt.Sprintf("What is %d + %d?", n, n),
			"correct_label":  "B",
			"correct_text":   fmt.Sprintf("%d", 2*n),
			"explanation_md": "Add them.",
			"distractors": []map[string]any{
				{"label": "A", "text": "0", "misconception_code": mcCodes[0], "feedback_md": "Check signs."},
				{"label": "C", "text": "1", "misconception_code": mcCodes[1], "feedback_md": "Check order of operations."},
				{"label": "D", "text": "2", "misconception_code": mcCodes[2], "feedback_md": "Check like terms."},
			},
		}
	}
	out := map[string]any{
		"narrative_md": "## The idea\nNumbers add. $1+1=2$.",
		"items":        []map[string]any{item(1), item(2), item(3), item(4)},
	}
	buf, _ := json.Marshal(out)
	return string(buf)
}

// ActivityHTML is a minimal valid self-contained activity.
const ActivityHTML = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>body{font:16px sans-serif}</style></head>
<body><h1>Practice</h1><button onclick="go()">Go</button><script>function go(){document.body.append(' ok')}</script></body></html>`
