import { createResource, For, Show, type Component } from "solid-js";
import { A, useParams } from "@solidjs/router";
import { api } from "../api";
import type { CourseOutline } from "../types";
import { currentUser } from "../state";

export const CoursePage: Component = () => {
  const params = useParams();
  const [outline] = createResource(
    () => params.id,
    (id) => api.get<CourseOutline>(`/api/courses/${encodeURIComponent(id)}`),
  );

  return (
    <Show when={outline()} fallback={<p class="muted pad">Loading…</p>}>
      {(o) => (
        <div class="stack">
          <h1>{o().course.title}</h1>
          <Show when={currentUser()?.role === "teacher"}>
            <p class="muted">
              Status: {o().course.status}
              {o().course.learner_profile_note ? ` · Profile: ${o().course.learner_profile_note}` : ""}
              {" · "}
              <a href={`/api/courses/${o().course.id}/provenance`} target="_blank" rel="noreferrer">provenance chain</a>
            </p>
          </Show>
          <For each={o().units}>
            {(unit, ui) => (
              <section class="card">
                <h2>Unit {ui() + 1} · {unit.title}</h2>
                <p class="muted">{unit.overview}</p>
                <ol class="lesson-list">
                  <For each={unit.lessons}>
                    {(lesson) => (
                      <li>
                        <A href={`/lessons/${lesson.id}`}>{lesson.title}</A>
                        <span class="muted"> — {lesson.objective} ({lesson.standard_code})</span>
                        <Show when={lesson.mastery !== undefined}>
                          <div class="meter meter-inline">
                            <div class="meter-fill" style={{ width: `${(lesson.mastery ?? 0) * 100}%` }} />
                          </div>
                        </Show>
                      </li>
                    )}
                  </For>
                </ol>
              </section>
            )}
          </For>
        </div>
      )}
    </Show>
  );
};
