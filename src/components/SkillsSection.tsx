'use client';

import { memo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siPython,
  siTensorflow,
  siFlask,
  siDjango,
  siTailwindcss,
  siC,
  siCplusplus,
  siAlpinedotjs,
  siHtmx,
} from 'simple-icons';

const SkillCard = memo(function SkillCard({
  icon: Icon,
  title,
  skills,
  isActive,
  onClick,
}: {
  icon: typeof Code;
  title: string;
  skills: string[];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 group relative overflow-hidden ${
        isActive
          ? 'bg-gray-50 dark:bg-slate-800 border border-purple-400 dark:border-purple-500 shadow-xl'
          : 'bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-xl'
      }`}
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-400/0 via-transparent to-purple-400/0 group-hover:from-purple-400/10 group-hover:via-purple-400/5 group-hover:to-purple-400/10 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className={`p-3 rounded-lg transition-all duration-300 ${
              isActive ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50'
            }`}
          >
            <Icon
              size={24}
              className={`text-purple-600 dark:text-purple-400`}
            />
          </motion.div>
          <h3 className={`font-bold text-lg transition-colors duration-300 text-gray-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300`}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                  : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 group-hover:bg-purple-200 group-hover:text-purple-800 dark:group-hover:bg-purple-800 dark:group-hover:text-purple-100'
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(0);

  const handleSkillClick = useCallback((index: number) => {
    setActiveSkill(index);
  }, []);

  const skillsData = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Flask', 'SQLLite', 'MongoDB'],
    },
    {
      icon: Zap,
      title: 'AI & Research',
      skills: ['Machine Learning', 'WSN', 'Security', 'Data Science','Agentic AI','RAG Systems'],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Technical Skills & Expertise
          </h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive proficiency across frontend, backend, and AI/ML technologies with hands-on experience in production environments
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-4 mb-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <SkillCard
                icon={skill.icon}
                title={skill.title}
                skills={skill.skills}
                isActive={activeSkill === index}
                onClick={() => handleSkillClick(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-slate-700/50 dark:border-slate-800/50"
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-4 relative z-10">
            Tech Stack Highlights
          </h3>
          <p className="text-lg text-slate-400 mb-8 relative z-10">
            I specialize in building scalable, intelligent systems that combine cutting-edge web technologies with advanced AI capabilities. My experience spans from architecting responsive frontends to implementing complex backend solutions with machine learning integration.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 relative z-10">
            {[
              { name: 'React', icon: siReact },
              { name: 'Next.js', icon: siNextdotjs },
              { name: 'TypeScript', icon: siTypescript },
              { name: 'Python', icon: siPython },
              { name: 'C', icon: siC },
              { name: 'C++', icon: siCplusplus },
              { name: 'Flask', icon: siFlask },
              { name: 'Django', icon: siDjango },
              { name: 'Tailwind CSS', icon: siTailwindcss },
              { name: 'Alpine.js', icon: siAlpinedotjs },
              { name: 'HTMX', icon: siHtmx },
              { name: 'TensorFlow', icon: siTensorflow },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -8, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="group"
              >
                <div className="relative flex flex-col items-center justify-center px-2 py-4 bg-slate-200/80 dark:bg-slate-600/70 backdrop-blur-sm rounded-lg font-medium text-slate-900 dark:text-slate-100 border border-slate-300/60 dark:border-slate-500/60 hover:border-slate-400 dark:hover:border-slate-400 transition-all duration-250 group-hover:shadow-lg group-hover:shadow-slate-900/20">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mb-1.5 w-8 h-8 relative flex items-center justify-center"
                    dangerouslySetInnerHTML={{
                      __html: `<svg fill="#${tech.icon.hex}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${tech.name}</title><path d="${tech.icon.path}"/></svg>`,
                    }}
                  />
                  <span className="text-xs font-semibold text-center text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-250 leading-tight">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { SkillsSection };
