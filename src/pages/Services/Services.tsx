import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layers, Palette, Megaphone, Shield, Zap, MonitorSmartphone, Search, Bot, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { icon: <Code size={24} />, title: 'Web Development', category: 'Development', description: 'Modern, responsive, and high-performing websites.', features: ['React & Next.js', 'Custom CMS', 'E-commerce', 'PWAs'] },
    { icon: <Palette size={24} />, title: 'UI/UX Design', category: 'Design', description: 'Intuitive interfaces and engaging experiences.', features: ['User Research', 'Prototyping', 'Design Systems', 'Testing'] },
    { icon: <Bot size={24} />, title: 'AI & Machine Learning', category: 'AI', description: 'Intelligent systems that automate and optimize.', features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Custom Models'] },
    { icon: <Layers size={24} />, title: 'Software & SaaS', category: 'Development', description: 'Bespoke applications and scalable platforms.', features: ['Custom Software', 'SaaS Development', 'API Integration', 'Microservices'] },
    { icon: <Megaphone size={24} />, title: 'Digital Marketing', category: 'Growth', description: 'Strategic campaigns that drive conversions.', features: ['SEO', 'PPC', 'Social Media', 'Content Strategy'] },
    { icon: <Shield size={24} />, title: 'Security Solutions', category: 'Security', description: 'Robust protection for your digital assets.', features: ['Audits', 'Penetration Testing', 'Compliance', 'Monitoring'] },
    { icon: <Zap size={24} />, title: 'Performance', category: 'Technical', description: 'Blazing-fast load times and UX.', features: ['Core Web Vitals', 'Optimization', 'CDN Setup', 'Caching'] },
    { icon: <Cloud size={24} />, title: 'Cloud Solutions', category: 'Infrastructure', description: 'Scalable cloud infrastructure.', features: ['AWS & GCP', 'DevOps', 'CI/CD', 'Kubernetes'] },
    { icon: <MonitorSmartphone size={24} />, title: 'Mobile Apps', category: 'Development', description: 'Native and cross-platform applications.', features: ['iOS & Android', 'React Native', 'Flutter', 'App Store'] },
  ];

  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Deep dive into your vision and challenges.' },
    { number: '02', title: 'Strategy', description: 'Tailored roadmap with clear milestones.' },
    { number: '03', title: 'Design', description: 'Intuitive interfaces and experiences.' },
    { number: '04', title: 'Development', description: 'Robust, scalable solutions.' },
    { number: '05', title: 'Testing', description: 'Rigorous QA for quality.' },
    { number: '06', title: 'Launch', description: 'Seamless deployment and support.' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Development', 'Design', 'AI', 'Growth', 'Security', 'Technical', 'Infrastructure'];
  const filteredServices = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Slick & Modern */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-purple-600/25 rounded-full blur-[180px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
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
              <span className="text-sm text-gray-400">What We Do</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Comprehensive</span>
              <br />
              <span className="gradient-text">Digital Solutions</span>
            </h1>

            <p className="hero-subtitle mt-8 max-w-xl">
              From AI-driven innovations to pixel-perfect development, we provide
              a complete suite of services to elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group card card-glow p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 mb-6">
                  {service.icon}
                </div>
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">{service.category}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-2">{service.title}</h3>
                <p className="mt-3 text-gray-500 text-sm leading-relaxed">{service.description}</p>

                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">Our Stack</p>
            <h2 className="section-title">Technologies We <span className="text-gray-500">Use</span></h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-purple-500/30 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="section-label">Our Process</p>
            <h2 className="section-title">How We <span className="text-gray-500">Work</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="font-display text-7xl font-bold text-white/[0.03]">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-2">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Have a Project</span>
              <br />
              <span className="gradient-text">in Mind?</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-xl mx-auto">
              Let's discuss how we can turn your ideas into reality.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary group text-base px-10 py-4">
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;