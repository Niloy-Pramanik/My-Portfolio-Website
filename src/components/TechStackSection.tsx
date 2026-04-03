'use client';

import { motion } from 'framer-motion';
import { Code, Database, Zap, Brain, Package } from 'lucide-react';

export function TechStackSection() {
  const techCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      items: ['C', 'C++', 'Python', 'JavaScript'],
    },
    {
      title: 'Frameworks',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      items: ['Flask', 'Django', 'React'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      items: ['MySQL', 'SQLite', 'PostgreSQL'],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      items: ['Scikit-Learn', 'TensorFlow', 'PyTorch'],
    },
    {
      title: 'Tools & Web',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      items: ['VS Code', 'PyCharm', 'GitHub', 'Jira', 'n8n', 'Cursor', 'Windsurf'],
    },
  ];

  const familiarWith = [
    'Docker',
    'AWS',
    'LangChain',
    'Vercel',
    'Webpack',
    'GraphQL',
    'REST APIs',
    'Cypress',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-slate-900/50 to-slate-950 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-400 mb-4">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Tech Stack Highlights
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I've mastered
          </p>
        </motion.div>

        {/* Main Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {techCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                className="group"
                variants={itemVariants}
              >
                <div className="relative h-full p-6 md:p-8 rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-900/50 to-slate-900/20 hover:from-slate-900/80 hover:to-slate-900/40 transition-all duration-300 hover:border-purple-500/50 overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                  />

                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-linear-to-b ${category.color} transition-all duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className={`p-3 rounded-lg bg-linear-to-br ${category.color} text-white`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-100">
                        {category.title}
                      </h3>
                    </div>

                    {/* Tech Items */}
                    <div className="space-y-2">
                      {category.items.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-200"
                          whileHover={{ x: 4 }}
                        >
                          <span className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`} />
                          <span className="text-sm font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Item Count */}
                    <div className="mt-6 pt-4 border-t border-slate-700/50">
                      <p className="text-xs font-semibold text-slate-500">
                        {category.items.length} technologies
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Familiar With Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              Familiar With
            </h3>
            <p className="text-slate-400">
              Additional tools and technologies I've worked with
            </p>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap gap-3">
            {familiarWith.map((tech, idx) => (
              <motion.div
                key={idx}
                className="group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <motion.div
                  className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/60 text-slate-300 text-sm font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
