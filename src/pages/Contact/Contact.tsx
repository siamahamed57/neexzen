import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const faqs = [
    { q: 'What is the first step to start a project with Neexzen?', a: 'The first step is to get in touch with us through this contact form or by sending an email to info@neexzen.com. We\'ll schedule a free discovery call to discuss your project requirements, goals, and vision.' },
    { q: 'How long does it take to get a project quote?', a: 'After our initial discovery call, we typically provide a detailed project proposal and quote within 3-5 business days. The timeline can vary depending on the complexity of the project.' },
    { q: 'Do you offer services for non-technical founders?', a: 'Absolutely! We specialize in guiding non-technical founders through the entire product development lifecycle. We handle all the technical complexities so you can focus on your business vision.' },
    { q: 'What kind of post-launch support do you provide?', a: 'We offer a range of flexible support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We believe in building long-term partnerships.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-green-900 to-cyan-900 dark:from-white dark:via-green-100 dark:to-cyan-100">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">your@email.com</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your company name</label>
                <input type="text" id="company" name="company" className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Innovate Inc." />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tell us about your project...</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="I have an idea for a revolutionary new app..."></textarea>
              </div>
              <button type="submit" className="w-full group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl shadow-blue-500/50 dark:shadow-blue-500/30 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Side: Info & Map */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg text-white shadow-lg"><Mail size={20} /></div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@neexzen.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">info@neexzen.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg text-white shadow-lg"><Phone size={20} /></div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+01304984437" className="text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400">+01304984437</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg text-white shadow-lg"><MapPin size={20} /></div>
                  <div>
                    <h3 className="font-semibold">Office Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Bashundhara R/A, Dhaka, Bangladesh</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.9453439261!2d90.4022279486328!3d23.789744900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a097d13911%3A0x2fe57059737f795a!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1722204569123!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
                <div className="rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500/30">
                  <button type="button" className="flex justify-between items-center w-full p-6 font-semibold text-left text-gray-900 dark:text-white" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span className="text-lg">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;