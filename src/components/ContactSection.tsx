'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I'm always open to new opportunities and collaborations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              title: 'Email',
              value: 'niloypramanik126@gmail.com',
              icon: '📧',
              link: 'mailto:niloypramanik126@gmail.com',
            },
            {
              title: 'Phone',
              value: '+880 1796 894 640',
              icon: '📱',
              link: 'tel:+8801796894640',
            },
            {
              title: 'Location',
              value: 'Dhaka, Bangladesh',
              icon: '📍',
              link: '#',
            },
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 text-center"
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl mb-3 block">{contact.icon}</span>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {contact.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-orange-500 transition-colors duration-200">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 bg-gradient-to-br from-slate-50 dark:from-slate-900 to-slate-100 dark:to-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Project or collaboration topic"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Tell me about your project..."
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
