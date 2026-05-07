#!/usr/bin/env bash
# Creates a GitHub repo from this folder and pushes main.
# Requires: https://cli.github.com/  (`brew install gh`)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO_NAME="${1:-noam-laks-portfolio}"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI first: https://cli.github.com/ (e.g. brew install gh)"
  exit 1
fi

echo "Using repo name: $REPO_NAME"
echo "Checking gh auth..."
gh auth status

echo "Creating GitHub repo and pushing (public)..."
if gh repo create "$REPO_NAME" --public --source=. --remote=origin --push; then
  echo "Done."
  gh repo view --json url -q .url 2>/dev/null || true
else
  echo "If the name is taken, run: $0 noam-laks-portfolio-site"
  exit 1
fi

echo "Remotes:"
git remote -v
