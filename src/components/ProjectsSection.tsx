'use client';

import { motion } from 'framer-motion';

export function ProjectsSection() {
  const projects = [
    {
      title: 'HireMe Platform',
      description: 'A comprehensive job matching platform using AI to connect talented developers with opportunities. Features include resume parsing, skill matching, and real-time notifications.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      image: '💼',
      color: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      title: 'AI Security Research',
      description: 'Pioneering research on adversarial attacks and security vulnerabilities in neural networks. Published findings on robustness improvements.',
      tech: ['Python', 'TensorFlow', 'Research'],
      image: '🔐',
      color: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      title: 'Full-Stack E-Commerce',
      description: 'Modern e-commerce platform with real-time inventory management, payment integration, and automated recommendations using ML algorithms.',
      tech: ['Next.js', 'Flask', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      color: 'from-emerald-500 to-teal-500',
      link: '#',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            My Latest Awesome Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Showcasing my full-stack and AI engineering expertise
          </p>
        </motion.div>

        <motion.div
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <motion.div
                  className={`order-2 ${index === 1 ? 'md:order-2' : index === 2 ? 'md:order-2' : 'md:order-1'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`h-64 md:h-80 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-6xl md:text-7xl shadow-lg`}>
                    {project.image}
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={`order-1 ${index === 1 ? 'md:order-1' : index === 2 ? 'md:order-1' : 'md:order-2'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
