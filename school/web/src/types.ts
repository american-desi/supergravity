// API payload types, mirrored from the Go handlers.

export interface User {
  id: string;
  role: "teacher" | "student";
  display_name: string;
  email?: string;
}

export interface ApiError {
  code: string;
  message: string;
}

export interface StudentRow {
  id: string;
  display_name: string;
  created_at: string;
  avg_mastery: number;
  open_misconceptions: number;
  week3_unprompted_sessions: number;
}

export interface FeatureFlag {
  key: string;
  enabled: boolean;
  note: string;
}

export interface TeacherOverview {
  students: StudentRow[];
  feature_flags: FeatureFlag[];
  enrollment_cap: number;
  kill_signals: {
    l2_week3_eligible_students: number;
    l2_week3_returned_students: number;
  };
}

export interface StandardsDocument {
  id: string;
  title: string;
  source: string;
  jurisdiction: string;
  imported_at: string;
  standards_count: number;
}

export interface Course {
  id: string;
  title: string;
  status: string;
  model: string;
  created_at: string;
  enrolled_count: number;
  last_verdict: string;
}

export interface CompileJob {
  id: string;
  course_id: string;
  status: "queued" | "running" | "failed" | "done";
  stage: string;
  detail: string;
  error: string;
  attempts: number;
  updated_at: string;
}

export interface LessonSummary {
  id: string;
  title: string;
  objective: string;
  status: string;
  standard_code: string;
  mastery?: number;
}

export interface Unit {
  id: string;
  title: string;
  overview: string;
  lessons: LessonSummary[];
}

export interface CourseOutline {
  course: { id: string; title: string; status: string; learner_profile_note?: string };
  units: Unit[];
}

export interface Choice {
  label: string;
  text: string;
}

export interface CheckItem {
  id: string;
  stem_md: string;
  choices: Choice[];
  correct_label?: string;
}

export interface LessonDetail {
  lesson: {
    id: string;
    title: string;
    objective: string;
    narrative_md: string;
    status: string;
    standard_code: string;
  };
  items: CheckItem[];
  activities: { id: string; title: string }[];
}

export interface AttemptResult {
  correct: boolean;
  explanation_md?: string;
  feedback_md?: string;
  recurrence?: number;
}

export interface TutorSession {
  id: string;
  course_id: string;
  lesson_id: string | null;
  lesson_title?: string;
  opened_by: string;
  started_at: string;
  message_count: number;
}

export interface TutorMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

export interface MasteryRow {
  standard_id: string;
  standard_code: string;
  title: string;
  score: number;
  level: string;
}

export interface MisconceptionEvent {
  id: string;
  code: string;
  title: string;
  source: string;
  evidence: string;
  observed_at: string;
  depth: number;
}

export interface StudentSnapshot {
  student_id: string;
  display_name: string;
  profile: string;
  mastery: MasteryRow[] | null;
  open_misconceptions: MisconceptionEvent[] | null;
  recently_repaired: string[] | null;
}
