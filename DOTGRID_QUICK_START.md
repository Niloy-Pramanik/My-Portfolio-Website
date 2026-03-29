# 🎮 DotGrid Quick Integration Guide

## What You Got

An **interactive, physics-based dot grid** that:
- ✅ Responds to mouse movement
- ✅ Changes color near cursor
- ✅ Pushes dots with fast mouse movement
- ✅ Explodes on click
- ✅ Elastic return animation
- ✅ High performance (canvas-based)
- ✅ Fully responsive

---

## 📦 Files Created

```
src/components/
├── DotGrid.tsx              Main component
└── DotGridExamples.tsx      Usage examples & presets

DOTGRID_GUIDE.md             Full documentation
```

---

## 🚀 30-Second Integration

### Step 1: Import
```tsx
import DotGrid from '@/components/DotGrid';
```

### Step 2: Add to Your Layout
```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="relative overflow-hidden">
        {/* Add this line */}
        <div className="fixed inset-0 -z-10">
          <DotGrid />
        </div>
        
        {/* Your content */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
```

### Step 3: Done! 🎉

---

## 🎨 Default Settings

```
Dots:         16px circles
Gap:          32px spacing
Base Color:   #5227FF (Purple)
Active Color: #5227FF (Same)
Proximity:    150px (mouse detection)
Speed Trigger: 100px/s (activation threshold)
Click Effect: 250px radius explosion
Physics:      Elastic with inertia
```

---

## 💡 Common Configurations

### Hero Section (Recommended)
```tsx
<DotGrid
  dotSize={14}
  gap={28}
  baseColor="#7C3AED"
  activeColor="#A78BFA"
  proximity={120}
  speedTrigger={100}
/>
```

### Subtle Background
```tsx
<DotGrid
  dotSize={10}
  gap={40}
  baseColor="#6366F1"
  activeColor="#818CF8"
  proximity={80}
  speedTrigger={150}
/>
```

### Bold Interactive
```tsx
<DotGrid
  dotSize={20}
  gap={24}
  baseColor="#7C3AED"
  activeColor="#FF6F61"
  proximity={180}
  speedTrigger={50}
  shockStrength={8}
/>
```

---

## 📊 Props Overview

| Prop | Default | Effect |
|------|---------|--------|
| `dotSize` | 16 | Dot size |
| `gap` | 32 | Spacing |
| `baseColor` | #5227FF | Default color |
| `activeColor` | #5227FF | Hover color |
| `proximity` | 150 | Detection range |
| `speedTrigger` | 100 | Min speed to activate |
| `shockRadius` | 250 | Click effect size |
| `shockStrength` | 5 | Push force |
| `resistance` | 750 | Physics friction |
| `returnDuration` | 1.5 | Return time (s) |

---

## 🎯 Integration Examples

### Full-Screen Hero
```tsx
<section className="relative w-full h-screen overflow-hidden">
  <DotGrid
    dotSize={14}
    gap={28}
    baseColor="#7C3AED"
    activeColor="#A78BFA"
  />
  
  <div className="relative z-10 flex items-center justify-center h-full">
    <h1 className="text-4xl font-bold text-white">Welcome</h1>
  </div>
</section>
```

### Fixed Background
```tsx
<div className="relative min-h-screen">
  <div className="fixed inset-0 -z-10">
    <DotGrid />
  </div>
  
  <div className="relative z-0">
    {/* Your scrollable content */}
  </div>
</div>
```

### Multiple Sections
```tsx
{/* Section 1 with interactive dots */}
<section className="relative h-screen">
  <DotGrid baseColor="#7C3AED" activeColor="#A78BFA" />
  <div className="relative z-10">Content 1</div>
</section>

{/* Section 2 with different dots */}
<section className="relative h-screen">
  <DotGrid baseColor="#6366F1" activeColor="#818CF8" />
  <div className="relative z-10">Content 2</div>
</section>
```

---

## 🎮 User Interactions

1. **Move Mouse** → Dots change color (within proximity)
2. **Move Fast** → Dots push away (if speed > speedTrigger)
3. **Click** → Dots explode outward
4. **Release** → Dots smoothly return

---

## 🚀 Usage Presets (Copy from DotGridExamples.tsx)

```tsx
// Import presets
import {
  DOT_GRID_PRESETS,
  DOT_GRID_SIZES,
  DOT_GRID_INTERACTIONS
} from '@/components/DotGridExamples';

// Use them
<DotGrid
  {...DOT_GRID_PRESETS.purple}
  {...DOT_GRID_SIZES.large}
  {...DOT_GRID_INTERACTIONS.moderate}
/>
```

---

## 🎨 Color Themes

```tsx
// Purple (Recommended)
<DotGrid baseColor="#7C3AED" activeColor="#A78BFA" />

// Blue
<DotGrid baseColor="#6366F1" activeColor="#818CF8" />

// Red
<DotGrid baseColor="#DC2626" activeColor="#F87171" />

// Green
<DotGrid baseColor="#10B981" activeColor="#34D399" />

// Gold
<DotGrid baseColor="#FBBF24" activeColor="#FCD34D" />
```

---

## 📱 Mobile Optimization

```tsx
<DotGrid
  dotSize={10}      // Smaller
  gap={24}          // Tighter
  proximity={80}    // Smaller range
  speedTrigger={200} // Higher threshold
/>
```

---

## ⚡ Performance Tips

1. Use on **full-screen sections** (not small boxes)
2. Set `overflow: hidden` on parent
3. Use `pointer-events-none` if needed
4. Reduce `dotSize`/`gap` on mobile
5. Adjust `proximity` for better performance

---

## 🐛 Common Issues

| Issue | Fix |
|-------|-----|
| Dots not showing | Check z-index and overflow |
| Laggy | Increase `gap`, reduce dots |
| Not interactive | Ensure not covered by other elements |
| Mobile lag | Use smaller dots and spacing |

---

## 📖 For More Details

See **DOTGRID_GUIDE.md** for:
- Complete API reference
- All configuration options
- Advanced customization
- Physics tweaking
- Troubleshooting

---

## 🎉 Ready to Deploy!

```tsx
// Add to your layout:
<DotGrid />

// That's it! 🎮✨
```

Enjoy your interactive dot grid! 💻

---

## 📝 Quick Reference

**Simple:**
```tsx
<DotGrid />
```

**With Colors:**
```tsx
<DotGrid
  baseColor="#7C3AED"
  activeColor="#A78BFA"
/>
```

**Fully Configured:**
```tsx
<DotGrid
  dotSize={14}
  gap={28}
  baseColor="#7C3AED"
  activeColor="#A78BFA"
  proximity={120}
  speedTrigger={100}
  shockRadius={250}
  shockStrength={5}
  resistance={750}
  returnDuration={1.5}
/>
```

---

**Status:** ✅ Ready to Use
**Performance:** 🚀 High FPS
**Browser Support:** ✅ All Modern Browsers
**Mobile Ready:** ✅ Fully Responsive
