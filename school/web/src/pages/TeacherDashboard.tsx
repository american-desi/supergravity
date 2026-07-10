import { createResource, createSignal, For, onCleanup, Show, type Component } from "solid-js";
import { A } from "@solidjs/router";
import { api, ApiFailure } from "../api";
import type { CompileJob, Course, StandardsDocument, TeacherOverview } from "../types";

const JOB_POLL_MS = 4000;

export const TeacherDashboard: Component = () => {
  const [overview, { refetch: refetchOverview }] = createResource(() =>
    api.get<TeacherOverview>("/api/teacher/overview"),
  );
  const [docs] = createResource(() =>
    api.get<{ documents: StandardsDocument[] }>("/api/teacher/standards-documents"),
  );
  const [courses, { refetch: refetchCourses }] = createResource(() =>
    api.get<{ courses: Course[] }>("/api/courses"),
  );

  const [inviteCode, setInviteCode] = createSignal("");
  const [profileNote, setProfileNote] = createSignal("");
  const [selectedDoc, setSelectedDoc] = createSignal("");
  const [job, setJob] = createSignal<CompileJob | null>(null);
  const [error, setError] = createSignal("");

  let pollTimer: ReturnType<typeof setInterval> | undefined;
  onCleanup(() => clearInterval(pollTimer));

  const createInvite = async () => {
    setError("");
    try {
      const resp = await api.post<{ code: string }>("/api/teacher/invites");
      setInviteCode(resp.code);
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Invite creation failed.");
    }
  };

  const pollJob = (jobId: string) => {
    clearInterval(pollTimer);
    pollTimer = setInterval(() => {
      void (async () => {
        try {
          const j = await api.get<CompileJob>(`/api/teacher/jobs/${encodeURIComponent(jobId)}`);
          setJob(j);
          if (j.status === "done" || j.status === "failed") {
            clearInterval(pollTimer);
            void refetchCourses();
          }
        } catch {
          // transient poll failure: keep polling
        }
      })();
    }, JOB_POLL_MS);
  };

  const compile = async () => {
    setError("");
    const docId = selectedDoc() || docs()?.documents[0]?.id;
    if (!docId) {
      setError("No standards document available.");
      return;
    }
    try {
      const resp = await api.post<{ course_id: string; job_id: string }>("/api/teacher/courses", {
        standards_document_id: docId,
        learner_profile_note: profileNote(),
      });
      setJob({ id: resp.job_id, course_id: resp.course_id, status: "queued", stage: "plan", detail: "Queued", error: "", attempts: 0, updated_at: "" });
      pollJob(resp.job_id);
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Compile failed to start.");
    }
  };

  const review = async (courseId: string, verdict: "better" | "worse" | "tie") => {
    setError("");
    const notes = window.prompt(`Verdict: ${verdict} vs. baseline. Notes (optional):`) ?? "";
    try {
      await api.post(`/api/teacher/courses/${encodeURIComponent(courseId)}/review`, {
        verdict, baseline_name: "Math Relay Race", notes,
      });
      void refetchCourses();
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Review failed.");
    }
  };

  const enroll = async (courseId: string) => {
    setError("");
    const studentId = window.prompt("Student id to enroll (from the roster below):");
    if (!studentId) return;
    try {
      await api.post(`/api/teacher/courses/${encodeURIComponent(courseId)}/enrollments`, { student_id: studentId.trim() });
      void refetchOverview();
      void refetchCourses();
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Enrollment failed.");
    }
  };

  return (
    <div class="stack">
      <h1>Teacher dashboard</h1>
      <Show when={error()}><p class="error" role="alert">{error()}</p></Show>

      <section class="card">
        <h2>Kill signals</h2>
        <div class="kill-grid">
          <div>
            <h3>L1 · Compiler</h3>
            <p class="muted">Dies if a compiled course isn't better than <em>Math Relay Race</em> in one iteration. Record the verdict on each course below.</p>
          </div>
          <div>
            <h3>L2 · Tutor</h3>
            <p class="muted">Dies if students don't return unprompted in week three.</p>
            <Show when={overview()}>
              {(o) => (
                <p class="stat">
                  {o().kill_signals.l2_week3_returned_students} / {o().kill_signals.l2_week3_eligible_students}
                  <span class="muted"> students ≥3 weeks in came back unprompted in week 3</span>
                </p>
              )}
            </Show>
          </div>
        </div>
        <Show when={overview()}>
          {(o) => (
            <p class="muted flags">
              {o().feature_flags.map((f) => `${f.key}: ${f.enabled ? "ON" : "off"}`).join(" · ")}
              &nbsp;(Layers 3–5 stay off until L1 and L2 survive.)
            </p>
          )}
        </Show>
      </section>

      <section class="card">
        <h2>Compile a course <span class="muted">(Layer 1)</span></h2>
        <label>Standards document
          <select onChange={(e) => setSelectedDoc(e.currentTarget.value)}>
            <For each={docs()?.documents ?? []}>
              {(d) => <option value={d.id}>{d.title} ({d.standards_count} standards)</option>}
            </For>
          </select>
        </label>
        <label>Learner profile note
          <textarea
            rows={3}
            maxlength={4000}
            placeholder="Who is this course for? e.g. 8th graders prepping for the SHSAT in October; strong arithmetic, shaky algebra; two students get anxious under time pressure."
            value={profileNote()}
            onInput={(e) => setProfileNote(e.currentTarget.value)}
          />
        </label>
        <button class="btn btn-primary" onClick={() => void compile()} disabled={job()?.status === "queued" || job()?.status === "running"}>
          Compile course
        </button>
        <Show when={job()}>
          {(j) => (
            <div class="job-status" classList={{ failed: j().status === "failed" }}>
              <strong>{j().status}</strong> · stage {j().stage} · {j().detail}
              <Show when={j().error}><div class="error">{j().error}</div></Show>
            </div>
          )}
        </Show>
      </section>

      <section class="card">
        <h2>Courses</h2>
        <table>
          <thead><tr><th>Title</th><th>Status</th><th>Enrolled</th><th>Verdict</th><th /></tr></thead>
          <tbody>
            <For each={courses()?.courses ?? []}>
              {(c) => (
                <tr>
                  <td><A href={`/courses/${c.id}`}>{c.title}</A></td>
                  <td><span class={`badge badge-${c.status}`}>{c.status}</span></td>
                  <td>{c.enrolled_count}</td>
                  <td>{c.last_verdict || "—"}</td>
                  <td class="row-actions">
                    <Show when={c.status === "ready"}>
                      <button class="btn" onClick={() => void enroll(c.id)}>Enroll</button>
                      <button class="btn" onClick={() => void review(c.id, "better")}>Better ✓</button>
                      <button class="btn btn-danger" onClick={() => void review(c.id, "worse")}>Worse ✗</button>
                    </Show>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h2>Students <Show when={overview()}>{(o) => <span class="muted">({o().students.length}/{o().enrollment_cap})</span>}</Show></h2>
        <div class="invite-row">
          <button class="btn" onClick={() => void createInvite()}>New invite code</button>
          <Show when={inviteCode()}>
            <code class="invite-code">{inviteCode()}</code>
            <span class="muted">Share once — it's shown only now.</span>
          </Show>
        </div>
        <table>
          <thead><tr><th>Name</th><th>Avg mastery</th><th>Open misconceptions</th><th>Week-3 unprompted</th><th>Id</th></tr></thead>
          <tbody>
            <For each={overview()?.students ?? []}>
              {(s) => (
                <tr>
                  <td><A href={`/students/${s.id}`}>{s.display_name}</A></td>
                  <td>{(s.avg_mastery * 100).toFixed(0)}%</td>
                  <td>{s.open_misconceptions}</td>
                  <td>{s.week3_unprompted_sessions}</td>
                  <td><code class="muted">{s.id}</code></td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </section>
    </div>
  );
};
