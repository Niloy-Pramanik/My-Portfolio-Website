# Portfolio Website Configuration

## Environment Variables

Create a `.env.local` file in the root directory for environment-specific settings:

```bash
# .env.local

# Contact Form Configuration
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
NEXT_PUBLIC_CONTACT_EMAIL=niloypramanik126@gmail.com

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourprofile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourprofile

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Don't include sensitive data like API keys.

## Tailwind CSS Configuration

The Tailwind configuration is in `tailwind.config.ts`. Main settings:

```ts
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        'custom-orange': '#FF6B6B',
      },
      fontFamily: {
        // Fonts are from Google Fonts (Geist Sans/Mono)
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  // Dark mode uses class strategy
  darkMode: 'class',
};
```

## Package Scripts Configuration

Edit `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",           // Development server
    "build": "next build",        // Production build
    "start": "next start",        // Run production
    "lint": "next lint",          // Code quality check
    "type-check": "tsc --noEmit"  // TypeScript check (add this if needed)
  }
}
```

## Next.js Configuration

Key settings in `next.config.ts`:

```ts
const config: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any https domain
      },
    ],
  },
  
  // Internationalization (optional)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
```

## TypeScript Configuration

Main settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    
    // Path aliases for cleaner imports
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## ESLint Configuration

Code quality rules in `eslint.config.mjs`:

```js
export default [
  // Next.js rules
  {
    name: "ESLint Config Next.js",
    rules: require("next/core-web-vitals").rules,
  },
  // Custom rules can be added here
];
```

## PostCSS Configuration

CSS processing in `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},  // Tailwind CSS processing
  },
};
```

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile: iOS 12+, Android 5+

## Performance Optimization

### Image Optimization
1. Use Next.js `Image` component instead of `<img>`
2. Provide width and height for proper sizing
3. Use appropriate formats (WebP with fallback)

### Code Splitting
- Automatic with Next.js App Router
- Dynamic imports for large components:
  ```tsx
  import dynamic from 'next/dynamic';
  const HeavyComponent = dynamic(() => import('./Heavy'));
  ```

### Font Optimization
- Using system fonts (Geist) which are optimized
- Preload fonts in layout.tsx if needed

### Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
# Then configure in next.config.ts
```

## Internationalization (i18n)

To add multiple languages:

1. Install i18n library:
   ```bash
   npm install next-intl
   ```

2. Create translation files:
   ```
   messages/
   ├── en.json
   ├── es.json
   └── fr.json
   ```

3. Configure in next.config.ts

## Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Use `NEXT_PUBLIC_` only for public data
   - Keep sensitive keys in server-only env vars

2. **Content Security Policy**
   - Implement CSP headers in `next.config.ts`
   - Restrict script sources

3. **API Routes**
   - Validate and sanitize all inputs
   - Use rate limiting
   - Implement CORS if needed

4. **Dependencies**
   - Regular security audits: `npm audit`
   - Keep dependencies updated: `npm update`
   - Use lock file (package-lock.json)

## Monitoring & Analytics

### Google Analytics Setup
1. Create GA4 property at google.com/analytics
2. Get Measurement ID (G-XXXXXXXXXX)
3. Install gtag:
   ```bash
   npm install @react-google-analytics/core
   ```
4. Configure in layout.tsx

### Error Tracking (Optional)
- **Sentry**: npm install @sentry/nextjs
- **LogRocket**: npm install logrocket

## Backup & Version Control

### Git Setup
```bash
# Initial setup (already done)
git config user.email "niloypramanik126@gmail.com"
git config user.name "Niloy Pramanik"

# Regular commits
git add .
git commit -m "Add portfolio sections"
git push origin main
```

### Important Files to Backup
- `.env.local` (environment variables)
- Any custom images in `public/`
- Updated component files

## Building for Different Environments

### Development Build
```bash
npm run dev
# Development server with hot reload
```

### Staging Build (Production-like)
```bash
npm run build
npm start
# Tests production build locally
```

### Production Build
```bash
# Deploy to Vercel or other platforms
# Vercel auto-builds on git push
```

## Useful Development Tools

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Thunder Client (for API testing)
- Git Graph

### Debugging
```bash
# Debug in terminal
node --inspect-brk ./node_modules/.bin/next dev

# Use Chrome DevTools: chrome://inspect
```

### Performance Testing
- Lighthouse (built into Chrome DevTools)
- Web Vitals: https://web.dev/vitals
- PageSpeed Insights: https://pagespeed.web.dev

## Deployment Checklist

- [ ] All links updated and working
- [ ] Images replaced with actual photos
- [ ] Content proofread and updated
- [ ] Contact form connected
- [ ] Social links verified
- [ ] Mobile responsive tested
- [ ] Dark/Light mode tested
- [ ] Build succeeds: `npm run build`
- [ ] No console errors
- [ ] SEO metadata updated
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics configured

## Troubleshooting Configuration

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules/.cache
npm run build
```

### Hot Reload Not Working
- Check if dev server is actually running
- Try restarting: `Ctrl+C` then `npm run dev`
- Clear browser cache

### Module Resolution Issues
- Verify path aliases in `tsconfig.json`
- Ensure `@/` prefix is used correctly
- Restart TypeScript server (Cmd+Shift+P)

### Tailwind Styles Not Applying
- Check file is in `src/` directory
- Verify class names are spelled correctly
- Run `npm run build` to check for issues

---

For more help, refer to the documentation files or official framework documentation.
