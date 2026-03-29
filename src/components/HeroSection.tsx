'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Niloy Pramanik';
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      href: 'https://www.linkedin.com/in/niloy-pramanik-01a638233/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT3XRbtOyTiWs9oe0ymerIg%3D%3D',
      label: 'LinkedIn',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: 'https://github.com/Niloy-Pramanik',
      label: 'GitHub',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:niloypramanik126@gmail.com',
      label: 'Email',
    },
    {
      icon: <Phone size={20} />,
      href: 'tel:01796894640',
      label: 'Phone',
    },
  ];

  return (
    <section
      id="hero"
      className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-96 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 -right-96 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Greeting with Wave Emoji - Left Aligned */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 0.6, delay: 0.5, repeat: Infinity }}
                  className="text-3xl md:text-4xl origin-center"
                >
                  👋
                </motion.span>
                <span className="text-slate-900 dark:text-slate-100">Hi I'm</span>
              </div>
            </motion.div>

            {/* Typewriter Effect Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center gap-2 flex-wrap">
                <span className="bg-linear-to-r from-white via-slate-100 to-slate-200 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Niloy
                </span>
                <span className="bg-linear-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Pramanik
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-purple-600 dark:text-purple-400"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100 leading-relaxed flex items-center gap-3 flex-wrap">
                <span>Full-Stack Developer</span>
                <span className="text-purple-600 dark:text-purple-400">|</span>
                <span className="bg-linear-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent">Aspiring AI Engineer</span>
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Crafting elegant, scalable solutions at the intersection of web development and artificial intelligence. I specialize in building performant applications with modern tech stacks while exploring cutting-edge AI systems. Driven by curiosity, continuous learning, and the pursuit of creating products that make a real impact.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-11 h-11 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 shadow-sm hover:shadow-md group"
                  title={link.label}
                >
                  <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-8 pt-8"
            >
              {/* Download CV Button */}
              <motion.a
                href="/CV_Niloy_Pramanik.pdf"
                download
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg shadow-purple-600/30 transition-all duration-300 w-fit"
              >
                Download CV
              </motion.a>

              {/* Let's Talk Text with Arrow - No Button */}
              <motion.a
                href="#contact"
                className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 group cursor-pointer pt-2"
                whileHover={{ x: 8 }}
              >
                <span>Let's talk</span>
                <motion.span
                  className="text-purple-600 dark:text-purple-400"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image with Decorative Elements */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image Container - Large and full width */}
            <motion.div 
              className="relative w-full h-90 lg:h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                rotateX: 8,
                rotateY: -8,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Image with hover shadow and tilt effect */}
              <motion.img
                src="/images/portfolio_demo.jpg"
                alt="Portfolio Showcase"
                className="w-full h-full object-cover object-center rounded-3xl shadow-2xl transition-all duration-300"
                whileHover={{ 
                  boxShadow: '0 30px 60px rgba(168, 85, 247, 0.3)',
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              />

              {/* Subtle gradient overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-linear-to-t from-purple-600/15 to-transparent rounded-3xl opacity-0 pointer-events-none"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
