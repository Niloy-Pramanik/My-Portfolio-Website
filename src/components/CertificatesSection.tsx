'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      title: 'Art Of Communication',
      issuer: 'Grameenphone Academy',
      date: 'March 2026',
      image: 'certificate-art-of-communication_page-0001.jpg',
      credentialUrl: 'https://www.grameenphone.academy/cert/010a0166ade8',
    },
    {
      id: 2,
      title: 'Corporate Presentation Skills',
      issuer: 'Grameenphone Academy',
      date: 'March 2026',
      image: 'certificate-corporate-presentation-skill.jpgskills_page-0001.jpg',
      credentialUrl: 'https://www.grameenphone.academy/cert/9fd5e013e1bd',
    },
    {
      id: 3,
      title: 'Sharpen your Communication Skills',
      issuer: 'Grameenphone Academy',
      date: 'March 2026',
      image: 'Sharpen-your-communication-skill.jpg',
      credentialUrl: 'https://www.grameenphone.academy/cert/60c0799e7430',
    },
    {
      id: 4,
      title: 'LinkedIn 101',
      issuer: 'Grameenphone Academy',
      date: 'March 2024',
      image: 'Linkedin-101.jpg',
      credentialUrl: 'https://www.grameenphone.academy/cert/065514ccd568',
    },
    {
      id: 5,
      title: 'Smart CV Writing',
      issuer: 'Grameenphone Academy',
      date: 'January 2024',
      image: 'certificate-smart-cv.jpg',
      credentialUrl: 'https://www.grameenphone.academy/cert/6fdaae304223',
    },
    {
      id: 6,
      title: 'AI Security Research',
      issuer: 'IEEE',
      date: 'December 2023',
      image: '/placeholder-cert.jpg',
      credentialUrl: 'https://ieee.org/verify/ai-security',
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

        {/* Certificates Grid - Desktop */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                whileHover={{ y: -4 }}
                className="group relative flex flex-col rounded-xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Certificate Image */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-800/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 mb-1 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium text-slate-400 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Date */}
                  <p className="text-xs text-slate-500 mb-3">
                    {cert.date}
                  </p>

                  {/* View Credential Link */}
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                    whileHover={{ x: 2 }}
                  >
                    View Credential
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Carousel - Mobile */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <motion.div
            className="flex gap-4 pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                className="group relative flex flex-col w-[85vw] shrink-0 snap-center rounded-xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
              >
                {/* Certificate Image */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-800/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-100 mb-1 line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium text-slate-400 mb-2">
                    {cert.issuer}
                  </p>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Date */}
                  <p className="text-xs text-slate-500 mb-3">
                    {cert.date}
                  </p>

                  {/* View Credential Link */}
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                    whileHover={{ x: 2 }}
                  >
                    View Credential
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
