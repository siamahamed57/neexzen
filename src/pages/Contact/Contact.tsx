import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Clock, ChevronDown, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'info@neexzen.com', href: 'mailto:info@neexzen.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+880 1304 984 437', href: 'tel:+8801304984437' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Bashundhara R/A, Dhaka', href: '#' },
    { icon: <Clock size={20} />, label: 'Hours', value: 'Mon - Fri, 9AM - 6PM BST', href: '#' },
  ];

  const faqs = [
    { q: 'What is the first step to start a project?', a: 'Get in touch through this form or email us. We\'ll schedule a free discovery call.' },
    { q: 'How long to get a project quote?', a: 'After the discovery call, we typically provide a proposal within 3-5 business days.' },
    { q: 'Do you work with non-technical founders?', a: 'Yes! We guide non-technical founders through the entire development process.' },
    { q: 'What post-launch support do you provide?', a: 'We offer flexible support and maintenance packages for long-term success.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Slick & Modern */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[180px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="text-sm text-gray-400">Contact Us</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Let's Build</span>
              <br />
              <span className="gradient-text">Something Great</span>
            </h1>

            <p className="hero-subtitle mt-8 max-w-xl">
              Have a project in mind or just want to say hello?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card card-glow p-10">
                <h2 className="font-display text-2xl font-bold text-white mb-8">Send us a message</h2>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                      <input type="text" id="name" className="input" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email Address</label>
                      <input type="email" id="email" className="input" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-400 mb-2">Company (Optional)</label>
                    <input type="text" id="company" className="input" placeholder="Your Company" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm text-gray-400 mb-2">What can we help with?</label>
                    <select id="service" className="input">
                      <option value="" className="bg-black">Select a service</option>
                      <option value="web" className="bg-black">Web Development</option>
                      <option value="ai" className="bg-black">AI & Machine Learning</option>
                      <option value="design" className="bg-black">UI/UX Design</option>
                      <option value="mobile" className="bg-black">Mobile Development</option>
                      <option value="consulting" className="bg-black">Technical Consulting</option>
                      <option value="other" className="bg-black">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Project Details</label>
                    <textarea id="message" rows={5} className="input resize-none" placeholder="Tell us about your project, timeline, and budget..." />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="card flex items-start gap-4 p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-display font-medium text-white">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.9453439261!2d90.4022279486328!3d23.789744900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a097d13911%3A0x2fe57059737f795a!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1722204569123!5m2!1sen!2sbd"
                  width="100%"
                  height="220"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#030303]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common <span className="text-gray-500">Questions</span></h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-display font-medium text-white">{faq.q}</span>
                  <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;