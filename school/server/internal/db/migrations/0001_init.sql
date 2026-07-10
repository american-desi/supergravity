-- Supergravity School: data spine.
-- One longitudinal student model shared by all five layers.
-- Layers 1-2 are live in v1; layers 3-5 exist as schema + feature flags only.

PRAGMA foreign_keys = ON;

-- ---------------------------------------------------------------------------
-- Identity & access
-- ---------------------------------------------------------------------------

CREATE TABLE users (
    id            TEXT PRIMARY KEY,
    role          TEXT NOT NULL CHECK (role IN ('teacher', 'student')),
    email         TEXT UNIQUE,                -- teacher only; students may not have one
    display_name  TEXT NOT NULL,
    password_hash TEXT NOT NULL,              -- argon2id encoded string
    active        INTEGER NOT NULL DEFAULT 1,
    created_at    TEXT NOT NULL
);

CREATE TABLE auth_sessions (
    token_hash   TEXT PRIMARY KEY,            -- sha256(token); raw token never stored
    user_id      TEXT NOT NULL REFERENCES users(id),
    created_at   TEXT NOT NULL,
    expires_at   TEXT NOT NULL,
    last_seen_at TEXT NOT NULL
);
CREATE INDEX idx_auth_sessions_user ON auth_sessions(user_id);

CREATE TABLE invites (
    id         TEXT PRIMARY KEY,
    code_hash  TEXT NOT NULL UNIQUE,          -- sha256(code)
    created_by TEXT NOT NULL REFERENCES users(id),
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    used_by    TEXT REFERENCES users(id),
    used_at    TEXT
);

-- ---------------------------------------------------------------------------
-- Standards & misconception catalog (compiler inputs)
-- ---------------------------------------------------------------------------

CREATE TABLE standards_documents (
    id           TEXT PRIMARY KEY,
    title        TEXT NOT NULL,
    source       TEXT NOT NULL,               -- e.g. "NYS Next Generation / SHSAT"
    jurisdiction TEXT NOT NULL,
    raw_sha256   TEXT NOT NULL UNIQUE,        -- hash of the imported JSON; provenance root
    imported_by  TEXT REFERENCES users(id),
    imported_at  TEXT NOT NULL
);

CREATE TABLE standards (
    id          TEXT PRIMARY KEY,
    document_id TEXT NOT NULL REFERENCES standards_documents(id),
    code        TEXT NOT NULL,                -- e.g. "AI-A.REI.4"
    title       TEXT NOT NULL,
    description TEXT NOT NULL,
    domain      TEXT NOT NULL,
    parent_id   TEXT REFERENCES standards(id),
    position    INTEGER NOT NULL,
    UNIQUE (document_id, code)
);
CREATE INDEX idx_standards_document ON standards(document_id);

CREATE TABLE misconceptions (
    id            TEXT PRIMARY KEY,
    code          TEXT NOT NULL UNIQUE,       -- e.g. "MC-NEG-DIST"
    title         TEXT NOT NULL,
    description   TEXT NOT NULL,
    parent_id     TEXT REFERENCES misconceptions(id), -- catalog-level ancestry
    standard_hint TEXT                         -- standard code this most often surfaces under
);

-- ---------------------------------------------------------------------------
-- Layer 1: compiled courses
-- ---------------------------------------------------------------------------

CREATE TABLE courses (
    id                    TEXT PRIMARY KEY,
    title                 TEXT NOT NULL,
    standards_document_id TEXT NOT NULL REFERENCES standards_documents(id),
    learner_profile_note  TEXT NOT NULL DEFAULT '',
    status                TEXT NOT NULL CHECK (status IN ('compiling', 'ready', 'failed', 'killed', 'archived')),
    model                 TEXT NOT NULL DEFAULT '',
    created_by            TEXT NOT NULL REFERENCES users(id),
    created_at            TEXT NOT NULL
);

CREATE TABLE units (
    id        TEXT PRIMARY KEY,
    course_id TEXT NOT NULL REFERENCES courses(id),
    position  INTEGER NOT NULL,
    title     TEXT NOT NULL,
    overview  TEXT NOT NULL
);
CREATE INDEX idx_units_course ON units(course_id);

