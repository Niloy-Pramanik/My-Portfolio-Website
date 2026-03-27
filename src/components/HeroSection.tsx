'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, Download } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

export function HeroSection() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen font-sans bg-[#F4F7FC] dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative selection:bg-[#FF6059] selection:text-white">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-100 dark:bg-pink-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6059] to-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">/</span>
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-white">
              Niloy.
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#home" className="text-[#FF6059] transition-colors hover:text-[#FF6059]">Home</a>
            <a href="#about" className="hover:text-[#FF6059] transition-colors">About</a>
            <a href="#portfolio" className="hover:text-[#FF6059] transition-colors">Portfolio</a>
            <a href="#experience" className="hover:text-[#FF6059] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#FF6059] transition-colors">Contact</a>
          </div>

          {/* Actions: Theme Toggle & Hire Me */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-all shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button className="hidden md:block px-6 py-2.5 bg-[#FF6059] hover:bg-[#ff4e47] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#FF6059]/30 transition-all hover:-translate-y-0.5">
              Hire Me
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-12 lg:pt-24 pb-20 gap-16">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-[#FF6059] text-xl font-medium mb-2 tracking-wide">
              Hi! I'm
            </p>
            
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 flex flex-col gap-2">
              <span className="text-slate-800 dark:text-slate-100">Niloy</span>
              {/* Hollow Stroke Effect for Last Name */}
              <span className="text-transparent [-webkit-text-stroke:2px_#1e293b] dark:[-webkit-text-stroke:2px_#f8fafc]">
                Pramanik
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex flex-wrap justify-center lg:justify-start gap-2">
              Full-stack Developer <span className="text-slate-400 dark:text-slate-500 font-normal">|</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
                AI Enthusiast
              </span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              I am a dedicated Computer Science and Engineering student at United International University with a deep passion for AI engineering, automation, and full-stack development. Currently, I'm living in <strong className="text-slate-700 dark:text-slate-300 font-semibold">Dhaka, Bangladesh.</strong>
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-10">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  ), 
                  href: "#", 
                  label: "LinkedIn" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ), 
                  href: "#", 
                  label: "GitHub" 
                },
                { icon: <Mail size={20} />, href: "mailto:niloypramanik126@gmail.com", label: "Email" },
                { icon: <Phone size={20} />, href: "tel:01796894640", label: "Phone" }
              ].map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#FF6059] dark:hover:text-[#FF6059] hover:shadow-md transition-all hover:-translate-y-1"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 px-8 py-3.5 bg-[#FF6059] hover:bg-[#ff4e47] text-white text-base font-semibold rounded-full shadow-lg shadow-[#FF6059]/30 transition-all hover:-translate-y-1">
                <Download size={18} />
                Download CV
              </button>
              <a href="#contact" className="text-slate-800 dark:text-white font-semibold underline underline-offset-4 decoration-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-[#FF6059] dark:hover:decoration-[#FF6059] transition-all">
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right Column: Image & Floating Elements */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            
            {/* Main Portrait Background Shape */}
            <div className="relative w-72 h-96 lg:w-96 lg:h-[500px] bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-[60px] shadow-2xl shadow-blue-900/5 border border-white/50 dark:border-slate-700/50 flex items-end justify-center overflow-visible">
              
              {/* Image Placeholder - Replace src with your actual transparent PNG */}
              <img 
                src="/api/placeholder/400/500" 
                alt="Niloy Pramanik" 
                className="w-full h-auto object-cover object-bottom z-10 drop-shadow-2xl"
              />

              {/* Floating Badge (Left) */}
              <div className="absolute top-1/4 -left-12 lg:-left-16 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-3xl font-bold text-[#FF6059]">4th</span>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-tight">Year<br/>Undergrad</span>
              </div>

              {/* Floating Element (Top Right) */}
              <div className="absolute -top-6 -right-6 lg:-right-12 w-32 h-32 bg-slate-900 dark:bg-slate-800 rounded-2xl shadow-2xl z-0 overflow-hidden border border-slate-800 dark:border-slate-600">
                {/* Simulated 3D Shapes */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-[#FF6059]"></div>
                <div className="absolute bottom-2 right-2 w-16 h-4 bg-slate-700 rounded-full rotate-45"></div>
              </div>

              {/* Floating Element (Bottom Right) */}
              <div className="absolute bottom-12 -right-10 lg:-right-16 w-36 h-36 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl shadow-xl z-20 overflow-hidden border border-white/20 p-3 flex flex-col justify-between">
                <div className="w-8 h-2 bg-white/50 rounded-full"></div>
                <div className="flex gap-2">
                  <div className="w-12 h-12 border-[6px] border-white/80 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/80 rounded-full mt-auto"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Utilities for specific design effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
}
