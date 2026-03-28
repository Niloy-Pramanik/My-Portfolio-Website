'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ExploreMore() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 flex justify-center items-center">
      <motion.a
        href="#about"
        className="flex flex-col items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 group cursor-pointer"
        whileHover={{ y: -4 }}
      >
        <span>Explore More</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
