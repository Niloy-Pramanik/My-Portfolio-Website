'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'GitHub', url: 'https://github.com' },
    { icon: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: 'Twitter', url: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">
              // <span className="text-orange-500">Niloy</span>
            </h3>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer & AI Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Experience'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Resume', 'GitHub', 'LinkedIn'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.url}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-orange-500 transition-colors duration-200"
                  aria-label={link.icon}
                >
                  <span className="text-lg">
                    {link.icon === 'GitHub' && '🐙'}
                    {link.icon === 'LinkedIn' && '💼'}
                    {link.icon === 'Twitter' && '𝕏'}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Niloy Pramanik. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm text-center md:text-right">
            Built with <span className="text-orange-500">❤</span> using React, Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
