# Supergravity School

A platform that lets **one excellent teacher operate a complete AI-native school**, built as five progressive layers over one data spine — a longitudinal student model recording misconception genealogy, mastery evidence, and identity artifacts across years.

**v1 ships Layers 1 + 2 only**, scoped to 20 students in one course (SHSAT math / NYS Algebra I). Layers 3–5 exist as schema and disabled feature flags — no code — and stay off until the kill signals below are survived.

| Layer | What it is | v1 status |
|---|---|---|
| 1 · Compiler | Standards doc + learner profile → complete course: lesson arcs, misconception-mapped distractors, formative checks, self-contained interactive HTML activities, with a verifiable provenance chain from standard to artifact | **Live** |
| 2 · Tutor | Persistent Socratic tutor that teaches from the longitudinal model — adapting to each student's error *ancestry*, not their last answer | **Live** |
| 3 · Defense | Adaptive oral mastery interrogation + admissions-ready highlight reel | Schema + flag only |
| 4 · Ledger | Certified skills applied to real micro-client work, verified economic value | Schema + flag only |
| 5 · Wrapper | NY compliance layer: reporting, attendance, portfolio docs | Schema + flag only |

**Kill signals (enforced in-product):**
- **L1 dies** if the compiled course isn't better than *Math Relay Race* in one iteration. The teacher records a verdict per course; a `worse` verdict marks the course `killed`.
- **L2 dies** if students don't return unprompted in week three. The dashboard computes, per student, tutor sessions they opened themselves during days 14–21 after joining, and a cohort rollup.

## Assumptions (stated, not guessed)

- **Stack kept as specified** — Solid.js + Vite, Go `net/http`, SQLite (WAL), Caddy, single VPS — rather than moving to Supabase/Vercel. Reasoning: the backend is a long-lived process (streaming tutor replies, a background compile worker); Vercel's serverless model can't host it, and Supabase Postgres adds a network dependency with zero benefit at 20 students. SQLite WAL on one box is the *production-correct* choice at this scale (expected load: ~20 students; designed for 10x = 200; first bottleneck is LLM API latency/cost, not the database). The frontend build (`web/dist`) is static and can be pointed at any host later, including Vercel, if the API gets its own domain.
- Single teacher, bootstrapped from env on first boot. Students join via one-time invite codes and log in with display name + password (no student emails collected).
- The LLM boundary is the Anthropic Messages API (`claude-sonnet-5` by default, configurable).
- "Verifiable chain" = a `provenance` table: every artifact row carries `sha256(prompt)`, `sha256(input)`, `sha256(output)`, the model id, and a parent pointer, rooted at the standards document hash. `GET /api/courses/{id}/provenance` returns the whole chain for independent re-hashing.

## Layout

```
school/
  server/            Go API (net/http, stdlib router), SQLite WAL, embedded migrations + seed
    internal/spine       longitudinal model: misconception genealogy, mastery rollup, snapshots
    internal/compiler    L1 pipeline: plan → lessons+items → activities, provenance, resumable job queue
    internal/tutor       L2: Socratic streaming + post-turn assessor writing back to the spine
    internal/{auth,api,llm,httpx,db,config,ids,seeddata,testutil}
  web/               Solid.js + Vite + TypeScript (strict), no UI framework deps beyond Solid
  deploy/            Caddyfile, systemd unit, one-command deploy.sh
  Makefile           test / build / dev-api / dev-web / deploy
```

## Run it

**Prereqs:** Go ≥ 1.24, Node ≥ 20.

```sh
# 1. Everything tested with one command:
cd school && make test

# 2. Local dev (two terminals):
export ANTHROPIC_API_KEY=sk-ant-...
make dev-api     # Go API on :8080, teacher = teacher@example.com / change-me-now-1
make dev-web     # Vite on :5173, proxies /api

# 3. Deploy to a VPS (Caddy installed, DNS pointed):
#    - create /srv/school/school.env from .env.example on the box
make deploy HOST=user@your-vps DOMAIN=school.example.com
```

