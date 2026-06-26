#!/usr/bin/env node
// scripts/build.cjs
// Compiles all JSX app files → dist/sg-app.js via esbuild.
// Run: npm run build
// Output: dist/sg-app.js (plain JS, no bundling — window globals preserved)

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// JSX dependency order — matches load order in index.html.
// Files that depend on window globals set by earlier files must come after.
const JSX_ORDER = [
  'components.jsx',
  'interactives.jsx',
  'interactives-v2.jsx',
  'extras.jsx',
  'extras2.jsx',
  'hero-visual.jsx',
  'pages.jsx',
  'tutor.jsx',
  'tutor-v2.jsx',
  'pages-v2.jsx',
  'atlas-v3.jsx',
  'auth.jsx',
  'home.jsx',
  'workshop.jsx',
  'path.jsx',
  'rule.jsx',
  'chapters.jsx',
  'health.jsx',
  'app.jsx',
];

// Also include the interactives content bundle if it exists.
const INTERACTIVES_BUNDLE = path.join(ROOT, 'content', '_interactives-bundle.jsx');
const B04_ENHANCE = path.join(ROOT, 'content', 'b04-enhance.js');

if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });

const parts = [];

// Preamble: declare aliased hooks so each file can use its own alias without collision.
parts.push(`// dist/sg-app.js — AUTO-GENERATED. Do not edit.\n// Built by scripts/build.cjs\n`);

// Concatenate all JSX files in order.
for (const name of JSX_ORDER) {
  const file = path.join(ROOT, name);
  if (!fs.existsSync(file)) {
    console.warn(`⚠  ${name} not found — skipping`);
    continue;
  }
  parts.push(`\n// ==== ${name} ====\n`);
  parts.push(fs.readFileSync(file, 'utf8'));
}

// Append interactives content bundle if present.
if (fs.existsSync(INTERACTIVES_BUNDLE)) {
  parts.push(`\n// ==== content/_interactives-bundle.jsx ====\n`);
  parts.push(fs.readFileSync(INTERACTIVES_BUNDLE, 'utf8'));
}
if (fs.existsSync(B04_ENHANCE)) {
  parts.push(`\n// ==== content/b04-enhance.js ====\n`);
  parts.push(fs.readFileSync(B04_ENHANCE, 'utf8'));
}

const combined = parts.join('\n');
const tmpFile = path.join(DIST, '_combined.jsx');
fs.writeFileSync(tmpFile, combined, 'utf8');

console.log(`⚙  esbuild: transforming ${(combined.length / 1024).toFixed(0)}KB of JSX…`);

try {
  execSync(
    `npx esbuild "${tmpFile}" --bundle=false --loader=jsx --target=es2020 --outfile="${path.join(DIST, 'sg-app.js')}"`,
    { stdio: 'inherit', cwd: ROOT }
  );
} finally {
  fs.unlinkSync(tmpFile);
}

const outSize = fs.statSync(path.join(DIST, 'sg-app.js')).size;
console.log(`✓  dist/sg-app.js — ${(outSize / 1024).toFixed(0)}KB`);
console.log('✓  Build complete.');
