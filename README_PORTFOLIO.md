# Niloy Pramanik - Personal Portfolio Website

A modern, fully responsive, and interactive personal portfolio website showcasing full-stack development and AI engineering expertise.

## 🚀 Features

### Design & Theme
- **Responsive Design**: Fully responsive on mobile (320px+), tablet (768px+), and desktop viewports
- **Dark/Light Mode Toggle**: Seamless theme switching with localStorage persistence
- **Glassmorphism UI**: Premium glass effect with soft gradients and subtle shadows
- **Smooth Animations**: Framer Motion animations for delightful interactions
- **Accessibility First**: WCAG compliant with proper contrast ratios and touch targets (44x44px minimum)

### Sections
1. **Header/Navigation**
   - Sticky navigation with theme toggle
   - Mobile hamburger menu
   - Quick access links
   - "Hire Me" CTA button

2. **Hero Section**
   - Welcome greeting with animated text
   - Name with hollow stroke effect
   - Social media links
   - Call-to-action buttons
   - Floating tech icon animations

3. **Stats Section**
   - Key metrics display
   - Animated counter reveal
   - Visual wave background effect

4. **About Section**
   - Professional summary
   - Skill cards with hover effects
   - Feature highlights

5. **Testimonials**
   - Reviews from colleagues and professors
   - Star ratings
   - Professional testimonies

6. **Articles & Research**
   - Latest blog posts
   - Research highlights
   - Categorized content
   - Publication dates

7. **Projects Portfolio**
   - Featured projects showcase
   - Technology stack display
   - Project descriptions
   - Call-to-action links

8. **Contact Section**
   - Contact information
   - Contact form
   - Direct communication options
   - Email, phone, and location details

9. **Footer**
   - Quick links
   - Social media
   - Copyright information
   - Made with love indicator

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (React 19) with App Router
- **Styling**: Tailwind CSS 3 with dark mode support
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Build Tool**: Turbopack for faster builds
- **Dev Server**: Next.js built-in development server

## 📁 Project Structure

```
my-portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   ├── page.tsx            # Main home page
│   │   ├── globals.css         # Global styles and animations
│   │   └── favicon.ico         # Favicon
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── HeaderWrapper.tsx   # Client wrapper for Header
│   │   ├── ThemeToggle.tsx     # Theme toggle button
│   │   ├── HeroSection.tsx     # Hero/welcome section
│   │   ├── StatsSection.tsx    # Statistics display
│   │   ├── AboutSection.tsx    # About/skills section
│   │   ├── TestimonialsSection.tsx   # Testimonials/reviews
│   │   ├── ArticlesSection.tsx # Blog articles showcase
│   │   ├── ProjectsSection.tsx # Portfolio projects
│   │   ├── ContactSection.tsx  # Contact form
│   │   └── Footer.tsx          # Footer section
│   └── providers/
│       └── ThemeProvider.tsx   # Theme context and hooks
├── public/
│   ├── next.svg
│   └── vercel.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.ts
```

## 🎨 Color Palette

### Light Mode
- **Background**: `#F0F4F8` (Light blue-gray)
- **Text**: `#0F172A` (Dark navy)
- **Primary Accent**: `#FF6B6B` (Coral/Orange)
- **Cards**: `#FFFFFF` (White)
- **Secondary Text**: `#64748B` (Muted gray)

### Dark Mode
- **Background**: `#0F172A` (Deep navy)
- **Text**: `#F1F5F9` (Off-white)
- **Primary Accent**: `#FF6B6B` (Coral/Orange - consistent)
- **Cards**: `#1E293B` (Dark slate)
- **Secondary Text**: `#94A3B8` (Light gray)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 639px (full width optimization)
- **Tablet**: 640px - 1023px (2-column layouts)
- **Desktop**: 1024px+ (3-column layouts and full features)

Mobile-specific features:
- Hamburger menu navigation
- Stacked layouts
- Scaled typography
- Touch-friendly buttons (44x44px minimum)
- Optimized spacing

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd my-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Default port is 3000, but will auto-increment if in use

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot reload enabled

### Production Build
```bash
npm run build
```
Creates an optimized production build

### Start Production Server
```bash
npm start
```
Runs the production build locally

### Linting
```bash
npm run lint
```
Checks code quality with ESLint

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy is using Vercel:

1. Push your repository to GitHub
2. Connect to Vercel
3. Vercel automatically detects Next.js and configures settings
4. Deployment happens on every push to main

```bash
# Using Vercel CLI
npm i -g vercel
vercel
```

### Other Platforms

**Netlify**:
- Set build command: `npm run build`
- Set publish directory: `.next`

**Docker**:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

## 🎯 Features Implementation Details

### Theme System
- Theme state managed via Context API
- Theme preference saved to `localStorage`
- System preference detected via `prefers-color-scheme`
- Smooth transitions between themes
- No flash of unstyled content (FOUC)

### Responsive Images
- HTML emoji placeholders (can replace with actual images)
- Responsive sizing using Tailwind classes
- Mobile-optimized lazy loading ready

### Performance
- Static site generation (SSG) for fast loading
- Turbopack for 5x faster builds
- Image optimization ready
- Code splitting automatic with Next.js

### SEO
- Metadata configured in layout
- Semantic HTML structure
- Open Graph ready
- Mobile-first indexing friendly

## ✨ Customization

### Update Personal Information

**Hero Section** (`src/components/HeroSection.tsx`):
- Replace name and subtitle
- Update bio text
- Add actual profile image
- Update social media links

**Contact Information** (`src/components/ContactSection.tsx`):
- Update email address
- Update phone number
- Update location
- Configure form submission

**Projects** (`src/components/ProjectsSection.tsx`):
- Replace project titles and descriptions
- Update technology stacks
- Add project links
- Replace emoji placeholders with images

**Articles** (`src/components/ArticlesSection.tsx`):
- Add actual blog links
- Update categories
- Add publication dates
- Link to blog platform

### Customize Colors
Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --background: #F0F4F8;      /* Change background color */
  --foreground: #0F172A;      /* Change text color */
  --primary-accent: #FF6B6B;  /* Change accent color */
}
```

### Add More Sections
Each section is a self-contained component. To add more:

1. Create new component in `src/components/`
2. Mark it with `'use client'` if using hooks
3. Import in `src/app/page.tsx`
4. Add to main layout

## 🐛 Troubleshooting

### Theme not persisting
- Check if localStorage is enabled in browser
- Clear browser cache
- Check browser console for errors

### Animations not smooth
- Disable browser extensions that might block animations
- Check GPU acceleration is enabled
- Verify Framer Motion is installed: `npm list framer-motion`

### Build failures
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (should be 18+)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 📝 License

This portfolio website is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📧 Contact

For inquiries or collaborations:
- **Email**: niloypramanik126@gmail.com
- **Phone**: +880 1796 894 640
- **Location**: Dhaka, Bangladesh

---

**Built with** ❤️ **using React, Next.js & Tailwind CSS**
