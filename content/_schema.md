# Content Schema — the shape of a subject file

Every subject file exports to `window.CONTENT[<subject-id>]`. The bootstrap
merges all of them at runtime. Keep this shape **exactly**. The renderer
depends on it.

## File header

```javascript
// content/<subject-id>.js
// Owned by batch: <batch-name>
// Last updated: YYYY-MM-DD by <session-label>
window.CONTENT = window.CONTENT || {};
window.CONTENT['<subject-id>'] = {
  subjectId: '<subject-id>',
  version: 1,
  lastUpdated: 'YYYY-MM-DD',
  curator: '<session-label>',
  topics: {
    '<topic-id>': { /* topic record — see below */ },
    // ... every topic this subject has in data.js
  },
};
```

## Topic record — all fields

```javascript
{
  // ——— Meta (must match data.js) ———
  id: 'arith',
  name: 'Arithmetic & Number',
  level: 'Beginner',          // 'Beginner' | 'Intermediate' | 'Advanced'
  dek: 'One-sentence billing, 10–18 words, newspaper-dek voice.',
  readTime: '10 min',         // estimated reading time of the body

  // ——— Lesson body (a component tree; NOT markdown) ———
  sections: ['Counting', 'Operations', 'Place value', 'Why it works'],
  body: [
    // Allowed block types:
    { type: 'lead',    text: 'Opening paragraph. 1–3 sentences. Concrete image first.' },
    { type: 'h2',      text: 'Section heading' },
    { type: 'h3',      text: 'Sub-heading (use sparingly)' },
    { type: 'p',       text: 'A paragraph of prose.' },
    { type: 'quote',   text: 'Pulled quote.', cite: 'Attribution' },
    { type: 'callout', text: 'A short aside — a key idea worth breaking out.' },
    { type: 'interactive', key: 'numberline' }, // references INTERACTIVES registry
  ],

  // ——— Vocabulary (clickable terms in the UI) ———
  keyTerms: ['prime', 'modulo', 'place value', 'positional notation'],

  // ——— Curated resources ———
  // Each kind is optional, but aim for MINIMUMS from _style.md.
  // Every URL must be verified with WebFetch before inclusion.
  resources: {
    videos: [
      {
        id: 'cZw6KkwHXp4',          // YouTube ID if YouTube; else null
        source: 'youtube',           // 'youtube' | 'vimeo' | 'other'
        url: 'https://www.youtube.com/watch?v=cZw6KkwHXp4',
        title: 'The History of Counting',
        channel: 'Numberphile',
        duration: '9:14',
        featured: true,              // shown above the fold; default behavior
                                     // set to `false` to hide this video behind
                                     // the "Show N more videos" disclosure.
        why: 'Best ten-minute entry to the long story of number — concrete, paced, historical.',
      },
    ],
    books: [
      {
        title: 'Number: The Language of Science',
        author: 'Tobias Dantzig',
        year: 1930,
        url: '',                     // optional (archive.org, publisher, bookshop)
        why: 'The classic pop-history of number. Einstein called it the best book of its kind.',
      },
    ],
    articles: [
      {
        title: 'Numeral system',
        source: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/Numeral_system',
        why: 'Broad, well-cited reference.',
        year: null,                  // optional
      },
    ],
    courses: [
      {
        title: 'Arithmetic',
        provider: 'Khan Academy',
        url: 'https://www.khanacademy.org/math/arithmetic',
        free: true,
        why: 'Canonical K–6 progression; short clips, checks for understanding.',
      },
    ],
    podcasts: [
      {
        title: 'Negative Numbers',
        show: 'In Our Time (BBC)',
        url: 'https://www.bbc.co.uk/programmes/b00777s4',
        duration: '42:00',
        why: 'Three historians on the long scandal of negative numbers.',
      },
    ],
    tools: [
      {
        title: 'Wolfram|Alpha',
        url: 'https://www.wolframalpha.com',
        why: 'Compute anything, with steps.',
      },
    ],
    primarySources: [
      {
        title: 'Brahmagupta\'s Brahmasphutasiddhanta (excerpt)',
        url: 'https://...verified...',
        why: 'The earliest recorded statement of the rules for zero and negatives.',
      },
    ],
    images: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Os_d%27Ishango_IRSNB.JPG',
        alt: 'The Ishango bone',
        caption: 'One of the oldest mathematical artifacts — a notched baboon fibula twenty millennia old.',
        credit: 'Royal Belgian Institute of Natural Sciences · Wikimedia Commons · Public domain',
      },
    ],
    animations: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif',
        caption: 'Sieve of Eratosthenes — the oldest prime-finding algorithm, animated.',
      },
    ],
  },

  // ——— Interactive widget (optional) ———
  // Must map to a key in window.INTERACTIVES (see interactives-v2.jsx).
  // If no interactive fits, omit the field.
  interactive: { kind: 'numberline' },

  // ——— Cross-links ———
  seeAlso: ['algebra', 'numtheory'],  // other topic IDs in the atlas
  prereqs: [],                         // topics the reader should know first
  leadsTo: ['algebra'],                // natural next topics

  // ——— Chapter / in-person hook (optional) ———
  // How this topic lives in the NYC chapter. One sentence.
  chapterActivity: 'A monthly mental-arithmetic circle meets at the Jefferson Market Library.',

  // ——— Audit trail ———
  sources: [
    'https://en.wikipedia.org/wiki/Numeral_system',
    'https://www.britannica.com/topic/Hindu-Arabic-numerals',
  ],
  verifiedAt: '2026-04-22',
}
```

