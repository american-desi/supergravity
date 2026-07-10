// Session state: the signed-in user, resolved once at boot and updated by
// login/logout.

import { createResource, createSignal } from "solid-js";
import { api, ApiFailure } from "./api";
import type { User } from "./types";

const [override, setOverride] = createSignal<User | null | undefined>(undefined);

const [me] = createResource<User | null>(async () => {
  try {
    const resp = await api.get<{ user: User }>("/api/auth/me");
    return resp.user;
  } catch (e) {
    if (e instanceof ApiFailure && e.status === 401) return null;
    throw e;
  }
});

/** currentUser is null when signed out, undefined while loading. */
export function currentUser(): User | null | undefined {
  const o = override();
  if (o !== undefined) return o;
  return me.loading ? undefined : (me() ?? null);
}

export function setCurrentUser(user: User | null): void {
  setOverride(user);
}
