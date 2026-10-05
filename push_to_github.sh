#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "🚀 Pushing DRONGO Wildlife & Nature Storytelling to GitHub..."
git push -u origin main
git push -u origin main:gh-pages

if [ $? -eq 0 ]; then
  echo ""
  echo "🌐 Your repository is live at: https://github.com/saltymother/drongo-wildlife"
  echo "📄 Custom Domain: https://drongowildlife.com"
  echo "📄 GitHub Pages fallback: https://saltymother.github.io/drongo-wildlife/"
else
  echo ""
  echo "❌ Push failed. Please check repository permissions."
fi