CREATE TABLE lessons (
    id           TEXT PRIMARY KEY,
    unit_id      TEXT NOT NULL REFERENCES units(id),
    position     INTEGER NOT NULL,
    title        TEXT NOT NULL,
    objective    TEXT NOT NULL,
    standard_id  TEXT NOT NULL REFERENCES standards(id),
    narrative_md TEXT NOT NULL DEFAULT '',
    status       TEXT NOT NULL CHECK (status IN ('planned', 'content_ready', 'ready'))
);
CREATE INDEX idx_lessons_unit ON lessons(unit_id);

CREATE TABLE activities (
    id        TEXT PRIMARY KEY,
    lesson_id TEXT NOT NULL REFERENCES lessons(id),
    position  INTEGER NOT NULL,
    title     TEXT NOT NULL,
    html      TEXT NOT NULL,                  -- self-contained single-file interactive
    sha256    TEXT NOT NULL
);
CREATE INDEX idx_activities_lesson ON activities(lesson_id);

CREATE TABLE items (
    id             TEXT PRIMARY KEY,
    lesson_id      TEXT NOT NULL REFERENCES lessons(id),
    position       INTEGER NOT NULL,
    stem_md        TEXT NOT NULL,
    correct_label  TEXT NOT NULL,             -- 'A'..'D'
    correct_text   TEXT NOT NULL,
    explanation_md TEXT NOT NULL
);
CREATE INDEX idx_items_lesson ON items(lesson_id);

CREATE TABLE item_distractors (
    id               TEXT PRIMARY KEY,
    item_id          TEXT NOT NULL REFERENCES items(id),
    label            TEXT NOT NULL,           -- 'A'..'D', excludes correct label
    text             TEXT NOT NULL,
    misconception_id TEXT REFERENCES misconceptions(id),
    feedback_md      TEXT NOT NULL,
    UNIQUE (item_id, label)
);

-- Verifiable chain from standard to artifact. Every generated artifact gets a
-- row whose parent points at the artifact it was derived from, rooted at the
-- standards document hash. Recomputing the hashes verifies the chain.
CREATE TABLE provenance (
    id            TEXT PRIMARY KEY,
    artifact_kind TEXT NOT NULL CHECK (artifact_kind IN ('standards_document', 'course_plan', 'lesson', 'item', 'activity')),
    artifact_id   TEXT NOT NULL,
    parent_id     TEXT REFERENCES provenance(id),
    standard_id   TEXT REFERENCES standards(id),
    model         TEXT NOT NULL DEFAULT '',
    prompt_sha256 TEXT NOT NULL DEFAULT '',
    input_sha256  TEXT NOT NULL,
    output_sha256 TEXT NOT NULL,
    created_at    TEXT NOT NULL,
    UNIQUE (artifact_kind, artifact_id)
);

