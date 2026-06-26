#!/usr/bin/env node
// tools/batch-enrich.cjs
// Batch-enriches all Atlas topics with Wikipedia content + OpenAI GPT-4o-mini evaluation.
//
// Usage:
//   OPENAI_API_KEY=sk-proj-... node tools/batch-enrich.cjs
//   node tools/batch-enrich.cjs --dry-run          # fetch Wikipedia only, skip Claude
//   node tools/batch-enrich.cjs --subject math      # enrich one subject only
//   node tools/batch-enrich.cjs --topic calc1       # enrich one topic only
//   node tools/batch-enrich.cjs --since 7           # re-enrich topics older than N days
//
// Output: content/_enrichment.js (auto-generated, committed to git)
'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');
const { enrichTopic } = require('./enrich-topic.cjs');

const ROOT       = path.resolve(__dirname, '..');
const CACHE_FILE = path.join(ROOT, 'content', '_enrichment-cache.json');
const OUT_FILE   = path.join(ROOT, 'content', '_enrichment.js');

// ------------------------------------------------------------------ //
// Args
// ------------------------------------------------------------------ //

const args = process.argv.slice(2);
const DRY_RUN      = args.includes('--dry-run');
const SUBJECT_FILTER = args[args.indexOf('--subject') + 1] || null;
const TOPIC_FILTER   = args[args.indexOf('--topic') + 1] || null;
const SINCE_DAYS     = parseInt(args[args.indexOf('--since') + 1]) || 30;
const CONCURRENCY    = 3; // parallel fetches (stay polite to Wikipedia)

const API_KEY = DRY_RUN ? null : process.env.OPENAI_API_KEY;
if (!DRY_RUN && !API_KEY) {
  console.warn('⚠  OPENAI_API_KEY not set — will skip AI evaluation (--dry-run mode).');
}

// ------------------------------------------------------------------ //
// Load all topics from data.js
// ------------------------------------------------------------------ //

function loadTopics() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8'), ctx);
  return ctx.window.SUBJECTS.flatMap(s =>
    s.groups.flatMap(g =>
      g.topics.map(t => ({
        id: t.id,
        name: t.name,
        subject: s.id,
        subjectName: s.name,
      }))
    )
  );
}

// ------------------------------------------------------------------ //
// Cache management — avoid re-fetching unchanged topics
// ------------------------------------------------------------------ //

function loadCache() {
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); }
  catch { return {}; }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

function isStale(cacheEntry) {
  if (!cacheEntry?.enrichedAt) return true;
  const age = (Date.now() - new Date(cacheEntry.enrichedAt).getTime()) / 86400000;
  return age > SINCE_DAYS;
}

// ------------------------------------------------------------------ //
// Pool — run at most CONCURRENCY tasks in parallel
// ------------------------------------------------------------------ //

