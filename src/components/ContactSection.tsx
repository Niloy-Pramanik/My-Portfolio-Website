'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code2, MessageCircle, Send, Star } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-purple-950/10 to-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-400 mb-4">
              Get In Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Reach out and let's start a conversation!
          </p>
        </motion.div>

        {/* Two Column Layout: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 mb-16">
          {/* Contact Info Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 mb-8">Contact Information</h3>
            
            {[
              {
                title: 'Email',
                value: 'niloypramanik126@gmail.com',
                icon: Mail,
                color: 'text-red-400',
                link: 'mailto:niloypramanik126@gmail.com',
              },
              {
                title: 'Phone',
                value: '+880 1796 894 640',
                icon: Phone,
                color: 'text-green-400',
                link: 'tel:+8801796894640',
              },
              {
                title: 'Location',
                value: 'Dhaka, Bangladesh',
                icon: MapPin,
                color: 'text-blue-400',
                link: '#',
              },
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
              <motion.a
                key={index}
                href={contact.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 p-6 bg-purple-950/30 border border-purple-500/20 hover:border-purple-500/50 rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ x: 8 }}
              >
                <div className="shrink-0 mt-1">
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/40 transition-colors">
                    <IconComponent size={24} className={`${contact.color}`} />
                  </div>
                </div>
                <div className="grow">
                  <h4 className="font-semibold text-slate-100 mb-1 text-base">
                    {contact.title}
                  </h4>
                  <p className="text-sm text-slate-400 group-hover:text-purple-300 transition-colors duration-200">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <motion.form
            className="space-y-6 bg-purple-950/20 p-8 md:p-10 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-lg shadow-purple-500/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 mb-8">Send Message</h3>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-slate-100 mb-3">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="John Doe"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <label className="block text-sm font-semibold text-slate-100 mb-3">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="john@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-slate-100 mb-3">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder="Project or collaboration topic"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <label className="block text-sm font-semibold text-slate-100 mb-3">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Follow Me Section */}
        <motion.div
          className="mt-12 pt-12 border-t border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Follow Me</h3>
            <p className="text-slate-400">Connect with me on social media</p>
          </div>
          
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {[
              { 
                icon: Code2, 
                label: 'GitHub', 
                link: 'https://github.com/Niloy-Pramanik', 
                color: 'text-gray-300',
                bgGradient: 'from-gray-700/30 to-gray-600/30',
                hoverColor: 'hover:text-white',
                bgHover: 'hover:from-gray-700/50 hover:to-gray-600/50'
              },
              { 
                icon: MessageCircle, 
                label: 'LinkedIn', 
                link: 'https://linkedin.com/in/niloy-pramanik', 
                color: 'text-blue-400',
                bgGradient: 'from-blue-900/30 to-blue-800/30',
                hoverColor: 'hover:text-blue-300',
                bgHover: 'hover:from-blue-900/50 hover:to-blue-800/50'
              },
              { 
                icon: Send, 
                label: 'Twitter', 
                link: 'https://twitter.com', 
                color: 'text-cyan-400',
                bgGradient: 'from-cyan-900/30 to-cyan-800/30',
                hoverColor: 'hover:text-cyan-300',
                bgHover: 'hover:from-cyan-900/50 hover:to-cyan-800/50'
              },
              { 
                icon: Star, 
                label: 'Facebook', 
                link: 'https://facebook.com/NiloyPramanik', 
                color: 'text-blue-500',
                bgGradient: 'from-blue-900/30 to-indigo-900/30',
                hoverColor: 'hover:text-blue-400',
                bgHover: 'hover:from-blue-900/50 hover:to-indigo-900/50'
              },
            ].map((social, i) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 sm:p-6 rounded-2xl border border-purple-500/30 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 bg-linear-to-br ${social.bgGradient} ${social.bgHover}`}
                  whileHover={{ y: -8, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <IconComponent size={32} className={`${social.color} ${social.hoverColor} transition-colors duration-300`} />
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-sm font-semibold text-white bg-slate-900 px-3 py-1 rounded-lg">{social.label}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
