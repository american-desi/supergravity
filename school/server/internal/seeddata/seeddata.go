// Package seeddata embeds the curated SHSAT / NYS Algebra I standards
// document and misconception catalog, and imports standards documents in the
// same JSON format uploaded by teachers at runtime.
package seeddata

import (
	"context"
	"database/sql"
	_ "embed"
	"encoding/json"
	"errors"
	"fmt"
	"strings"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/ids"
)

//go:embed shsat_math.json
var shsatMathJSON []byte

// DocumentInput is the import format for a standards document.
type DocumentInput struct {
	Document struct {
		Title        string `json:"title"`
		Source       string `json:"source"`
		Jurisdiction string `json:"jurisdiction"`
	} `json:"document"`
	Standards []struct {
		Code        string `json:"code"`
		Domain      string `json:"domain"`
		Title       string `json:"title"`
		Description string `json:"description"`
	} `json:"standards"`
	Misconceptions []struct {
		Code         string `json:"code"`
		Title        string `json:"title"`
		Description  string `json:"description"`
		StandardHint string `json:"standard_hint"`
	} `json:"misconceptions"`
}

// Validate checks the structural invariants of an import payload.
func (in *DocumentInput) Validate() error {
	if strings.TrimSpace(in.Document.Title) == "" {
		return errors.New("document.title is required")
	}
	if len(in.Standards) == 0 {
		return errors.New("at least one standard is required")
	}
	if len(in.Standards) > 500 {
		return errors.New("too many standards (max 500)")
	}
	seen := map[string]bool{}
	for i, s := range in.Standards {
		if strings.TrimSpace(s.Code) == "" || strings.TrimSpace(s.Title) == "" || strings.TrimSpace(s.Description) == "" {
			return fmt.Errorf("standard %d is missing code, title, or description", i+1)
		}
		if seen[s.Code] {
			return fmt.Errorf("duplicate standard code %q", s.Code)
		}
		seen[s.Code] = true
	}
	mcSeen := map[string]bool{}
	for i, m := range in.Misconceptions {
		if strings.TrimSpace(m.Code) == "" || strings.TrimSpace(m.Title) == "" {
			return fmt.Errorf("misconception %d is missing code or title", i+1)
		}
		if mcSeen[m.Code] {
			return fmt.Errorf("duplicate misconception code %q", m.Code)
		}
		mcSeen[m.Code] = true
	}
	return nil
}

// Import inserts a standards document, its standards, its misconceptions
// (upserted by code), and the provenance root row. Idempotent per document:
// re-importing identical JSON returns the existing document id.
func Import(ctx context.Context, sqlDB *sql.DB, raw []byte, importedBy string) (documentID string, err error) {
	var in DocumentInput
	if err := json.Unmarshal(raw, &in); err != nil {
		return "", fmt.Errorf("seeddata: parse document JSON: %w", err)
	}
	if err := in.Validate(); err != nil {
		return "", fmt.Errorf("seeddata: invalid document: %w", err)
	}
	rawHash := ids.Hash(string(raw))

	var existing string
	err = sqlDB.QueryRowContext(ctx, `SELECT id FROM standards_documents WHERE raw_sha256 = ?`, rawHash).Scan(&existing)
	if err == nil {
		return existing, nil
	}
	if !errors.Is(err, sql.ErrNoRows) {
		return "", fmt.Errorf("seeddata: check existing document: %w", err)
	}

	documentID = ids.New("doc")
	err = db.InTx(ctx, sqlDB, func(tx *sql.Tx) error {
		now := db.Now()
		var by any
		if importedBy != "" {
			by = importedBy
		}
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO standards_documents (id, title, source, jurisdiction, raw_sha256, imported_by, imported_at)
			VALUES (?, ?, ?, ?, ?, ?, ?)`,
			documentID, in.Document.Title, in.Document.Source, in.Document.Jurisdiction, rawHash, by, now); err != nil {
			return fmt.Errorf("seeddata: insert document: %w", err)
		}
		for pos, s := range in.Standards {
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO standards (id, document_id, code, title, description, domain, position)
				VALUES (?, ?, ?, ?, ?, ?, ?)`,
				ids.New("std"), documentID, s.Code, s.Title, s.Description, s.Domain, pos); err != nil {
				return fmt.Errorf("seeddata: insert standard %q: %w", s.Code, err)
			}
		}
		for _, m := range in.Misconceptions {
			if _, err := tx.ExecContext(ctx, `
				INSERT INTO misconceptions (id, code, title, description, standard_hint)
				VALUES (?, ?, ?, ?, ?)
				ON CONFLICT (code) DO UPDATE SET title = excluded.title, description = excluded.description, standard_hint = excluded.standard_hint`,
				ids.New("mcn"), m.Code, m.Title, m.Description, m.StandardHint); err != nil {
				return fmt.Errorf("seeddata: upsert misconception %q: %w", m.Code, err)
			}
		}
		// Provenance root for every artifact later compiled from this document.
		if _, err := tx.ExecContext(ctx, `
			INSERT INTO provenance (id, artifact_kind, artifact_id, input_sha256, output_sha256, created_at)
			VALUES (?, 'standards_document', ?, ?, ?, ?)`,
			ids.New("prv"), documentID, rawHash, rawHash, now); err != nil {
			return fmt.Errorf("seeddata: insert document provenance: %w", err)
		}
		return nil
	})
	if err != nil {
		return "", err
	}
	return documentID, nil
}

// ImportEmbedded loads the bundled SHSAT document if no standards exist yet.
func ImportEmbedded(ctx context.Context, sqlDB *sql.DB) (string, bool, error) {
	var count int
	if err := sqlDB.QueryRowContext(ctx, `SELECT COUNT(*) FROM standards`).Scan(&count); err != nil {
		return "", false, fmt.Errorf("seeddata: count standards: %w", err)
	}
	if count > 0 {
		return "", false, nil
	}
	id, err := Import(ctx, sqlDB, shsatMathJSON, "")
	if err != nil {
		return "", false, err
	}
	return id, true, nil
}
