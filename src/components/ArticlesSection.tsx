'use client';

import { motion } from 'framer-motion';

export function ArticlesSection() {
  const articles = [
    {
      title: 'The Future of AI in Web Development',
      description: 'Exploring how AI is transforming modern web development practices and what developers should know.',
      category: 'AI & Tech',
      date: 'Mar 2024',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Building Secure Full-Stack Applications',
      description: 'Best practices for implementing security at every layer of your full-stack application.',
      category: 'Security',
      date: 'Feb 2024',
      icon: '🔒',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'React Performance Optimization',
      description: 'Deep dive into performance optimization techniques for React applications in production.',
      category: 'Frontend',
      date: 'Jan 2024',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'NLP Fundamentals for Developers',
      description: 'Understanding Natural Language Processing concepts and practical applications.',
      category: 'Machine Learning',
      date: 'Dec 2023',
      icon: '📚',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="articles" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Latest Articles & Research
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Insights on AI, Security, and Full-Stack Development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer h-full"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full p-6 bg-gradient-to-br from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{article.icon}</span>
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                  {article.description}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  {article.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