CREATE TABLE compile_jobs (
    id         TEXT PRIMARY KEY,
    course_id  TEXT NOT NULL REFERENCES courses(id),
    status     TEXT NOT NULL CHECK (status IN ('queued', 'running', 'failed', 'done')),
    stage      TEXT NOT NULL DEFAULT 'plan',  -- plan -> lessons -> activities -> done
    detail     TEXT NOT NULL DEFAULT '',      -- human-readable progress line
    error      TEXT NOT NULL DEFAULT '',
    attempts   INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
CREATE INDEX idx_compile_jobs_status ON compile_jobs(status);

-- Kill signal, layer 1: the compiled course must beat the named baseline in
-- one iteration or the layer dies. Reviews are the recorded verdicts.
CREATE TABLE course_reviews (
    id            TEXT PRIMARY KEY,
    course_id     TEXT NOT NULL REFERENCES courses(id),
    reviewer_id   TEXT NOT NULL REFERENCES users(id),
    baseline_name TEXT NOT NULL,
    verdict       TEXT NOT NULL CHECK (verdict IN ('better', 'worse', 'tie')),
    notes         TEXT NOT NULL DEFAULT '',
    reviewed_at   TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Longitudinal student model (the spine)
-- ---------------------------------------------------------------------------

CREATE TABLE learner_profiles (
    student_id  TEXT PRIMARY KEY REFERENCES users(id),
    grade_level TEXT NOT NULL DEFAULT '',
    target_exam TEXT NOT NULL DEFAULT '',
    goals       TEXT NOT NULL DEFAULT '',
    notes       TEXT NOT NULL DEFAULT '',
    updated_at  TEXT NOT NULL
);

CREATE TABLE enrollments (
    id          TEXT PRIMARY KEY,
    student_id  TEXT NOT NULL REFERENCES users(id),
    course_id   TEXT NOT NULL REFERENCES courses(id),
    enrolled_at TEXT NOT NULL,
    UNIQUE (student_id, course_id)
);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);

-- Misconception genealogy: each observed error links to the prior unresolved
-- observation of the same misconception (recurrence chain), so the tutor can
-- teach against the student's error ancestry, not just the last answer.
CREATE TABLE misconception_events (
    id               TEXT PRIMARY KEY,
    student_id       TEXT NOT NULL REFERENCES users(id),
    misconception_id TEXT NOT NULL REFERENCES misconceptions(id),
    parent_event_id  TEXT REFERENCES misconception_events(id),
    source           TEXT NOT NULL CHECK (source IN ('check', 'tutor', 'defense')),
    source_ref       TEXT NOT NULL DEFAULT '', -- item id, tutor session id, ...
    evidence         TEXT NOT NULL DEFAULT '',
    observed_at      TEXT NOT NULL,
    resolved_at      TEXT
);
CREATE INDEX idx_misconception_events_student ON misconception_events(student_id, misconception_id);

CREATE TABLE mastery_evidence (
    id          TEXT PRIMARY KEY,
    student_id  TEXT NOT NULL REFERENCES users(id),
    standard_id TEXT NOT NULL REFERENCES standards(id),
    kind        TEXT NOT NULL CHECK (kind IN ('check_correct', 'check_incorrect', 'tutor_observation', 'activity_complete', 'defense')),
    weight      REAL NOT NULL,                -- signed contribution to the mastery score
    detail      TEXT NOT NULL DEFAULT '',
    source_ref  TEXT NOT NULL DEFAULT '',
    observed_at TEXT NOT NULL
);
CREATE INDEX idx_mastery_evidence_student ON mastery_evidence(student_id, standard_id);

-- Denormalized rollup of mastery_evidence, updated in the same transaction as
-- each evidence insert. Score is a bounded [0,1] accumulator.
CREATE TABLE mastery_state (
    student_id  TEXT NOT NULL REFERENCES users(id),
    standard_id TEXT NOT NULL REFERENCES standards(id),
    score       REAL NOT NULL,
    level       TEXT NOT NULL CHECK (level IN ('unseen', 'emerging', 'developing', 'proficient', 'mastered')),
    updated_at  TEXT NOT NULL,
    PRIMARY KEY (student_id, standard_id)
);

CREATE TABLE identity_artifacts (
    id          TEXT PRIMARY KEY,
    student_id  TEXT NOT NULL REFERENCES users(id),
    kind        TEXT NOT NULL,                -- e.g. 'reflection', 'defense_reel', 'client_deliverable'
    title       TEXT NOT NULL,
    content_ref TEXT NOT NULL,
    created_at  TEXT NOT NULL
);

-- ---------------------------------------------------------------------------
-- Layer 2: tutor
-- ---------------------------------------------------------------------------

CREATE TABLE tutor_sessions (
    id            TEXT PRIMARY KEY,
    student_id    TEXT NOT NULL REFERENCES users(id),
    course_id     TEXT NOT NULL REFERENCES courses(id),
    lesson_id     TEXT REFERENCES lessons(id),
    opened_by     TEXT NOT NULL CHECK (opened_by IN ('student', 'teacher', 'system')),
    started_at    TEXT NOT NULL,
    ended_at      TEXT,
    message_count INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX idx_tutor_sessions_student ON tutor_sessions(student_id, started_at);

CREATE TABLE tutor_messages (
    id         TEXT PRIMARY KEY,
    session_id TEXT NOT NULL REFERENCES tutor_sessions(id),
    role       TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
    content    TEXT NOT NULL,
    created_at TEXT NOT NULL
);
CREATE INDEX idx_tutor_messages_session ON tutor_messages(session_id, created_at);

CREATE TABLE check_attempts (
    id               TEXT PRIMARY KEY,
    student_id       TEXT NOT NULL REFERENCES users(id),
    item_id          TEXT NOT NULL REFERENCES items(id),
    selected_label   TEXT NOT NULL,
    correct          INTEGER NOT NULL,
    misconception_id TEXT REFERENCES misconceptions(id),
    attempted_at     TEXT NOT NULL
);
CREATE INDEX idx_check_attempts_student ON check_attempts(student_id, attempted_at);

-- ---------------------------------------------------------------------------
-- Layers 3-5: schema only. No code writes these in v1; they exist so the
-- spine's shape is settled before the layers are earned (kill signals first).
-- ---------------------------------------------------------------------------

CREATE TABLE defenses ( -- Layer 3
    id             TEXT PRIMARY KEY,
    student_id     TEXT NOT NULL REFERENCES users(id),
    standard_id    TEXT NOT NULL REFERENCES standards(id),
    status         TEXT NOT NULL,
    transcript_ref TEXT NOT NULL DEFAULT '',
    reel_ref       TEXT NOT NULL DEFAULT '',
    verdict        TEXT NOT NULL DEFAULT '',
    conducted_at   TEXT
);

CREATE TABLE defense_segments ( -- Layer 3
    id         TEXT PRIMARY KEY,
    defense_id TEXT NOT NULL REFERENCES defenses(id),
    position   INTEGER NOT NULL,
    question   TEXT NOT NULL,
    response   TEXT NOT NULL,
    rating     TEXT NOT NULL DEFAULT ''
);

CREATE TABLE ledger_clients ( -- Layer 4
    id         TEXT PRIMARY KEY,
    name       TEXT NOT NULL,
    contact    TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
);

CREATE TABLE ledger_jobs ( -- Layer 4
    id          TEXT PRIMARY KEY,
    client_id   TEXT NOT NULL REFERENCES ledger_clients(id),
    student_id  TEXT REFERENCES users(id),
    title       TEXT NOT NULL,
    status      TEXT NOT NULL,
    value_cents INTEGER NOT NULL DEFAULT 0,
    created_at  TEXT NOT NULL
);

CREATE TABLE ledger_reviews ( -- Layer 4
    id          TEXT PRIMARY KEY,
    job_id      TEXT NOT NULL REFERENCES ledger_jobs(id),
    reviewer    TEXT NOT NULL,
    verdict     TEXT NOT NULL,
    notes       TEXT NOT NULL DEFAULT '',
    reviewed_at TEXT NOT NULL
);

CREATE TABLE attendance_records ( -- Layer 5
    id         TEXT PRIMARY KEY,
    student_id TEXT NOT NULL REFERENCES users(id),
    date       TEXT NOT NULL,
    status     TEXT NOT NULL,
    UNIQUE (student_id, date)
);

CREATE TABLE compliance_reports ( -- Layer 5
    id           TEXT PRIMARY KEY,
    student_id   TEXT NOT NULL REFERENCES users(id),
    kind         TEXT NOT NULL,               -- e.g. 'IHIP', 'quarterly', 'annual_assessment'
    period       TEXT NOT NULL,
    document_ref TEXT NOT NULL DEFAULT '',
    filed_at     TEXT
);

CREATE TABLE feature_flags (
    key     TEXT PRIMARY KEY,
    enabled INTEGER NOT NULL DEFAULT 0,
    note    TEXT NOT NULL DEFAULT ''
);

INSERT INTO feature_flags (key, enabled, note) VALUES
    ('layer3_defense',  0, 'Blocked until L1 and L2 kill signals both survive.'),
    ('layer4_ledger',   0, 'Blocked until L3 ships.'),
    ('layer5_wrapper',  0, 'Blocked until L3 ships.');
