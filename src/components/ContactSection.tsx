'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

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

            {/* Follow Me Section - Below Location Card */}
            <motion.div
              className="mt-8 pt-8 border-t border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Follow Me</h3>
                <p className="text-slate-400 text-sm">Connect with me on social media</p>
              </div>
              
              <div className="flex justify-center gap-3 flex-wrap">
                {[
                  { 
                    label: 'GitHub', 
                    link: 'https://github.com/Niloy-Pramanik',
                    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>),
                    color: 'text-gray-300',
                    hoverColor: 'hover:text-white',
                    bgGradient: 'from-gray-700/30 to-gray-600/30',
                    bgHover: 'hover:from-gray-700/50 hover:to-gray-600/50'
                  },
                  { 
                    label: 'LinkedIn', 
                    link: 'https://linkedin.com/in/niloy-pramanik',
                    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.249-.129.597-.129.946v5.423h-3.554s.05-8.799 0-9.719h3.554v1.375c.429-.663 1.199-1.606 2.920-1.606 2.135 0 3.753 1.395 3.753 4.396v5.554zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.769-1.71 1.958-1.71 1.187 0 1.914.754 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.633h3.203v10.819zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>),
                    color: 'text-blue-400',
                    hoverColor: 'hover:text-blue-300',
                    bgGradient: 'from-blue-900/30 to-blue-800/30',
                    bgHover: 'hover:from-blue-900/50 hover:to-blue-800/50'
                  },
                  { 
                    label: 'Twitter', 
                    link: 'https://twitter.com',
                    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M23.953 4.57a10 10 0 002.856-9.86 9.958 9.958 0 01-2.821.856 4.958 4.958 0 00-8.593 4.516 14.025 14.025 0 01-10.177-5.116 4.93 4.93 0 001.532 6.573 4.902 4.902 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>),
                    color: 'text-cyan-400',
                    hoverColor: 'hover:text-cyan-300',
                    bgGradient: 'from-cyan-900/30 to-cyan-800/30',
                    bgHover: 'hover:from-cyan-900/50 hover:to-cyan-800/50'
                  },
                  { 
                    label: 'Facebook', 
                    link: 'https://www.facebook.com/niloy.pramanik.668015',
                    svg: (<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>),
                    color: 'text-blue-500',
                    hoverColor: 'hover:text-blue-400',
                    bgGradient: 'from-blue-900/30 to-indigo-900/30',
                    bgHover: 'hover:from-blue-900/50 hover:to-indigo-900/50'
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl border border-purple-500/30 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg hover:shadow-purple-500/30 bg-linear-to-br ${social.bgGradient} ${social.bgHover}`}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <div className={`${social.color} ${social.hoverColor} transition-colors duration-300`}>
                      {social.svg}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      <span className="text-xs font-semibold text-white bg-slate-900 px-2 py-1 rounded">{social.label}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
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
      </div>
    </section>
  );
}
