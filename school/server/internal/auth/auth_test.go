package auth

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/testutil"
)

func newService(t *testing.T) *Service {
	t.Helper()
	sqlDB, _ := testutil.OpenDB(t)
	return &Service{DB: sqlDB, SessionTTL: time.Hour, SecureCookies: false}
}

func TestPasswordHashing(t *testing.T) {
	hash, err := HashPassword("correct-horse-battery")
	if err != nil {
		t.Fatalf("hash: %v", err)
	}
	if !VerifyPassword(hash, "correct-horse-battery") {
		t.Fatal("correct password rejected")
	}
	if VerifyPassword(hash, "wrong-password") {
		t.Fatal("wrong password accepted")
	}
	if VerifyPassword("garbage-not-a-hash", "anything") {
		t.Fatal("malformed hash verified")
	}
	if _, err := HashPassword("short"); err == nil {
		t.Fatal("expected weak_password error")
	}
}

func TestInviteLifecycle(t *testing.T) {
	svc := newService(t)
	ctx := context.Background()
	if err := svc.BootstrapTeacher(ctx, "teacher@example.com", "teacher-pass-1", "Teacher"); err != nil {
		t.Fatalf("bootstrap: %v", err)
	}
	// Bootstrap is idempotent.
	if err := svc.BootstrapTeacher(ctx, "other@example.com", "other-pass-99", "Other"); err != nil {
		t.Fatalf("second bootstrap: %v", err)
	}
	var teachers int
	if err := svc.DB.QueryRow(`SELECT COUNT(*) FROM users WHERE role = 'teacher'`).Scan(&teachers); err != nil {
		t.Fatalf("count teachers: %v", err)
	}
	if teachers != 1 {
		t.Fatalf("teachers = %d, want 1", teachers)
	}

	token, teacher, err := svc.Login(ctx, "Teacher@Example.com", "teacher-pass-1")
	if err != nil {
		t.Fatalf("login: %v", err)
	}
	if token == "" || teacher.Role != "teacher" {
		t.Fatalf("bad login result: token=%q role=%q", token, teacher.Role)
	}
	if _, _, err := svc.Login(ctx, "teacher@example.com", "wrong"); err == nil {
		t.Fatal("wrong password accepted")
	}

	code, err := svc.CreateInvite(ctx, teacher.ID)
	if err != nil {
		t.Fatalf("create invite: %v", err)
	}
	student, sessionToken, err := svc.RedeemInvite(ctx, code, "Ada L", "ada-password-1", 20)
	if err != nil {
		t.Fatalf("redeem: %v", err)
	}
	if student.Role != "student" || sessionToken == "" {
		t.Fatalf("bad redeem result: %+v", student)
	}
	// Codes are single-use.
	if _, _, err := svc.RedeemInvite(ctx, code, "Bob M", "bob-password-1", 20); err == nil {
		t.Fatal("reused invite accepted")
	}
	// Bad codes rejected without enumeration detail.
	if _, _, err := svc.RedeemInvite(ctx, "not-a-real-code", "Eve X", "eve-password-1", 20); err == nil {
		t.Fatal("bogus invite accepted")
	}
	// Duplicate display names rejected (students log in by name).
	code2, _ := svc.CreateInvite(ctx, teacher.ID)
	if _, _, err := svc.RedeemInvite(ctx, code2, "Ada L", "other-pass-22", 20); err == nil {
		t.Fatal("duplicate display name accepted")
	}
	// Student can log in by display name.
	if _, u, err := svc.Login(ctx, "Ada L", "ada-password-1"); err != nil || u.Role != "student" {
		t.Fatalf("student login failed: %v", err)
	}
}

func TestEnrollmentCap(t *testing.T) {
	svc := newService(t)
	ctx := context.Background()
	if err := svc.BootstrapTeacher(ctx, "t@example.com", "teacher-pass-1", "T"); err != nil {
		t.Fatalf("bootstrap: %v", err)
	}
	_, teacher, err := svc.Login(ctx, "t@example.com", "teacher-pass-1")
	if err != nil {
		t.Fatalf("login: %v", err)
	}
	const cap = 3
	for i := 0; i < cap; i++ {
		code, err := svc.CreateInvite(ctx, teacher.ID)
		if err != nil {
			t.Fatalf("invite %d: %v", i, err)
		}
		if _, _, err := svc.RedeemInvite(ctx, code, fmt.Sprintf("Student %d", i), "password-123", cap); err != nil {
			t.Fatalf("redeem %d: %v", i, err)
		}
	}
	code, _ := svc.CreateInvite(ctx, teacher.ID)
	if _, _, err := svc.RedeemInvite(ctx, code, "One Too Many", "password-123", cap); err == nil {
		t.Fatal("enrollment past cap accepted")
	}
}
