'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import CircularText from './CircularText';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Project', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

// Modern Circular Logo Component
const CircularLogo = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
      <CircularText 
        text="• NILOY PRAMANIK •" 
        spinDuration={20}
        onHover="speedUp"
        className="w-10 h-10 text-xs"
      />
    </div>
  );
};

export const Navbar = memo(function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'research', 'certificates', 'contact'];
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

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        window.history.pushState(null, '', href);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(targetId);
      }
    }, 100);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 overflow-x-hidden ${
          scrolled
            ? 'bg-slate-950/70 backdrop-blur-xl border-b border-purple-500/10'
            : 'bg-slate-950/30 backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 box-border">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-3 no-underline"
              >
                <CircularLogo />
                <div className="hidden sm:flex flex-col">
                  <span className="text-sm font-bold text-slate-100 leading-none">
                    Niloy
                  </span>
                  <span className="text-xs text-purple-400 font-medium leading-none">
                    Pramanik
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-purple-400 font-bold'
                        : 'text-slate-300 hover:font-bold hover:text-purple-400'
                    }`}
                  >
                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-purple-500 to-purple-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Get in Touch Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.history.pushState(null, '', '#contact');
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveSection('contact');
                  }
                }}
                className="hidden md:block px-6 py-2.5 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold text-sm rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                {/* Shine effect */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                Get in Touch
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleMenuToggle}
                className="lg:hidden p-2.5 rounded-lg hover:bg-purple-900/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <X size={24} className="text-purple-400" />
                ) : (
                  <Menu size={24} className="text-slate-100" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-purple-500/10 bg-slate-900/50 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-white font-bold bg-purple-600/20' 
                          : 'text-slate-300 hover:text-purple-400 hover:font-bold'
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}

                {/* Mobile Get in Touch Button */}
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
                  className="w-full mt-4 px-4 py-3 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
});

Navbar.displayName = 'Navbar';
