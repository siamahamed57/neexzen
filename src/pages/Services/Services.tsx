import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Brain, Globe, ShoppingCart, Server, Palette, Zap, Layers, MapPin, Rocket, MessageSquare, Users, Cpu, Settings } from 'lucide-react';
import CursorGlow from '../../components/CursorGlow/CursorGlow';
import ServicesHero3D from '../../components/ServicesHero3D/ServicesHero3D';

const Services: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const serviceCategories = [
    {
      id: 'web',
      icon: <Code size={28} />,
      title: 'Web Development',
      color: 'purple',
      description: 'Cutting-edge web solutions that drive results',
      services: [
        {
          title: 'High-Conversion Landing Pages',
          description: 'Immersive 3D & GSAP animations that turn visitors into customers.',
          icon: <Globe size={18} />,
          features: ['Custom 3D Elements', 'GSAP Animation', 'Conversion Optimization', 'Responsive Design'],
          maintenance: 'Monthly Performance Checks'
        },
        {
          title: 'E-commerce & Scalable Stores',
          description: 'Custom Shopify & WooCommerce stores with advanced plugin development.',
          icon: <ShoppingCart size={18} />,
          features: ['Shopify/WooCommerce', 'Payment Gateway Integration', 'Inventory Management', 'Custom Themes'],
          maintenance: 'Security Updates & Backups'
        },
        {
          title: 'Enterprise Systems (LMS/ERP/POS)',
          description: 'Custom internal tools to automate your workflow.',
          icon: <Server size={18} />,
          features: ['Role-Based Access', 'Automated Workflows', 'Real-time Reporting', 'API Integration'],
          maintenance: 'Server Monitoring & Updates'
        },
        {
          title: 'Pixel-Perfect UI/UX',
          description: 'Figma/Adobe XD to high-performance, responsive code.',
          icon: <Palette size={18} />,
          features: ['User Research', 'Wireframing & Prototyping', 'Design System', 'Usability Testing'],
          maintenance: 'Design Iterations'
        },
        {
          title: 'Performance & SEO',
          description: 'Technical audits and speed optimization for higher rankings.',
          icon: <Zap size={18} />,
          features: ['Core Web Vitals', 'On-Page SEO', 'Speed Optimization', 'Technical Audit'],
          maintenance: 'Monthly SEO Reports'
        },
      ],
    },
    {
      id: 'mobile',
      icon: <Smartphone size={28} />,
      title: 'Mobile Application',
      color: 'blue',
      description: 'Native-feel apps for iOS & Android',
      services: [
        {
          title: 'Cross-Platform Apps',
          description: 'High-performance Flutter & React Native apps for iOS & Android.',
          icon: <Layers size={18} />,
          features: ['One Codebase', 'Native Performance', 'Offline Support', 'App Store Deployment'],
          maintenance: 'OS Updates Compatibility'
        },
        {
          title: 'Web-to-Mobile Transformation',
          description: 'Convert your web platform into a native-feel mobile app.',
          icon: <Smartphone size={18} />,
          features: ['PWA Functionality', 'Push Notifications', 'Device Features Access', 'App Shell Architecture'],
          maintenance: 'Regular App Updates'
        },
        {
          title: 'On-Demand Ecosystems',
          description: 'Uber-style solutions with real-time GPS, payments & multi-user interfaces.',
          icon: <MapPin size={18} />,
          features: ['Real-time Tracking', 'In-app Payments', 'User/Driver/Admin Apps', 'Rating System'],
          maintenance: '24/7 Server Uptime'
        },
        {
          title: 'IoT Dashboards',
          description: 'Real-time monitoring & control for smart devices with low-latency data sync.',
          icon: <Cpu size={18} />,
          features: ['MQTT/WebSocket', 'Data Visualization', 'Remote Control', 'Alert System'],
          maintenance: 'Device Firmware Updates'
        },
        {
          title: 'ASO & Launch Strategy',
          description: 'Metadata optimization for maximum app store visibility.',
          icon: <Rocket size={18} />,
          features: ['Keyword Research', 'Screenshot Design', 'Description Optimization', 'Review Management'],
          maintenance: 'Rank Tracking'
        },
      ],
    },
    {
      id: 'ai',
      icon: <Brain size={28} />,
      title: 'AI Integration',
      color: 'emerald',
      description: 'Intelligent automation & smart solutions',
      services: [
        {
          title: 'Enterprise Knowledge Retrieval (RAG)',
          description: '"Chat with your Data" systems for secure document querying.',
          icon: <MessageSquare size={18} />,
          features: ['Vector Database', 'Semantic Search', 'Context Awareness', 'Secure Data Handling'],
          maintenance: 'Model Retraining'
        },
        {
          title: 'AI Customer Support',
          description: 'Intelligent assistants with multi-lingual support & human-in-the-loop escalation.',
          icon: <Users size={18} />,
          features: ['NLP/NLU', 'Multi-channel Support', 'Sentiment Analysis', 'Seamless Escalation'],
          maintenance: 'Conversation Flow Updates'
        },
        {
          title: 'Autonomous AI Agents',
          description: 'Multi-step automation for lead nurturing, data entry & business processes.',
          icon: <Settings size={18} />,
          features: ['Task Automation', 'Decision Making Logic', 'Integration with CRMs', 'Adaptive Learning'],
          maintenance: 'Workflow Optimization'
        },
        {
          title: 'Custom LLM Fine-Tuning',
          description: 'Optimized open-source models (Llama 3, Mistral) for industry-specific accuracy.',
          icon: <Cpu size={18} />,
          features: ['Dataset Preparation', 'Model Training', 'Evaluation & Benchmarking', 'Deployment'],
          maintenance: 'Model Updates'
        },
      ],
    },
  ];

  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Flutter', 'React Native', 'TensorFlow', 'OpenAI', 'AWS', 'Google Cloud', 'Docker'];

  const processSteps = [
    { number: '01', title: 'Discovery', description: 'Deep dive into your vision, goals, and challenges.' },
    { number: '02', title: 'Strategy', description: 'Tailored roadmap with clear milestones and deliverables.' },
    { number: '03', title: 'Design', description: 'Intuitive interfaces and seamless user experiences.' },
    { number: '04', title: 'Development', description: 'Robust, scalable, and maintainable solutions.' },
    { number: '05', title: 'Testing', description: 'Rigorous QA to ensure quality and reliability.' },
    { number: '06', title: 'Launch', description: 'Seamless deployment with ongoing support.' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hoverBg: string; gradientFrom: string }> = {
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', hoverBg: 'group-hover:bg-purple-500', gradientFrom: 'from-purple-500/20' },
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', hoverBg: 'group-hover:bg-blue-500', gradientFrom: 'from-blue-500/20' },
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', hoverBg: 'group-hover:bg-emerald-500', gradientFrom: 'from-emerald-500/20' },
    };
    return colors[color] || colors.purple;
  };

  return (
    <main className="bg-black text-white relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-slow-spin">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-3/4 left-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-3/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
        </div>
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <CursorGlow containerRef={heroRef} />

        {/* Hero-specific accent glows */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300">What We Do</span>
              </motion.div>

              <h1 className="hero-title">
                <span className="text-white">Comprehensive</span>
                <br />
                <span className="text-shimmer">Services</span>
              </h1>

              <p className="hero-subtitle mt-6 text-neutral-300">
                From AI-driven innovations to pixel-perfect development, we provide
                a complete suite of services to elevate your business.
              </p>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[500px] w-full relative"
            >
              <ServicesHero3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => {
        const colorClasses = getColorClasses(category.color);
        return (
          <section key={category.id} className={`relative py-24 ${catIndex > 0 ? 'border-t border-neutral-800/50' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 mb-12"
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center ${colorClasses.text}`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                  <p className="text-neutral-400 mt-1">{category.description}</p>
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative h-full"
                  >
                    {/* Card Content (Visible by default) */}
                    <div className="relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden h-[300px] flex flex-col justify-between group-hover:bg-neutral-900">
                      {/* Gradient overlay on hover container */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradientFrom} to-transparent opacity-0 group-hover:opacity-10 opacity-0 transition-opacity duration-300`} />

                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center ${colorClasses.text} mb-6 transition-all duration-300`}>
                          {service.icon}
                        </div>
                        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-white transition-colors">{service.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                      </div>

                      {/* Read More hint */}
                      <div className={`mt-auto pt-4 flex items-center gap-2 text-sm font-medium ${colorClasses.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                        View Details <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* Desktop Hover Popup */}
                    <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none md:pointer-events-auto">
                      <div className="absolute inset-0 bg-neutral-950/95 backdrop-blur-xl border border-neutral-700 rounded-2xl p-6 flex flex-col scale-95 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                        <h3 className="font-display text-lg font-bold text-white mb-3">{service.title}</h3>

                        <div className="space-y-3 flex-grow overflow-y-auto custom-scrollbar">
                          <div>
                            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${colorClasses.text}`}>What We Provide</h4>
                            <ul className="space-y-1">
                              {service.features?.map((feature, i) => (
                                <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                                  <span className={`mt-1 w-1 h-1 rounded-full ${colorClasses.bg.replace('/10', '')}`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${colorClasses.text}`}>Maintenance</h4>
                            <p className="text-xs text-neutral-300">{service.maintenance}</p>
                          </div>
                        </div>

                        <Link to="/contact" className="mt-4 w-full py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group/btn">
                          Contact Us
                          <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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