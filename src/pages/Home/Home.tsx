import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, ArrowLeft, Bot, ChevronDown, Code, Layers, Megaphone, Palette, PenTool, Rocket, Search, Shield, Users, Zap, Sparkles, Brain, TrendingUp, Award, Cpu } from 'lucide-react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Home = () => {
  const [activeProjectTab, setActiveProjectTab] = React.useState('All');
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Responsive, scalable, and modern websites built with cutting-edge technology, designed for impact.',
      gradient: 'from-blue-500 to-cyan-400',
      bgGlow: 'bg-blue-500/20'
    },
    {
      icon: <PenTool size={32} />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces and engaging user experiences that captivate and convert your audience.',
      gradient: 'from-purple-500 to-pink-400',
      bgGlow: 'bg-purple-500/20'
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Digital Marketing',
      description: 'Strategic SEO, Meta Pixel & GTM integrations, and campaigns that drive growth and maximize ROI.',
      gradient: 'from-orange-500 to-yellow-400',
      bgGlow: 'bg-orange-500/20'
    },
    {
      icon: <Bot size={32} />,
      title: 'AI & Machine Learning',
      description: 'Implementing smarter systems to automate processes, predict trends, and optimize business operations.',
      gradient: 'from-green-500 to-emerald-400',
      bgGlow: 'bg-green-500/20'
    },
    {
      icon: <Layers size={32} />,
      title: 'Software & SaaS Solutions',
      description: 'Building bespoke applications and scalable SaaS platforms tailored precisely to your business needs.',
      gradient: 'from-red-500 to-rose-400',
      bgGlow: 'bg-red-500/20'
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity & Speed',
      description: 'Ensuring robust security and blazing-fast performance for your digital infrastructure and applications.',
      gradient: 'from-indigo-500 to-blue-400',
      bgGlow: 'bg-indigo-500/20'
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered', icon: <Rocket size={24} />, gradient: 'from-blue-500 to-cyan-400' },
    { value: '50+', label: 'Satisfied Clients', icon: <Users size={24} />, gradient: 'from-purple-500 to-pink-400' },
    { value: '10+', label: 'Years of Experience', icon: <Award size={24} />, gradient: 'from-orange-500 to-yellow-400' },
  ];

  const processSteps = [
    {
      icon: <Search size={32} />,
      title: '1. Discovery & Strategy',
      description: 'Deep dive into your vision, market, and challenges to forge a clear path forward.',
      gradient: 'from-blue-600 to-cyan-400',
      glowColor: 'blue'
    },
    {
      icon: <Palette size={32} />,
      title: '2. Design & Prototyping',
      description: 'Creative UI/UX design and interactive prototypes ensure your solution looks and feels perfect.',
      gradient: 'from-fuchsia-600 to-pink-400',
      glowColor: 'fuchsia'
    },
    {
      icon: <Code size={32} />,
      title: '3. Development & QA',
      description: 'Our expert engineers build robust solutions, rigorously tested for quality and performance.',
      gradient: 'from-amber-600 to-orange-400',
      glowColor: 'amber'
    },
    {
      icon: <Rocket size={32} />,
      title: '4. Launch & Evolution',
      description: 'Seamless deployment, ongoing support, and continuous optimization for sustained success.',
      gradient: 'from-emerald-600 to-green-400',
      glowColor: 'emerald'
    }
  ];

  const whyChooseUs = [
    { icon: <Sparkles size={24} />, text: 'Innovative and result-driven solutions', gradient: 'from-blue-500 to-cyan-400' },
    { icon: <Users size={24} />, text: 'Transparent and collaborative workflow', gradient: 'from-purple-500 to-pink-400' },
    { icon: <Cpu size={24} />, text: 'AI-powered modern technologies', gradient: 'from-green-500 to-emerald-400' },
    { icon: <Zap size={24} />, text: 'Dedicated support and maintenance', gradient: 'from-orange-500 to-yellow-400' },
    { icon: <TrendingUp size={24} />, text: 'Focused on ROI and measurable growth', gradient: 'from-red-500 to-rose-400' },
  ];

  const testimonials = [
      {
        quote: 'NEEXZEN transformed our business website into a powerful tool. The team was professional and efficient.',
        author: 'Client A',
        company: 'Tech Innovators Inc.',
        gradient: 'from-blue-500 to-cyan-400'
      },
      {
        quote: 'The AI system they built for us has improved our operational efficiency by 40%.',
        author: 'Client B',
        company: 'Global Logistics',
        gradient: 'from-purple-500 to-pink-400'
      },
      {
        quote: 'Their UI/UX design is top-notch. Our user engagement has skyrocketed since the redesign.',
        author: 'Client C',
        company: 'Creative Minds Co.',
        gradient: 'from-orange-500 to-yellow-400'
      },
      {
        quote: 'The cybersecurity audit was thorough and insightful. We feel much more secure now.',
        author: 'Client D',
        company: 'SecureNet',
        gradient: 'from-green-500 to-emerald-400'
      },
      {
        quote: 'A truly collaborative partner. They listened to our needs and delivered a product that exceeded expectations.',
        author: 'Client E',
        company: 'Synergy Partners',
        gradient: 'from-red-500 to-rose-400'
      },
      {
        quote: 'The SaaS platform they developed is scalable, fast, and has become the core of our business.',
        author: 'Client F',
        company: 'ScaleUp Ventures',
        gradient: 'from-indigo-500 to-blue-400'
      },
      {
        quote: 'Our digital marketing campaigns have never been more effective. The results speak for themselves.',
        author: 'Client G',
        company: 'MarketBoost',
        gradient: 'from-pink-500 to-fuchsia-400'
      },
      {
        quote: 'Incredible attention to detail and a deep understanding of modern web technologies.',
        author: 'Client H',
        company: 'Pixel Perfect',
        gradient: 'from-teal-500 to-cyan-400'
      },
      {
        quote: 'They are not just developers; they are true problem solvers. Highly recommended.',
        author: 'Client I',
        company: 'SolutionFoundry',
        gradient: 'from-amber-500 to-orange-400'
      },
      {
        quote: 'Fast, reliable, and always available for support. A pleasure to work with.',
        author: 'Client J',
        company: 'Momentum Corp',
        gradient: 'from-lime-500 to-green-400'
      },
  ];

  const projects = [
    { id: 1, category: 'Web Dev', title: 'QuantumLeap CRM', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', description: 'A futuristic CRM dashboard with predictive analytics.', gradient: 'from-blue-500 to-cyan-400' },
    { id: 2, category: 'SaaS Software', title: 'Nebula Finance', image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76f8c8?q=80&w=1974&auto=format&fit=crop', description: 'A decentralized finance platform with AI-driven risk assessment.', gradient: 'from-purple-500 to-pink-400' },
    { id: 3, category: 'Digital Solutions', title: 'Project Chimera', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1974&auto=format&fit=crop', description: 'An integrated digital marketing hub for global campaigns.', gradient: 'from-orange-500 to-yellow-400' },
    { id: 4, category: 'Web Dev', title: 'Orion E-commerce', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', description: 'A high-performance e-commerce site with personalized AI recommendations.', gradient: 'from-green-500 to-emerald-400' },
    { id: 5, category: 'SaaS Software', title: 'Synapse HR', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', description: 'A complete human resources management SaaS solution.', gradient: 'from-red-500 to-rose-400' },
  ];

  const filteredProjects = projects.filter(p => activeProjectTab === 'All' || p.category === activeProjectTab);

  const faqs = [
    { q: 'What kind of technologies do you specialize in?', a: 'We specialize in a wide range of modern technologies including React, Node.js, Python for AI/ML, and cloud platforms like AWS and Google Cloud. We are also experts in blockchain development and cybersecurity protocols.' },
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on complexity and scope. A standard web development project can take 4-8 weeks, while a full-scale SaaS application may take 3-6 months or more. We provide a detailed timeline after the initial discovery phase.' },
    { q: 'What is your development process?', a: 'We follow an agile development methodology, which includes iterative cycles of planning, design, development, and testing. This ensures transparency, flexibility, and allows for client feedback at every stage.' },
    { q: 'Do you provide support after the project is launched?', a: 'Yes, we offer various support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We believe in long-term partnerships with our clients.' },
  ];

  const clients = [
    'QuantumLeap', 'Nebula Systems', 'Synapse AI', 'Stellar Solutions',
    'Apex Innovations', 'Fusion Dynamics', 'Cipher Core', 'Vertex Digital'
  ];
  // Duplicate for seamless loop
  const marqueeClients = [...clients, ...clients];

  // Particles state and init
  const [init, setInit] = React.useState(false);
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: any) => {
    console.log("Particles container loaded", container);
  };

  // Testimonial slider state and logic
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const controls = useAnimation();

  const handleNext = () => {
    const newIndex = Math.min(testimonials.length - 3, testimonialIndex + 1);
    setTestimonialIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, testimonialIndex - 1);
    setTestimonialIndex(newIndex);
  };

  React.useEffect(() => {
    const sliderWidth = document.querySelector('.testimonial-slider')?.clientWidth || 0;
    const itemWidth = sliderWidth / 3;
    controls.start({ x: -testimonialIndex * itemWidth });
  }, [testimonialIndex, controls]);


  return (
      <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
        {init && (
          <Particles
            id="tsparticles"
            loaded={particlesLoaded}
            className="absolute inset-0 -z-0"
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  repulse: {
                    distance: 80,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#a0aec0", // gray-500
                },
                links: {
                  color: "#a0aec0", // gray-500
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: { value: 0.2 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        )}
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 pt-32 pb-32 sm:pt-40 sm:pb-40 overflow-hidden ">
          {/* Animated background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="mx-auto max-w-5xl text-center relative z-10  mt-[60px]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 mb-8">
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 ">AI-Powered Innovation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
                  Empowering Businesses with
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Smart Software Solutions
                </span>
              </h1>
              
              <p className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                From Web Development to AI-Driven Innovations, We Deliver Cutting-Edge Technology for Your Success.
              </p>
              
              <div className="mt-12 flex items-center justify-center gap-6 flex-wrap">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl shadow-blue-500/50 dark:shadow-blue-500/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-xl bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  Explore Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Marquee Section */}
        <section className="py-12 relative mt-[160px]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-16"
              animate={{
                x: ['0%', '-50%'],
                transition: {
                  ease: 'linear',
                  duration: 40,
                  repeat: Infinity,
                },
              }}
            >
              {marqueeClients.map((client, index) => (
                <div key={index} className="flex-shrink-0 text-2xl font-bold text-gray-400/80 dark:text-gray-600/80 transition-colors hover:text-gray-900 dark:hover:text-white cursor-pointer">
                  {client}
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent" />
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-500/10" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                        {React.cloneElement(stat.icon, { className: 'text-white' })}
                      </div>
                      <div>
                        <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">{stat.value}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                  <Zap size={16} className="animate-pulse" />
                  Our Services
                </span>
                <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Comprehensive solutions powered by cutting-edge technology and AI innovation
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 overflow-hidden">
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`} />
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500 shadow-xl`}>
                        {React.cloneElement(service.icon, { className: 'text-white' })}
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white dark:bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Bottom indicator */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-700`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Ultra Premium */}
        <section className="py-40 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 dark:via-blue-500/10 to-transparent" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8">
                  <Brain size={16} className="animate-pulse" />
                  Our Process
                </span>
                <h2 className="text-6xl md:text-7xl font-black mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
                    A Blueprint for Success
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Journey through our revolutionary AI-powered development pipeline
                </p>
              </motion.div>
            </div>

            {/* Process Cards */}
            <div className="relative max-w-6xl mx-auto">
              {/* Connection SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="33%" stopColor="#ec4899" stopOpacity="0.5" />
                    <stop offset="66%" stopColor="#f59e0b" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 150 150 Q 350 150, 450 280 T 850 380 T 1150 280"
                  stroke="url(#processGradient)"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    className="group relative"
                  >
                    <div className="relative h-full p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-110 hover:-rotate-1 overflow-hidden shadow-xl hover:shadow-2xl">
                      {/* Multi-layer glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500 -z-10`} />
                      
                      {/* Animated icon */}
                      <div className="relative mb-8">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-500`} />
                        <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                          {React.cloneElement(step.icon, { className: 'text-white' })}
                        </div>
                        {/* Floating particles */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-white dark:bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-white dark:bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.3s' }} />
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>

                      {/* Animated bottom bar */}
                      <div className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${step.gradient} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`} />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-4 border-white dark:border-gray-950 flex items-center justify-center font-black text-xl shadow-xl transform group-hover:scale-125 transition-transform duration-300">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-br ${step.gradient}`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Arrow connector */}
                    {index < processSteps.length - 1 && (
                      <motion.div 
                        className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      >
                        <div className={`p-2 rounded-full bg-gradient-to-br ${step.gradient} shadow-xl animate-pulse`}>
                          <ArrowRight className="text-white w-6 h-6" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Bottom accent line */}
              <motion.div 
                className="mt-20 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                  <Sparkles size={16} className="animate-pulse" />
                  Our Work
                </span>
                <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  See how we have helped businesses thrive with our custom software solutions
                </p>
              </motion.div>
            </div>
            
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {['All', 'Web Dev', 'SaaS Software', 'Digital Solutions'].map(tab => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveProjectTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeProjectTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                    </div>
                  </div>

                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <ArrowRight className="text-white w-6 h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl shadow-blue-500/30"
              >
                View Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
  <div className="absolute inset-0">
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl" />
  </div>

  <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
          <Award size={16} className="animate-pulse" />
          Why Choose Us
        </span>
        <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Why Partner With NEEXZEN?
        </h2>
      </motion.div>
    </div>

    {/* Tracking Map Layout */}
    <div className="mt-24 h-[500px] lg:h-[750px] relative flex items-center justify-center">
      {/* Orbit Path */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[620px] lg:h-[620px] rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50">
          <div className="w-full h-full bg-white/50 rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Central Core */}
      <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-2xl" />
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Brain size={48} className="text-blue-500 dark:text-blue-400 mx-auto mb-2" />
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">NEEXZEN Core</h3>
        </motion.div>
      </div>

      {/* Orbiting Items (INSIDE the circle) */}
      {whyChooseUs.map((item, index) => {
        const angle = (index / whyChooseUs.length) * 2 * Math.PI - Math.PI / 2;
        // Use numeric radius for positioning inside the circle
        const radius = 190;
        // Use calc() for responsive positioning based on percentage and pixels
        const x = `calc(50% + ${radius * Math.cos(angle)}px)`;
        const y = `calc(50% + ${radius * Math.sin(angle)}px)`;

        return (
          <motion.div
            key={item.text}
            className="absolute w-44 p-3 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-xl hover:border-blue-500/50 transition-colors duration-300"
            style={{
              top: y,
              left: x,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}
              >
                {React.cloneElement(item.icon, { className: 'text-white', size: 18 })}
              </div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.text}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                  <Users size={16} className="animate-pulse" />
                  Testimonials
                </span>
                <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  What Our Clients Say
                </h2>
              </motion.div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="overflow-hidden testimonial-slider">
                <motion.div
                  className="flex gap-8"
                  drag="x"
                  dragConstraints={{ right: 0, left: -(100 * (testimonials.length - 3)) / 3 + '%' }}
                  animate={controls}
                  transition={{ type: 'spring', stiffness: 300, damping: 50 }}
                >
                  {testimonials.map((testimonial, i) => (
                    <motion.div
                      key={i}
                      className="group relative flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      <div className="relative h-full p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 transition-all duration-500 overflow-hidden shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-10`} />
                        
                        <div className="relative h-full flex flex-col min-h-[320px]">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                            <span className="text-3xl">💬</span>
                          </div>
                          
                          <blockquote className="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed flex-grow">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="flex items-center gap-4 mt-auto">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                              <Users size={20} className="text-white" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-12">
                <motion.button onClick={handlePrev} disabled={testimonialIndex === 0} className="p-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <ArrowLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                </motion.button>
                <motion.button onClick={handleNext} disabled={testimonialIndex >= testimonials.length - 3} className="p-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <ArrowRight className="w-6 h-6 text-gray-800 dark:text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                  <Brain size={16} className="animate-pulse" />
                  FAQ
                </span>
                <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                  Frequently Asked Questions
                </h2>
              </motion.div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500/30">
                    <button
                      type="button"
                      className="flex justify-between items-center w-full p-6 font-semibold text-left text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="text-lg">{faq.q}</span>
                      <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/20 mb-8">
                <Rocket className="w-5 h-5 text-blue-500 animate-pulse" />
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Ready to Start?</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
                  Start Your Digital Journey Today
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's discuss how we can turn your ideas into reality. Reach out for a free consultation or project estimate.
              </p>
              
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl shadow-blue-500/50 dark:shadow-blue-500/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-xl bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-colors flex items-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  );
};

export default Home;