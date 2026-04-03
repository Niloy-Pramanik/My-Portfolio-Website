'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      organization: 'Udemy',
      issueDate: '2024',
      description: 'Comprehensive course covering modern web development with React, Node.js, and MongoDB',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'AI Security Research',
      organization: 'IEEE',
      issueDate: '2023',
      description: 'Research certification in adversarial machine learning and neural network security',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      organization: 'Coursera',
      issueDate: '2024',
      description: 'Expert-level Python development with focus on optimization and design patterns',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      organization: 'DeepLearning.AI',
      issueDate: '2024',
      description: 'Specialization in deep learning, neural networks, and computer vision applications',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Next.js & TypeScript Mastery',
      organization: 'Frontend Masters',
      issueDate: '2024',
      description: 'Advanced Next.js development with TypeScript, performance optimization, and best practices',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 6,
      title: 'Cloud Architecture with AWS',
      organization: 'AWS Academy',
      issueDate: '2023',
      description: 'AWS certified cloud architecture and deployment best practices',
      color: 'from-pink-500 to-rose-500',
    },
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="certificates"
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-purple-950/5 to-slate-950 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
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
              Achievements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional certifications and course completions showcasing continuous learning
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="group"
              variants={itemVariants}
            >
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-linear-to-br from-slate-900/50 to-slate-900/20 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }}
              >
                {/* Color accent bar */}
                <div className={`h-1 w-full bg-linear-to-r ${cert.color}`} />

                {/* Content */}
                <div className="p-6 md:p-8 relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${cert.color} text-white flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <Award size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-semibold text-purple-400 mb-3">
                    {cert.organization}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
                    <span className="text-xs font-semibold text-slate-500">
                      {cert.issueDate}
                    </span>
                    <motion.a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-purple-300 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/5 to-pink-500/5 backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-3">
            Always Learning
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            I'm committed to continuous professional development and staying updated with the latest technologies and industry best practices.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
