import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layers, Palette, Megaphone, Shield, Zap, MonitorSmartphone, Bot, Cloud, Check } from 'lucide-react';
import CursorGlow from '../../components/CursorGlow/CursorGlow';

const Services: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const services = [
    { icon: <Code size={22} />, title: 'Web Development', category: 'Development', description: 'Modern, responsive, and high-performing websites built with the latest technologies.', features: ['React & Next.js', 'Custom CMS', 'E-commerce', 'Progressive Web Apps'] },
    { icon: <Palette size={22} />, title: 'UI/UX Design', category: 'Design', description: 'Intuitive interfaces and engaging experiences that convert visitors into customers.', features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing'] },
    { icon: <Bot size={22} />, title: 'AI & Machine Learning', category: 'AI', description: 'Intelligent systems that automate processes and unlock new opportunities.', features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Custom ML Models'] },
    { icon: <Layers size={22} />, title: 'Software & SaaS', category: 'Development', description: 'Bespoke applications and scalable cloud-based platforms for your business.', features: ['Custom Software', 'SaaS Development', 'API Integration', 'Microservices'] },
    { icon: <Megaphone size={22} />, title: 'Digital Marketing', category: 'Growth', description: 'Strategic campaigns and analytics that drive measurable business results.', features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Content Strategy'] },
    { icon: <Shield size={22} />, title: 'Security Solutions', category: 'Security', description: 'Robust protection strategies to keep your digital assets secure.', features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Monitoring'] },
    { icon: <Zap size={22} />, title: 'Performance', category: 'Technical', description: 'Optimization strategies for blazing-fast load times and smooth experiences.', features: ['Core Web Vitals', 'Speed Optimization', 'CDN Setup', 'Caching Strategy'] },
    { icon: <Cloud size={22} />, title: 'Cloud Solutions', category: 'Infrastructure', description: 'Scalable and reliable cloud infrastructure for modern applications.', features: ['AWS & GCP', 'DevOps', 'CI/CD Pipelines', 'Kubernetes'] },
    { icon: <MonitorSmartphone size={22} />, title: 'Mobile Apps', category: 'Development', description: 'Native and cross-platform applications that users love.', features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Launch'] },
  ];

  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Deep dive into your vision, goals, and challenges.' },
    { number: '02', title: 'Strategy', description: 'Tailored roadmap with clear milestones and deliverables.' },
    { number: '03', title: 'Design', description: 'Intuitive interfaces and seamless user experiences.' },
    { number: '04', title: 'Development', description: 'Robust, scalable, and maintainable solutions.' },
    { number: '05', title: 'Testing', description: 'Rigorous QA to ensure quality and reliability.' },
    { number: '06', title: 'Launch', description: 'Seamless deployment with ongoing support.' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Development', 'Design', 'AI', 'Growth', 'Security', 'Technical', 'Infrastructure'];
  const filteredServices = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <CursorGlow containerRef={heroRef} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px] animate-subtle-glow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm text-purple-300">What We Do</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Comprehensive</span>
              <br />
              <span className="text-purple-400">Digital Solutions</span>
            </h1>

            <p className="hero-subtitle mt-6 max-w-xl">
              From AI-driven innovations to pixel-perfect development, we provide
              a complete suite of services to elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="inline-block mt-5 text-xs text-purple-400 font-medium uppercase tracking-wider">{service.category}</span>
                <h3 className="font-display text-lg font-semibold text-white mt-1 mb-2">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-neutral-400">
                      <Check size={14} className="text-purple-400" />
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
      <section className="py-24 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="section-label">Our Stack</p>
            <h2 className="section-title">Technologies We Use</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-neutral-900/30 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="section-label">Our Process</p>
            <h2 className="section-title">How We Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <span className="font-display text-6xl font-bold text-purple-400/50">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-white mt-2">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{step.description}</p>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Have a Project</span>
              <br />
              <span className="text-purple-400">in Mind?</span>
            </h2>
            <p className="mt-6 text-xl text-neutral-300 max-w-xl mx-auto">
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