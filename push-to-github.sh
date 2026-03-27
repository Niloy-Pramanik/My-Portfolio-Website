#!/bin/bash

# Portfolio GitHub Push Script
# This script will push your portfolio to GitHub

echo "🚀 Portfolio GitHub Push Script"
echo "================================"
echo ""

# Check if GitHub username is provided
if [ -z "$1" ]; then
    echo "❌ Error: GitHub username not provided"
    echo ""
    echo "Usage: ./push-to-github.sh YOUR-GITHUB-USERNAME"
    echo ""
    echo "Example: ./push-to-github.sh niloypramanik"
    echo ""
    exit 1
fi

GITHUB_USERNAME="$1"
REPO_URL="https://github.com/${GITHUB_USERNAME}/my-portfolio-website.git"

echo "📋 Push Configuration:"
echo "  GitHub Username: $GITHUB_USERNAME"
echo "  Repository URL: $REPO_URL"
echo ""

# Navigate to project directory
cd /Users/niloypramanik/my-portfolio-website

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists"
    echo "  Removing existing remote..."
    git remote remove origin
fi

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "$REPO_URL"

# Set main as default branch
echo "📌 Setting main as default branch..."
git branch -M main

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
echo "  (You may be prompted for credentials)"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your portfolio is now on GitHub"
    echo ""
    echo "📊 Repository Details:"
    echo "  URL: $REPO_URL"
    echo "  Branch: main"
    echo ""
    echo "🚀 Next Steps:"
    echo "  1. Go to: $REPO_URL"
    echo "  2. Deploy to Vercel for free hosting"
    echo "  3. Share your portfolio URL!"
    echo ""
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "  1. Is your GitHub repository created?"
    echo "  2. Do you have the correct credentials?"
    echo "  3. Is your internet connection stable?"
    echo ""
    echo "💡 Tip: Use a Personal Access Token instead of your password"
    echo "   Create one at: https://github.com/settings/tokens"
    echo ""
fi
