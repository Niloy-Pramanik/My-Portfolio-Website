# Project File Structure & References

## 📁 Complete Project Structure

```
my-portfolio-website/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with ThemeProvider
│   │   ├── page.tsx                      # Main home page (entry point)
│   │   ├── globals.css                   # Global styles and CSS variables
│   │   └── favicon.ico                   # Website favicon
│   │
│   ├── components/                       # React components
│   │   ├── Header.tsx                    # Navigation header (11 lines)
│   │   ├── HeaderWrapper.tsx             # Client wrapper for Header
│   │   ├── ThemeToggle.tsx               # Dark/Light mode toggle button
│   │   ├── HeroSection.tsx               # Welcome/hero section
│   │   ├── StatsSection.tsx              # Statistics display
│   │   ├── AboutSection.tsx              # About/skills section
│   │   ├── TestimonialsSection.tsx       # Testimonials/reviews
│   │   ├── ArticlesSection.tsx           # Blog articles showcase
│   │   ├── ProjectsSection.tsx           # Portfolio projects
│   │   ├── ContactSection.tsx            # Contact form section
│   │   └── Footer.tsx                    # Footer section
│   │
│   └── providers/
│       └── ThemeProvider.tsx             # Theme context and hooks
│
├── public/                               # Static files
│   ├── next.svg                          # Next.js logo
│   ├── vercel.svg                        # Vercel logo
│   └── [your images go here]
│
├── .vscode/
│   └── tasks.json                        # VS Code build tasks
│
├── Configuration Files
│   ├── package.json                      # Dependencies and scripts
│   ├── package-lock.json                 # Locked dependency versions
│   ├── tsconfig.json                     # TypeScript configuration
│   ├── next.config.ts                    # Next.js configuration
│   ├── tailwind.config.ts                # Tailwind CSS configuration
│   ├── postcss.config.mjs                # PostCSS configuration
│   ├── eslint.config.mjs                 # ESLint rules
│   └── .gitignore                        # Git ignore patterns
│
├── Documentation Files
│   ├── README_PORTFOLIO.md               # Complete documentation
│   ├── PROJECT_OVERVIEW.md               # Full project overview
│   ├── QUICK_START.md                    # 5-minute quick start
│   ├── CUSTOMIZATION_GUIDE.md            # Customization instructions
│   ├── CONFIGURATION.md                  # Technical configuration
│   ├── IMPLEMENTATION_SUMMARY.md         # What was built (this)
│   └── FILE_STRUCTURE.md                 # This file
│
└── Generated/Ignored Folders
    ├── node_modules/                     # Installed packages
    ├── .next/                            # Build output
    └── .git/                             # Git repository
```

## 📄 File Details

### Core Application Files

#### `src/app/layout.tsx`
- **Purpose**: Root layout wrapper for entire app
- **Key Features**:
  - Imports ThemeProvider for dark/light mode
  - Sets up global fonts (Geist)
  - Applies global styles
  - Handles HTML metadata
- **Includes**: ThemeProvider wrapper
- **Do Not Change**: Core structure (only modify metadata if needed)

#### `src/app/page.tsx`
- **Purpose**: Main home page
- **Content**: Imports and renders all section components
- **Structure**:
  1. Header
  2. HeroSection
  3. StatsSection
  4. AboutSection
  5. TestimonialsSection
  6. ArticlesSection
  7. ProjectsSection
  8. ContactSection
  9. Footer
- **When to Change**: Add/remove sections or reorder them

#### `src/app/globals.css`
- **Purpose**: Global styles and animations
- **Includes**:
  - CSS variables for colors
  - Smooth scrolling
  - Custom scrollbar styling
  - Selection colors
  - Animation keyframes
  - Utility classes
- **When to Change**: Change colors, fonts, or add animations

### Component Files

#### `src/components/Header.tsx` (152 lines)
- **Purpose**: Sticky navigation header
- **Features**:
  - Logo with branding
  - Navigation links (Home, About, Portfolio, Experience, Articles, Contact)
  - Theme toggle button
  - Hire Me CTA button
  - Mobile hamburger menu
  - Animations with Framer Motion
