# Content Issues — for human / next-session review

Append new issues with date + batch that found them.

## 2026-04-22 — B01-mathematics

- **Chemistry `acidbase` interactive kind missing.** `content/chemistry.js`
  sets `interactive: { kind: 'ph' }` on the Acids & Bases topic, but no entry
  named `'ph'` exists in `window.INTERACTIVES`. Spotted while verifying the
  math interactives in the browser preview — rendering the lesson produces
  repeated `React.createElement: type is invalid … undefined` warnings from
  `InteractiveEmbed`. Belongs to B02-hard-sciences to fix (either add a `ph`
  widget or point the topic at an existing kind).

## 2026-04-23 — B08-trades-II (scaffolding pass)

- **New top-level `scaffolding` field on every B08 topic.** Each topic now
  carries a structured `scaffolding` object designed to let a reader learn
  the topic in depth without leaving the page. Shape:
  ```js
  scaffolding: {
    mentalModel: { analogy: string, whereItBreaks: string },
    workedExample: {
      prompt: string,
      scenario: string,
      steps: [{ step: string, why: string }],
      result: string,
    },
    exercises: [{
      level: 'beginner' | 'intermediate' | 'advanced',
      prompt: string,
      hint: string,
      solution: string,
    }],
    troubleshooting: [{
      symptom: string,
      likelyCauses: string[],
      quickTest: string,
      fix: string,
    }],
    progression: [{
      level: 'novice' | 'apprentice' | 'journeyman',
      canDo: string,
      shouldNext: string,
    }],
    glossary: [{ term: string, def: string }],
  }
  ```
  The current bootstrap does NOT pass `scaffolding` through to
  `window.LESSONS`. To surface it in the renderer, either:
  (a) add `scaffolding: t.scaffolding || null` to the mapping in
  `_bootstrap.js`, or
  (b) have the renderer read from `window.CONTENT[subject].topics[id].scaffolding`
  directly.
  In the meantime, each topic\'s body has also been extended with five
  new h2 sections ("How to think about it" / "Work through one" /
  "Try these" / "When it goes wrong" / "What to try next") so the
  scaffolding is already visible in today\'s prose renderer.

- **New `glossary` convention.** Topics now carry a small glossary of
  5–8 defined terms alongside the existing `keyTerms` array. The
  glossary items are inside `scaffolding.glossary` for now; if/when the
  renderer adopts click-to-define behavior on `keyTerms`, the glossary
  definitions can be pulled straight from this field.

## 2026-04-23 — B08-trades-II (expansion pass)

- **Deep-resource pass across all B08 topics.** Every B08 topic has been
  rewritten with a significantly larger resource list: typically 6–10
  videos (mixing creator tutorials with pure-animation explainers from
  Lesics, Animagraffs, Animated Engines, Corning Museum of Glass),
  5–8 books (classic + trade standard + modern), 4–6 articles
  (Wikipedia, Britannica, industry bodies, museum pages), 2–3 courses,
  3–5 tools, plus primary sources where available (patents, archival
  photographs, 19th-century trade manuals on Internet Archive).

- **Forward-compatible fields added to video entries.** Each video may
  now carry an optional `kind` (one of `animation | tutorial | long-form | shop | lecture | documentary | museum`)
  and an optional `collapsed: true` flag. The bootstrap passes the full
  video objects through, so any renderer update can read these fields
  without a schema migration. Videos beyond the first three in each list
  are flagged `collapsed: true`, so a renderer can show three inline and
  hide the rest behind a "show all" toggle.

- **Hidden-menu request repeats.** Same UX request noted under B05
  applies here: the editor asked for videos "hidden but opens up. from
  a hidden menu." See B05 note for the suggested renderer path — the
  B08 data is ready for that UI when it ships.

## 2026-04-23 — B05-social-world (expansion pass)

