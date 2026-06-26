# Supergravity · Content Directory

You are probably a Claude Code session that has just been given a BATCH PROMPT
asking you to build out content for one or more subjects. Read this file first.
It will tell you exactly what to do, what NOT to do, and where the rails are.

## The mental model

- The atlas has **~100 subjects**, each with several **topics**.
- Every topic deserves: a hand-authored lesson, a curated resource list
  (videos, books, articles, courses, tools), key terms, cross-links, and
  optional interactive embeds.
- Content is stored **one file per subject**, under `content/<subject-id>.js`.
  A single subject file is owned by one session at a time to avoid conflicts.
- At build time, `./tools/build-content-bundle.sh` concatenates every subject
  file into `content/_bundle.js`, and every interactive registry into
  `content/_interactives-bundle.jsx`. The site loads only the bundles.
- At runtime `content/_bootstrap.js` (inlined at the end of the bundle) walks
  `window.CONTENT` and merges topics into the shape the renderer already
  expects: `window.LESSONS`, `window.TOPIC_VIDEOS`, `window.TOPIC_INTERACTIVE`.

## Your job, if you have a BATCH PROMPT

1. **Read three files before writing anything:**
   - `content/_schema.md` — the exact shape of a topic (now with `image`,
     `figure`, `animation`, and `aside` block types, plus `featured: false`
     on videos to put them behind the disclosure)
   - `content/_style.md` — the editorial voice
   - `content/_manifest.json` — the authoritative list of subjects and their
     batch, and the current `status` of each one
   Read `content/math.js` as the exemplar of the shape and the voice.
2. **Claim your batch** by editing `_manifest.json`: set `status: "in-progress"`
   and `owner: "<short session label>"` for your subjects. If any subject in
   your batch is already `in-progress` or `done`, **skip it** and flag it in
   your summary. Never overwrite another session's work.
3. **For every subject in your batch:**
   - If `content/<subject-id>.js` does not exist, create it from the schema.
   - For every topic the subject has in `data.js`, fill in the topic record.
   - Use `WebSearch` and `WebFetch` (load via `ToolSearch` if deferred) to
     find authoritative, high-quality resources. Prefer primary sources,
     classic texts, and the best-known teachers over SEO-farmed pages.
   - Verify every URL you cite with `WebFetch` before writing it. Dead links
     are worse than no link.
4. **Mark the subject `done`** in `_manifest.json` with a `doneAt` date and
   a one-line `note` about anything that still needs human review.
5. **Rebuild the bundle** at the end:
   `./tools/build-content-bundle.sh`
   The site reads `content/_bundle.js` (not your individual file). If you
   skip this step, your subjects won't show up.
6. **Summarize** at the end: what you did, what you skipped, what needs a
   human (e.g., a broken video, a subject that doesn't have enough modern
   material, a topic that probably belongs under a different subject).

## What NOT to do

- Do not edit `content/<subject-id>.js` files outside your assigned batch.
- Do not edit the renderer (`pages-v2.jsx`), the atlas (`data.js`), or the
  bootstrap (`_bootstrap.js`) unless your batch prompt explicitly says to.
  If you find a bug in the renderer, write a note into `content/_issues.md`
  and keep moving.
- Do not invent resources. Every book, video, article, tool, and course must
  be real, reachable, and verified. If you can't verify it, leave it out.
- Do not write lessons in Markdown. Lessons are **component trees** — arrays
  of `{type, text}` objects. The schema shows the exact types allowed.
- Do not gamify. No streaks, XP, badges, levels. See the Rule of Supergravity.
- Do not add emojis. The voice is literary; emojis break it.

## Running sessions in parallel

Multiple sessions can run at the same time **as long as each owns different
subjects**. The manifest is the source of truth for who owns what. Read it
before you start. Update it as you finish.

## Inspecting content health

Visit **Content health** (⌘K → "Content health" or set `nav.page = 'health'`).
It renders a live readout of `window.CONTENT_HEALTH` and
`window.CONTENT_ISSUES` — all schema violations the bootstrap detected,
grouped by subject. Use it to find the subjects that still need attention.

In DevTools:
```js
window.CONTENT_HEALTH      // { subjects, topics, errors, warnings, elapsedMs }
window.CONTENT_ISSUES      // [{ severity, subject, topic, field, message }]
window.validateTopic(...)  // lint a single topic against the soft minimums
```

## The build pipeline

| Command | What it does |
|---|---|
| `./tools/build-content-bundle.sh` | Rebuilds `content/_bundle.js` (~3.7MB, one tag) from all `content/*.js` subject files + `_bootstrap.js`, and `content/_interactives-bundle.jsx` (~360KB) from all batch interactive files. Run after any content change. |

Development mode (live-editing a specific subject without rebuilding) is
supported: in `index.html`, comment out the `<script src="content/_bundle.js">`
line and add the specific `<script src="content/<subject-id>.js">` tags you
want to iterate on, followed by `<script src="content/_bootstrap.js">`. Put
the bundle line back when you're done, and rebuild.

## Robustness guarantees

The bootstrap wraps every topic merge in try/catch. A malformed subject file
will skip that topic and log an error; **it will no longer break the whole
site.** Every issue lands on the Content health page.

The renderer (`LessonPageV2` and `LessonStubV2`) now falls back to
`lesson.subject` if the nav-supplied `subjectId` is missing or stale, and
to a minimal placeholder subject if neither resolves. A single bad link
will not take out the whole lesson tree.

A React error boundary wraps the main page. If a lesson still manages to
crash (e.g., a body with an unknown block type), the user sees a clean
"A page misfired" card with a route back to the atlas, and the runtime
error shows up on the Content health page.

## One-paragraph escape hatch

If your batch prompt is unclear, if the manifest says your subjects are
already claimed, or if you encounter anything structurally wrong, **stop
and report back** — do not try to recover by making up structure. A short,
honest report is always better than a confused commit.
