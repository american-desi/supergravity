import { Show, type Component, type JSX } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { api } from "../api";
import { currentUser, setCurrentUser } from "../state";

export const Shell: Component<{ children: JSX.Element }> = (props) => {
  const navigate = useNavigate();
  const signOut = async () => {
    try {
      await api.post("/api/auth/logout");
    } finally {
      setCurrentUser(null);
      navigate("/login");
    }
  };
  return (
    <div class="shell">
      <header class="topbar">
        <A href="/" class="brand">Supergravity <span>School</span></A>
        <Show when={currentUser()}>
          {(user) => (
            <div class="topbar-user">
              <span class="muted">{user().display_name}</span>
              <button class="btn btn-ghost" onClick={() => void signOut()}>Sign out</button>
            </div>
          )}
        </Show>
      </header>
      <main class="content">{props.children}</main>
    </div>
  );
};
