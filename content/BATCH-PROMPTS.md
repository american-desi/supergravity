# Batch Prompts — copy one into a new Claude Code session

**How to use this file.** Open a fresh Claude Code session in this repo. Copy
the prompt for the batch you want built, paste it in, and send. The session
will read the docs, claim its batch in `_manifest.json`, research resources,
write its subject files, and mark the batch done.

You can run **several batches in parallel** as long as each has different
subjects (the manifest prevents collisions). A good default: run 2–3 at a time
so you can notice if any session goes off the rails without waiting for ten
to finish.

The prompts are intentionally similar. The *body* is the same reusable rubric;
only the **header line with the batch ID and subjects** changes.

---

## The reusable header (appears in every prompt)

```
You are building out Supergravity content for BATCH {{BATCH_ID}}.
Your subjects: {{SUBJECT_LIST}}.

BEFORE YOU WRITE ANY CONTENT:
1. Read `content/_README.md`, `content/_schema.md`, and `content/_style.md`
   in full. Read `content/math.js` as the exemplar of the shape and the
   voice. Do not start writing until you have read these four files.
2. Read `content/_manifest.json`. Claim your subjects by setting
   `status: "in-progress"` and `owner: "BATCH {{BATCH_ID}}"` on each
   subject you are about to build. If any of your subjects is already
   in-progress or done, skip it and flag it at the end.
3. Look at `data.js` to find the exact topic ids, names, groupings, and
   levels for each subject you are building. Use those ids verbatim.

FOR EACH SUBJECT IN YOUR BATCH:
- Create `content/<subject-id>.js` following the schema exactly.
- Write a lesson for EVERY topic the subject has in data.js.
- Each lesson meets the style minimums:
    · 300–600 words of prose (lead + 3–5 sections)
    · 3+ videos (named creators — 3Blue1Brown, Numberphile, Crash Course,
       Veritasium, Kurzgesagt, BBC, PBS, named lecturers from real universities;
       NOT SEO content farms)
    · 3+ books (one classic, one standard reference, one modern best-of)
    · 2+ articles (Wikipedia, Britannica, SEP, MacTutor, academic sources)
    · 1+ free course if one exists at quality bar
    · 5+ keyTerms
    · 3+ seeAlso cross-links to other topic ids (check data.js for valid ids)
    · A one-sentence `chapterActivity` tying it to the NYC chapter (invent
       plausibly — a library meetup, a shop class, a park walk — sessions can
       be finalized by the chapter steward later)
- VERIFY every URL with WebFetch before writing it. Dead links fail the batch.
- Use WebSearch to find resources you don't already know. Prefer:
    · Official publishers / the creator's own site
    · Free and durable URLs (archive.org, MIT OCW, Gutenberg, Stanford SEP,
      BBC, national library, creator's canonical upload)
    · Named-authority sources over listicles
- Follow the voice in `_style.md` religiously. Literary, concrete, historical,
  no filler. Open with an image or moment, never a definition.

WHEN EACH SUBJECT IS DONE:
- Set `status: "done"` and `doneAt: "<today's date>"` in `_manifest.json`.
- If anything should be reviewed by a human (a topic that probably belongs
  elsewhere, a resource you're unsure about, a URL that redirected), set the
  subject's `status: "review"` and add a short `note` field explaining why.

WHEN THE WHOLE BATCH IS DONE:
- Add one <script> tag for each new subject file to `index.html`, right after
  `content/math.js` and before `content/_bootstrap.js`. Keep them alphabetical.
- Write a short summary to the user: subjects completed, subjects flagged for
  review, total topics written, dead links encountered, anything weird.

HARD RULES:
- Do not touch subjects outside your claimed batch.
- Do not edit `pages-v2.jsx`, `data.js` subjects, or any file in the root
  outside `index.html`. If you think one of those needs a change, write it
  to `content/_issues.md` as a note and keep moving.
- Do not invent resources. Every book, video, article, course, or tool must
  be real, reachable, and verified.
- Do not write in Markdown in the lesson body. Use the component-tree types
  listed in `_schema.md`.
- Do not use emojis. Do not add streak/XP/badge language anywhere.

START HERE: Read the four files in step 1. Then claim your batch. Then build.
```

---

## Batch 01 — Mathematics

