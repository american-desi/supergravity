import { createResource, createSignal, For, Show, type Component } from "solid-js";
import { useParams } from "@solidjs/router";
import { api, streamTutorMessage } from "../api";
import { Markdown } from "../md";
import type { TutorMessage } from "../types";

interface LiveMessage {
  role: "user" | "assistant";
  content: string;
}

export const TutorPage: Component = () => {
  const params = useParams();
  const [history] = createResource(
    () => params.id,
    (id) => api.get<{ messages: TutorMessage[] }>(`/api/student/tutor/sessions/${encodeURIComponent(id)}/messages`),
  );

  const [live, setLive] = createSignal<LiveMessage[]>([]);
  const [draft, setDraft] = createSignal("");
  const [streaming, setStreaming] = createSignal(false);
  const [error, setError] = createSignal("");
  let scroller: HTMLDivElement | undefined;

  const scrollDown = () => {
    queueMicrotask(() => scroller?.scrollTo({ top: scroller.scrollHeight }));
  };

  const send = async (e: Event) => {
    e.preventDefault();
    const content = draft().trim();
    if (!content || streaming()) return;
    setError("");
    setDraft("");
    setLive((m) => [...m, { role: "user", content }, { role: "assistant", content: "" }]);
    setStreaming(true);
    scrollDown();
    await streamTutorMessage(params.id ?? "", content, (ev) => {
      if (ev.delta) {
        setLive((m) => {
          const copy = m.slice();
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant") {
            copy[copy.length - 1] = { role: "assistant", content: last.content + ev.delta };
          }
          return copy;
        });
        scrollDown();
      }
      if (ev.error) {
        setError(ev.error);
        // Drop the empty assistant bubble; keep the user's message visible.
        setLive((m) => (m[m.length - 1]?.content === "" ? m.slice(0, -1) : m));
      }
    });
    setStreaming(false);
    scrollDown();
  };

  const allMessages = (): LiveMessage[] => [
    ...(history()?.messages ?? []).map((m) => ({ role: m.role, content: m.content })),
    ...live(),
  ];

  return (
    <div class="tutor-page">
      <h1>Tutor</h1>
      <div class="chat" ref={scroller}>
        <Show when={allMessages().length === 0}>
          <p class="muted">Say what you're working on, or paste the step where you got stuck.</p>
        </Show>
        <For each={allMessages()}>
          {(m) => (
            <div class={`bubble ${m.role}`}>
              <Show when={m.content} fallback={<span class="typing">…</span>}>
                <Markdown text={m.content} />
              </Show>
            </div>
          )}
        </For>
      </div>
      <Show when={error()}><p class="error" role="alert">{error()}</p></Show>
      <form class="composer" onSubmit={(e) => void send(e)}>
        <textarea
          value={draft()}
          maxlength={2000}
          rows={2}
          placeholder="Type your thinking, not just the answer…"
          onInput={(e) => setDraft(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send(e);
            }
          }}
        />
        <button class="btn btn-primary" type="submit" disabled={streaming() || !draft().trim()}>
          {streaming() ? "Thinking…" : "Send"}
        </button>
      </form>
    </div>
  );
};
