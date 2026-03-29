# Grid Background Components

## Overview
Three high-performance React components for adding a subtle dotted grid background to your portfolio website.

## Components

### 1. **GridBackgroundCSS** (Recommended) ⭐
Pure CSS version using `radial-gradient` - **Best for performance**

**Pros:**
- Fastest performance
- No canvas rendering
- Works with SSR
- Perfectly responsive
- Zero JavaScript overhead

**Cons:**
- Less customizable dot shapes

**Usage:**
```tsx
import GridBackgroundCSS from '@/components/GridBackgroundCSS';

export default function Page() {
  return (
    <div>
      <GridBackgroundCSS
        dotSpacing={25}
        dotSize={1.5}
        dotColor="#7C3AED"
        backgroundColor="#020617"
        opacity={0.4}
        enableGlow={true}
        enableAnimation={false}
      />
      {/* Your content goes here */}
    </div>
  );
}
```

### 2. **GridBackground** (Canvas Version)
Canvas-based implementation - **For maximum control**

**Pros:**
- More customizable
- Better control over dot rendering
- Can add advanced effects
- Pixel-perfect dots

**Cons:**
- Requires JavaScript
- Canvas rendering on resize

**Usage:**
```tsx
import GridBackground from '@/components/GridBackground';

export default function Page() {
  return (
    <div>
      <GridBackground
        dotSize={1.5}
        dotSpacing={25}
        dotColor="#7C3AED"
        backgroundColor="#020617"
        opacity={0.4}
        enableGlow={true}
        enableAnimation={false}
      />
      {/* Your content goes here */}
    </div>
  );
}
```

### 3. **LayoutWithGrid** (Wrapper)
Pre-configured layout component - **Easiest to use**

**Usage:**
```tsx
import LayoutWithGrid from '@/components/LayoutWithGrid';

export default function RootLayout() {
  return (
    <LayoutWithGrid
      gridSpacing={25}
      dotSize={1.5}
      dotColor="#7C3AED"
      backgroundColor="#020617"
      opacity={0.4}
      enableAnimation={false}
    >
      {/* Your entire page content */}
    </LayoutWithGrid>
  );
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dotSpacing` | number | 25 | Distance between dots in pixels (20-50) |
| `dotSize` | number | 1.5 | Size of dots in pixels (1-3) |
| `dotColor` | string | #7C3AED | Hex color of dots |
| `backgroundColor` | string | #020617 | Main background color |
| `opacity` | number | 0.4 | Opacity of dots (0-1) |
| `enableGlow` | boolean | true | Add subtle glow effect |
| `enableAnimation` | boolean | false | Add subtle floating animation |
| `className` | string | '' | Additional CSS classes |

## Recommended Settings

### Dark Theme (Default)
```tsx
<GridBackgroundCSS
  backgroundColor="#020617"      // Very dark navy
  dotColor="#7C3AED"            // Purple
  dotSpacing={25}
  opacity={0.4}
  enableGlow={true}
/>
```

### Light Theme
```tsx
<GridBackgroundCSS
  backgroundColor="#F8F9FC"      // Light background
  dotColor="#E5E7EB"            // Light gray
  dotSpacing={25}
  opacity={0.15}
  enableGlow={false}
/>
```

### Subtle Pattern
```tsx
<GridBackgroundCSS
  dotSpacing={30}
  opacity={0.25}
  enableGlow={true}
/>
```

### Dense Pattern
```tsx
<GridBackgroundCSS
  dotSpacing={15}
  opacity={0.3}
  enableGlow={true}
/>
```

## Integration with Your Portfolio

### Option 1: Add to Root Layout
```tsx
// app/layout.tsx
import GridBackgroundCSS from '@/components/GridBackgroundCSS';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GridBackgroundCSS
          dotSpacing={25}
          dotColor="#7C3AED"
          backgroundColor="#020617"
          opacity={0.4}
          enableGlow={true}
        />
        {children}
      </body>
    </html>
  );
}
```

### Option 2: Wrap Specific Sections
```tsx
// app/page.tsx
import GridBackgroundCSS from '@/components/GridBackgroundCSS';

export default function HomePage() {
  return (
    <div>
      <GridBackgroundCSS />
      <Header />
      <Hero />
      <About />
      {/* ... */}
    </div>
  );
}
```

### Option 3: Use Layout Wrapper
```tsx
// app/layout.tsx
import LayoutWithGrid from '@/components/LayoutWithGrid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutWithGrid>
      {children}
    </LayoutWithGrid>
  );
}
```

## Performance Notes

- **GridBackgroundCSS**: ⚡ Fastest - Pure CSS
- **GridBackground**: 🚀 Fast - Canvas-based with optimization
- **LayoutWithGrid**: ⚡ Fastest - Uses CSS version

All components use `memo` for optimization and won't re-render unnecessarily.

## Customization

### Dark Mode Support
The components are optimized for dark mode by default. To add light mode support:

```tsx
import { useTheme } from 'next-themes'; // or your theme provider
import GridBackgroundCSS from '@/components/GridBackgroundCSS';

export default function SmartGrid() {
  const { theme } = useTheme();

  return (
    <GridBackgroundCSS
      backgroundColor={theme === 'dark' ? '#020617' : '#F8F9FC'}
      dotColor={theme === 'dark' ? '#7C3AED' : '#E5E7EB'}
      opacity={theme === 'dark' ? 0.4 : 0.15}
    />
  );
}
```

### Responsive Adjustments
```tsx
import { useMediaQuery } from 'react-responsive';
import GridBackgroundCSS from '@/components/GridBackgroundCSS';

export default function ResponsiveGrid() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <GridBackgroundCSS
      dotSpacing={isMobile ? 20 : 25}
      dotSize={isMobile ? 1 : 1.5}
      opacity={isMobile ? 0.3 : 0.4}
    />
  );
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Tips & Tricks

1. **Reduce Motion**: Disable animation for users with `prefers-reduced-motion`
2. **Performance**: Use CSS version for best performance
3. **Accessibility**: Grid doesn't interfere with text contrast
4. **Printing**: Grid won't print (`:not(print)` compatible)
5. **Mobile**: Consider slightly larger dot spacing on mobile devices

## License
MIT - Use freely in your projects!