- **Customization**:
  - Update navigation links (line ~17)
  - Change logo text (line ~45)
  - Update "Hire Me" button text

#### `src/components/ThemeToggle.tsx`
- **Purpose**: Sun/Moon icon button for theme switching
- **Features**:
  - Uses useTheme hook
  - Shows sun icon in dark mode
  - Shows moon icon in light mode
  - Smooth button animations
- **Do Not Change**: Core functionality

#### `src/components/HeroSection.tsx` (165 lines)
- **Purpose**: Welcome/introduction section
- **Sections**:
  - Greeting text
  - Animated name with stroke effect
  - Subtitle and bio
  - Social media icons (LinkedIn, GitHub, Email)
  - Call-to-action buttons
  - Floating tech icons animation
- **Customization**:
  - Update name (lines 45-50)
  - Update subtitle (line 57)
  - Update bio (line 65)
  - Update social links (line 35)
  - Replace emoji with actual image (line 110+)

#### `src/components/StatsSection.tsx` (68 lines)
- **Purpose**: Display key statistics
- **Content**:
  - Years of study (3+)
  - Projects completed (5+)
  - AI & Security focus
- **Customization**:
  - Update stat numbers and labels (line ~13)

#### `src/components/AboutSection.tsx` (110 lines)
- **Purpose**: Skills and "Why hire me" section
- **Layout**:
  - Left: Text content and bullet points
  - Right: 3 skill cards (Front-End, Back-End, AI/Research)
- **Customization**:
  - Update heading and description (line ~45)
  - Update bullet points (line ~55)
  - Update skill cards (line ~23)

#### `src/components/TestimonialsSection.tsx` (95 lines)
- **Purpose**: Display testimonials/reviews
- **Content**:
  - 3 testimonial cards with quotes
  - Author names and roles
  - Avatar emojis
  - Star ratings
- **Customization**:
  - Update testimonials (line ~13)
  - Change author names and roles
  - Replace emojis with actual images

#### `src/components/ArticlesSection.tsx` (105 lines)
- **Purpose**: Showcase blog articles
- **Content**:
  - 4 article cards
  - Categories
  - Publication dates
  - Icons per article
- **Customization**:
  - Add articles (line ~13)
  - Update categories
  - Change publication dates
  - Add article links

#### `src/components/ProjectsSection.tsx` (135 lines)
- **Purpose**: Portfolio projects showcase
- **Content**:
  - 3 featured projects
  - Project descriptions
  - Technology stacks
  - Project links
- **Customization**:
  - Update projects (line ~13)
  - Change descriptions
  - Update tech stacks
  - Change project links

#### `src/components/ContactSection.tsx` (155 lines)
- **Purpose**: Contact information and form
- **Content**:
  - Contact details (email, phone, location)
  - Contact form with fields
  - Name, Email, Subject, Message inputs
  - Submit button
- **Customization**:
  - Update email (line ~48)
  - Update phone (line ~54)
  - Update location (line ~60)
  - Connect form submission

#### `src/components/Footer.tsx` (125 lines)
- **Purpose**: Website footer
- **Content**:
  - Logo and branding
  - Quick links
  - Resources links
  - Social media links
  - Copyright info
- **Customization**:
  - Update links (line ~30)
  - Update social URLs (line ~66)
  - Change copyright year (auto-updates)

#### `src/components/HeaderWrapper.tsx`
- **Purpose**: Client-side wrapper for Header
- **Why Exists**: Ensures Header renders as client component
- **Do Not Change**: Core functionality

### Provider Files

#### `src/providers/ThemeProvider.tsx` (58 lines)
- **Purpose**: Theme context and state management
- **Features**:
  - ThemeContext for dark/light mode
  - useTheme hook for components
  - localStorage persistence
  - System preference detection
  - SSR-safe implementation
