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
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        window.history.pushState(null, '', href);
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#home')}
          >
            <CircularTextLogo />
            <div className="hidden md:block text-sm font-bold">
              <div className="text-white">Niloy Pramanik</div>
              <div className="text-purple-400 text-xs">Full-Stack Developer</div>
            </div>
          </motion.a>

          <motion.nav
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-purple-400'
                    : 'text-slate-300 hover:text-white'
                }`}
                variants={itemVariants}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.nav>

          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-purple-400" />
            ) : (
              <Menu size={24} className="text-slate-300" />
            )}
          </button>
        </div>

        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-purple-500/20"
        >
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                    : 'text-slate-300 hover:bg-purple-500/10 hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
