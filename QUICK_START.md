# 🚀 Quick Start Guide

## Your Portfolio is Ready! ✨

Your fully functional portfolio website is running at **http://localhost:3000**

---

## 📋 5-Minute Setup

### 1. View Your Website
Open browser → **http://localhost:3000**

### 2. Test Dark Mode
Click the sun/moon icon in the top-right corner

### 3. Test Mobile View
Press F12 → Click device icon → Choose "iPhone 12"

### 4. Explore All Sections
Scroll down through:
- Hero (Welcome)
- Stats (Metrics)
- About (Skills)
- Testimonials
- Articles
- Projects
- Contact
- Footer

---

## 🎨 Make It Your Own (Next 30 Minutes)

### Step 1: Update Your Name
1. Open file: `src/components/HeroSection.tsx`
2. Find line 45 with "Niloy" and "Pramanik"
3. Replace with your name
4. Refresh browser (F5)

### Step 2: Update Your Bio
1. Same file, find the long paragraph starting with "I am a dedicated..."
2. Replace with your bio
3. Refresh browser

### Step 3: Update Contact Info
1. Open file: `src/components/ContactSection.tsx`
2. Find email, phone, and location
3. Replace with your details
4. Refresh browser

### Step 4: Update Social Links
1. Open file: `src/components/HeroSection.tsx`
2. Find `socialLinks` array
3. Update GitHub, LinkedIn, Email URLs
4. Refresh browser

### Step 5: Update Projects
1. Open file: `src/components/ProjectsSection.tsx`
2. Update project titles, descriptions, tech stack
3. Change project links
4. Refresh browser

---

## 📁 Key Files to Edit

```
src/components/
├── HeroSection.tsx          ← Name, bio, social links
├── AboutSection.tsx         ← Skills, description
├── ProjectsSection.tsx      ← Your projects
├── ArticlesSection.tsx      ← Blog posts
├── ContactSection.tsx       ← Email, phone, contact form
├── TestimonialsSection.tsx  ← Quotes from others
├── Header.tsx               ← Navigation, logo
└── Footer.tsx               ← Footer links

src/app/
└── globals.css              ← Colors, fonts, animations

src/providers/
└── ThemeProvider.tsx        ← Theme management (don't change)
```

---

## 🎯 Customization Tasks (Pick One)

### Add Your Profile Picture
```bash
# 1. Put image in: public/profile.jpg
# 2. Edit: src/components/HeroSection.tsx
# 3. Replace emoji with Image component
# 4. Save and refresh
```

### Change Colors
```bash
# 1. Open: src/app/globals.css
# 2. Edit :root variables:
#    --primary-accent: #FF6B6B;  (change this)
# 3. Refresh browser
```

### Add New Section
```bash
# 1. Create: src/components/MySection.tsx
# 2. Add to: src/app/page.tsx
# 3. Import and include in layout
# 4. Test in browser
```

### Connect Contact Form
```bash
# 1. Visit: https://formspree.io
# 2. Create form, get ID
# 3. Update ContactSection.tsx
# 4. Test by sending message
```

---

## 🧪 Testing Your Changes

### Live Reload
Changes save automatically → Website updates instantly  
*(Just refresh browser if not immediate)*

### Mobile Testing
- Press **F12** (or right-click → Inspect)
- Click device icon (top-left of DevTools)
- Select "iPhone 12" or "iPad"
- Test all sections on mobile size

### Dark Mode
- Click sun/moon icon (top-right)
- Check colors look good
- Refresh page to verify saves

### All Browsers
- ✅ Chrome/Edge: Should work perfectly
- ✅ Firefox: Should work perfectly
- ✅ Safari: Should work perfectly
- ✅ Mobile Safari: Should work perfectly

---

## 📱 Responsive Breakpoints

Website adapts to:
- **📱 Mobile**: 320px - 767px (phones)
- **📱 Tablet**: 768px - 1023px (iPad)
- **💻 Desktop**: 1024px+ (large screens)

---

## 🚀 Deploy Your Website (Later)

### Option 1: Vercel (Easiest)
```bash
# 1. Push code to GitHub
# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Select your GitHub repo
# 5. Click Deploy (done!)
```

### Option 2: Build and Host
```bash
npm run build        # Creates .next folder
npm start           # Runs production version
# Upload .next, node_modules, public to hosting
```

---

## 🔄 Development Commands

```bash
npm run dev         # Start development server (you're using this)
npm run build       # Create production build
npm start          # Run production version
npm run lint       # Check code quality
```

---

## 📚 Documentation Files

All guidance is here:
- 📄 `PROJECT_OVERVIEW.md` - Full overview (read first!)
- 📄 `README_PORTFOLIO.md` - Complete documentation
- 📄 `CUSTOMIZATION_GUIDE.md` - Detailed customization steps
- 📄 `CONFIGURATION.md` - Technical configuration

---

## ✨ Pro Tips

1. **Ctrl+Shift+B** → Run development server task in VS Code
2. **Ctrl+//** → Comment/uncomment code quickly
3. **Alt+Click** → Multi-cursor editing
4. **F12** → Open DevTools for debugging
5. **Cmd+K Cmd+F** → Format document (auto-indent)

---

## 🆘 Quick Troubleshooting

### Website not updating?
```bash
# Refresh browser (Cmd+Shift+R for hard refresh)
# Check if dev server is running
npm run dev  # Start if not running
```

### Dark mode not saving?
```bash
# Clear browser cache (Cmd+Shift+Delete)
# Or use private/incognito window
```

### Images not showing?
```bash
# Make sure images are in public/ folder
# Check file path in component
# Refresh browser (F5)
```

### Build fails?
```bash
rm -rf .next node_modules/.cache
npm run build  # Try again
```

---

## ✅ Customization Checklist

- [ ] Update your name
- [ ] Update your bio
- [ ] Update your contact email
- [ ] Update your phone number
- [ ] Update your location
- [ ] Update social media links
- [ ] Update project descriptions
- [ ] Replace project emojis with images
- [ ] Update skills
- [ ] Test on mobile (F12 → Device)
- [ ] Test dark mode (click icon)
- [ ] Ready to deploy!

---

## 🎓 Learning Resources

Already installed and ready to use:
- **Next.js** - React framework (docs: nextjs.org)
- **React** - UI library (docs: react.dev)
- **Tailwind CSS** - Utility CSS (docs: tailwindcss.com)
- **Framer Motion** - Animations (docs: framer.com/motion)
- **TypeScript** - Type-safe JavaScript (docs: typescriptlang.org)

---

## 🎉 You're Ready!

Your portfolio is:
✅ Fully functional  
✅ Mobile responsive  
✅ Dark mode enabled  
✅ Production ready  
✅ Waiting for your personal touch  

**Start by opening** `src/components/HeroSection.tsx` **and updating your name!**

Then just refresh at http://localhost:3000 to see changes live.

---

## 💬 Summary

1. **Website running?** → Yes! At http://localhost:3000
2. **Can I customize?** → Yes! Just edit component files
3. **Will changes show up?** → Yes! Automatically reload
4. **Is it mobile responsive?** → Yes! Test with F12
5. **Can I deploy?** → Yes! Push to GitHub → Vercel

**Happy building! 🚀**

---

*Made with ❤️ using Next.js, React, TypeScript, and Tailwind CSS*
