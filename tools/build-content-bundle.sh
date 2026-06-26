#!/usr/bin/env bash
# ============================================================
# tools/build-content-bundle.sh
#
# Concatenates every content/*.js subject file into a single
# content/_bundle.js, in alphabetical order, with the bootstrap
# appended last. This lets index.html load ONE script instead
# of ~90, cutting HTTP requests + parse overhead on page load.
#
# Run this after any batch session writes new subject files:
#   ./tools/build-content-bundle.sh
#
# Safe to re-run. Idempotent. Overwrites content/_bundle.js.
# ============================================================

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONTENT_DIR="$ROOT/content"
OUT="$CONTENT_DIR/_bundle.js"
TMP="$OUT.tmp"

if [[ ! -d "$CONTENT_DIR" ]]; then
  echo "✗ $CONTENT_DIR does not exist." >&2
  exit 1
fi

DATE="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Header
{
  echo "// content/_bundle.js"
  echo "// AUTO-GENERATED — do not edit by hand."
  echo "// Built: $DATE"
  echo "// To regenerate: ./tools/build-content-bundle.sh"
  echo ""
  echo "window.CONTENT = window.CONTENT || {};"
  echo ""
} > "$TMP"

# Collect subject files (skip anything that starts with _, and skip .jsx/.md).
subject_files=()
while IFS= read -r -d '' f; do
  base="$(basename "$f")"
  case "$base" in
    _*|*.jsx|*.md|*.tmp) continue ;;
  esac
  subject_files+=("$f")
done < <(find "$CONTENT_DIR" -maxdepth 1 -type f -name "*.js" -print0 | sort -z)

count=0
for f in "${subject_files[@]}"; do
  base="$(basename "$f")"
  {
    echo ""
    echo "// ====== $base ======"
    cat "$f"
    echo ""
  } >> "$TMP"
  count=$((count + 1))
done

# Bootstrap MUST come last so it sees the fully-populated window.CONTENT.
if [[ -f "$CONTENT_DIR/_bootstrap.js" ]]; then
  {
    echo ""
    echo "// ====== _bootstrap.js (must run last) ======"
    cat "$CONTENT_DIR/_bootstrap.js"
    echo ""
  } >> "$TMP"
else
  echo "⚠ content/_bootstrap.js not found — bundle will not self-bootstrap." >&2
fi

mv "$TMP" "$OUT"

bytes="$(wc -c < "$OUT" | tr -d ' ')"
human="$(du -h "$OUT" | cut -f1)"

echo "✓ Bundled $count subject files + bootstrap → $OUT"
echo "  Size: $human ($bytes bytes)"

# ---------- Interactives bundle ----------
# Concatenates every interactive-registry JSX file into one big JSX file so
# Babel standalone transpiles once and the browser makes a single request.
INT_OUT="$CONTENT_DIR/_interactives-bundle.jsx"
INT_TMP="$INT_OUT.tmp"

{
  echo "// content/_interactives-bundle.jsx"
  echo "// AUTO-GENERATED — do not edit by hand."
  echo "// Built: $DATE"
  echo ""
} > "$INT_TMP"

# Specific order: the generic registries first, then batch extensions.
# Each file appends to window.INTERACTIVES and is idempotent.
int_files=(
  "$CONTENT_DIR/math-interactives.jsx"
  "$CONTENT_DIR/interactives-b02.jsx"
  "$CONTENT_DIR/interactives-b03.jsx"
  "$CONTENT_DIR/interactives-b03-rich.jsx"
  "$CONTENT_DIR/interactives-b04.jsx"
)

int_count=0
for f in "${int_files[@]}"; do
  if [[ -f "$f" ]]; then
    base="$(basename "$f")"
    {
      echo ""
      echo "// ====== $base ======"
      cat "$f"
      echo ""
    } >> "$INT_TMP"
    int_count=$((int_count + 1))
  fi
done

mv "$INT_TMP" "$INT_OUT"
int_bytes="$(wc -c < "$INT_OUT" | tr -d ' ')"
int_human="$(du -h "$INT_OUT" | cut -f1)"

echo "✓ Bundled $int_count interactive JSX files → $INT_OUT"
echo "  Size: $int_human ($int_bytes bytes)"

echo ""
echo "Next steps:"
echo "  1. Confirm index.html loads content/_bundle.js (one tag) instead"
echo "     of the ~90 individual subject <script> tags."
echo "  2. Confirm index.html loads content/_interactives-bundle.jsx instead"
echo "     of the 5 individual interactive <script> tags."
echo "  3. Re-run this script after any batch session modifies content files."
