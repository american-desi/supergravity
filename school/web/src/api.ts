// Typed fetch wrapper. All requests are same-origin with cookies; errors are
// normalized to ApiFailure carrying the server's stable error code.

import type { ApiError } from "./types";

export class ApiFailure extends Error {
  readonly code: string;
  readonly status: number;
  constructor(status: number, err: ApiError) {
    super(err.message);
    this.code = err.code;
    this.status = status;
  }
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  let resp: Response;
  try {
    resp = await fetch(path, {
      method,
      credentials: "same-origin",
      headers: body !== undefined ? { "Content-Type": "application/json" } : undefined,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiFailure(0, { code: "network", message: "Can't reach the server. Check your connection." });
  }
  if (!resp.ok) {
    let err: ApiError = { code: "unknown", message: `Request failed (${resp.status}).` };
    try {
      const parsed = (await resp.json()) as { error?: ApiError };
      if (parsed.error) err = parsed.error;
    } catch {
      // Non-JSON error body; keep the generic message.
    }
    throw new ApiFailure(resp.status, err);
  }
  return (await resp.json()) as T;
}

export const api = {
  get: <T>(path: string) => request<T>("GET", path),
  post: <T>(path: string, body?: unknown) => request<T>("POST", path, body),
  put: <T>(path: string, body?: unknown) => request<T>("PUT", path, body),
};

export interface StreamEvent {
  delta?: string;
  done?: boolean;
  error?: string;
  code?: string;
}

// streamTutorMessage POSTs a message and yields ndjson events as they arrive.
export async function streamTutorMessage(
  sessionId: string,
  content: string,
  onEvent: (ev: StreamEvent) => void,
): Promise<void> {
  let resp: Response;
  try {
    resp = await fetch(`/api/student/tutor/sessions/${encodeURIComponent(sessionId)}/messages`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
  } catch {
    onEvent({ error: "Can't reach the server. Check your connection.", code: "network" });
    return;
  }
  if (!resp.ok || !resp.body) {
    let message = `The tutor is unavailable (${resp.status}).`;
    try {
      const parsed = (await resp.json()) as { error?: ApiError };
      if (parsed.error) message = parsed.error.message;
    } catch {
      // keep generic message
    }
    onEvent({ error: message, code: "http" });
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx: number;
    while ((idx = buffer.indexOf("\n")) >= 0) {
      const line = buffer.slice(0, idx).trim();
      buffer = buffer.slice(idx + 1);
      if (!line) continue;
      try {
        onEvent(JSON.parse(line) as StreamEvent);
      } catch {
        // A malformed line is a server bug; surface it rather than hang.
        onEvent({ error: "Received a malformed response from the tutor.", code: "parse" });
        return;
      }
    }
  }
}