- **Hidden-menu / progressive-disclosure UX request.** A user asked for the
  resource lists (videos especially, but also books/articles/etc.) to be
  collapsed by default under a hidden menu that opens on click, so a topic
  can carry dozens of resources without overwhelming the lesson view.
  This is a renderer concern, not content. Suggested path:
  1. In `pages-v2.jsx`, wrap each `resources.<kind>` section in a
     `<details>` / `<summary>` with a count badge (e.g. "Videos (12) ▸").
  2. Keep the first 2–3 entries visible by default, with the rest behind
     the toggle.
  3. Remember expanded state per-session in `localStorage` so a reader
     who opens the menu on one topic sees it open on the next.
  Content files are already being written to assume that bigger resource
  lists are desirable — B05 topics now carry 8–12 videos and 5–8 books
  each. Renderer update is the unblocker.

- **Schema does not support images.** The same request asked for images
  inside lessons. The current `body` block types are
  `lead | h2 | h3 | p | quote | callout | interactive`. An `image` type
  (with `src`, `alt`, `caption`, and optional `credit`) would be a
  natural addition. If/when added, the B05 topics would be excellent
  early adopters — e.g. the Blue Marble (NASA public domain) for
  `climate`, the Minard 1869 Napoleon map for `cartography`, the Lucy
  skeleton for `human_evo`.

- **More interactive kinds wanted.** The atlas currently leans on a small
  set of `window.INTERACTIVES`. Good B05 candidates:
  - `gini` — interactive Gini / Lorenz curve (for `class`, `micro`, `macro`).
  - `projection` — swap map projections side-by-side (for `cartography`).
  - `climate-zone` — latitude × precipitation → Köppen letter
    (for `climate` and `biomes`).
  - `consideration-tree` — walk through contract formation flowchart
    (for `contract_law`).
  No content currently references these; they would need adding to
  `interactives-v2.jsx` (or a new `interactives-b05.jsx`) before any
  B05 topic can wire them in.

## 2026-04-23 — B15-nature-and-games

- **`etiquette` flagged `review` due to batch-prompt book title.** The B15 batch
  prompt cites *The Elements of Etiquette* as the authoritative Emily Post
  book; that title does not appear in the Emily Post Institute\'s catalog as
  of 2026-04-23. Substituted *Emily Post\'s Etiquette, The Centennial Edition*
  (2022, Lizzie Post + Daniel Post Senning) and the 1922 original on
  Project Gutenberg (ebook 14314). Human should confirm the substitution
  or correct the batch prompt.

- **LessonStubV2 render crash observed during B15 preview verification.** While
  navigating to any lesson in the browser preview after all B09/B11/B12/B13/B14
  subject files had been added to `index.html` by the linter, React crashed in
  `LessonStubV2` (compiled `<anonymous>:290:21`) inside `LessonPageV2`, leaving
  the page blank. B15\'s own 8 subject files parse cleanly, bootstrap into
  `window.LESSONS` with 3+ videos, 3+ books, 2+ articles, 5+ keyTerms, 3+
  seeAlso, and non-empty `body` + `sections` on every one of the 16 topics —
  so the crash appears to originate in a subject file from a different
  in-progress batch. Not debugged per the "do not touch subjects outside your
  claimed batch" rule.

- **`chess_board` interactive widget does not exist.** B15 batch prompt
  suggested using it for `chess` topics if available; none of the existing
  `interactives-v2.jsx` / `interactives-b0*.jsx` registers that key. Per the
  batch prompt, omitted the `interactive` field and linked to lichess.org
  Studies instead. If a future chess-board widget is added, the `chess`
  topics can pick it up.

- **Known-good sites returning 403 to automated WebFetch:** `skyandtelescope.org`,
  `darksky.org`, `aavso.org`, `nssf.org/safety/firearms-safety-videos/`,
  `fws.gov/`, and `noaa.gov/jetstream` all refuse the WebFetch user agent but
  are real, active sites (multiple are state agencies). All were cross-
  referenced via web search before inclusion.
