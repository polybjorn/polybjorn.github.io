#!/bin/sh
# Generate CV PDFs from YAML data
# Usage: sh cv/build.sh (run from repo root)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$REPO_ROOT"

echo "Generating icon manifest..."
svg_icons=""
png_icons=""
for f in cv/icons/*.svg; do
  name="$(basename "$f" .svg)"
  svg_icons="$svg_icons\"$name\", "
done
for f in cv/icons/*.png; do
  name="$(basename "$f" .png)"
  png_icons="$png_icons\"$name\", "
done
printf '{\n  "svg": [%s],\n  "png": [%s]\n}\n' \
  "${svg_icons%, }" "${png_icons%, }" > cv/icons.json

echo "Building English CV..."
typst compile cv/template.typ cv/output/cv-en.pdf --input lang=en --font-path cv/fonts --root .

echo "Building Norwegian CV..."
typst compile cv/template.typ cv/output/cv-no.pdf --input lang=no --font-path cv/fonts --root .

BRAND_DIR="$HOME/Vault/Assets/Brand/CV"
if [ -d "$BRAND_DIR" ]; then
  cp cv/output/cv-en.pdf "$BRAND_DIR/"
  cp cv/output/cv-no.pdf "$BRAND_DIR/"
  echo "Done. Copied to $BRAND_DIR"
else
  echo "Done. Brand folder not found, output in cv/output/ only"
fi
ls -lh cv/output/*.pdf
