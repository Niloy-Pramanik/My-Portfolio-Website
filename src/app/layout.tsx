import type { Metadata } from "next";
import { Josefin_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

// Import Josefin Sans - Elegant, geometric headings
const josefinSans = Josefin_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// Import Plus Jakarta Sans - Modern, premium body text (SaaS aesthetic)
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Niloy Pramanik - Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Niloy Pramanik, a Computer Science student passionate about AI engineering, automation, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className={`${josefinSans.variable} ${plusJakarta.variable} min-h-full flex flex-col bg-slate-950 dark:bg-slate-950 text-slate-100 dark:text-slate-100 font-body transition-colors duration-300 antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
