package api

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/compiler"
	"github.com/american-desi/supergravity/school/server/internal/config"
	"github.com/american-desi/supergravity/school/server/internal/llm"
	"github.com/american-desi/supergravity/school/server/internal/spine"
	"github.com/american-desi/supergravity/school/server/internal/testutil"
	"github.com/american-desi/supergravity/school/server/internal/tutor"
)

// harness spins the full HTTP stack over a temp database with a fake LLM.
type harness struct {
	t     *testing.T
	ts    *httptest.Server
	fake  *llm.Fake
	comp  *compiler.Compiler
	docID string
}

func newHarness(t *testing.T) *harness {
	t.Helper()
	sqlDB, docID := testutil.OpenDB(t)
	fake := &llm.Fake{}
	authSvc := &auth.Service{DB: sqlDB, SessionTTL: time.Hour, SecureCookies: false}
	if err := authSvc.BootstrapTeacher(context.Background(), "teacher@example.com", "teacher-pass-1", "Teacher"); err != nil {
		t.Fatalf("bootstrap: %v", err)
	}
	spineStore := &spine.Store{DB: sqlDB}
	comp := &compiler.Compiler{DB: sqlDB, LLM: fake}
	tut := &tutor.Service{DB: sqlDB, LLM: fake, Spine: spineStore, DailyCap: 100}
	cfg := config.Config{PublicOrigin: "http://school.test", EnrollmentCap: 20}
	srv := &Server{DB: sqlDB, Cfg: cfg, Auth: authSvc, Compiler: comp, Tutor: tut, Spine: spineStore}
	ts := httptest.NewServer(srv.Routes())
	t.Cleanup(ts.Close)
	return &harness{t: t, ts: ts, fake: fake, comp: comp, docID: docID}
}

func (h *harness) do(method, path string, body any, cookie *http.Cookie) (*http.Response, []byte) {
	h.t.Helper()
	var buf bytes.Buffer
	if body != nil {
		if err := json.NewEncoder(&buf).Encode(body); err != nil {
			h.t.Fatalf("encode body: %v", err)
		}
	}
	req, err := http.NewRequest(method, h.ts.URL+path, &buf)
	if err != nil {
		h.t.Fatalf("new request: %v", err)
	}
	req.Header.Set("Content-Type", "application/json")
	if cookie != nil {
		req.AddCookie(cookie)
	}
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		h.t.Fatalf("%s %s: %v", method, path, err)
	}
	defer resp.Body.Close()
	var out bytes.Buffer
	if _, err := out.ReadFrom(resp.Body); err != nil {
		h.t.Fatalf("read body: %v", err)
	}
	return resp, out.Bytes()
}

func (h *harness) login(identifier, password string) *http.Cookie {
	h.t.Helper()
	req, _ := http.NewRequest(http.MethodPost, h.ts.URL+"/api/auth/login", strings.NewReader(
		fmt.Sprintf(`{"identifier":%q,"password":%q}`, identifier, password)))
	req.Header.Set("Content-Type", "application/json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		h.t.Fatalf("login request: %v", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		var b bytes.Buffer
		b.ReadFrom(resp.Body)
		h.t.Fatalf("login status = %d: %s", resp.StatusCode, b.String())
	}
	for _, c := range resp.Cookies() {
		if c.Name == auth.SessionCookie {
			return c
		}
	}
	h.t.Fatal("no session cookie on login")
	return nil
}

func decode[T any](t *testing.T, raw []byte) T {
	t.Helper()
	var v T
	if err := json.Unmarshal(raw, &v); err != nil {
		t.Fatalf("decode %s: %v", string(raw), err)
	}
	return v
}

