'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Network } from 'lucide-react';
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700 h-full"
    >
      {/* Icon Section with gradient background */}
      <div className="h-32 bg-linear-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 group-hover:from-purple-200 group-hover:to-blue-200 dark:group-hover:from-purple-800/50 dark:group-hover:to-blue-800/50 flex items-center justify-center transition-all duration-300">
        <div className="w-20 h-20 bg-linear-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>

        {/* Focus Areas */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Focus Areas:</p>
          <div className="flex flex-wrap gap-2">
            {focus.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full font-medium transition-all duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
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
    <section id="research" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
