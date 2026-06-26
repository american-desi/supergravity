// tools/enrich-topic.cjs
// Fetches Wikipedia + Wikimedia Commons for one topic, then uses OpenAI GPT-4o-mini
// to synthesize and truth-evaluate the content.
//
// Usage (from batch-enrich.cjs):
//   const { enrichTopic } = require('./enrich-topic.cjs');
//   const result = await enrichTopic({ id, name, subject, subjectName }, apiKey);
'use strict';

const { wikiReliability, aggregateTruth, confidenceLabel, consensusLabel } = require('./source-weights.cjs');

const WIKI_UA = 'Supergravity-Atlas/1.0 (educational; jteducates@gmail.com)';
const WIKI_BASE = 'https://en.wikipedia.org';

// ------------------------------------------------------------------ //
// Helpers
// ------------------------------------------------------------------ //

async function wikiGet(url) {
  const res = await fetch(url, { headers: { 'User-Agent': WIKI_UA } });
  if (!res.ok) throw new Error(`Wikipedia ${res.status} for ${url}`);
  return res.json();
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ------------------------------------------------------------------ //
// Step 1 — Find best Wikipedia article title for a topic
// ------------------------------------------------------------------ //

const WIKI_TITLE_OVERRIDES = {
  // When the topic name maps ambiguously, provide the exact Wikipedia title
  'arith':       'Arithmetic',
  'calc1':       'Calculus',
  'calc2':       'Integral',
  'diffeq':      "Differential equation",
  'linalg':      'Linear algebra',
  'numtheory':   'Number theory',
  'discrete':    'Discrete mathematics',
  'topology':    'Topology',
  'probability': 'Probability',
  'stats':       'Statistics',
  'newton-laws': "Newton's laws of motion",
  'thermo':      'Thermodynamics',
  'quantum':     'Quantum mechanics',
  'relativity':  'Theory of relativity',
  'em':          'Electromagnetism',
  'fluids':      'Fluid mechanics',
  'waves':       'Wave',
  'optics':      'Optics',
  'evolution':   'Evolution',
  'genetics':    'Genetics',
  'cell-bio':    'Cell biology',
  'ecology':     'Ecology',
  'organic':     'Organic chemistry',
  'periodic':    'Periodic table',
  'bonding':     'Chemical bond',
  'thermo-chem': 'Thermochemistry',
  'cosmos':      'Observable universe',
  'solar':       'Solar System',
  'stars':       'Star',
  'galaxy':      'Galaxy',
  'cs':          'Computer science',
  'algorithms':  'Algorithm',
  'data-structs':'Data structure',
  'networks':    'Computer network',
  'ai':          'Artificial intelligence',
  'ml':          'Machine learning',
  'history-us':  'History of the United States',
  'history-eu':  'History of Europe',
  'history-world':'World history',
  'philosophy':  'Philosophy',
  'logic':       'Logic',
  'ethics':      'Ethics',
  'econ':        'Economics',
  'micro':       'Microeconomics',
  'macro':       'Macroeconomics',
  'finance':     'Finance',
  'psychology':  'Psychology',
  'cog-sci':     'Cognitive science',
  'sociology':   'Sociology',
  'linguistics': 'Linguistics',
  'lit-theory':  'Literary theory',
  'rhetoric':    'Rhetoric',
  'music-theory':'Music theory',
  'art-history': 'Art history',
  'architecture':'Architecture',
  'photography': 'Photography',
  'film':        'Film',
  'nutrition':   'Nutrition',
  'medicine':    'Medicine',
  'anatomy':     'Human anatomy',
  'firstaid':    'First aid',
  'cooking':     'Cooking',
  'baking':      'Baking',
  'gardening':   'Gardening',
};

async function findWikiTitle(topic) {
  if (WIKI_TITLE_OVERRIDES[topic.id]) return WIKI_TITLE_OVERRIDES[topic.id];

  // Try the topic name directly first
  const searchUrl = `${WIKI_BASE}/w/api.php?action=opensearch&search=${encodeURIComponent(topic.name)}&limit=3&namespace=0&format=json&origin=*`;
  try {
    const data = await wikiGet(searchUrl);
    return data[1]?.[0] || topic.name;
  } catch {
    return topic.name;
  }
}

// ------------------------------------------------------------------ //
// Step 2 — Fetch Wikipedia article summary + intro
// ------------------------------------------------------------------ //

async function getWikiSummary(title) {
  const url = `${WIKI_BASE}/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const d = await wikiGet(url);
    return {
      title: d.title,
      displayTitle: d.displaytitle || d.title,
      wikiUrl: d.content_urls?.desktop?.page || `${WIKI_BASE}/wiki/${encodeURIComponent(title)}`,
      extract: d.extract || '',
      extractHtml: d.extract_html || '',
      thumbnail: d.thumbnail ? {
        source: d.thumbnail.source,
        width: d.thumbnail.width,
        height: d.thumbnail.height,
      } : null,
      description: d.description || '',
      revisionId: d.revision,
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------ //
// Step 3 — Fetch Wikimedia Commons images
// ------------------------------------------------------------------ //

async function getWikiImages(title, maxImages = 5) {
  const url = `${WIKI_BASE}/api/rest_v1/page/media-list/${encodeURIComponent(title)}`;
  try {
    const d = await wikiGet(url);
    return (d.items || [])
      .filter(item => {
        if (item.type !== 'image') return false;
        const t = item.title || '';
        // Skip icons, logos, wikimedia-internal images
        if (t.match(/flag|icon|logo|question_mark|gnome|commons-logo|crystal/i)) return false;
        return item.srcset && item.srcset.length > 0;
      })
      .slice(0, maxImages)
      .map(item => {
        const largest = item.srcset[item.srcset.length - 1];
        const small   = item.srcset[0];
        return {
          url:     'https:' + largest.src,
          thumb:   'https:' + small.src,
          caption: (item.caption?.text || '').slice(0, 200),
          alt:     item.title?.replace(/^File:/i, '').replace(/_/g, ' ').replace(/\.\w+$/, '') || '',
          credit:  'Wikimedia Commons',
          license: 'CC BY-SA',
          wikiTitle: item.title,
        };
      });
  } catch {
    return [];
  }
}

// ------------------------------------------------------------------ //
// Step 4 — Claude evaluation (synthesis + truth grading)
// ------------------------------------------------------------------ //

async function openaiEval(topic, summary, apiKey) {
  if (!apiKey) return null;

  const prompt = `You are an epistemologist and educator for "Supergravity — Atlas of Everything", an educational platform for all ages.

Topic: "${topic.name}" (${topic.subjectName})
Wikipedia extract: "${summary.extract.slice(0, 2500)}"

Evaluate this content carefully. Return ONLY valid JSON (no markdown, no explanation):
{
  "confidence": "high"|"medium"|"low",
  "consensus": "unanimous"|"broad"|"contested"|"disputed",
  "truthScore": 0.0–1.0,
  "keyFacts": ["fact 1","fact 2","fact 3"],
  "wonderHook": "One surprising, vivid, true fact that would fascinate a 10-year-old.",
  "scholarNote": "One nuanced caveat or open question that excites advanced learners.",
  "ageRange": {"min": 8, "max": 99},
  "corrections": ["any outdated or contested claims to note"],
  "relatedWiki": ["3-5 related Wikipedia article titles worth exploring"]
}`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        max_tokens: 800,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';
    // Extract JSON from response
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return null;
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------ //
// Main — enrich one topic
// ------------------------------------------------------------------ //

async function enrichTopic(topic, apiKey, opts = {}) {
  const { verbose = false, delayMs = 600 } = opts;
  if (verbose) process.stdout.write(`  ${topic.id}: `);

  try {
    const wikiTitle = await findWikiTitle(topic);
    await sleep(delayMs); // be polite to Wikipedia

    const summary = await getWikiSummary(wikiTitle);
    if (!summary) {
      if (verbose) console.log('no summary');
      return null;
    }
    await sleep(delayMs);

    const images = await getWikiImages(wikiTitle);
    await sleep(delayMs);

    // Truth score from Wikipedia article quality estimate
    // (ref count not directly available from summary API, use heuristics)
    const extractWordCount = summary.extract.split(' ').length;
    const estRefs = Math.floor(extractWordCount / 20); // rough proxy
    const wikiScore = wikiReliability(estRefs, 500, !!summary.thumbnail);
    const truthScore = aggregateTruth([{ weight: wikiScore, corroborates: true }]);

    const ai = await openaiEval(topic, summary, apiKey);

    if (verbose) console.log(`✓ ${wikiTitle} (${images.length} imgs, score ${(ai?.truthScore || truthScore).toFixed(2)})`);

    return {
      wikiTitle,
      wiki: summary,
      images,
      ai: ai || {
        confidence: confidenceLabel(truthScore),
        consensus: 'broad',
        truthScore,
        keyFacts: [],
        wonderHook: null,
        scholarNote: null,
        ageRange: { min: 10, max: 99 },
        corrections: [],
        relatedWiki: [],
      },
      truthScore: ai?.truthScore || truthScore,
      enrichedAt: new Date().toISOString(),
    };
  } catch (e) {
    if (verbose) console.log(`✗ ${e.message}`);
    return null;
  }
}

module.exports = { enrichTopic, findWikiTitle, getWikiSummary, getWikiImages };
