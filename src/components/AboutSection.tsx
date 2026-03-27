'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  const skills = [
    {
      title: 'Front-End Development',
      description: 'React, Next.js, Tailwind CSS, TypeScript',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Back-End Development',
      description: 'Python Flask, Node.js, REST APIs, Databases',
      icon: '⚙️',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'AI & Research',
      description: 'Machine Learning, NLP, Security Research',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Why hire me for your next project?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                I bring a unique intersection of robust software engineering and intelligent systems research. My passion for full-stack development combined with deep AI expertise allows me to build scalable, innovative solutions.
              </p>
            </motion.div>

            <motion.ul variants={containerVariants} className="space-y-3">
              {[
                'Full-stack development expertise',
                'AI and Machine Learning proficiency',
                'Security-focused development practices',
                'Collaborative and communication skills',
                'Continuous learning and innovation',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="text-orange-500 text-2xl mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Content - Skill Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`} />
                <div className="relative p-6 md:p-8 bg-gradient-to-br from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{skill.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
