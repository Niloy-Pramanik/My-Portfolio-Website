'use client';

/**
 * Header Component - Navigation & Branding
 * 
 * This component serves as the main navigation header for the portfolio website.
 * Features:
 * - Circular animated logo with spinning text ("NILOY PRAMANIK")
 * - Responsive navigation menu (mobile hamburger, desktop horizontal)
 * - Smooth scroll navigation with active section highlighting
 * - Mobile-first design with Framer Motion animations
 * - Dark/Light theme support
 * 
 * @component
 * @example
 * return <Header />
 */

import { memo, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import CircularText from './CircularText';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

// Circular Text Logo Component
const CircularTextLogo = () => {
  return (
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <CircularText 
        text="• NILOY PRAMANIK •" 
        spinDuration={15}
        onHover="speedUp"
        className="w-12 h-12 md:w-16 md:h-16"
      />
    </div>
  );
};

export const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close menu first on mobile
    setIsMenuOpen(false);
    
    // Use setTimeout to ensure menu closes before scrolling
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Use window.location.hash for better browser history support
        window.history.pushState(null, '', href);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(targetId);
      }
    }, 100);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'research', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-linear-to-r from-slate-950 to-slate-900 backdrop-blur-3xl border-b border-purple-900/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-20">
          {/* Logo - Circular Text */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group cursor-pointer shrink-0"
            title="Niloy Pramanik"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <CircularTextLogo />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? 'text-purple-400'
                      : 'text-slate-300 hover:text-purple-400'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Modern hover background */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
                    isActive
                      ? 'bg-purple-600/20'
                      : 'bg-transparent group-hover:bg-purple-900/30'
                  }`} />
                  
                  {/* Active bottom border indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-2 right-2 h-1 bg-linear-to-r from-purple-500 to-purple-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {link.label}
                </motion.a>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4">
            {/* Desktop CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.history.pushState(null, '', '#contact');
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveSection('contact');
                }
              }}
              className="hidden lg:block px-8 py-2.5 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl text-sm shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-white/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              Get in Touch
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg hover:bg-purple-900/30 transition-colors flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={20} className="text-purple-400 sm:text-24" />
              ) : (
                <Menu size={20} className="text-slate-100 sm:text-24" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto', pointerEvents: 'auto' },
            closed: { opacity: 0, height: 0, pointerEvents: 'none' },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-visible border-t border-purple-900/50"
        >
          <div className="py-3 px-4 space-y-2 bg-slate-900/60 backdrop-blur-2xl">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative group overflow-hidden text-xs sm:text-base ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Modern hover background for mobile */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 -z-10 ${
                    isActive
                      ? 'bg-linear-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-600/30'
                      : 'bg-purple-900/40 group-hover:bg-purple-900/60'
                  }`} />
                  {link.label}
                </motion.a>
              );
            })}
            
            {/* Mobile CTA Buttons - Side by Side */}
            <div className="pt-3 mt-3 border-t border-purple-900/30 flex gap-3 w-full">
              {/* Download CV Button */}
              <motion.a
                href="/CV_Niloy_Pramanik.pdf"
                download
                className="flex-1 px-3 h-10 sm:h-auto sm:py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 text-center border border-purple-500/30 hover:border-purple-500/60 text-xs sm:text-sm flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📥 CV
              </motion.a>
              
              {/* Get in Touch Button */}
              <motion.button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    if (contactSection) {
                      window.history.pushState(null, '', '#contact');
                      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setActiveSection('contact');
                    }
                  }, 100);
                }}
                className="flex-1 px-3 h-10 sm:h-auto sm:py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:shadow-xl shadow-lg shadow-purple-600/40 transition-all duration-300 relative overflow-hidden group text-xs sm:text-sm flex items-center justify-center"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient shine effect */}
                <span className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-white/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                Let's Talk
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';