```
You are building out Supergravity content for BATCH B01-mathematics.
Your subjects: math.

[paste the reusable header above]

Notes specific to B01:
- math is the most demanding subject. content/math.js already exists with
  `arith` and `calc1` as exemplars. Do not change those. Fill in the other
  ten topics (algebra, geom, trig, precalc, calc2, diffeq, stats, linalg,
  discrete, numtheory) to the same standard.
- For interactive widgets, see window.INTERACTIVES keys in interactives-v2.jsx
  and only reference keys that exist.
- Preferred video authors for math: 3Blue1Brown, Numberphile, Mathologer,
  Eddie Woo, Khan Academy, MIT OCW instructors, Vi Hart.
- Preferred books: Spivak, Courant, Strang (linear algebra), Polya (How to
  Solve It), Hardy & Wright (number theory), Ross (probability), Rosen
  (discrete).
```

---

## Batch 02 — Hard Sciences

```
You are building out Supergravity content for BATCH B02-hard-sciences.
Your subjects: physics, chemistry, astronomy, geology.

[paste the reusable header above]

Notes specific to B02:
- Preferred video authors: Feynman's Messenger Lectures, MinutePhysics,
  PBS Space Time, Veritasium, Kurzgesagt, Crash Course Astronomy/Chemistry,
  SmarterEveryDay for applied bits. Avoid pop-sci channels with shaky
  accuracy.
- Primary sources to link where relevant: the Feynman Lectures (online free),
  Darwin's voyage letters (Darwin Online), the 1919 Eddington eclipse report,
  the arXiv pre-prints for modern physics topics.
- For chemistry, the PubChem compound pages make good references.
- For astronomy, NASA's Astronomy Picture of the Day (APOD) archive is a
  treasure and should be referenced where apt.
- Geology: USGS is the authoritative source.
```

---

## Batch 03 — Life Sciences

```
You are building out Supergravity content for BATCH B03-life-sciences.
Your subjects: biology, medicine, psychology.

[paste the reusable header above]

Notes specific to B03:
- Preferred video authors: Crash Course Biology/Psychology, Amoeba Sisters,
  MedCram (for medicine), iBiology (graduate-level), SciShow Psych.
- Primary sources: Darwin's Origin of Species (free, Gutenberg), Mendel's
  original paper (English translations exist online), NEJM Videos in Clinical
  Medicine for clinical topics.
- For psychology, lean on replicable classics — William James, Kahneman,
  Tversky, Seligman's later replicable work. Be cautious with replication-
  crisis topics (flag anything uncertain in the `notes` field).
- Medicine: cite Merck Manual (Professional), NEJM, NIH MedlinePlus. Never
  give medical advice in prose; keep the tone educational.
```

---

## Batch 04 — Humanities

```
You are building out Supergravity content for BATCH B04-humanities.
Your subjects: history, literature, philosophy, religion, architecture, art, music.

[paste the reusable header above]

Notes specific to B04:
- This is the largest batch and requires the most voice. The literary tone
  matters more here than anywhere. Read `_style.md` twice.
- Preferred video: Crash Course (Green brothers), The Art Assignment, Nerdwriter1,
  Every Frame a Painting (film-language), BBC documentaries (where legally
  viewable), lectures from Yale Open Courses, Harvard's JUSTICE with Sandel.
- Primary sources: Gutenberg.org, archive.org texts, the Perseus Digital
  Library (classics), Stanford Encyclopedia of Philosophy (philosophy, always),
  JSTOR Open Access where available.
- For religion, follow the pluralism rule in the Rule of Supergravity.
  Every tradition gets the same care and the same rubric. No proselytizing,
  no dismissal. Preferred sources: the tradition's own canonical texts in
  respected translations, academic scholars who work IN the tradition, plus
  a comparative scholar where possible.
- For music, include both the music-theory angle AND the listener's angle
  (great recordings, canonical performances).
```

---

## Batch 05 — Social World

