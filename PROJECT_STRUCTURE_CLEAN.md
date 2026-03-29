# Clean Portfolio Project Structure

## 📁 Project Overview

This is a modern, clean Next.js portfolio website built with React, TypeScript, Framer Motion, and Tailwind CSS. The project has been optimized by removing unused components and unnecessary modules.

---

## 📦 Core Components Used

### Essential Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **Header** | `src/components/Header.tsx` | Navigation bar with theme toggle |
| **HeroSection** | `src/components/HeroSection.tsx` | Main landing section with hero content |
| **AboutSection** | `src/components/AboutSection.tsx` | About/values section with flip cards |
| **SkillsSection** | `src/components/SkillsSection.tsx` | Technical skills showcase |
| **ProjectsSection** | `src/components/ProjectsSection.tsx` | Portfolio projects display |
| **ContactSection** | `src/components/ContactSection.tsx` | Contact information & CTA |
| **Footer** | `src/components/Footer.tsx` | Page footer with links |

### Supporting Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **ThemeToggle** | `src/components/ThemeToggle.tsx` | Light/dark mode toggle button |
| **ScrollReveal** | `src/components/ScrollReveal.tsx` | Scroll animation wrapper |
| **ThemeProvider** | `src/providers/ThemeProvider.tsx` | Theme context & management |
| **SocialIcons** | `src/components/SocialIcons.tsx` | Social media links |

### Utility/Helper Components

| Component | Location | Purpose |
|-----------|----------|---------|
| **ProjectShowcase** | `src/components/ProjectShowcase.tsx` | Individual project card |
| **ProjectShowAward** | `src/components/ProjectShowAward.tsx` | Award/achievement display |
| **TiltedCard** | `src/components/TiltedCard.tsx` | 3D tilted card effect |
| **ResearchSection** | `src/components/ResearchSection.tsx` | Research & publications |
| **StatsSection** | `src/components/StatsSection.tsx` | Statistics/achievements grid |
| **ArticlesSection** | `src/components/ArticlesSection.tsx` | Blog articles showcase |
| **TestimonialsSection** | `src/components/TestimonialsSection.tsx` | Testimonials/reviews |

---

## 🗑️ Removed Components

The following components were removed as they were duplicates, experimental, or no longer in use:

- ❌ `HeaderWrapper.tsx` - Wrapper component (redundant)
- ❌ `HeroSection_Old.tsx` - Deprecated version
- ❌ `HeroSection_New.tsx` - Experimental version
- ❌ `Header_New.tsx` - Experimental header
- ❌ `DotGridExamples.tsx` - Example/demo code
- ❌ `GridBackgroundExamples.tsx` - Example/demo code
- ❌ `PortfolioShowcase.tsx` - Replaced by ProjectShowcase
- ❌ `BubbleMenu.tsx` - Unused animation component
- ❌ `LayoutWithGrid.tsx` - Unused layout component
- ❌ `HeroContent.tsx` - Extracted into HeroSection
- ❌ `HeroVisual.tsx` - Extracted into HeroSection
- ❌ `GridBackgroundCSS.tsx` - CSS-based background
- ❌ `DotGrid.tsx` - Unused background effect
- ❌ `GridBackground.tsx` - Unused background effect
- ❌ `TextType.tsx` - Replaced by built-in animations
- ❌ `BackgroundBlobs.tsx` - Unused blob animations

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Main page (clean imports)
│   ├── globals.css         # Global styles & animations
│   └── favicon.ico
│
├── components/             # Active components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectShowcase.tsx
│   ├── ProjectShowAward.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── ScrollReveal.tsx
│   ├── SocialIcons.tsx
│   ├── TiltedCard.tsx
│   ├── StatsSection.tsx
│   ├── ArticlesSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ResearchSection.tsx
│
├── providers/
│   └── ThemeProvider.tsx   # Theme context hook
│
└── constants/
    └── navigation.ts       # Navigation constants

public/                     # Static assets
├── CV_Niloy_Pramanik.pdf
├── images/
├── *.svg
└── *.PNG
```

---

## 📋 Main Page Structure

The cleaned `page.tsx` now has a clear, readable import structure:

```tsx
// ✅ CLEAN IMPORTS - Only active components
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

// ✅ CLEAN STRUCTURE
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
```

---

## 🎨 Styling & Theming

### Global Styles (`globals.css`)

The global CSS is now organized into clear sections:

```css
/* Variables & Theme Configuration */
/* Base Styles */
/* Scrollbar Styling */
/* Selection & Accessibility */
/* Animations (float, blob, etc.) */
/* Text Utilities (gradient-text, etc.) */
```

### Color Scheme

**Light Mode:**
- Background: `#F0F4F8` (Light slate)
- Foreground: `#0F172A` (Dark blue)

**Dark Mode:**
- Background: `#0F172A` (Dark blue)
- Foreground: `#F1F5F9` (Light slate)

**Accents:**
- Primary: `#FF6B6B` (Red/Coral)
- Secondary: `#6C63FF` (Purple)

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Access: http://localhost:3000 (desktop)
#         http://192.168.0.100:3000 (mobile)

# Build for production
npm build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 🛠️ Key Features

✅ **Mobile Responsive** - Touch-friendly interactions  
✅ **Dark Mode** - Light/dark theme toggle with persistence  
✅ **Smooth Animations** - Framer Motion for fluid transitions  
✅ **Type-Safe** - Full TypeScript support  
✅ **Accessible** - Focus management & semantic HTML  
✅ **Performance Optimized** - Memoized components, lazy loading  
✅ **Clean Codebase** - Removed ~16 unused components  

---

## 📦 Dependencies

### Production
- `next@16.2.1` - React framework
- `react@19.2.4` - UI library
- `framer-motion@^12.38.0` - Animation library
- `lucide-react@^1.7.0` - Icon library

### Development
- `typescript@^5` - Type checking
- `tailwindcss@^4` - Utility CSS
- `eslint@^9` - Code linting
- `@types/*` - Type definitions

---

## 🔧 Best Practices Applied

1. **Component Organization** - Each component has a single responsibility
2. **Naming Convention** - Clear, descriptive file names (PascalCase for React components)
3. **Documentation** - Comments in globals.css for easy navigation
4. **Type Safety** - TypeScript used throughout
5. **Performance** - React.memo() for expensive components
6. **Accessibility** - Focus management and ARIA labels
7. **DRY Principle** - No duplicate components

---

## 📝 Notes for Future Development

- Placeholder images at `/api/placeholder/*` return 404 - Replace with actual images in `/public/images/`
- HMR warning for cross-origin requests is expected on mobile testing
- Theme state persists in localStorage for user preference
- All animations use Framer Motion for consistent performance

---

**Last Updated:** March 28, 2026  
**Status:** ✅ Production Ready
