'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      id: '01',
      title: 'HireMe Platform',
      description: 'A comprehensive job matching platform using AI to connect talented developers with opportunities. Features include resume parsing, skill matching, and real-time notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      color: 'from-blue-500 to-cyan-500',
      shortColor: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/50',
      link: '#',
      github: '#',
      isPlaceholder: false,
    },
    {
      id: '02',
      title: 'AI Security Research',
      description: 'Pioneering research on adversarial attacks and security vulnerabilities in neural networks. Published findings on robustness improvements.',
      tech: ['Python', 'TensorFlow', 'Research'],
      color: 'from-purple-500 to-pink-500',
      shortColor: 'from-purple-600 to-purple-700',
      hoverColor: 'hover:shadow-purple-500/50',
      link: '#',
      github: '#',
      isPlaceholder: false,
    },
    {
      id: '03',
      title: 'Full-Stack E-Commerce',
      description: 'Modern e-commerce platform with real-time inventory management, payment integration, and automated recommendations using ML algorithms.',
      tech: ['Next.js', 'Flask', 'PostgreSQL', 'Stripe'],
      color: 'from-emerald-500 to-teal-500',
      shortColor: 'from-emerald-600 to-emerald-700',
      hoverColor: 'hover:shadow-emerald-500/50',
      link: '#',
      github: '#',
      isPlaceholder: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-400 mb-4">
              Featured Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
            My Latest Awesome Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing my full-stack and AI engineering expertise with modern design and premium functionality
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-12 md:space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12 items-center">
                {/* Image Section with Premium Vector */}
                <motion.div
                  className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <motion.div
                    className="relative h-64 md:h-80 bg-black rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-purple-500/10 group-hover:to-purple-500/5 transition-all duration-300" />
                    
                    {/* Hover background blur */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-purple-500/0 blur-2xl" />
                    </div>

                    {/* Premium Vector Graphics */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      {project.id === '01' && (
                        <svg className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-lg" viewBox="0 0 200 200" fill="none">
                          {/* HireMe Platform Vector - Resume/Briefcase */}
                          <defs>
                            <linearGradient id="hire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                            </linearGradient>
                          </defs>
                          <rect x="40" y="50" width="120" height="90" rx="8" fill="url(#hire-gradient)" />
                          <path d="M60 70 Q100 85 140 70" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="60" cy="95" r="4" fill="rgba(255,255,255,0.8)" />
                          <line x1="70" y1="95" x2="130" y2="95" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                          <line x1="60" y1="110" x2="140" y2="110" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                          <line x1="60" y1="125" x2="140" y2="125" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                          <circle cx="100" cy="160" r="20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
                          <text x="100" y="167" textAnchor="middle" fontSize="20" fontWeight="bold" fill="rgba(255,255,255,0.9)">+</text>
                        </svg>
                      )}
                      {project.id === '02' && (
                        <svg className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-lg" viewBox="0 0 200 200" fill="none">
                          {/* AI Security Vector - Shield with Neural Network */}
                          <defs>
                            <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                            </linearGradient>
                          </defs>
                          <path d="M100 30 L60 55 L60 100 Q100 140 100 140 Q100 140 140 100 L140 55 L100 30" fill="none" stroke="url(#security-gradient)" strokeWidth="2.5" />
                          <circle cx="70" cy="80" r="6" fill="rgba(255,255,255,0.8)" />
                          <circle cx="100" cy="65" r="6" fill="rgba(255,255,255,0.8)" />
                          <circle cx="130" cy="80" r="6" fill="rgba(255,255,255,0.8)" />
                          <line x1="70" y1="80" x2="100" y2="65" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                          <line x1="100" y1="65" x2="130" y2="80" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                          <circle cx="100" cy="105" r="8" fill="rgba(255,255,255,0.7)" />
                          <line x1="100" y1="70" x2="100" y2="97" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                        </svg>
                      )}
                      {project.id === '03' && (
                        <svg className="w-32 h-32 md:w-40 md:h-40 filter drop-shadow-lg" viewBox="0 0 200 200" fill="none">
                          {/* E-Commerce Vector - Shopping Cart with Packages */}
                          <defs>
                            <linearGradient id="ecom-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                              <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
                            </linearGradient>
                          </defs>
                          {/* Cart */}
                          <path d="M50 80 L55 50 L145 50 L150 80 Z" fill="none" stroke="url(#ecom-gradient)" strokeWidth="2.5" />
                          <path d="M50 80 L60 140 L140 140 L150 80" fill="none" stroke="url(#ecom-gradient)" strokeWidth="2.5" />
                          <circle cx="70" cy="150" r="5" fill="rgba(255,255,255,0.7)" />
                          <circle cx="130" cy="150" r="5" fill="rgba(255,255,255,0.7)" />
                          {/* Package inside */}
                          <rect x="75" y="95" width="25" height="25" rx="2" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                          <line x1="87.5" y1="95" x2="87.5" y2="120" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                          <line x1="75" y1="107.5" x2="100" y2="107.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                          {/* Top handle */}
                          <path d="M70 80 Q100 60 130 80" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                        </svg>
                      )}
                    </div>

                    {/* Placeholder Badge for Future */}
                    {!project.id && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm">
                        <div className="text-white/70 text-center">
                          <p className="text-lg font-semibold mb-2">Coming Soon</p>
                          <p className="text-sm">New project in progress</p>
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Project Number Badge */}
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/40 transition-colors duration-300">
                      {project.id}
                    </span>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Project Number Tag */}
                  <div className="mb-4">
                    <span className="inline-block text-sm font-bold text-purple-400 tracking-widest">
                      PROJECT {project.id}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-sm font-medium rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 items-center">
                    <motion.a
                      href={project.id === '01' ? 'https://github.com/Niloy-Pramanik/HireMe.git' : project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      target={project.id === '01' ? '_blank' : undefined}
                      rel={project.id === '01' ? 'noopener noreferrer' : undefined}
                    >
                      View Project
                    </motion.a>

                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Live Demo
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <motion.div
                  className="mt-12 md:mt-16 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </motion.div>
          ))}

          {/* Placeholder for Future Projects */}
          <motion.div
            className="group"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12 items-center">
              {/* Image Placeholder */}
              <motion.div
                className="md:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  className="relative h-64 md:h-80 bg-linear-to-br from-gray-700 to-gray-800 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-300 border border-gray-600/50 group-hover:border-purple-500/30"
                  whileHover={{ scale: 1.08, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(68, 68, 68, .05) 25%, rgba(68, 68, 68, .05) 26%, transparent 27%, transparent 74%, rgba(68, 68, 68, .05) 75%, rgba(68, 68, 68, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(68, 68, 68, .05) 25%, rgba(68, 68, 68, .05) 26%, transparent 27%, transparent 74%, rgba(68, 68, 68, .05) 75%, rgba(68, 68, 68, .05) 76%, transparent 77%, transparent)`,
                      backgroundSize: '50px 50px'
                    }} />
                  </div>

                  {/* Placeholder content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 border-2 border-dashed border-purple-500/40 flex items-center justify-center">
                      <span className="text-2xl">+</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">New Project</p>
                    <p className="text-gray-500 text-xs mt-1">Coming Soon</p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-purple-500/10 to-transparent" />
                </motion.div>

                {/* Number Badge */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-5xl md:text-6xl font-bold text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-300">
                    04
                  </span>
                </div>
              </motion.div>

              {/* Content Placeholder */}
              <motion.div
                className="md:order-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div>
                    <span className="inline-block text-sm font-bold text-purple-400/50 tracking-widest mb-4">
                      COMING SOON
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-8 bg-gray-800/50 rounded-lg w-3/4 animate-pulse" />
                    <div className="h-6 bg-gray-800/30 rounded-lg w-full animate-pulse" />
                    <div className="h-6 bg-gray-800/30 rounded-lg w-5/6 animate-pulse" />
                  </div>

                  <div className="pt-4">
                    <p className="text-gray-500 text-sm mb-4">
                      I'm working on exciting new projects. Check back soon for more innovative solutions and updates!
                    </p>
                  </div>

                  {/* Skeleton tech badges */}
                  <div className="flex flex-wrap gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-10 w-20 bg-gray-800/50 rounded-lg animate-pulse" />
                    ))}
                  </div>

                  {/* Subscribe CTA */}
                  <div className="pt-4">
                    <motion.button
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>📬</span>
                      Notify Me
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
