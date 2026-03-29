'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Network, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ResearchCard = memo(function ResearchCard({
  icon: Icon,
  title,
  description,
  focus,
  delay,
  imageSrc,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
  focus: string[];
  delay: number;
  imageSrc?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 h-full cursor-pointer"
      whileHover={{ y: -8 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Icon Section with gradient background */}
      <div className="h-24 sm:h-32 bg-linear-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-200 group-hover:to-blue-200 dark:group-hover:from-purple-800/50 dark:group-hover:to-blue-800/50 flex items-center justify-center transition-all duration-300 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple-400/20 to-transparent" />
        </motion.div>
        
        <motion.div
          className="w-20 h-20 bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center transition-transform duration-300 relative z-10"
          whileHover={{ scale: 1.15, rotate: 12 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={28} className="text-white" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* Title with expand indicator */}
        <div className="flex items-start justify-between gap-4 mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-slate-100 flex-1">{title}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown size={20} className="text-purple-600 dark:text-purple-400" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 mb-4 sm:mb-6 leading-relaxed">{description}</p>

        {/* Focus Areas with staggered animation */}
        <motion.div 
          className="space-y-2"
          animate={{ opacity: isExpanded ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-slate-300">Focus Areas:</p>
          <motion.div 
            className="flex flex-wrap gap-2"
            layout
          >
            {focus.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full font-medium transition-all duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 shadow-sm hover:shadow-md"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Expanded details */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
              This research area explores innovative solutions and practical applications in the field.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Scroll to contact section
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Collaborate on This Topic
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export const ResearchSection = memo(function ResearchSection() {
  const researchAreas = [
    {
      icon: Shield,
      title: 'Cybersecurity & Threat Detection',
      description:
        'Investigating intelligent threat detection systems using machine learning to identify and mitigate network vulnerabilities and security anomalies in real-time.',
      focus: ['Anomaly Detection', 'Network Security', 'Data Analysis'],
      imageSrc: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=400&fit=crop',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Exploring advanced ML algorithms and neural networks for solving complex problems in automation, prediction, and intelligent system design.',
      focus: ['Deep Learning', 'NLP', 'Automation'],
      imageSrc: 'https://images.unsplash.com/photo-1677442d019cecf8f23f1aa424ec50a30f632086b?w=400&h=400&fit=crop',
    },
    {
      icon: Network,
      title: 'Network & Systems',
      description:
        'Researching distributed systems architecture, network protocols, and scalable infrastructure for handling large-scale data processing.',
      focus: ['Distributed Systems', 'Scalability', 'Optimization'],
      imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="research" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-purple-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-96 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-1/3 -left-96 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 text-center"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs sm:text-sm font-semibold text-purple-400 mb-4">
              Research & Innovation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            Research & Innovation Focus
          </h2>
          <motion.p 
            className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Advancing cybersecurity, machine learning, and distributed systems through rigorous research and practical application
          </motion.p>
        </motion.div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <ResearchCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                focus={area.focus}
                delay={index * 0.2}
                imageSrc={area.imageSrc}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Interested in Research Collaboration?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            I'm open to collaborations on cutting-edge research projects. Let's connect and explore innovative solutions together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

ResearchSection.displayName = 'ResearchSection';
