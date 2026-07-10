import { createResource, createSignal, For, Show, type Component } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { api, ApiFailure } from "../api";
import type { Course, TutorSession } from "../types";
import { currentUser } from "../state";

export const StudentHome: Component = () => {
  const navigate = useNavigate();
  const [courses] = createResource(() => api.get<{ courses: Course[] }>("/api/courses"));
  const [sessions] = createResource(() =>
    api.get<{ sessions: TutorSession[] }>("/api/student/tutor/sessions"),
  );
  const [error, setError] = createSignal("");

  const openFreeSession = async () => {
    setError("");
    const courseId = courses()?.courses[0]?.id;
    if (!courseId) {
      setError("You aren't enrolled in a course yet — ask your teacher.");
      return;
    }
    try {
      const resp = await api.post<{ session: { id: string } }>("/api/student/tutor/sessions", {
        course_id: courseId,
        lesson_id: "",
      });
      navigate(`/tutor/${resp.session.id}`);
    } catch (e) {
      setError(e instanceof ApiFailure ? e.message : "Couldn't open a session.");
    }
  };

  return (
    <div class="stack">
      <h1>Hey {currentUser()?.display_name} 👋</h1>
      <Show when={error()}><p class="error" role="alert">{error()}</p></Show>

      <section class="card">
        <h2>Your course</h2>
        <Show
          when={(courses()?.courses ?? []).length > 0}
          fallback={<p class="muted">No course yet — your teacher will enroll you once one is compiled.</p>}
        >
          <ul class="lesson-list">
            <For each={courses()?.courses ?? []}>
              {(c) => <li><A href={`/courses/${c.id}`}>{c.title}</A></li>}
            </For>
          </ul>
        </Show>
      </section>

      <section class="card">
        <h2>Tutor</h2>
        <button class="btn btn-primary" onClick={() => void openFreeSession()}>Start a session</button>
        <Show when={(sessions()?.sessions ?? []).length > 0}>
          <h3 class="muted">Recent sessions</h3>
          <ul class="lesson-list">
            <For each={(sessions()?.sessions ?? []).slice(0, 8)}>
              {(s) => (
                <li>
                  <A href={`/tutor/${s.id}`}>
                    {new Date(s.started_at).toLocaleString()}
                    {s.lesson_title ? ` · ${s.lesson_title}` : " · open topic"}
                  </A>
                  <span class="muted"> ({s.message_count} messages)</span>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </section>
    </div>
  );
};
