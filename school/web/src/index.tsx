/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { Show, Suspense, type Component, type JSX } from "solid-js";
import { Navigate } from "@solidjs/router";

import "./styles.css";
import { currentUser } from "./state";
import { Shell } from "./components/Shell";
import { LoginPage } from "./pages/Login";
import { TeacherDashboard } from "./pages/TeacherDashboard";
import { StudentDetailPage } from "./pages/StudentDetail";
import { CoursePage } from "./pages/Course";
import { LessonPage } from "./pages/Lesson";
import { TutorPage } from "./pages/Tutor";
import { StudentHome } from "./pages/StudentHome";

const Guard: Component<{ role?: "teacher" | "student"; children: JSX.Element }> = (props) => (
  <Show when={currentUser() !== undefined} fallback={<p class="muted pad">Loading…</p>}>
    <Show when={currentUser() !== null} fallback={<Navigate href="/login" />}>
      <Show
        when={!props.role || currentUser()?.role === props.role}
        fallback={<Navigate href="/" />}
      >
        {props.children}
      </Show>
    </Show>
  </Show>
);

const Home: Component = () => (
  <Guard>
    <Show when={currentUser()?.role === "teacher"} fallback={<StudentHome />}>
      <TeacherDashboard />
    </Show>
  </Guard>
);

const App: Component = () => (
  <Router root={(props) => <Shell>{<Suspense>{props.children}</Suspense>}</Shell>}>
    <Route path="/login" component={LoginPage} />
    <Route path="/" component={Home} />
    <Route path="/students/:id" component={() => <Guard role="teacher"><StudentDetailPage /></Guard>} />
    <Route path="/courses/:id" component={() => <Guard><CoursePage /></Guard>} />
    <Route path="/lessons/:id" component={() => <Guard><LessonPage /></Guard>} />
    <Route path="/tutor/:id" component={() => <Guard role="student"><TutorPage /></Guard>} />
    <Route path="*" component={() => <p class="muted pad">Page not found.</p>} />
  </Router>
);

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");
render(() => <App />, root);
