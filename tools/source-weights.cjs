// tools/source-weights.cjs
// Source reliability weights for the Atlas truth-evaluation system.
// Each weight is a 0–1 probability that a claim from that source is accurate.
// Scores are approximate and field-sensitive; Claude adjusts them per-claim.
'use strict';

// ------------------------------------------------------------------ //
// BASE WEIGHTS
// ------------------------------------------------------------------ //

const BASE = {
  // Tier 1 — Primary / peer-reviewed
  'peer-reviewed-meta-analysis':   0.97,
  'peer-reviewed-rct':             0.95,
  'peer-reviewed-journal':         0.90,
  'systematic-review':             0.92,
  'academic-textbook':             0.88,

  // Tier 2 — Expert-curated secondary
  'encyclopedia-britannica':       0.87,
  'stanford-encyclopedia':         0.90,  // SEP — philosophy gold standard
  'university-course':             0.85,
  'national-lab':                  0.88,
  'government-scientific-body':    0.85,

  // Tier 3 — Quality crowd-sourced / editorial
  'wikipedia-featured-article':    0.88,
  'wikipedia-good-article':        0.82,
  'wikipedia-standard':            0.75,
  'wikipedia-stub':                0.60,

  // Tier 4 — Quality journalism / vetted reporting
  'news-major-outlet':             0.70,
  'science-journalism':            0.72,
  'news-minor-outlet':             0.55,

  // Tier 5 — Educational but unverified
  'educational-youtube':           0.65,
  'mooc-platform':                 0.70,
  'blog-expert':                   0.60,
  'blog-general':                  0.40,

  // Tier 6 — Social / community
  'reddit-expert-sub':             0.45,
  'reddit-general':                0.30,
  'social-media':                  0.20,
  'forum':                         0.35,
  'anecdote':                      0.15,
};

// ------------------------------------------------------------------ //
// WIKIPEDIA QUALITY ESTIMATION
// Wikipedia article quality correlates with reference count and edits.
// ------------------------------------------------------------------ //

function wikiReliability(refCount, revisionCount, hasInfobox) {
  let score = 0.65; // stub baseline
  if (refCount > 100) score = 0.88;
  else if (refCount > 50) score = 0.82;
  else if (refCount > 20) score = 0.77;
  else if (refCount > 5)  score = 0.70;
  if (revisionCount > 1000) score = Math.min(score + 0.05, 0.92);
  if (!hasInfobox) score = Math.max(score - 0.05, 0.50);
  return parseFloat(score.toFixed(3));
}

// ------------------------------------------------------------------ //
// TRUTH-SCORE AGGREGATION
// Given N independent sources each with a reliability weight w_i,
// combined truth score = 1 - Π(1 - w_i)  [independent corroboration]
// Contested sources lower the combined score.
// ------------------------------------------------------------------ //

function aggregateTruth(sources) {
  // sources: [{ weight: 0-1, corroborates: bool }]
  if (!sources || sources.length === 0) return 0.5;

  const supporting = sources.filter(s => s.corroborates);
  const opposing   = sources.filter(s => !s.corroborates);

  // P(true | N independent sources all agree) approaches 1 fast
  const pTrue = 1 - supporting.reduce((acc, s) => acc * (1 - s.weight), 1);

  // Each opposing source erodes confidence proportionally
  const erosion = opposing.reduce((acc, s) => acc * (1 - s.weight * 0.5), 1);

  return parseFloat(Math.min(pTrue * erosion, 0.99).toFixed(3));
}

// ------------------------------------------------------------------ //
// CONFIDENCE LABELS (from numeric score)
// ------------------------------------------------------------------ //

function confidenceLabel(score) {
  if (score >= 0.90) return 'high';
  if (score >= 0.75) return 'medium';
  if (score >= 0.55) return 'low';
  return 'unverified';
}

function consensusLabel(nSupporting, nOpposing) {
  if (nOpposing === 0) return 'unanimous';
  const ratio = nSupporting / (nSupporting + nOpposing);
  if (ratio > 0.85) return 'broad';
  if (ratio > 0.60) return 'contested';
  return 'disputed';
}

module.exports = { BASE, wikiReliability, aggregateTruth, confidenceLabel, consensusLabel };
