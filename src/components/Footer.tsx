'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Briefcase, Share2, Heart } from 'lucide-react';

// Circular Logo Component
const CircularFooterLogo = () => (
  <motion.div
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.8 }}
    className="relative w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center bg-linear-to-br from-purple-600/20 to-purple-700/20"
  >
    <div className="absolute inset-0 rounded-full border border-purple-400/30 opacity-50" />
    <span className="text-lg font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">N</span>
  </motion.div>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const resourceLinks = [
    { label: 'Resume', href: '#resume' },
    { label: 'Blog', href: '#blog' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  const socialLinks = [
    { icon: Code, url: 'https://github.com/Niloy-Pramanik', label: 'GitHub', color: 'text-gray-300 hover:text-white' },
    { icon: Briefcase, url: 'https://linkedin.com/in/niloy-pramanik', label: 'LinkedIn', color: 'text-blue-400 hover:text-blue-300' },
    { icon: Share2, url: 'https://twitter.com', label: 'X (Twitter)', color: 'text-cyan-400 hover:text-cyan-300' },
    { icon: Heart, url: 'https://facebook.com', label: 'Facebook', color: 'text-red-400 hover:text-red-300' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'niloypramanik126@gmail.com', href: 'mailto:niloypramanik126@gmail.com', color: 'text-red-400' },
    { icon: Phone, label: 'Phone', value: '+880 1796 894 640', href: 'tel:+8801796894640', color: 'text-green-400' },
    { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: '#', color: 'text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-black text-gray-100 overflow-hidden border-t border-purple-500/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-slate-900/10 to-black pointer-events-none" />
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-3">
                <CircularFooterLogo />
                <h3 className="text-2xl font-bold">
                  <span className="bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Niloy
                  </span>
                </h3>
              </div>
              <div className="h-1 w-12 bg-linear-to-r from-purple-500 to-purple-600 rounded mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Full-Stack Developer crafting modern web applications with elegant design and powerful functionality.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-gray-900/50 hover:bg-purple-900/40 border border-gray-800 hover:border-purple-500/60 transition-all duration-300 flex items-center justify-center group"
                    >
                      <IconComponent size={20} className={`${link.color}`} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-lg mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-lg mb-6 text-white">Quick Connect</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={contact.label}>
                      <motion.a
                        href={contact.href}
                        className="flex items-start gap-3 group"
                        whileHover={{ x: 4 }}
                      >
                        <div className={`mt-1 shrink-0 ${contact.color}`}>
                          <IconComponent size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-xs uppercase tracking-wide">{contact.label}</span>
                          <span className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors duration-200">
                            {contact.value}
                          </span>
                        </div>
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent my-8 md:my-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Bottom Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Niloy Pramanik. All rights reserved.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center md:text-right">
              <p className="text-gray-500 text-sm">
                Built with <span className="text-purple-400 font-semibold">React</span>,{' '}
                <span className="text-purple-400 font-semibold">Next.js</span>, and{' '}
                <span className="text-purple-400 font-semibold">Tailwind CSS</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