- **Do Not Change**: Core functionality (it's optimized for SSR)

## 📦 Configuration Files

### `package.json`
- **Content**: Project metadata and dependencies
- **Scripts**:
  - `npm run dev` - Development server
  - `npm run build` - Production build
  - `npm start` - Run production build
  - `npm run lint` - Code quality check

### `tsconfig.json`
- **Content**: TypeScript compiler options
- **Key Settings**:
  - Target: ES2020
  - Module: ESNext
  - Path aliases: `@/*` → `./src/*`
  - Strict mode enabled

### `tailwind.config.ts`
- **Content**: Tailwind CSS configuration
- **Extends**: Color schemes, fonts, spacing
- **Dark Mode**: Uses class strategy

### `next.config.ts`
- **Content**: Next.js configuration
- **Settings**: Image optimization, bundling

### `postcss.config.mjs`
- **Content**: PostCSS plugin configuration
- **Plugins**: Tailwind CSS PostCSS

### `eslint.config.mjs`
- **Content**: Code quality rules
- **Rules**: Next.js core web vitals

## 📖 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| `QUICK_START.md` | Get running in 5 minutes | 5 min |
| `PROJECT_OVERVIEW.md` | Full project overview | 10 min |
| `README_PORTFOLIO.md` | Complete documentation | 15 min |
| `CUSTOMIZATION_GUIDE.md` | Step-by-step customization | 20 min |
| `CONFIGURATION.md` | Technical setup guide | 15 min |
| `IMPLEMENTATION_SUMMARY.md` | What was built | 10 min |
| `FILE_STRUCTURE.md` | This file | 5 min |

## 🎯 Where to Edit for Common Tasks

### Change Name
- File: `src/components/HeroSection.tsx`
- Lines: 45-50
- Edit: "Niloy" → "Your Name"

### Change Email
- File: `src/components/ContactSection.tsx`
- Line: 48
- Edit: Email address

### Add Project
- File: `src/components/ProjectsSection.tsx`
- Line: 13+
- Add: New project to array

### Update Skills
- File: `src/components/AboutSection.tsx`
- Line: 23+
- Edit: Skill titles and descriptions

### Change Colors
- File: `src/app/globals.css`
- Lines: 3-7
- Edit: CSS variables

### Add Section
- Create: `src/components/NewSection.tsx`
- Edit: `src/app/page.tsx`
- Import and render component

### Update Logo
- File: `src/components/Header.tsx`
- Line: 45
- Edit: Logo text

## 📊 File Statistics

| Type | Count | Total Lines |
|------|-------|-------------|
| React Components | 10 | ~1500 |
| Provider Files | 1 | ~60 |
| App Files | 3 | ~200 |
| Config Files | 7 | ~150 |
| Documentation | 7 | ~8000 |
| **Total** | **28** | **~9,910** |

## 🔄 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - DOM rendering
- `next` - React framework
- `framer-motion` - Animations

### Dev Dependencies
- `typescript` - Type checking
- `tailwindcss` - CSS framework
- `@tailwindcss/postcss` - Tailwind CSS PostCSS
- `eslint` - Code linting
- `postcss` - CSS processing
- Type definitions for Node and React

## ✅ File Verification

All project files are present and configured correctly:

✅ `src/app/layout.tsx` - Root layout  
✅ `src/app/page.tsx` - Home page  
✅ `src/app/globals.css` - Global styles  
✅ `src/components/` - All 10 components created  
✅ `src/providers/ThemeProvider.tsx` - Theme management  
✅ `package.json` - All dependencies configured  
✅ `tailwind.config.ts` - Tailwind configured  
✅ `next.config.ts` - Next.js configured  
✅ `tsconfig.json` - TypeScript configured  
✅ `.vscode/tasks.json` - VS Code tasks configured  

## 🚀 Ready to Use!

All files are created, tested, and ready for customization. Pick any file from the list above and start editing!

**Start with:** `src/components/HeroSection.tsx` to update your name.

---

*For detailed customization steps, see `CUSTOMIZATION_GUIDE.md`*