First boot seeds the curated **SHSAT / NYS Algebra I standards document** (16 standards) and a **28-entry misconception catalog** automatically. Teachers can import additional standards documents as JSON via the API (`POST /api/teacher/standards-documents`, same format as `server/internal/seeddata/shsat_math.json`).

**First-month workflow (your SHSAT cohort):**
1. Sign in → dashboard → *Compile a course* with a learner-profile note describing the cohort.
2. Review the compiled course side-by-side with your current material → record the L1 verdict (`better` / `worse`). Worse kills it — fix prompts/catalog before recompiling.
3. Generate invite codes, students self-register, enroll them in the course.
4. Students work lessons, checks, and activities; every wrong answer with a mapped distractor feeds the misconception genealogy the tutor teaches from.
5. Watch the week-3 unprompted-return metric for the L2 kill signal.

## Security & reliability posture

- Argon2id passwords, opaque session tokens stored hashed, `HttpOnly`/`SameSite=Strict`/`Secure` cookies.
- CSRF: strict same-`Origin` enforcement on all state-changing requests + SameSite cookies.
- Parameterized SQL everywhere; strict JSON decoding (unknown fields rejected, 1 MiB body cap).
- Answer keys never leave the server for students; grading is server-side.
- Generated activity HTML is validated at compile time (self-contained, no network references, size-capped) **and** served under `default-src 'none'` CSP inside a `sandbox="allow-scripts"` iframe.
- Rate limits: login/registration 5/min/IP, tutor messages 10/min/student + daily per-student cap, one compile job in flight.
- LLM calls: bounded timeouts, 4 attempts with exponential backoff + jitter, JSON-contract validation with one corrective retry; compile jobs are resumable per lesson and survive process restarts.
- Structured JSON logging (`slog`) on every request and boundary; `GET /api/health` liveness.

## Testing

`make test` runs `go vet` plus unit + integration suites (all deterministic, no network, fake LLM):
- **spine**: genealogy linking/depth, resolution semantics, mastery rollup clamping and levels, snapshot rendering.
- **compiler**: full pipeline against scripted LLM output; unknown-misconception rejection then resume without re-planning; max-attempt failure; activity HTML validator (CDN scripts, `fetch`, non-documents rejected).
- **auth**: hashing, invite lifecycle (single-use, expiry, duplicate names), enrollment cap.
- **api (integration over real HTTP)**: teacher→invite→register→compile→enroll→lesson (no answer-key leak)→wrong answer records misconception→streamed tutor chat→L1 kill verdict; cross-origin POST rejection; unauthenticated access rejection.

Deliberately not covered: the real Anthropic client (exercised only in production; contract pinned by the fake), and frontend component tests (v1 UI is thin over a fully-tested API — first frontend hire: Playwright smoke over the student journey).

## Production Readiness Note (harden next)

- **Backups**: WAL-mode SQLite needs an off-box backup — add a cron with `sqlite3 .backup` or Litestream replication to object storage before real student data accumulates.
- **Prompt/pedagogy iteration loop**: L1 quality lives in `compiler/prompts.go` and the misconception catalog; add a golden-course eval harness (compile → rubric-score with a judge model) so prompt changes are measured, not vibes.
- **Math rendering**: `$...$` is styled, not typeset. Vendor KaTeX (self-hosted) into the app shell and the activity template when lesson content demands real notation.
- **Session hygiene**: add a periodic sweep of expired `auth_sessions` rows and teacher-visible device/session revocation.
- **Observability**: logs are structured but local; ship them (and uptime checks on `/api/health`) to a hosted collector before the first paying cohort.
- **COPPA/FERPA posture**: student PII is minimal by design (name only), but before scaling beyond your own tutoring channel, get a real privacy review, parental consent flow, and data-retention policy.