async function pool(tasks, concurrency) {
  const results = new Array(tasks.length).fill(null);
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) {
      const i = idx++;
      results[i] = await tasks[i]();
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// ------------------------------------------------------------------ //
// Generate content/_enrichment.js from cache data
// ------------------------------------------------------------------ //

function generateJS(cache, topics) {
  const topicMap = Object.fromEntries(topics.map(t => [t.id, t]));
  const enriched = Object.entries(cache)
    .filter(([, v]) => v && v.wiki)
    .reduce((acc, [id, v]) => { acc[id] = v; return acc; }, {});

  const js = `// content/_enrichment.js
// AUTO-GENERATED — do not edit by hand.
// Run: npm run enrich
// Sources: Wikipedia REST API + Wikimedia Commons (CC BY-SA) + OpenAI evaluation
// Last updated: ${new Date().toISOString()}
// Topics enriched: ${Object.keys(enriched).length} / ${topics.length}

(function () {
  'use strict';

  /* eslint-disable */
  const ENRICHMENT = ${JSON.stringify(enriched, null, 2)};
  /* eslint-enable */

  // Merge enrichment data into window.LESSONS after bootstrap runs.
  function applyEnrichment() {
    const lessons = window.LESSONS;
    if (!lessons) return;

    Object.entries(ENRICHMENT).forEach(function([topicId, data]) {
      const lesson = lessons[topicId];
      if (!lesson) return;

      // Wikipedia extract — shown in stub pages and as supplemental context
      if (data.wiki) {
        lesson.wikiTitle   = data.wikiTitle;
        lesson.wikiUrl     = data.wiki.wikiUrl;
        lesson.wikiExtract = data.wiki.extract;
        lesson.wikiRevision = data.wiki.revisionId;
        lesson.enrichedAt  = data.enrichedAt;

        // Wikipedia thumbnail — use as hero image if no image exists
        if (data.wiki.thumbnail && !(lesson.images && lesson.images.length)) {
          lesson.images = [{ url: data.wiki.thumbnail.source, caption: data.wiki.description || '', credit: 'Wikimedia Commons', license: 'CC BY-SA' }];
        }
      }

      // Wikimedia Commons images — append (don't replace hand-authored)
      if (data.images && data.images.length) {
        const existing = new Set((lesson.images || []).map(function(i) { return i.url; }));
        const newImgs  = data.images.filter(function(i) { return !existing.has(i.url); });
        lesson.images  = (lesson.images || []).concat(newImgs);
      }

      // AI evaluation
      if (data.ai) {
        lesson.wonderHook   = lesson.wonderHook || data.ai.wonderHook;
        lesson.scholarNote  = lesson.scholarNote || data.ai.scholarNote;
        lesson.truthScore   = data.truthScore;
        lesson.confidence   = data.ai.confidence;
        lesson.ageRange     = data.ai.ageRange;
        // Merge key facts into keyTerms if not already there
        if (data.ai.keyFacts && data.ai.keyFacts.length && !lesson.keyFacts) {
          lesson.keyFacts = data.ai.keyFacts;
        }
      }
    });
  }

  // Run after DOM content loaded (bootstrap has already run by then)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyEnrichment);
  } else {
    applyEnrichment();
  }

  window.ENRICHMENT = ENRICHMENT;
})();
`;

  fs.writeFileSync(OUT_FILE, js, 'utf8');
  console.log(`✓  Generated content/_enrichment.js (${Object.keys(enriched).length} topics)`);
}

// ------------------------------------------------------------------ //
// Main
// ------------------------------------------------------------------ //

async function main() {
  console.log('Supergravity enrichment pipeline');
  console.log(`  Mode: ${DRY_RUN ? 'dry-run (no AI)' : 'full (Wikipedia + OpenAI)'}`);
  console.log(`  Staleness threshold: ${SINCE_DAYS} days`);

  const allTopics = loadTopics();
  const cache = loadCache();

  // Filter
  let topics = allTopics;
  if (TOPIC_FILTER) topics = topics.filter(t => t.id === TOPIC_FILTER);
  else if (SUBJECT_FILTER) topics = topics.filter(t => t.subject === SUBJECT_FILTER);

  // Only enrich stale or missing entries
  const toEnrich = topics.filter(t => isStale(cache[t.id]));
  console.log(`  Topics to enrich: ${toEnrich.length} / ${topics.length}`);

  if (toEnrich.length === 0) {
    console.log('  All topics are fresh — nothing to do.');
    generateJS(cache, allTopics);
    return;
  }

  let done = 0;
  const tasks = toEnrich.map(topic => async () => {
    const result = await enrichTopic(topic, API_KEY || null, { verbose: true });
    if (result) {
      cache[topic.id] = result;
      // Save cache incrementally so progress survives crashes
      if (++done % 10 === 0) saveCache(cache);
    }
  });

  await pool(tasks, CONCURRENCY);
  saveCache(cache);
  generateJS(cache, allTopics);

  const succeeded = toEnrich.filter(t => cache[t.id]?.wiki).length;
  console.log(`\n✓  Enriched ${succeeded}/${toEnrich.length} topics`);
  console.log('  Next: run ./tools/build-content-bundle.sh, then npm run build');
}

main().catch(e => { console.error('✗', e.message); process.exit(1); });