## Minimums (enforced by the style guide)

Every topic should have at least:
- A `lead` block and 3+ `p` blocks (so ~250+ words of prose)
- 3+ videos
- 3+ books
- 2+ articles
- 1+ free course (if the subject has any)
- 5+ key terms
- 3+ `seeAlso` cross-links

## Block types allowed in `body`

| type         | fields                              | when to use                                              |
| ------------ | ----------------------------------- | -------------------------------------------------------- |
| `lead`       | `text`                              | The opening paragraph. Must come first. One per lesson.  |
| `h2`         | `text`                              | Main section heading. 3–6 per lesson.                    |
| `h3`         | `text`                              | Sub-heading. Rare.                                       |
| `p`          | `text`                              | A paragraph. The body of the lesson.                     |
| `quote`      | `text`, `cite`                      | A quote from a primary source, with attribution.         |
| `callout`    | `text`                              | An aside worth breaking out. Use sparingly.              |
| `interactive`| `key`                               | Embeds an interactive widget by registry key.            |
| `image` / `figure` | `src`, `alt`, `caption`, `credit` | Inline image with caption. `src` must resolve to a verified image URL (Wikimedia Commons preferred). `alt` required. |
| `gallery`    | `images: [{src, alt, caption}]`, `caption` | A row of images — click to lightbox.               |
| `animation`  | `src` (gif/webm/svg) OR `kind` (INTERACTIVES key), `caption` | An animation or an interactive widget embedded as an illustration. |
| `aside`      | `text`, `label`                     | A small sidebar block — smaller than a callout, for tangents. |
| `video_inline` | `id`, `title`, `channel`, `why`   | An inline video card, for when a clip anchors the prose. |

## The Shelf — hidden-by-default media drawer

The renderer exposes a floating "Shelf" trigger next to every lesson. Clicking
it opens a side drawer with tabbed sections for every curated resource on the
topic — videos, images, animations, articles, books, courses, primary sources,
tools. Populate those tabs by filling in the corresponding `resources.*`
arrays on the topic record. The drawer opens with `M` (or by clicking the
trigger) and closes with `Escape`.

Videos also render inline on the page. The first three — or any video marked
`featured: true` — show by default; the rest sit behind a "Show N more videos"
disclosure. Set `featured: false` on videos that should stay collapsed.

## Back-compat

The bootstrap remaps the new shape to the legacy keys the renderer expects:
- `resources.videos` → `lesson.videos` and `window.TOPIC_VIDEOS[id]`
- `resources.books`  → `lesson.furtherReading`
- `interactive.kind` → `window.TOPIC_INTERACTIVE[id]`
Do not set these legacy keys yourself. Write only the canonical shape above.
