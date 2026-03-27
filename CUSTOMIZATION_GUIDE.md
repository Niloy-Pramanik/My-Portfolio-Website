# Portfolio Website - Setup & Customization Guide

## 🎯 Quick Start

### 1. View the Website
The website is currently running at **http://localhost:3000**

To restart the development server at any time:
```bash
cd /Users/niloypramanik/my-portfolio-website
npm run dev
```

### 2. Available Commands
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Run production build locally
npm run lint    # Check code quality
```

### 3. VS Code Tasks
Open the Command Palette (Cmd+Shift+P) and type "run task":
- **dev server** (Ctrl+Shift+B) - Start development
- **build** - Create production build
- **lint** - Check code quality

## 📝 Customization Guide

### 1. Update Personal Information

#### Hero Section
File: `src/components/HeroSection.tsx`

```tsx
// Update name
<h1>Niloy</h1>
<h2>Pramanik</h2>

// Update subtitle
<p className="...">
  Full-Stack Developer & AI Engineering Enthusiast
</p>

// Update bio
<p className="...">
  I am a dedicated Computer Science and Engineering student...
</p>

// Update social links (around line 40)
const socialLinks = [
  {
    icon: (...),
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',  // ← Update this
  },
  // ...
];

// Update CV download link
<a href="path/to/your/cv.pdf">Download CV</a>
```

#### Contact Information
File: `src/components/ContactSection.tsx`

```tsx
// Update contact details (around line 45)
{
  title: 'Email',
  value: 'your.email@example.com',  // ← Update
  link: 'mailto:your.email@example.com',
},
{
  title: 'Phone',
  value: '+880 17XX XXX XXXX',  // ← Update
  link: 'tel:+88017XXXXXXXX',
},
{
  title: 'Location',
  value: 'City, Country',  // ← Update
},
```

### 2. Update Content Sections

#### Stats Section
File: `src/components/StatsSection.tsx`

```tsx
const stats = [
  {
    number: '3+',
    label: 'Years of CS Studies',  // ← Update
  },
  {
    number: '5+',
    label: 'Projects Completed',  // ← Update
  },
  {
    number: '∞',
    label: 'Focus on AI & Security',  // ← Update
  },
];
```

#### Skills/About Section
File: `src/components/AboutSection.tsx`

```tsx
const skills = [
  {
    title: 'Front-End Development',
    description: 'React, Next.js, Tailwind CSS, TypeScript',  // ← Update
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add or remove skills as needed
];

// Update about text
<h2>Why hire me for your next project?</h2>
<p>I bring a unique intersection of...</p>  // ← Update
```

#### Projects Section
File: `src/components/ProjectsSection.tsx`

```tsx
const projects = [
  {
    title: 'HireMe Platform',
    description: 'A comprehensive job matching platform...',  // ← Update
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],  // ← Update
    image: '💼',
    color: 'from-blue-500 to-cyan-500',
    link: 'https://github.com/yourprofile/hireMe',  // ← Update
  },
  // Add more projects
];
```

#### Articles Section
File: `src/components/ArticlesSection.tsx`

```tsx
const articles = [
  {
    title: 'The Future of AI in Web Development',
    description: 'Exploring how AI is transforming...',  // ← Update
    category: 'AI & Tech',
    date: 'Mar 2024',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
  },
  // Update or add more articles
];
```

#### Testimonials Section
File: `src/components/TestimonialsSection.tsx`

```tsx
const testimonials = [
  {
    text: 'Niloy demonstrates exceptional problem-solving skills...',  // ← Update
    author: 'Prof. Ahmed Hassan',  // ← Update
    role: 'Computer Science Department',  // ← Update
    avatar: '👨‍🏫',
  },
  // Update or add more testimonials
];
```

#### Footer Section
File: `src/components/Footer.tsx`

```tsx
// Update navigation links (around line 30)
{['Home', 'About', 'Portfolio', 'Experience'].map((link) => (
  <li key={link}>
    <a href="#your-link">{link}</a>  // ← Update href
  </li>
))}

// Update social links
const socialLinks = [
  { icon: 'GitHub', url: 'https://github.com/yourprofile' },  // ← Update
  { icon: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },  // ← Update
];
```

### 3. Replace Images

#### Profile Picture
File: `src/components/HeroSection.tsx` (line ~110)

Replace the emoji placeholder with an actual image:
```tsx
// Current emoji version
<div className="absolute inset-0 bg-gradient-to-br...">
  <div className="text-center">
    <div className="text-6xl mb-2">👨‍💻</div>
    <p>Profile Image</p>
  </div>
