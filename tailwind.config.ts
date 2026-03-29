import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Headings: Josefin Sans - Elegant, geometric
        heading: ["var(--font-heading)", "sans-serif"],
        
        // Body: Inter - Clean, professional, highly readable
        body: ["var(--font-body)", "sans-serif"],
        
        // Default sans font uses body (Inter)
        sans: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        // Heading sizes
        "h1": ["2.75rem", { lineHeight: "1.1", letterSpacing: "0.035em" }],
        "h2": ["2.25rem", { lineHeight: "1.15", letterSpacing: "0.03em" }],
        "h3": ["1.75rem", { lineHeight: "1.25", letterSpacing: "0.02em" }],
        "h4": ["1.375rem", { lineHeight: "1.3", letterSpacing: "0.015em" }],
        "h5": ["1.25rem", { lineHeight: "1.35", letterSpacing: "0.01em" }],
        "h6": ["1.125rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
        
        // Body text sizes (Roboto optimized)
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-base": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      fontWeight: {
        // Josefin Sans weights
        "heading-bold": "700",
        "heading-semibold": "600",
        "heading-medium": "500",
        "heading-regular": "400",
        
        // Roboto weights
        "body-bold": "700",
        "body-semibold": "500",
        "body-regular": "400",
      },
      letterSpacing: {
        // Headings: Wider spacing for elegance (Josefin Sans)
        "heading-wide": "0.035em",
        "heading-wider": "0.03em",
        "heading-normal": "0.025em",
        
        // Body: Tight to normal spacing (Roboto)
        "body-tight": "-0.003em",
        "body-normal": "-0.003em",
      },
      lineHeight: {
        // Headings: Tight, impactful
        "heading-tight": "1.1",
        "heading-snug": "1.2",
        
        // Body: Comfortable reading
        "body-relaxed": "1.75",
        "body-normal": "1.6",
        "body-snug": "1.5",
      },
    },
  },
  plugins: [],
};

export default config;
