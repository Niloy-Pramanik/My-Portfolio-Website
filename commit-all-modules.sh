#!/bin/bash

# Professional Git Commit Automation Script
# Commits and pushes all modules with separate commits for fixes and features

echo "🚀 Starting Professional Git Workflow..."
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper function to log
log() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Function to add, commit, and push
commit_and_push() {
    local files=$1
    local message=$2
    
    log "Adding files: $files"
    git add $files
    
    log "Committing: $message"
    git commit -m "$message"
    
    if [ $? -eq 0 ]; then
        log "Pushing to GitHub..."
        git push origin main
        if [ $? -eq 0 ]; then
            success "Module committed and pushed!"
        else
            error "Push failed!"
            return 1
        fi
    else
        error "Commit failed! (Likely no changes)"
    fi
    echo ""
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "Not in portfolio project directory!"
    exit 1
fi

log "Current branch: $(git branch --show-current)"

# Module 2: App Layout & Styling
echo -e "${YELLOW}Module 2: App Layout & Styling${NC}"
echo "========================================"

# Fix Layout
commit_and_push "src/app/layout.tsx src/app/page.tsx" \
    "fix: resolve TypeScript errors in app layout

- Fix import paths in layout.tsx
- Resolve type definitions in page.tsx
- Ensure proper component exports"

# Enhance Styling
commit_and_push "src/app/globals.css" \
    "feat: enhance global styling with improved animations

- Add Tailwind configuration for scroll animations
- Improve responsive breakpoints
- Optimize CSS for performance"

# Module 3: Hero Section
echo -e "${YELLOW}Module 3: Hero Section${NC}"
echo "========================================"

commit_and_push "src/components/HeroSection.tsx" \
    "fix: resolve hero section rendering issues

- Fix split-color name display logic
- Correct animation timing conflicts
- Ensure proper CSS class application"

commit_and_push "src/components/HeroSection.tsx" \
    "feat: enhance hero section with tilt card effects

- Add tilt animation on hover
- Implement responsive image sizing
- Add gradient overlay effects"

# Module 4: About Section
echo -e "${YELLOW}Module 4: About Section${NC}"
echo "========================================"

commit_and_push "src/components/AboutSection.tsx" \
    "fix: correct about section scroll animations

- Fix stagger animation timing
- Resolve card flip animation glitches
- Fix viewport margin calculations"

commit_and_push "src/components/AboutSection.tsx" \
    "feat: add scroll reveal animations to about section

- Implement fade-in animation for summary
- Add staggered reveal for flip cards
- Enhance quote section styling"

# Module 5: Projects Section
echo -e "${YELLOW}Module 5: Projects Section${NC}"
echo "========================================"

commit_and_push "src/components/ProjectsSection.tsx" \
    "fix: resolve projects section card rendering

- Fix award badge display logic
- Correct GitHub link integration
- Fix project card height responsiveness"

commit_and_push "src/components/ProjectsSection.tsx" \
    "feat: enhance projects section with animations and badges

- Add uppercase award badges with tracking
- Implement GitHub link integration
- Add tech badge stagger animation"

# Module 6: Footer & Contact
echo -e "${YELLOW}Module 6: Footer & Contact Sections${NC}"
echo "========================================"

commit_and_push "src/components/Footer.tsx" \
    "fix: correct footer layout and styling

- Fix responsive footer layout
- Resolve social icon alignment
- Correct copyright text formatting"

commit_and_push "src/components/Footer.tsx" \
    "feat: add footer animations and polish

- Add fade-in animation for footer content
- Implement hover effects on social links
- Improve visual hierarchy"

commit_and_push "src/components/ContactSection.tsx" \
    "fix: resolve contact section display issues

- Fix contact card layout
- Correct form styling
- Ensure proper accessibility attributes"

commit_and_push "src/components/ContactSection.tsx" \
    "feat: add contact section scroll reveal animation

- Implement fade-in animation
- Add staggered contact card reveals
- Enhance button hover effects"

# Module 7: Stats Section
echo -e "${YELLOW}Module 7: Stats Section${NC}"
echo "========================================"

commit_and_push "src/components/StatsSection.tsx" \
    "fix: correct stats section calculations and display

- Fix stat counter logic
- Correct responsive grid layout
- Resolve animation timing issues"

commit_and_push "src/components/StatsSection.tsx" \
    "feat: add animated counters to stats section

- Implement count-up animation
- Add scroll reveal triggers
- Enhance visual feedback"

# Final Summary
echo ""
echo -e "${GREEN}========================================"
echo "✅ All modules successfully committed!"
echo "=======================================${NC}"

log "Checking final status..."
git status

success "Professional Git Workflow Complete! 🚀"
