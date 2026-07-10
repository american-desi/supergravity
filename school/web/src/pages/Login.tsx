import { createSignal, Show, type Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { api, ApiFailure } from "../api";
import { setCurrentUser } from "../state";
import type { User } from "../types";

export const LoginPage: Component = () => {
  const navigate = useNavigate();
  const [mode, setMode] = createSignal<"login" | "register">("login");
  const [identifier, setIdentifier] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [inviteCode, setInviteCode] = createSignal("");
  const [displayName, setDisplayName] = createSignal("");
  const [error, setError] = createSignal("");
  const [busy, setBusy] = createSignal(false);

  const submit = async (e: Event) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      let user: User;
      if (mode() === "login") {
        const resp = await api.post<{ user: User }>("/api/auth/login", {
          identifier: identifier(),
          password: password(),
        });
        user = resp.user;
      } else {
        const resp = await api.post<{ user: User }>("/api/auth/register", {
          invite_code: inviteCode().trim(),
          display_name: displayName().trim(),
          password: password(),
        });
        user = resp.user;
      }
      setCurrentUser(user);
      navigate("/");
    } catch (err) {
      setError(err instanceof ApiFailure ? err.message : "Something went wrong; try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div class="auth-card card">
      <h1>Supergravity School</h1>
      <p class="muted">One teacher. A complete AI-native school.</p>
      <div class="tabs">
        <button classList={{ active: mode() === "login" }} onClick={() => setMode("login")}>Sign in</button>
        <button classList={{ active: mode() === "register" }} onClick={() => setMode("register")}>Join with invite</button>
      </div>
      <form onSubmit={(e) => void submit(e)}>
        <Show
          when={mode() === "login"}
          fallback={
            <>
              <label>Invite code
                <input value={inviteCode()} onInput={(e) => setInviteCode(e.currentTarget.value)} required autocomplete="off" />
              </label>
              <label>Your name
                <input value={displayName()} onInput={(e) => setDisplayName(e.currentTarget.value)} required minlength={2} maxlength={60} />
              </label>
            </>
          }
        >
          <label>Email or name
            <input value={identifier()} onInput={(e) => setIdentifier(e.currentTarget.value)} required autocomplete="username" />
          </label>
        </Show>
        <label>Password
          <input type="password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} required minlength={8} autocomplete={mode() === "login" ? "current-password" : "new-password"} />
        </label>
        <Show when={error()}><p class="error" role="alert">{error()}</p></Show>
        <button class="btn btn-primary" type="submit" disabled={busy()}>
          {busy() ? "Working…" : mode() === "login" ? "Sign in" : "Create account"}
        </button>
      </form>
    </div>
  );
};
