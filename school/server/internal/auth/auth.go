// Package auth implements password hashing (argon2id), opaque-token sessions,
// invite-code student registration, and role-gating middleware.
package auth

import (
	"context"
	"crypto/subtle"
	"database/sql"
	"encoding/base64"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"strings"
	"time"

	"golang.org/x/crypto/argon2"

	"github.com/american-desi/supergravity/school/server/internal/db"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
	"github.com/american-desi/supergravity/school/server/internal/ids"
)

// Argon2id parameters per OWASP's minimum recommended configuration.
const (
	argonTime    = 2
	argonMemory  = 19 * 1024 // KiB
	argonThreads = 1
	argonKeyLen  = 32
	argonSaltLen = 16
)

const (
	// SessionCookie is the login cookie name.
	SessionCookie = "sg_session"
	// InviteTTL is how long a student invite code stays redeemable.
	InviteTTL = 14 * 24 * time.Hour
	// MinPasswordLen applies to teacher and student passwords alike.
	MinPasswordLen = 8
)

// User is the authenticated principal attached to request contexts.
type User struct {
	ID          string
	Role        string // "teacher" | "student"
	DisplayName string
	Email       string
}

// Service owns all authentication state transitions.
type Service struct {
	DB         *sql.DB
	SessionTTL time.Duration
	SecureCookies bool
}

// HashPassword returns an encoded argon2id hash: base64(salt)$base64(key).
func HashPassword(password string) (string, error) {
	if len(password) < MinPasswordLen {
		return "", httpx.Fail(http.StatusBadRequest, "weak_password",
			fmt.Sprintf("Password must be at least %d characters.", MinPasswordLen))
	}
	salt := []byte(ids.NewToken()[:argonSaltLen])
	key := argon2.IDKey([]byte(password), salt, argonTime, argonMemory, argonThreads, argonKeyLen)
	return base64.RawStdEncoding.EncodeToString(salt) + "$" + base64.RawStdEncoding.EncodeToString(key), nil
}

// VerifyPassword reports whether password matches the encoded hash.
func VerifyPassword(encoded, password string) bool {
	saltB64, keyB64, ok := strings.Cut(encoded, "$")
	if !ok {
		return false
	}
	salt, err := base64.RawStdEncoding.DecodeString(saltB64)
	if err != nil {
		return false
	}
	want, err := base64.RawStdEncoding.DecodeString(keyB64)
	if err != nil {
		return false
	}
	got := argon2.IDKey([]byte(password), salt, argonTime, argonMemory, argonThreads, argonKeyLen)
	return subtle.ConstantTimeCompare(want, got) == 1
}

// BootstrapTeacher creates the teacher account from env config if no teacher
// exists yet. Idempotent across restarts.
func (s *Service) BootstrapTeacher(ctx context.Context, email, password, displayName string) error {
	var count int
	if err := s.DB.QueryRowContext(ctx, `SELECT COUNT(*) FROM users WHERE role = 'teacher'`).Scan(&count); err != nil {
		return fmt.Errorf("auth: count teachers: %w", err)
	}
	if count > 0 {
		return nil
	}
	if email == "" || password == "" {
		return errors.New("auth: no teacher exists and SCHOOL_TEACHER_EMAIL / SCHOOL_TEACHER_PASSWORD are unset")
	}
	hash, err := HashPassword(password)
	if err != nil {
		return fmt.Errorf("auth: bootstrap teacher password: %w", err)
	}
	_, err = s.DB.ExecContext(ctx,
		`INSERT INTO users (id, role, email, display_name, password_hash, active, created_at) VALUES (?, 'teacher', ?, ?, ?, 1, ?)`,
		ids.New("usr"), strings.ToLower(email), displayName, hash, db.Now())
	if err != nil {
		return fmt.Errorf("auth: insert bootstrap teacher: %w", err)
	}
	return nil
}

