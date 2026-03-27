'use client';

import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    {
      number: '3+',
      label: 'Years of CS Studies',
    },
    {
      number: '5+',
      label: 'Projects Completed',
    },
    {
      number: '∞',
      label: 'Focus on AI & Security',
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
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 md:p-8"
              variants={itemVariants}
            >
              <motion.h3
                className="text-4xl md:text-6xl font-bold text-orange-500 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Wave Background Effect */}
        <motion.div
          className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 mt-20 -z-10"
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
