#!/usr/bin/env bash
#
# build.sh — package the Formistic plugin for public release.
#
# Produces a clean, installable copy of the plugin from the formistic/ folder,
# excluding all development-only files. Output:
#
#   dist/formistic/                 clean plugin folder
#   dist/formistic-<version>.zip    upload-ready archive
#
# The contents of dist/formistic/ are exactly what should be published to the
# public Wordpressistic/Formistic repository.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$ROOT/formistic"
DIST="$ROOT/dist"

if [[ ! -f "$SRC/formistic.php" ]]; then
	echo "Error: $SRC/formistic.php not found." >&2
	exit 1
fi

# Read the version straight from the plugin header.
VERSION="$(grep -iE "^\s*\*?\s*Version:" "$SRC/formistic.php" | head -1 | sed -E 's/.*Version:\s*//; s/\s*$//')"
if [[ -z "$VERSION" ]]; then
	echo "Error: could not read plugin version." >&2
	exit 1
fi
echo "Building Formistic v$VERSION…"

rm -rf "$DIST"
mkdir -p "$DIST"

# Copy the whole plugin folder, then strip anything that should never ship.
cp -R "$SRC" "$DIST/formistic"
find "$DIST/formistic" \( \
	-name '.git*' -o \
	-name '.DS_Store' -o \
	-name 'Thumbs.db' -o \
	-name '*.map' -o \
	-name 'node_modules' -o \
	-name 'docs' \
	\) -exec rm -rf {} +

# Create the upload-ready zip (folder name = formistic).
( cd "$DIST" && zip -rq "formistic-$VERSION.zip" "formistic" )

echo "Done."
echo "  Folder: dist/formistic/"
echo "  Zip:    dist/formistic-$VERSION.zip"