// Login verifies credentials and returns a new raw session token. The
// identifier is a teacher email or a student display name (students have no
// email in v1).
func (s *Service) Login(ctx context.Context, identifier, password string) (string, *User, error) {
	identifier = strings.TrimSpace(identifier)
	if identifier == "" || password == "" {
		return "", nil, httpx.Fail(http.StatusBadRequest, "invalid_input", "Username and password are required.")
	}
	var u User
	var hash string
	err := s.DB.QueryRowContext(ctx,
		`SELECT id, role, display_name, COALESCE(email, ''), password_hash FROM users
		 WHERE active = 1 AND (email = ? OR (role = 'student' AND display_name = ?))`,
		strings.ToLower(identifier), identifier).Scan(&u.ID, &u.Role, &u.DisplayName, &u.Email, &hash)
	if errors.Is(err, sql.ErrNoRows) || (err == nil && !VerifyPassword(hash, password)) {
		// Same error for unknown user and bad password: no account enumeration.
		return "", nil, httpx.Fail(http.StatusUnauthorized, "bad_credentials", "Incorrect username or password.")
	}
	if err != nil {
		return "", nil, fmt.Errorf("auth: lookup user: %w", err)
	}
	token, err := s.createSession(ctx, u.ID)
	if err != nil {
		return "", nil, err
	}
	return token, &u, nil
}

func (s *Service) createSession(ctx context.Context, userID string) (string, error) {
	token := ids.NewToken()
	now := db.Now()
	expires := time.Now().UTC().Add(s.SessionTTL).Format(time.RFC3339)
	_, err := s.DB.ExecContext(ctx,
		`INSERT INTO auth_sessions (token_hash, user_id, created_at, expires_at, last_seen_at) VALUES (?, ?, ?, ?, ?)`,
		ids.Hash(token), userID, now, expires, now)
	if err != nil {
		return "", fmt.Errorf("auth: create session: %w", err)
	}
	return token, nil
}

// Logout deletes the session for the given raw token. Missing sessions are
// not an error (logout is idempotent).
func (s *Service) Logout(ctx context.Context, token string) error {
	if _, err := s.DB.ExecContext(ctx, `DELETE FROM auth_sessions WHERE token_hash = ?`, ids.Hash(token)); err != nil {
		return fmt.Errorf("auth: delete session: %w", err)
	}
	return nil
}

// CreateInvite mints a one-time student invite code (returned raw once).
func (s *Service) CreateInvite(ctx context.Context, teacherID string) (string, error) {
	code := ids.NewToken()[:12]
	expires := time.Now().UTC().Add(InviteTTL).Format(time.RFC3339)
	_, err := s.DB.ExecContext(ctx,
		`INSERT INTO invites (id, code_hash, created_by, created_at, expires_at) VALUES (?, ?, ?, ?, ?)`,
		ids.New("inv"), ids.Hash(code), teacherID, db.Now(), expires)
	if err != nil {
		return "", fmt.Errorf("auth: create invite: %w", err)
	}
	return code, nil
}

// RedeemInvite registers a student against an unused invite, enforcing the
// enrollment cap and unique display names, all in one transaction.
func (s *Service) RedeemInvite(ctx context.Context, code, displayName, password string, cap int) (*User, string, error) {
	displayName = strings.TrimSpace(displayName)
	if len(displayName) < 2 || len(displayName) > 60 {
		return nil, "", httpx.Fail(http.StatusBadRequest, "invalid_input", "Name must be 2-60 characters.")
	}
	hash, err := HashPassword(password)
	if err != nil {
		return nil, "", err
	}
	var user User
	err = db.InTx(ctx, s.DB, func(tx *sql.Tx) error {
		var inviteID, expiresAt string
		var usedBy sql.NullString
		err := tx.QueryRowContext(ctx,
			`SELECT id, expires_at, used_by FROM invites WHERE code_hash = ?`, ids.Hash(code)).
			Scan(&inviteID, &expiresAt, &usedBy)
		if errors.Is(err, sql.ErrNoRows) {
			return httpx.Fail(http.StatusBadRequest, "bad_invite", "That invite code is not valid.")
		}
		if err != nil {
			return fmt.Errorf("auth: lookup invite: %w", err)
		}
		if usedBy.Valid {
			return httpx.Fail(http.StatusBadRequest, "bad_invite", "That invite code was already used.")
		}
		if exp, perr := time.Parse(time.RFC3339, expiresAt); perr != nil || time.Now().UTC().After(exp) {
			return httpx.Fail(http.StatusBadRequest, "bad_invite", "That invite code has expired.")
		}
		var students int
		if err := tx.QueryRowContext(ctx, `SELECT COUNT(*) FROM users WHERE role = 'student' AND active = 1`).Scan(&students); err != nil {
			return fmt.Errorf("auth: count students: %w", err)
		}
		if students >= cap {
			return httpx.Fail(http.StatusConflict, "enrollment_full",
				fmt.Sprintf("Enrollment is capped at %d students for v1.", cap))
		}
		var nameTaken int
		if err := tx.QueryRowContext(ctx, `SELECT COUNT(*) FROM users WHERE display_name = ? AND role = 'student'`, displayName).Scan(&nameTaken); err != nil {
			return fmt.Errorf("auth: check name: %w", err)
		}
		if nameTaken > 0 {
			return httpx.Fail(http.StatusConflict, "name_taken", "That name is already in use; pick another.")
		}
		user = User{ID: ids.New("usr"), Role: "student", DisplayName: displayName}
		now := db.Now()
		if _, err := tx.ExecContext(ctx,
			`INSERT INTO users (id, role, email, display_name, password_hash, active, created_at) VALUES (?, 'student', NULL, ?, ?, 1, ?)`,
			user.ID, displayName, hash, now); err != nil {
			return fmt.Errorf("auth: insert student: %w", err)
		}
		if _, err := tx.ExecContext(ctx,
			`INSERT INTO learner_profiles (student_id, updated_at) VALUES (?, ?)`, user.ID, now); err != nil {
			return fmt.Errorf("auth: insert learner profile: %w", err)
		}
		if _, err := tx.ExecContext(ctx,
			`UPDATE invites SET used_by = ?, used_at = ? WHERE id = ?`, user.ID, now, inviteID); err != nil {
			return fmt.Errorf("auth: mark invite used: %w", err)
		}
		return nil
	})
	if err != nil {
		return nil, "", err
	}
	token, err := s.createSession(ctx, user.ID)
	if err != nil {
		return nil, "", err
	}
	return &user, token, nil
}

