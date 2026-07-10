import { createResource, For, Show, type Component } from "solid-js";
import { useParams } from "@solidjs/router";
import { api } from "../api";
import type { StudentSnapshot, TutorSession } from "../types";

interface Detail {
  snapshot: StudentSnapshot;
  tutor_sessions: TutorSession[];
}

export const StudentDetailPage: Component = () => {
  const params = useParams();
  const [detail] = createResource(
    () => params.id,
    (id) => api.get<Detail>(`/api/teacher/students/${encodeURIComponent(id)}`),
  );

  return (
    <Show when={detail()} fallback={<p class="muted pad">Loading…</p>}>
      {(d) => (
        <div class="stack">
          <h1>{d().snapshot.display_name}</h1>
          <Show when={d().snapshot.profile}><p class="muted">{d().snapshot.profile}</p></Show>

          <section class="card">
            <h2>Mastery map</h2>
            <Show when={(d().snapshot.mastery ?? []).length > 0} fallback={<p class="muted">No evidence yet.</p>}>
              <table>
                <thead><tr><th>Standard</th><th>Level</th><th>Score</th></tr></thead>
                <tbody>
                  <For each={d().snapshot.mastery ?? []}>
                    {(m) => (
                      <tr>
                        <td>{m.standard_code} · {m.title}</td>
                        <td><span class={`badge badge-${m.level}`}>{m.level}</span></td>
                        <td>
                          <div class="meter"><div class="meter-fill" style={{ width: `${m.score * 100}%` }} /></div>
                        </td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </Show>
          </section>

          <section class="card">
            <h2>Misconception genealogy <span class="muted">(open)</span></h2>
            <Show when={(d().snapshot.open_misconceptions ?? []).length > 0} fallback={<p class="muted">Nothing open. 🎉</p>}>
              <ul class="event-list">
                <For each={d().snapshot.open_misconceptions ?? []}>
                  {(e) => (
                    <li>
                      <strong>{e.code}</strong> {e.title}
                      <span class="badge badge-depth">×{e.depth}</span>
                      <div class="muted">via {e.source} · {new Date(e.observed_at).toLocaleDateString()} · {e.evidence}</div>
                    </li>
                  )}
                </For>
              </ul>
            </Show>
            <Show when={(d().snapshot.recently_repaired ?? []).length > 0}>
              <p class="muted">Recently repaired: {(d().snapshot.recently_repaired ?? []).join(", ")}</p>
            </Show>
          </section>

          <section class="card">
            <h2>Tutor sessions</h2>
            <table>
              <thead><tr><th>Started</th><th>Opened by</th><th>Messages</th></tr></thead>
              <tbody>
                <For each={d().tutor_sessions}>
                  {(s) => (
                    <tr>
                      <td>{new Date(s.started_at).toLocaleString()}</td>
                      <td>{s.opened_by}</td>
                      <td>{s.message_count}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </section>
        </div>
      )}
    </Show>
  );
};