```
You are building out Supergravity content for BATCH B05-social-world.
Your subjects: sociology, economics, politics, law, linguistics, anthropology, geography.

[paste the reusable header above]

Notes specific to B05:
- These subjects attract political framing; keep the voice non-partisan.
  Show the live debates; don't take a side in the lesson body. It is fine
  to name schools of thought.
- Preferred video: Crash Course (the six courses here each have one), Marginal
  Revolution University (econ), the LSE lectures where available, Noah Smith /
  Tyler Cowen for contemporary econ context (use as supplements, not core).
- For law, Oyez (Supreme Court audio + case summaries) is the best free
  resource for US topics. Cornell's LII for statutes. Avoid citing law firm
  blogs — cite the primary source.
- Linguistics: prefer Lingthusiasm (Gretchen McCulloch, Lauren Gawne) and
  The Ling Space for accessible video; SIL and LSA for reference material.
- Geography: overlap with cartography and with geology — coordinate with
  B02's geology file to avoid duplicated content.
```

---

## Batch 06 — Tech & Code

```
You are building out Supergravity content for BATCH B06-tech-and-code.
Your subjects: cs, ai_craft, security, gamedev, robotics, datascience.

[paste the reusable header above]

Notes specific to B06:
- The fastest-moving category. Cite specific years, note when a resource is
  time-sensitive (e.g., "current as of 2026").
- Preferred video authors: Computerphile, Fireship (short + current), MIT
  OCW 6.001/6.006 lectures, Stanford CS lectures where posted, Two Minute
  Papers (AI research), 3Blue1Brown's neural networks series (essential),
  GDC Vault (gamedev).
- For AI: cite Anthropic's own research pages, OpenAI blog posts for
  historical context, papers via arXiv (always link arXiv rather than a
  blog summary of the paper).
- For security: OWASP Top 10, LiveOverflow, PortSwigger Web Security Academy
  (free). Never link exploit code directly.
- Robotics: MIT 6.832 underactuated robotics, Boston Dynamics' engineering
  blog posts.
- For every modern tool/framework, pin the version year in `why`.
```

---

## Batch 07 — Trades I

```
You are building out Supergravity content for BATCH B07-trades-I.
Your subjects: carpentry, plumbing, electrical, welding, masonry, hvac, roofing.

[paste the reusable header above]

Notes specific to B07:
- Trades are underserved online. Hand-picked channels matter more here
  than for academic subjects. Preferred: This Old House, Essential Craftsman
  (Scott Wadsworth), Matt Risinger (The Build Show), Stumpy Nubs, Rex
  Krueger (for heritage tools).
- Books: the *Graphic Guide to Frame Construction* (Rob Thallon) for
  carpentry, *Code Check* for electrical/plumbing/building code basics,
  Peter Korn's *Why We Make Things and Why It Matters* for the philosophy.
- Safety matters. Every trade topic should mention the applicable safety
  concern (OSHA for trades, NFPA for electrical, NEC codes) — not as a
  disclaimer, but in the prose where it belongs.
- For each trade, include one "first project" or "first tool" in a callout
  — the one entry point an absolute beginner should start with.
```

---

## Batch 08 — Trades II

```
You are building out Supergravity content for BATCH B08-trades-II.
Your subjects: automotive, machining, locksmithing, glazier, painting_trade, flooring, diesel, smallengine.

[paste the reusable header above]

Notes specific to B08:
- Preferred channels: ChrisFix (automotive), Project Farm (tool reviews
  worth citing), AvE (machining, rougher tone but technical), LockPickingLawyer
  (locksmithing, for the curious), FarmCraft101.
- Books: John Muir's *How to Keep Your Volkswagen Alive* (classic humane
  auto manual), *Machinery's Handbook* (the bible of the machine shop),
  Matt Weber's *How to Fix Everything For Dummies* as a gentle on-ramp.
- Be concrete about tools. Each topic's callout should name the tool that
  defines the trade (the Stihl chainsaw for small engine, the angle grinder
  for many, etc.).
```

---

## Batch 09 — Kitchen Arts

```
You are building out Supergravity content for BATCH B09-kitchen-arts.
Your subjects: cooking, baking, butchery, fermentation, cheesemaking, coffee, wine, cocktails, bbq, pastry.

[paste the reusable header above]

Notes specific to B09:
- Preferred video: Kenji López-Alt, Adam Ragusea, Chef John (Food Wishes),
  Brad Leone (It's Alive — fermentation), James Hoffmann (coffee, unmatched),
  Chef's Table (Netflix, culture-only), Babish Culinary Universe for
  technique fundamentals.
- Books: Harold McGee's *On Food and Cooking* is cited in every kitchen topic
  unless you can argue a better call. Samin Nosrat's *Salt Fat Acid Heat*
  for the fundamentals. Michael Ruhlman's *Ratio* for baking/pastry.
- Sandor Katz's *The Art of Fermentation* for fermentation.
- For wine and coffee, cite the industry-authoritative bodies: Court of Master
  Sommeliers, Specialty Coffee Association.
- Recipes are not lessons. A kitchen-arts lesson teaches a principle (why
  Maillard, why lamination, why the bloom) — recipes belong in `resources`.
```