func TestFullStudentJourney(t *testing.T) {
	h := newHarness(t)

	// -- Teacher signs in and invites a student.
	teacherCookie := h.login("teacher@example.com", "teacher-pass-1")
	resp, body := h.do(http.MethodPost, "/api/teacher/invites", map[string]any{}, teacherCookie)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("invite status = %d: %s", resp.StatusCode, body)
	}
	invite := decode[struct {
		Code string `json:"code"`
	}](t, body)

	// -- Student registers with the invite.
	resp, body = h.do(http.MethodPost, "/api/auth/register",
		map[string]string{"invite_code": invite.Code, "display_name": "Ada L", "password": "ada-password-1"}, nil)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("register status = %d: %s", resp.StatusCode, body)
	}
	reg := decode[struct {
		User struct {
			ID string `json:"id"`
		} `json:"user"`
	}](t, body)
	studentCookie := h.login("Ada L", "ada-password-1")

	// -- Students cannot reach teacher endpoints.
	resp, _ = h.do(http.MethodGet, "/api/teacher/overview", nil, studentCookie)
	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("student on teacher endpoint = %d, want 403", resp.StatusCode)
	}

	// -- Teacher compiles a course (fake LLM scripts the pipeline).
	sqlDB := h.comp.DB
	var codeA string
	if err := sqlDB.QueryRow(`SELECT code FROM standards ORDER BY position LIMIT 1`).Scan(&codeA); err != nil {
		t.Fatalf("standard code: %v", err)
	}
	h.fake.Responses = []string{
		testutil.PlanJSON(codeA),
		testutil.LessonJSON([3]string{"MC-NEG-DIST", "MC-ORDER-OPS", "MC-LIKETERMS"}),
		testutil.ActivityHTML,
	}
	resp, body = h.do(http.MethodPost, "/api/teacher/courses",
		map[string]string{"standards_document_id": h.docID, "learner_profile_note": "SHSAT October"}, teacherCookie)
	if resp.StatusCode != http.StatusAccepted {
		t.Fatalf("compile status = %d: %s", resp.StatusCode, body)
	}
	job := decode[struct {
		CourseID string `json:"course_id"`
		JobID    string `json:"job_id"`
	}](t, body)

	// Drive the worker synchronously (no ticker in tests).
	for i := 0; i < 5; i++ {
		if err := h.comp.RunNext(context.Background()); err != nil {
			t.Logf("worker pass: %v", err)
		}
	}
	resp, body = h.do(http.MethodGet, "/api/teacher/jobs/"+job.JobID, nil, teacherCookie)
	status := decode[struct {
		Status string `json:"status"`
	}](t, body)
	if status.Status != "done" {
		t.Fatalf("job status = %s: %s", status.Status, body)
	}

	// -- Teacher enrolls the student; a second compile while busy is rejected
	//    only when one is actually in flight (this one is done, so allowed).
	resp, body = h.do(http.MethodPost, "/api/teacher/courses/"+job.CourseID+"/enrollments",
		map[string]string{"student_id": reg.User.ID}, teacherCookie)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("enroll status = %d: %s", resp.StatusCode, body)
	}

	// -- Student sees the outline; items come without answer keys.
	resp, body = h.do(http.MethodGet, "/api/courses/"+job.CourseID, nil, studentCookie)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("outline status = %d: %s", resp.StatusCode, body)
	}
	outline := decode[struct {
		Units []struct {
			Lessons []struct {
				ID string `json:"id"`
			} `json:"lessons"`
		} `json:"units"`
	}](t, body)
	lessonID := outline.Units[0].Lessons[0].ID

	resp, body = h.do(http.MethodGet, "/api/lessons/"+lessonID, nil, studentCookie)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("lesson status = %d: %s", resp.StatusCode, body)
	}
	if strings.Contains(string(body), `"correct_label":"B"`) {
		t.Fatal("student lesson payload leaks the answer key")
	}
	lesson := decode[struct {
		Items []struct {
			ID string `json:"id"`
		} `json:"items"`
		Activities []struct {
			ID string `json:"id"`
		} `json:"activities"`
	}](t, body)

	// -- Wrong answer on a misconception-mapped distractor records the event.
	resp, body = h.do(http.MethodPost, "/api/student/items/"+lesson.Items[0].ID+"/attempts",
		map[string]string{"label": "A"}, studentCookie)
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("attempt status = %d: %s", resp.StatusCode, body)
	}
	attempt := decode[struct {
		Correct    bool   `json:"correct"`
		Recurrence int    `json:"recurrence"`
		FeedbackMD string `json:"feedback_md"`
	}](t, body)
	if attempt.Correct || attempt.Recurrence != 1 || attempt.FeedbackMD == "" {
		t.Fatalf("wrong-answer attempt = %+v, want incorrect with recurrence 1 and feedback", attempt)
	}
	var events int
	if err := sqlDB.QueryRow(`SELECT COUNT(*) FROM misconception_events WHERE student_id = ?`, reg.User.ID).Scan(&events); err != nil {
		t.Fatalf("count events: %v", err)
	}
	if events != 1 {
		t.Fatalf("misconception events = %d, want 1", events)
	}

	// -- Correct answer returns the explanation and adds mastery.
	resp, body = h.do(http.MethodPost, "/api/student/items/"+lesson.Items[1].ID+"/attempts",
		map[string]string{"label": "B"}, studentCookie)
	right := decode[struct {
		Correct       bool   `json:"correct"`
		ExplanationMD string `json:"explanation_md"`
	}](t, body)
	if !right.Correct || right.ExplanationMD == "" {
		t.Fatalf("correct attempt = %+v", right)
	}

	// -- Activity HTML is served with the lockdown CSP.
	req, _ := http.NewRequest(http.MethodGet, h.ts.URL+"/api/activities/"+lesson.Activities[0].ID+"/html", nil)
	req.AddCookie(studentCookie)
	aResp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("activity: %v", err)
	}
	aResp.Body.Close()
	if csp := aResp.Header.Get("Content-Security-Policy"); !strings.Contains(csp, "default-src 'none'") {
		t.Fatalf("activity CSP = %q, want default-src 'none'", csp)
	}

	// -- Tutor chat: streamed ndjson deltas then done; assessor runs after.
	h.fake.Responses = []string{
		"What do you get if you distribute the negative first?", // tutor reply
		`{"misconceptions_observed":[],"mastery_signals":[]}`,   // assessor
	}
	resp, body = h.do(http.MethodPost, "/api/student/tutor/sessions",
		map[string]string{"course_id": job.CourseID, "lesson_id": lessonID}, studentCookie)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("open session = %d: %s", resp.StatusCode, body)
	}
	sess := decode[struct {
		Session struct {
			ID string `json:"id"`
		} `json:"session"`
	}](t, body)

	req, _ = http.NewRequest(http.MethodPost, h.ts.URL+"/api/student/tutor/sessions/"+sess.Session.ID+"/messages",
		strings.NewReader(`{"content":"I got 5 - x + 3 = 8 - x"}`))
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(studentCookie)
	sResp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("tutor send: %v", err)
	}
	defer sResp.Body.Close()
	var sawDelta, sawDone bool
	scanner := bufio.NewScanner(sResp.Body)
	for scanner.Scan() {
		var ev map[string]any
		if err := json.Unmarshal(scanner.Bytes(), &ev); err != nil {
			t.Fatalf("bad stream line %q: %v", scanner.Text(), err)
		}
		if _, ok := ev["delta"]; ok {
			sawDelta = true
		}
		if ev["done"] == true {
			sawDone = true
		}
		if msg, ok := ev["error"]; ok {
			t.Fatalf("stream error: %v", msg)
		}
	}
	if !sawDelta || !sawDone {
		t.Fatalf("stream missing events: delta=%v done=%v", sawDelta, sawDone)
	}

	// Both messages persisted.
	resp, body = h.do(http.MethodGet, "/api/student/tutor/sessions/"+sess.Session.ID+"/messages", nil, studentCookie)
	history := decode[struct {
		Messages []struct {
			Role string `json:"role"`
		} `json:"messages"`
	}](t, body)
	if len(history.Messages) != 2 {
		t.Fatalf("history = %d messages, want 2", len(history.Messages))
	}

	// -- Kill signal L1: a 'worse' review kills the course.
	resp, body = h.do(http.MethodPost, "/api/teacher/courses/"+job.CourseID+"/review",
		map[string]string{"verdict": "worse", "baseline_name": "Math Relay Race", "notes": "flat"}, teacherCookie)
	if resp.StatusCode != http.StatusCreated {
		t.Fatalf("review status = %d: %s", resp.StatusCode, body)
	}
	var courseStatus string
	if err := sqlDB.QueryRow(`SELECT status FROM courses WHERE id = ?`, job.CourseID).Scan(&courseStatus); err != nil {
		t.Fatalf("read course: %v", err)
	}
	if courseStatus != "killed" {
		t.Fatalf("course status after worse verdict = %s, want killed", courseStatus)
	}
}

func TestCrossOriginStateChangeRejected(t *testing.T) {
	h := newHarness(t)
	req, _ := http.NewRequest(http.MethodPost, h.ts.URL+"/api/auth/login",
		strings.NewReader(`{"identifier":"teacher@example.com","password":"teacher-pass-1"}`))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Origin", "https://evil.example.com")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		t.Fatalf("request: %v", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusForbidden {
		t.Fatalf("cross-origin POST = %d, want 403", resp.StatusCode)
	}
}

func TestUnauthenticatedAccessRejected(t *testing.T) {
	h := newHarness(t)
	for _, path := range []string{"/api/teacher/overview", "/api/courses", "/api/auth/me"} {
		resp, _ := h.do(http.MethodGet, path, nil, nil)
		if resp.StatusCode != http.StatusUnauthorized {
			t.Errorf("GET %s unauthenticated = %d, want 401", path, resp.StatusCode)
		}
	}
}
