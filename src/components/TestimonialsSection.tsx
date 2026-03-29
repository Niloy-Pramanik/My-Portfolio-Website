'use client';

import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: 'Niloy demonstrates exceptional problem-solving skills and a deep understanding of AI concepts. His contributions to our research were invaluable.',
      author: 'Prof. Ahmed Hassan',
      role: 'Computer Science Department',
      avatar: '👨‍🏫',
    },
    {
      text: 'Working with Niloy on the HireMe platform was fantastic. He brings both technical excellence and great communication to the team.',
      author: 'Sarah Johnson',
      role: 'Project Teammate',
      avatar: '👩‍💼',
    },
    {
      text: 'His full-stack capabilities and attention to security are impressive. Definitely recommend for any AI or development project.',
      author: 'Alex Chen',
      role: 'AI Research Collaborator',
      avatar: '👨‍💻',
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
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white dark:from-slate-950 to-slate-50 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            What Others Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Testimonials from teammates, professors, and collaborators
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="h-full p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
