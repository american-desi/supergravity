#!/usr/bin/env node
// scripts/build.cjs
// Compiles all JSX app files → dist/sg-app.js via esbuild.
// Each source file is transformed individually then IIFE-wrapped before
// concatenation, exactly mirroring how Babel standalone isolates each
// <script type="text/babel"> tag into its own scope.
//
// Run: npm run build
// Output: dist/sg-app.js (plain JS, window globals preserved)

'use strict';

const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// JSX dependency order — matches load order in index.html.
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

const INTERACTIVES_BUNDLE = path.join(ROOT, 'content', '_interactives-bundle.jsx');
const B04_ENHANCE = path.join(ROOT, 'content', 'b04-enhance.js');

if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });

// Transform a source string (JSX or JS) → plain JS with esbuild.
// Returns the transformed code string.
function transform(source, label, loader = 'jsx') {
  try {
    const result = esbuild.transformSync(source, {
      loader,
      target: 'es2020',
      sourcemap: false,
    });
    if (result.warnings.length) {
      result.warnings.forEach(w => console.warn(`⚠  ${label}: ${w.text}`));
    }
    return result.code;
  } catch (e) {
    console.error(`✘  Transform failed for ${label}:`);
    e.errors?.forEach(err => console.error(`   ${err.text}`));
    process.exit(1);
  }
}

// Wrap transformed code in an IIFE so each file's top-level bindings are isolated.
const wrap = (code, label) =>
  `\n// ==== ${label} ====\n;(function(){\n${code}\n})();\n`;

// For the interactives bundle (which concatenates many sub-files that may
// reuse hook alias names), split by section separators and IIFE-wrap each section.
function wrapInteractivesBundleSections(source, label) {
  const sections = source.split(/(?=\/\/ ={4,} .+ ={4,})/);
  let out = '';
  for (const section of sections) {
    if (!section.trim()) continue;
    // Find the section label from the comment
    const m = section.match(/\/\/ ={4,} (.+?) ={4,}/);
    const sectionLabel = m ? `${label}:${m[1].trim()}` : label;
    const compiled = transform(section, sectionLabel, 'jsx');
    out += wrap(compiled, sectionLabel);
  }
  return out;
}

const parts = ['// dist/sg-app.js — AUTO-GENERATED. Do not edit.\n// Built by scripts/build.cjs\n'];

let totalBytes = 0;
for (const name of JSX_ORDER) {
  const file = path.join(ROOT, name);
  if (!fs.existsSync(file)) {
    console.warn(`⚠  ${name} not found — skipping`);
    continue;
  }
  const source = fs.readFileSync(file, 'utf8');
  totalBytes += source.length;
  const compiled = transform(source, name, 'jsx');
  parts.push(wrap(compiled, name));
  process.stdout.write('.');
}

if (fs.existsSync(INTERACTIVES_BUNDLE)) {
  const source = fs.readFileSync(INTERACTIVES_BUNDLE, 'utf8');
  totalBytes += source.length;
  parts.push(wrapInteractivesBundleSections(source, 'content/_interactives-bundle.jsx'));
  process.stdout.write('.');
}

if (fs.existsSync(B04_ENHANCE)) {
  const source = fs.readFileSync(B04_ENHANCE, 'utf8');
  totalBytes += source.length;
  const compiled = transform(source, 'b04-enhance.js', 'js');
  parts.push(wrap(compiled, 'content/b04-enhance.js'));
  process.stdout.write('.');
}

process.stdout.write('\n');

const outPath = path.join(DIST, 'sg-app.js');
fs.writeFileSync(outPath, parts.join('\n'), 'utf8');

const outSize = fs.statSync(outPath).size;
console.log(`✓  dist/sg-app.js — ${(outSize / 1024).toFixed(0)}KB (from ${(totalBytes / 1024).toFixed(0)}KB source)`);
console.log('✓  Build complete.');