---

## Batch 10 — Handcrafts

```
You are building out Supergravity content for BATCH B10-handcrafts.
Your subjects: sewing, knitting, woodworking, leatherwork, pottery, glassblowing, blacksmithing, jewelry, calligraphy, bookbinding, paperfolding.

[paste the reusable header above]

Notes specific to B10:
- Preferred video: Paul Sellers (woodworking, gold standard), Rex Krueger,
  Matt Estlea, Ian's Shoe Making, Tasting History for cultural context,
  Oswaldo's Blacksmith, Hsin-Chen Lin (calligraphy), DAS Bookbinding, Jo
  Nakashima (origami). Where a named master exists and is still teaching,
  cite them.
- Books: Peter Korn's *Why We Make Things*, James Krenov's writings
  (woodworking), Marjolein Dallinga on felt, Daniel Updike on book typography.
- Every handcraft topic must have a "first project" callout — the specific
  small thing a beginner should make in week one.
- These subjects reward "local teacher" recommendations. Don't invent
  specific NYC teachers, but `chapterActivity` can describe the *kind* of
  local thing ("A pottery studio in Gowanus offers two-hour first lessons
  once a month").
```

---

## Batch 11 — Life Skills I

```
You are building out Supergravity content for BATCH B11-life-skills-I.
Your subjects: finance, nutrition, firstaid, parenting, negotiation, publicspeaking, timemgmt, cleaning.

[paste the reusable header above]

Notes specific to B11:
- Tone warmer here than elsewhere. These are the things school left out and
  that adults feel embarrassed to not know. Address the reader like a
  trusted older friend.
- Preferred video: The Plain Bagel (finance), Ben Felix (investing),
  Harvard Business Review Guides (negotiation, speaking), Red Cross First
  Aid videos (firstaid — only the official ones).
- Books: *I Will Teach You to Be Rich* (Sethi) for finance 101; *A Random
  Walk Down Wall Street* (Malkiel) for the deeper version; *Never Split the
  Difference* (Voss) for negotiation; *Talk Like TED* (Gallo) for speaking;
  *Getting Things Done* (Allen) for timemgmt; *How to Clean Practically
  Anything* (Consumer Reports) for cleaning.
- Firstaid requires safety caveats in every lesson. "This is not a
  substitute for training." Recommend Red Cross courses explicitly.
- Parenting is politically charged. Stay practical — sleep, feeding,
  discipline styles — and name schools of thought rather than taking sides.
```

---

## Batch 12 — Life Skills II / Outdoor

```
You are building out Supergravity content for BATCH B12-life-skills-II-outdoor.
Your subjects: carrepair, gardening, composting, beekeeping, sailing, survival, knots, mapreading.

[paste the reusable header above]

Notes specific to B12:
- Preferred video: ChrisFix (carrepair), Self Sufficient Me (gardening),
  David the Good (gardening), Kamon Ma (composting), The Apiarist (beekeeping),
  Rough Science / Ray Mears (survival), Animated Knots (knots — canonical),
  Mr. Map Man (orienteering).
- Books: *Rodale's All-New Encyclopedia of Organic Gardening*, *Beekeeping
  for Dummies* (surprisingly authoritative), *The Ashley Book of Knots*
  (the reference for all knots), John Muir's Volkswagen book again for
  auto, *Bowditch's American Practical Navigator* for sailing at the serious
  end.
- Outdoor subjects must include a seasonal note in `chapterActivity` —
  what season of the NYC year this comes alive in.
- Mapreading should cite free map sources (USGS topo, OpenStreetMap).
```

---

## Batch 13 — Arts & Performing