type ctxKey struct{}

// FromContext returns the authenticated user, or nil.
func FromContext(ctx context.Context) *User {
	u, _ := ctx.Value(ctxKey{}).(*User)
	return u
}

// Require wraps a handler, resolving the session cookie into a User and
// enforcing an optional role. Expired sessions are treated as absent.
func (s *Service) Require(role string, next httpx.Handler) httpx.Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		cookie, err := r.Cookie(SessionCookie)
		if err != nil {
			return httpx.Fail(http.StatusUnauthorized, "unauthenticated", "Sign in to continue.")
		}
		var u User
		var expiresAt string
		err = s.DB.QueryRowContext(r.Context(),
			`SELECT u.id, u.role, u.display_name, COALESCE(u.email, ''), s.expires_at
			 FROM auth_sessions s JOIN users u ON u.id = s.user_id
			 WHERE s.token_hash = ? AND u.active = 1`,
			ids.Hash(cookie.Value)).Scan(&u.ID, &u.Role, &u.DisplayName, &u.Email, &expiresAt)
		if errors.Is(err, sql.ErrNoRows) {
			return httpx.Fail(http.StatusUnauthorized, "unauthenticated", "Session expired; sign in again.")
		}
		if err != nil {
			return fmt.Errorf("auth: resolve session: %w", err)
		}
		if exp, perr := time.Parse(time.RFC3339, expiresAt); perr != nil || time.Now().UTC().After(exp) {
			return httpx.Fail(http.StatusUnauthorized, "unauthenticated", "Session expired; sign in again.")
		}
		if role != "" && u.Role != role {
			return httpx.Fail(http.StatusForbidden, "forbidden", "You do not have access to this.")
		}
		// Touch last_seen best-effort; a failed touch must not fail the request.
		if _, terr := s.DB.ExecContext(r.Context(),
			`UPDATE auth_sessions SET last_seen_at = ? WHERE token_hash = ?`, db.Now(), ids.Hash(cookie.Value)); terr != nil {
			slog.Warn("auth: touch session failed", "error", terr)
		}
		return next(w, r.WithContext(context.WithValue(r.Context(), ctxKey{}, &u)))
	}
}

// SetSessionCookie writes the login cookie with strict browser protections.
func (s *Service) SetSessionCookie(w http.ResponseWriter, token string) {
	http.SetCookie(w, &http.Cookie{
		Name:     SessionCookie,
		Value:    token,
		Path:     "/",
		HttpOnly: true,
		Secure:   s.SecureCookies,
		SameSite: http.SameSiteStrictMode,
		MaxAge:   int(s.SessionTTL.Seconds()),
	})
}

// ClearSessionCookie expires the login cookie.
func (s *Service) ClearSessionCookie(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     SessionCookie,
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Secure:   s.SecureCookies,
		SameSite: http.SameSiteStrictMode,
		MaxAge:   -1,
	})
}
