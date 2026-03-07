#!/bin/sh
# Generate CV PDFs from YAML data
# Usage: sh cv/build.sh (run from repo root)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$REPO_ROOT"

echo "Building English CV..."
typst compile cv/template.typ cv/output/cv-en.pdf --input lang=en --root .

echo "Building Norwegian CV..."
typst compile cv/template.typ cv/output/cv-no.pdf --input lang=no --root .

echo "Done. Output:"
ls -lh cv/output/*.pdf