</div>

// Replace with Next.js Image:
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Niloy Pramanik"
  width={400}
  height={400}
  className="rounded-2xl"
/>
```

Place image in `public/` folder (e.g., `public/profile.jpg`)

#### Project Images
File: `src/components/ProjectsSection.tsx` (line ~105)

Replace emoji with actual images:
```tsx
// Replace this:
<div className="h-64 md:h-80 bg-gradient-to-br ... text-6xl">
  {project.image}
</div>

// With this:
import Image from 'next/image';

<div className="h-64 md:h-80 relative rounded-2xl overflow-hidden">
  <Image
    src={project.imagePath}
    alt={project.title}
    fill
    className="object-cover"
  />
</div>
```

### 4. Customize Colors

Edit `src/app/globals.css`:

```css
:root {
  --background: #F0F4F8;      /* Light mode background */
  --foreground: #0F172A;      /* Light mode text */
  --primary-accent: #FF6B6B;  /* Change primary accent color */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0F172A;    /* Dark mode background */
    --foreground: #F1F5F9;    /* Dark mode text */
  }
}
```

**Tailwind Color Options**: `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

### 5. Add New Sections

1. Create new component in `src/components/`:

```tsx
// src/components/MyNewSection.tsx
'use client';

import { motion } from 'framer-motion';

export function MyNewSection() {
  return (
    <section id="my-section" className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold">My New Section</h2>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

2. Import and add to `src/app/page.tsx`:

```tsx
import { MyNewSection } from '@/components/MyNewSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeaderWrapper />
      <main className="flex-1">
        <HeroSection />
        {/* ... other sections ... */}
        <MyNewSection />  {/* ← Add here */}
      </main>
      <Footer />
    </div>
  );
}
```

3. Update header navigation if needed:

```tsx
// src/components/Header.tsx (around line 17)
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'My New Section', href: '#my-section' },  // ← Add link
  // ...
];
```

### 6. Connect Contact Form

The contact form is currently a placeholder. To make it functional:

#### Option 1: Using Formspree
```tsx
// src/components/ContactSection.tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  {/* form fields remain the same */}
</form>
```

Get form ID from [formspree.io](https://formspree.io)

#### Option 2: Using API Route
Create `src/app/api/contact/route.ts`:

```ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();
  
  // Send email using service like SendGrid
  // Implement your email logic here
  
  return NextResponse.json({ success: true });
}
```

## 🎨 Typography & Styling

### Font Sizes (Tailwind)
- `text-xs` - 12px
- `text-sm` - 14px
- `text-base` - 16px
- `text-lg` - 18px
- `text-xl` - 20px
- `text-2xl` - 24px
- `text-3xl` - 30px
- `text-4xl` - 36px
- `text-5xl` - 48px
- `text-6xl` - 60px
- `text-7xl` - 72px

### Common Tailwind Classes
```
Spacing: p-4, m-4, gap-4 (4 = 1rem)
Border: border, rounded-lg, border-slate-200
Colors: text-slate-900, bg-orange-500, hover:bg-orange-600
Responsive: md:text-4xl, sm:flex, lg:grid
```

## 📦 Deployment

### To Vercel
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel auto-detects Next.js and deploys
4. Get custom domain and SSL automatically

### To Other Platforms
```bash
npm run build  # Creates optimized build
npm start      # Run production build locally
```

## 🐛 Common Issues

**Issue**: Styles not updating in dev mode
```bash
# Clear cache and rebuild
rm -rf .next node_modules/.cache
npm run dev
```

**Issue**: Theme toggle not working
- Check localStorage is enabled
- Open DevTools console for errors
- Refresh browser

**Issue**: Images not showing
- Ensure images are in `public/` folder
- Check file paths in components
- Verify image filenames match exactly

**Issue**: Build fails
```bash
# Clear everything and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## 📚 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript](https://www.typescriptlang.org)

## ✨ Pro Tips

1. Use `Cmd+Shift+P` → "Format Document" to auto-format code
2. Use Tailwind CSS IntelliSense extension for autocomplete
3. Test on mobile: use DevTools device emulation (F12)
4. Check performance: Lighthouse in DevTools
5. Deploy changes instantly with Git push to Vercel

---

**Happy customizing!** 🚀
