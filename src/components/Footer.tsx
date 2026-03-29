'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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
    { 
      label: 'GitHub', 
      url: 'https://github.com/Niloy-Pramanik',
      svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>),
      color: 'text-gray-300 hover:text-white',
    },
    { 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/niloy-pramanik',
      svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.249-.129.597-.129.946v5.423h-3.554s.05-8.799 0-9.719h3.554v1.375c.429-.663 1.199-1.606 2.920-1.606 2.135 0 3.753 1.395 3.753 4.396v5.554zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.769-1.71 1.958-1.71 1.187 0 1.914.754 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.633h3.203v10.819zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>),
      color: 'text-blue-400 hover:text-blue-300',
    },
    { 
      label: 'Twitter', 
      url: 'https://twitter.com',
      svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 002.856-9.86 9.958 9.958 0 01-2.821.856 4.958 4.958 0 00-8.593 4.516 14.025 14.025 0 01-10.177-5.116 4.93 4.93 0 001.532 6.573 4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>),
      color: 'text-cyan-400 hover:text-cyan-300',
    },
    { 
      label: 'Facebook', 
      url: 'https://www.facebook.com/niloy.pramanik.668015',
      svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>),
      color: 'text-blue-500 hover:text-blue-400',
    },
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
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-gray-900/50 hover:bg-purple-900/40 border border-gray-800 hover:border-purple-500/60 transition-all duration-300 flex items-center justify-center group ${link.color}`}
                  >
                    {link.svg}
                  </motion.a>
                ))}
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
