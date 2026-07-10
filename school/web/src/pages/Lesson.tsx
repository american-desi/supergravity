import { createResource, createSignal, For, Show, type Component } from "solid-js";
import { useParams, useSearchParams, A } from "@solidjs/router";
import { api, ApiFailure } from "../api";
import { Markdown } from "../md";
import type { AttemptResult, CheckItem, LessonDetail } from "../types";
import { currentUser } from "../state";

const CheckQuestion: Component<{ item: CheckItem; onAnswered: () => void }> = (props) => {
  const [result, setResult] = createSignal<AttemptResult | null>(null);
  const [selected, setSelected] = createSignal("");
  const [error, setError] = createSignal("");
  const [busy, setBusy] = createSignal(false);

  const submit = async (label: string) => {
    if (result() || busy()) return;
    setSelected(label);
    setBusy(true);
    setError("");
    try {
      const r = await api.post<AttemptResult>(
        `/api/student/items/${encodeURIComponent(props.item.id)}/attempts`,
        { label },
      );
      setResult(r);
      props.onAnswered();
    } catch (e) {
      setSelected("");
      setError(e instanceof ApiFailure ? e.message : "Couldn't submit that answer.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="check card-inset">
      <Markdown text={props.item.stem_md} />
      <div class="choices">
        <For each={props.item.choices}>
          {(c) => (
            <button
              class="choice"
              classList={{
                picked: selected() === c.label,
                right: result() !== null && selected() === c.label && result()!.correct,
                wrong: result() !== null && selected() === c.label && !result()!.correct,
              }}
              disabled={result() !== null || busy()}
              onClick={() => void submit(c.label)}
            >
              <span class="choice-label">{c.label}</span> <Markdown text={c.text} class="inline" />
            </button>
          )}
        </For>
      </div>
      <Show when={error()}><p class="error" role="alert">{error()}</p></Show>
      <Show when={result()}>
        {(r) => (
          <div class="feedback" classList={{ good: r().correct }}>
            <Show when={r().correct} fallback={
              <>
                <strong>Not yet.</strong>
                <Show when={r().feedback_md}><Markdown text={r().feedback_md ?? ""} /></Show>
                <Show when={(r().recurrence ?? 0) > 1}>
                  <p class="muted">This error pattern has come up {r().recurrence} times — worth a tutor session on it.</p>
                </Show>
              </>
            }>
              <strong>Correct.</strong>
              <Show when={r().explanation_md}><Markdown text={r().explanation_md ?? ""} /></Show>
            </Show>
          </div>
        )}
      </Show>
    </div>
  );
};

export const LessonPage: Component = () => {
  const params = useParams();
  const [search] = useSearchParams();
  const [detail] = createResource(
    () => params.id,
    (id) => api.get<LessonDetail>(`/api/lessons/${encodeURIComponent(id)}`),
  );
  const [activityDone, setActivityDone] = createSignal(false);
  const courseId = () => (typeof search.course === "string" ? search.course : "");

  const markActivityComplete = async (activityId: string) => {
    try {
      await api.post(`/api/student/activities/${encodeURIComponent(activityId)}/complete`);
      setActivityDone(true);
    } catch {
      // Non-fatal: completion credit is best-effort from the student's side.
      setActivityDone(true);
    }
  };

  return (
    <Show when={detail()} fallback={<p class="muted pad">Loading…</p>}>
      {(d) => (
        <div class="stack lesson">
          <h1>{d().lesson.title}</h1>
          <p class="muted">{d().lesson.objective} · {d().lesson.standard_code}</p>

          <section class="card">
            <Markdown text={d().lesson.narrative_md} />
          </section>

          <For each={d().activities}>
            {(a) => (
              <section class="card">
                <h2>{a.title}</h2>
                <iframe
                  class="activity-frame"
                  src={`/api/activities/${a.id}/html`}
                  sandbox="allow-scripts"
                  title={a.title}
                />
                <Show when={currentUser()?.role === "student"}>
                  <button class="btn" disabled={activityDone()} onClick={() => void markActivityComplete(a.id)}>
                    {activityDone() ? "Marked complete ✓" : "I finished this activity"}
                  </button>
                </Show>
              </section>
            )}
          </For>

          <Show when={d().items.length > 0}>
            <section class="card">
              <h2>Check yourself</h2>
              <For each={d().items}>
                {(item) => <CheckQuestion item={item} onAnswered={() => undefined} />}
              </For>
            </section>
          </Show>

          <Show when={currentUser()?.role === "student"}>
            <TutorLauncher lessonId={d().lesson.id} courseId={courseId()} />
          </Show>
        </div>
      )}
    </Show>
  );
};

const TutorLauncher: Component<{ lessonId: string; courseId: string }> = (props) => {
  const [error, setError] = createSignal("");
  const [sessionId, setSessionId] = createSignal("");

  const open = async () => {
    setError("");
    try {
      // If the lesson page was reached without a course id, resolve it from
      // the student's course list (v1: exactly one course).
      let courseId = props.courseId;
      if (!courseId) {
        const resp = await api.get<{ courses: { id: string }[] }>("/api/courses");
        courseId = resp.courses[0]?.id ?? "";
      }
      if (!courseId) {
        setError("You aren't enrolled in a course yet.");
        return;
      }
      const resp = await api.post<{ session: { id: string } }>("/api/student/tutor/sessions", {
        course_id: courseId,
        lesson_id: props.lessonId,
      });
      setSessionId(resp.session.id);
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Couldn't open a tutor session.");
    }
  };

  return (
    <section class="card tutor-launcher">
      <Show when={sessionId()} fallback={
        <>
          <button class="btn btn-primary" onClick={() => void open()}>Work on this with your tutor</button>
          <Show when={error()}><p class="error">{error()}</p></Show>
        </>
      }>
        <A class="btn btn-primary" href={`/tutor/${sessionId()}`}>Tutor session ready — open it</A>
      </Show>
    </section>
  );
};
