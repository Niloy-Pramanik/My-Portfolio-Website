'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function ExploreMore() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 transition-colors duration-300 flex justify-center items-center relative -mt-12 md:-mt-20">
      {/* Ambient Glow - Bridge between sections */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-full max-w-lg h-48 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.a
        href="#about"
        className="flex flex-col items-center gap-2 text-lg font-semibold text-slate-900 dark:text-slate-100 group cursor-pointer relative z-10"
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