```
You are building out Supergravity content for BATCH B13-arts-performing.
Your subjects: photography, film, theater, dance, magic, stand_up, djing.

[paste the reusable header above]

Notes specific to B13:
- Preferred video: Jay P. Morgan (photography), Every Frame a Painting and
  Lessons from the Screenplay (film), RSA Shorts / RSC (Shakespeare and
  theater), New York City Ballet workshops (dance), Penn & Teller's Fool Us
  and specific magicians' teaching channels (magic), Comedy Central
  documentaries (stand_up), DJ School videos from long-running DJs (djing).
- Books: Ansel Adams's trilogy (The Camera / The Negative / The Print)
  still canon; *Story* by Robert McKee for film/writing; *Impro* by Keith
  Johnstone for theater; *Mastering Magic* texts from Darwin Ortiz; *The
  Comic Toolbox* by John Vorhaus for stand_up.
- These subjects reward "watch this performance" recommendations as
  primary sources — e.g., a specific stand-up special, a named ballet,
  a canonical film. Treat performances as primary sources.
```

---

## Batch 14 — Movement

```
You are building out Supergravity content for BATCH B14-movement.
Your subjects: yoga, martial, running, climbing, cycling.

[paste the reusable header above]

Notes specific to B14:
- Preferred video: Yoga with Adriene (yoga), Ramsey Dewey (martial arts,
  fact-checker of martial arts mythology), Global Cycling Network,
  Magnus Midtbø and EpicTV Climbing (climbing), StrengthRunning, Kipchoge
  NN Running Team documentaries for running inspiration.
- Books: *Born to Run* (McDougall) for running culture; *Daniels' Running
  Formula* for serious training; *The Rock Climber's Training Manual*
  (Anderson); Tim Cahill on adventure; B.K.S. Iyengar's *Light on Yoga*.
- Movement topics should name a "first month" practice in a callout — what
  to do for four weeks to honestly begin.
- Safety caveats for martial arts and climbing specifically.
```

---

## Batch 15 — Nature & Games

```
You are building out Supergravity content for BATCH B15-nature-and-games.
Your subjects: birding, foraging, fishing, hunting, astronomy_amateur, meteorology, chess, etiquette.

[paste the reusable header above]

Notes specific to B15:
- Preferred video: Lesley the Bird Nerd (birding), Learn Your Land (foraging
  — Adam Haritan is serious and careful), The Hunting Public (hunting,
  ethical), Fishing with Rod (fishing), Cosmic Pursuits / Astro Backyard
  (amateur astronomy), MetMatt (meteorology), Agadmator's Chess Channel
  and GothamChess (chess).
- Books: Sibley Guide to Birds, Sam Thayer's *The Forager's Harvest*
  (authoritative — foraging CAN kill you, so source quality is non-
  negotiable here), *Meat Eater Fish and Game Cookbook* (Rinella),
  *Turn Left at Orion* (amateur astronomy), *My 60 Memorable Games*
  (Fischer) for chess.
- Foraging and hunting need explicit safety/ethics notes in the prose —
  misidentifying a mushroom is lethal, and hunting requires law and ethics.
- Etiquette: Emily Post Institute is the authority; lean on them without
  becoming dated. Cite *The Elements of Etiquette*. Tone here can be wry.
- Chess: include interactive key `chess_board` if one exists; otherwise
  omit and link to lichess.org study boards.
```

---

## A few notes on running sessions in parallel

1. **Open a fresh Claude Code session per batch.** Prior conversation
   pollutes scope. Each batch session should see only its batch prompt and
   the shared docs.
2. **Run 2–3 in parallel at first.** Watch the first ones through to done,
   then scale up. Sessions can take 30–90 minutes depending on how much
   WebFetch verification is needed.
3. **Expect drift in voice.** Skim the first few topics each session writes
   and redirect if the voice slips. The `_style.md` is the lever.
4. **When a batch reports `review` items**, resolve them yourself. Those are
   the 10% of the content that needs a human call.
5. **Keep the manifest as the source of truth.** If a session crashes or a
   batch gets half-done, the manifest's `in-progress` / `done` statuses
   will tell the next session exactly where to pick up.

## What "done" looks like for the whole build

- `content/_manifest.json`: every subject's status is `done` or `review`.
- `index.html` loads every subject file.
- `window.CONTENT` has ~96 keys; `window.LESSONS` has ~350+ entries.
- A click-through audit: every lesson renders, no dead videos, no dead
  book links, no empty `resources.videos` arrays.
- Total elapsed: 15 sessions × 60 min ≈ 15 hours of Claude time,
  parallelized to a few real-time days.
