import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Bot, Play } from 'lucide-react';
import Hero3D from '../../components/Hero3D/Hero3D';

const Home: React.FC = () => {
  const services = [
    { icon: <Code size={22} />, title: 'Web Development', description: 'High-conversion landing pages, e-commerce, and enterprise systems with stunning animations.' },
    { icon: <Smartphone size={22} />, title: 'Mobile Application', description: 'Cross-platform Flutter & React Native apps with on-demand ecosystems and IoT dashboards.' },
    { icon: <Bot size={22} />, title: 'AI Integration', description: 'Enterprise RAG systems, AI customer support, and autonomous agents with custom LLM fine-tuning.' },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
  ];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Understanding your vision, challenges, and goals.' },
    { number: '02', title: 'Strategy', description: 'Crafting a tailored roadmap with clear milestones.' },
    { number: '03', title: 'Execution', description: 'Building and testing using agile methodologies.' },
    { number: '04', title: 'Launch', description: 'Seamless deployment with ongoing optimization.' },
  ];

  const clients = ['QuantumLeap', 'Nebula Systems', 'Synapse AI', 'Stellar Solutions', 'Apex Innovations', 'Fusion Dynamics', 'Cipher Core', 'Vertex Digital'];

  const testimonials = [
    { quote: 'Neexzen transformed our business with their AI-powered solutions. Results exceeded expectations.', author: 'Sarah Chen', role: 'CTO, TechVentures' },
    { quote: 'Their ML expertise helped us achieve a 40% increase in operational efficiency.', author: 'Michael Roberts', role: 'CEO, DataFlow Inc' },
    { quote: 'A truly collaborative partner. They delivered a product our customers love.', author: 'Emily Watson', role: 'Product Lead, Innovate Labs' },
  ];

  const faqs = [
    { q: 'What technologies do you specialize in?', a: 'We specialize in React, Node.js, Python, AI/ML, cloud platforms (AWS, GCP), and more.' },
    { q: 'How long does a typical project take?', a: 'Timelines vary by complexity. A standard project takes 4-12 weeks from discovery to launch.' },
    { q: 'Do you provide post-launch support?', a: 'Yes, we offer comprehensive support and maintenance packages for long-term partnerships.' },
    { q: 'What industries do you serve?', a: 'We work across fintech, healthcare, e-commerce, SaaS, and enterprise sectors.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-100px)] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[200px] animate-subtle-glow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300">Now accepting new projects</span>
              </motion.div>

              {/* Headline */}
              <h1 className="hero-title">
                <span className="block text-white">We Build</span>
                <span className="block text-shimmer">Digital Products</span>
                <span className="block text-neutral-400">That Matter</span>
              </h1>

              <p className="hero-subtitle mt-6 mx-auto lg:mx-0">
                From AI-powered innovations to pixel-perfect interfaces, we craft
                software solutions that transform businesses.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to="/contact" className="btn-primary group">
                  Start a Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary group">
                  <Play size={16} className="text-purple-400" />
                  Watch Demo
                </button>
              </div>

              {/* Trust */}
              <div className="mt-8 pt-6 border-t border-neutral-800 hidden lg:block">
                <p className="text-xs text-neutral-400 mb-3">Trusted by innovative companies</p>
                <div className="flex flex-wrap items-center gap-5">
                  {clients.slice(0, 4).map((client) => (
                    <span key={client} className="text-sm font-display font-medium text-neutral-500 hover:text-white transition-colors">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3D Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg aspect-square">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" />
                  </div>
                }>
                  <Hero3D />
                </Suspense>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 right-0 p-3 rounded-xl bg-neutral-900/90 border border-neutral-700 backdrop-blur-sm z-10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400">AI Integration</p>
                      <p className="text-xs font-medium text-white">GPT-4 Ready</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-8 left-0 p-3 rounded-xl bg-neutral-900/90 border border-neutral-700 backdrop-blur-sm z-10"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Code size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400">Full Stack</p>
                      <p className="text-xs font-medium text-white">React + Node</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-neutral-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Client Marquee */}
      <section className="py-6 border-y border-neutral-800">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-24"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...clients, ...clients].map((client, index) => (
              <span key={index} className="text-lg font-display font-medium text-neutral-500 hover:text-white whitespace-nowrap transition-colors cursor-default">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800 card-3d card-glow gradient-border"
              >
                <p className="font-display text-5xl md:text-6xl font-bold text-white">{stat.value}</p>
                <p className="mt-3 text-sm text-neutral-400 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Our Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 hover:bg-neutral-900 transition-all duration-300 card-3d"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-white mt-5 mb-2">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors group">
              View all services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-900/30 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">How We Work</p>
            <h2 className="section-title">Our Process</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-display text-7xl font-bold text-purple-400/50">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-2">{step.title}</h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 card-3d hover:border-purple-500/20"
              >
                <p className="text-neutral-300 leading-relaxed mb-6">"{item.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-neutral-400">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-neutral-900/30 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full flex items-center gap-4 p-5 text-left rounded-2xl transition-all duration-300 ${openFaq === index
                    ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20'
                    : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                >
                  {/* Number indicator */}
                  <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${openFaq === index
                    ? 'bg-purple-500 text-white'
                    : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700'
                    }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 font-display font-medium text-white">{faq.q}</span>

                  {/* Animated plus/minus icon */}
                  <div className={`relative w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-0.5 rounded-full transition-all duration-300 ${openFaq === index ? 'bg-purple-400' : 'bg-neutral-400'}`} />
                    <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 rounded-full transition-all duration-300 ${openFaq === index ? 'bg-purple-400 rotate-90 opacity-0' : 'bg-neutral-400'}`} />
                  </div>
                </button>

                {/* Answer panel */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 py-4 ml-14">
                    <p className="text-neutral-300 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Ready to Build</span>
              <br />
              <span className="text-shimmer">Something Great?</span>
            </h2>
            <p className="mt-8 text-xl text-neutral-300 max-w-xl mx-auto">
              Let's transform your ideas into reality.
            </p>
            <div className="mt-12">
              <Link to="/contact" className="btn-primary group text-base px-10 py-4">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;