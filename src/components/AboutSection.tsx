'use client';

import { motion } from 'framer-motion';
import { Code, Server, Brain } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export function AboutSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const skills = [
    {
      title: 'Problem Solver',
      backTitle: 'Analytical Mindset',
      description: 'Breaking down complex challenges and implementing efficient solutions using modern technologies and best practices',
      backDescription: 'Passionate about finding elegant solutions to real-world problems with a focus on clean, scalable code',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Problem Analysis', 'Algorithm Design', 'Debugging', 'Optimization', 'Best Practices', 'Code Quality'],
    },
    {
      title: 'Quick Learner',
      backTitle: 'Continuous Growth',
      description: 'Rapidly acquiring new skills and adapting to emerging technologies and frameworks in the dynamic tech landscape',
      backDescription: 'Committed to continuous learning and staying updated with industry trends and cutting-edge tools',
      icon: Server,
      color: 'from-emerald-500 to-teal-500',
      highlights: ['Self-Learning', 'Tech Stack Adaptability', 'Documentation', 'Practice', 'Development', 'Innovation'],
    },
    {
      title: 'Team Collaborator',
      backTitle: 'Communication Expert',
      description: 'Working effectively in teams, sharing knowledge, and contributing to collaborative projects with clear communication',
      backDescription: 'Building strong relationships, mentoring peers, and creating positive team dynamics for project success',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      highlights: ['Communication', 'Teamwork', 'Code Review', 'Knowledge Sharing', 'Leadership', 'Mentoring'],
    },
  ];

  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Collaborations', value: '15+' },
    { label: 'Tech Stack Mastered', value: '8+' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-purple-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-400 mb-4">
              About Me
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            What Sets Me Apart
          </h2>
          <motion.div 
            className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              Full-stack developer & AI researcher passionate about building elegant solutions that solve real problems. I craft intuitive web experiences with <span className="text-purple-600 dark:text-purple-400 font-semibold">Python,Next.js, React, and modern tooling</span>, while exploring the frontiers of AI security and system design.
            </p>
            <p className="text-base leading-relaxed">
              Driven by curiosity and the belief that great products come from continuous learning. I thrive on tackling challenging problems, collaborating with brilliant minds, and pushing the boundaries of what's possible on the web.
            </p>
            
            {/* Quote Section */}
            <motion.div 
              className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-xl text-center">
                <div className="absolute -top-3 -left-1 text-4xl text-purple-400/30 dark:text-purple-500/20">
                  "
                </div>
                <p className="text-lg md:text-xl font-semibold italic text-slate-800 dark:text-slate-200 px-4 py-4 relative z-10">
                  Stay hungry, stay foolish.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 font-medium">
                  — Steve Jobs
                </p>
                <div className="absolute -bottom-2 -right-1 text-4xl text-purple-400/30 dark:text-purple-500/20 rotate-180">
                  "
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Three Skill Cards - Horizontal with Flip Effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isFlipped = flipped === index;
            return (
              <div
                key={index}
                className="h-125 cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => setFlipped(index)}
                onMouseLeave={() => setFlipped(null)}
                onClick={() => setFlipped(isFlipped ? null : index)}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateY: isFlipped ? 180 : 0,
                  }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500 p-8 flex flex-col justify-between group transition-all duration-300 overflow-hidden backface-hidden transform-[translateZ(0)] [-webkit-backface-visibility:hidden] [-webkit-transform:translateZ(0)]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      WebkitTransform: 'translateZ(0)',
                    }}
                  >
                    {/* Background Gradient Glow */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}
                    />

                    {/* Accent Line */}
                    <div className={`absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-linear-to-b ${skill.color} transition-all duration-500`} />

                    {/* Icon and Title */}
                    <div className="relative z-10">
                      {/* Badge */}
                      <motion.div
                        className="inline-block mb-4"
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className={`px-3 py-1 bg-linear-to-r ${skill.color} text-white rounded-full font-semibold text-xs`}>
                          {['Problem Solving', 'Growth Mindset', 'Collaboration'][index]}
                        </span>
                      </motion.div>

                      <div className="flex flex-row items-center gap-4 mb-6">
                        <motion.div
                          className={`p-4 rounded-xl bg-linear-to-br ${skill.color} text-white shrink-0`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <IconComponent size={32} />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {skill.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                        {skill.description}
                      </p>
                    </div>

                    {/* Click to flip indicator */}
                    <motion.div
                      className="text-center mt-6 relative z-10"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold hidden md:block">
                        ↻ Hover to flip
                      </p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold md:hidden">
                        ↻ Tap to flip
                      </p>
                    </motion.div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 w-full h-full bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col justify-between backface-hidden transform-[translateZ(0)] [-webkit-backface-visibility:hidden] [-webkit-transform:translateZ(0)]"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(0)',
                      WebkitTransform: 'rotateY(180deg) translateZ(0)',
                    }}
                  >
                    {/* Title */}
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-6">
                        {skill.backTitle}
                      </h3>

                      {/* Back Description */}
                      <p className="text-white/90 leading-relaxed text-base mb-6">
                        {skill.backDescription}
                      </p>
                    </div>

                    {/* Tech Badges on Back */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ y: -2 }}
                          className="px-3 py-1 text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>

                    {/* Flip back indicator */}
                    <motion.div
                      className="text-center relative z-10"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <p className="text-sm text-white/90 font-semibold hidden md:block">
                        ↻ Hover to flip back
                      </p>
                      <p className="text-sm text-white/90 font-semibold md:hidden">
                        ↻ Tap to flip back
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Statistics Section Below Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 rounded-2xl bg-linear-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-900/10 border border-purple-200 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Accent glow */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />

              {/* Content */}
              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-semibold">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
