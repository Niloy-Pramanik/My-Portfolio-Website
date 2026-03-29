'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Send email using formspree or similar service
      const response = await fetch('https://formspree.io/f/xyzqkprz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 mb-16 items-start">
          {/* Contact Info Section */}
          <motion.div
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-100 mb-4">Contact Information</h3>
            
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
            onSubmit={handleSubmit}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-6 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                submitStatus === 'success' ? 'from-green-600 to-green-700' : ''
              } ${submitStatus === 'error' ? 'from-red-600 to-red-700' : ''}`}
              whileHover={!isLoading ? { scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {isLoading
                ? 'Sending...'
                : submitStatus === 'success'
                ? '✓ Message Sent!'
                : submitStatus === 'error'
                ? '✕ Error Sending'
                : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
