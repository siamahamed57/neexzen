import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layers, Shield, ChevronDown, Bot, Megaphone, PenTool, Play } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    { icon: <Code size={24} />, title: 'Web Development', description: 'Modern, scalable web applications built with cutting-edge technology.' },
    { icon: <PenTool size={24} />, title: 'UI/UX Design', description: 'Crafting intuitive interfaces and engaging user experiences.' },
    { icon: <Megaphone size={24} />, title: 'Digital Marketing', description: 'Strategic SEO, Meta Pixel & GTM integrations for maximum ROI.' },
    { icon: <Bot size={24} />, title: 'AI & Machine Learning', description: 'Intelligent systems to automate and optimize operations.' },
    { icon: <Layers size={24} />, title: 'Software & SaaS', description: 'Building bespoke applications and scalable SaaS platforms.' },
    { icon: <Shield size={24} />, title: 'Cybersecurity', description: 'Robust security solutions and blazing-fast performance.' },
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
      {/* Hero Section - Slick & Modern with 3D Elements */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0">
          {/* Primary Gradient Orb */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse-glow" />
          {/* Secondary Gradient Orb */}
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          {/* Cyan Accent */}
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-gray-400">Now accepting new projects</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="hero-title">
                <span className="block text-white">We Build</span>
                <span className="block gradient-text">Digital Products</span>
                <span className="block text-gray-500">That Matter</span>
              </h1>

              <p className="hero-subtitle mt-8 mx-auto lg:mx-0">
                From AI-powered innovations to pixel-perfect interfaces, we craft
                software solutions that transform businesses and delight users.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to="/contact" className="btn-primary group">
                  Start a Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary group">
                  <Play size={16} className="text-purple-400" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  {clients.slice(0, 4).map((client) => (
                    <span key={client} className="text-sm font-display font-medium text-gray-600 hover:text-white transition-colors">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - 3D Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg aspect-square perspective-container">
                {/* Main 3D Cube/Diamond Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Glow Ring */}
                  <div className="absolute w-80 h-80 rounded-full border border-purple-500/20 animate-spin-slow" />
                  <div className="absolute w-96 h-96 rounded-full border border-pink-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

                  {/* 3D Diamond/Crystal Shape */}
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                      rotateX: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                      rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
                      rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="relative transform-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20 rounded-3xl shadow-glow"
                      style={{ transform: 'translateZ(60px)' }}
                    />
                    {/* Back Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20 rounded-3xl"
                      style={{ transform: 'translateZ(-60px) rotateY(180deg)' }}
                    />
                    {/* Left Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-3xl"
                      style={{ transform: 'translateX(-60px) rotateY(-90deg)' }}
                    />
                    {/* Right Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl"
                      style={{ transform: 'translateX(60px) rotateY(90deg)' }}
                    />
                    {/* Top Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-white/10 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl"
                      style={{ transform: 'translateY(-60px) rotateX(90deg)' }}
                    />
                    {/* Bottom Face */}
                    <div
                      className="absolute w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/10 rounded-3xl"
                      style={{ transform: 'translateY(60px) rotateX(-90deg)' }}
                    />
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">AI Integration</p>
                      <p className="text-sm font-medium">GPT-4 Ready</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Code size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Full Stack</p>
                      <p className="text-sm font-medium">React + Node</p>
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Client Marquee */}
      <section className="py-8 border-y border-white/5 bg-white/[0.01]">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...clients, ...clients].map((client, index) => (
              <span key={index} className="text-lg font-display font-medium text-gray-700 hover:text-white whitespace-nowrap transition-colors cursor-default">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5"
              >
                <p className="font-display text-6xl md:text-7xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-4 text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">
              Comprehensive <span className="text-gray-500">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card card-glow p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-ghost group">
              View all services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="section-label">How We Work</p>
            <h2 className="section-title">
              Our <span className="text-gray-500">Process</span>
            </h2>
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
                <span className="font-display text-8xl font-bold text-white/[0.03]">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-2">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">
              What Clients <span className="text-gray-500">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <p className="text-gray-400 leading-relaxed mb-6">"{item.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="section-title">
              Common <span className="text-gray-500">Questions</span>
            </h2>
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

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-500/15 rounded-full blur-[180px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]" />
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
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="mt-8 text-xl text-gray-400 max-w-xl mx-auto">
              Let's transform your ideas into reality with our AI-powered solutions.
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