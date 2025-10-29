import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code, Layers, Palette, Megaphone, Shield, Zap, MonitorSmartphone, Search, Bot, GitBranch, Cloud, ArrowRight,Rocket,
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Web Development',
      category: 'Development',
      icon: <Code size={28} />,
      description: 'We create responsive, high-performing, and visually appealing websites for businesses and individuals.',
      keyPoints: ['WordPress Development', 'Custom HTML/CSS & PHP', 'Full-Stack Solutions', 'E-commerce Platforms'],
      link: '/services/web-development',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'UI/UX Design',
      category: 'Design',
      icon: <Palette size={28} />,
      description: 'Our team designs intuitive and engaging user interfaces for seamless user experiences.',
      keyPoints: ['Wireframing & Prototyping', 'User-Centered Design', 'Mobile & Web Interfaces', 'Interaction Design'],
      link: '/services/ui-ux-design',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Digital Marketing',
      category: 'Marketing & Growth',
      icon: <Megaphone size={28} />,
      description: 'Strategic campaigns that drive traffic, increase conversions, and grow your online presence.',
      keyPoints: ['Social Media Marketing', 'Google Ads Management', 'Content Strategy', 'Email Marketing'],
      link: '/services/digital-marketing',
      gradient: 'from-orange-500 to-yellow-400'
    },
    {
      title: 'Software Development',
      category: 'Development',
      icon: <Layers size={28} />,
      description: 'Custom software and SaaS solutions tailored to your business needs, from desktop to cloud.',
      keyPoints: ['Bespoke Applications', 'Scalable SaaS Platforms', 'API Integration', 'End-to-End Development'],
      link: '/services/software-development',
      gradient: 'from-red-500 to-rose-400'
    },
    {
      title: 'Security Solutions',
      category: 'Advanced Solutions',
      icon: <Shield size={28} />,
      description: 'Advanced solutions to protect your digital assets against modern threats.',
      keyPoints: ['Vulnerability Assessments', 'Malware Detection', 'Secure System Integration', 'Data Encryption'],
      link: '/services/security-solutions',
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      title: 'Speed Optimization',
      category: 'Advanced Solutions',
      icon: <Zap size={28} />,
      description: 'Ensuring your websites and applications load faster for superior user experience and SEO.',
      keyPoints: ['Code & Image Optimization', 'Advanced Caching', 'Server Performance Tuning', 'Core Web Vitals'],
      link: '/services/speed-optimization',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      title: 'GTM & Meta Pixel',
      category: 'Marketing & Growth',
      icon: <GitBranch size={28} />,
      description: 'Implement robust tracking to analyze data and enhance marketing campaigns for higher ROI.',
      keyPoints: ['Google Tag Manager Setup', 'Meta Pixel Integration', 'Conversion Tracking', 'Data Layer Implementation'],
      link: '/services/tag-management',
      gradient: 'from-teal-500 to-cyan-400'
    },
    {
      title: 'Search Engine Optimization',
      category: 'Marketing & Growth',
      icon: <Search size={28} />,
      description: 'Helping your business rank higher on search engines with advanced on-page and off-page strategies.',
      keyPoints: ['Keyword Optimization', 'Technical SEO Audits', 'Link Building', 'Competitor Analysis'],
      link: '/services/seo',
      gradient: 'from-amber-500 to-orange-400'
    },
    {
      title: 'AI & Machine Learning',
      category: 'Advanced Solutions',
      icon: <Bot size={28} />,
      description: 'AI-powered applications for data analysis, predictive modeling, and business process automation.',
      keyPoints: ['Predictive Analytics', 'Natural Language Processing', 'Custom AI Models', 'Automation Solutions'],
      link: '/services/ai-ml',
      gradient: 'from-lime-500 to-green-400'
    },
    {
      title: 'Mobile App Development',
      category: 'Development',
      icon: <MonitorSmartphone size={28} />,
      description: 'Cross-platform and native mobile applications for iOS and Android with a focus on performance.',
      keyPoints: ['iOS & Android Apps', 'React Native Development', 'Scalable Architecture', 'App Store Deployment'],
      link: '/services/mobile-apps',
      gradient: 'from-fuchsia-500 to-purple-400'
    },
    {
      title: 'Branding & Graphic Design',
      category: 'Design',
      icon: <Palette size={28} />,
      description: 'Logo design, brand identity, and promotional graphics that reflect your brand’s vision and values.',
      keyPoints: ['Logo & Identity Design', 'Marketing Collateral', 'Brand Style Guides', 'Digital Graphics'],
      link: '/services/branding',
      gradient: 'from-rose-500 to-red-400'
    },
    {
      title: 'Cloud Solutions & Hosting',
      category: 'Development',
      icon: <Cloud size={28} />,
      description: 'Cloud integration, hosting, and server management for high availability, security, and performance.',
      keyPoints: ['AWS & Google Cloud', 'Server Management', 'DevOps & CI/CD', 'Scalable Hosting'],
      link: '/services/cloud-hosting',
      gradient: 'from-sky-500 to-blue-400'
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Development', 'Design', 'Marketing & Growth', 'Advanced Solutions'];
  const filteredServices = activeCategory === 'All'
    ? servicesList
    : servicesList.filter(service => service.category === activeCategory);

  // Custom SVG logos for technologies for a more authentic look
  const TechLogo = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`w-7 h-7 ${className}`}>{children}</div>
  );
  const ReactLogo = () => <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
  const NodeLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.76,1.94,2.2,7.12a1,1,0,0,0-.53.88V16a1,1,0,0,0,.54.88l9.56,5.18a1,1,0,0,0,1,0l9.56-5.18a1,1,0,0,0,.54-.88V8a1,1,0,0,0-.53-.88L12.76,1.94a1,1,0,0,0-1,0ZM12.26,3.8,19.8,7.85,16.4,9.63,8.84,5.58ZM3.7,8.3,11,12.13V20.1l-7.3-3.95ZM12,10.3,8.53,8.52,5.2,10.29l3.4,1.84ZM13,20.1V12.13L20.3,8.3V16.15Z" fill="currentColor"/></svg>;
  const TypeScriptLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1.5h21v21h-21z" fill="#3178C6"/><path d="M12.381 14.32h3.943v2.332H8.674V4.5h2.332v9.82h1.375zM8.674 18.984h7.65v2.332h-7.65z" fill="#fff"/></svg>;
  const PythonLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 7.33c.39.39.39 1.02 0 1.41l-2.12 2.12c-.39.39-1.02.39-1.41 0L12 9.73l-1.11 1.13c-.39.39-1.02.39-1.41 0l-2.12-2.12a.996.996 0 111.41-1.41L10 8.44l1.11-1.13a.996.996 0 011.41 0l2.12 2.12zm-9.28 5.26c-.39-.39-.39-1.02 0-1.41l2.12-2.12c.39-.39 1.02-.39 1.41 0L12 14.27l1.11-1.13c.39-.39 1.02-.39 1.41 0l2.12 2.12a.996.996 0 11-1.41 1.41L14 15.56l-1.11 1.13a.996.996 0 01-1.41 0l-2.12-2.12z" fill="#FFD43B"/></svg>;
  const WordPressLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.6 12.8h-2.5l-1.1-3.4h-4l-1.1 3.4H6.4l4.5-11.6h2.2l4.5 11.6zm-6.1-4.9h2.9l-1.4-4.4-1.5 4.4z" fill="#21759B"/></svg>;
  const PHPLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#8892BF"/><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">PHP</text></svg>;
  const AWSLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 18.32c-2.06 0-3.6-.4-4.63-1.21-.95-.73-1.42-1.8-1.42-3.22s.47-2.49 1.42-3.22c1.03-.81 2.57-1.21 4.63-1.21 1.1 0 2.16.15 3.18.45l-.43 2.15c-.8-.25-1.6-.38-2.4-.38-1.25 0-2.16.22-2.73.65-.57.43-.85 1.1-.85 2s.28 1.57.85 2c.57.43 1.48.65 2.73.65.8 0 1.6-.13 2.4-.38l.43 2.15c-1.02.3-2.08.45-3.18.45zM21.5 22H2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h19c.28 0 .5.22.5.5s-.22.5-.5.5z" fill="#FF9900"/></svg>;
  const GCPLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.4c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2c.75 0 1.43.26 1.98.69l-1.41 1.41c-.19-.18-.44-.29-.77-.29-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6c.88 0 1.6-.72 1.6-1.6h-2.4v-2h4c.05.26.08.54.08.84 0 2.12-1.44 3.8-3.36 3.8zm8.4-3.2c0 1.77-1.43 3.2-3.2 3.2s-3.2-1.43-3.2-3.2 1.43-3.2 3.2-3.2 3.2 1.43 3.2 3.2z" fill="#4285F4"/></svg>;
  const DockerLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.17 9.17c-1.05-3.08-4.05-5.17-7.17-5.17H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10.17c3.12 0 6.12-2.09 7.17-5.17.3-.88.3-1.79 0-2.66zM13 18H4V6h9c2.39 0 4.56 1.64 5.12 4s-.56 4.64-2.95 5.45c-.79.27-1.64.45-2.5.45l-.67-.01z" fill="#2496ED"/><path d="M7 14h2v2H7zM10 14h2v2h-2zM13 14h2v2h-2zM7 11h2v2H7zM10 11h2v2h-2zM13 11h2v2h-2zM7 8h2v2H7zM10 8h2v2h-2z" fill="#2496ED"/></svg>;
  const FigmaLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="#F24E1E"/></svg>;
  const TailwindLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C13.337 13.382 11.976 12 9.001 12z" fill="currentColor"/></svg>;
  const NextLogo = () => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.17 15.17L8 14.34V10h1.5v3.47l2.21 2.21-1.06 1.05zm4.34-5.17V10h1.5v7.17h-1.5v-4.34l-2.21-2.21 1.06-1.06 2.65 2.66z" fill="currentColor"/></svg>;

  const technologies = [
    { name: 'React', icon: <ReactLogo />, color: 'text-sky-400' },
    { name: 'Node.js', icon: <NodeLogo />, color: 'text-green-500' },
    { name: 'TypeScript', icon: <TypeScriptLogo />, color: 'text-blue-500' },
    { name: 'Python', icon: <PythonLogo />, color: 'text-yellow-400' },
    { name: 'WordPress', icon: <WordPressLogo />, color: 'text-blue-600' },
    { name: 'PHP', icon: <PHPLogo />, color: 'text-indigo-400' },
    { name: 'AWS', icon: <AWSLogo />, color: 'text-orange-500' },
    { name: 'Google Cloud', icon: <GCPLogo />, color: 'text-blue-500' },
    { name: 'Docker', icon: <DockerLogo />, color: 'text-blue-400' },
    { name: 'Figma', icon: <FigmaLogo />, color: 'text-pink-500' },
    { name: 'TailwindCSS', icon: <TailwindLogo />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <NextLogo />, color: 'text-gray-500 dark:text-white' }
  ];

  const processSteps = [
    { icon: <Search size={32} />, title: '1. Discovery & Strategy', description: 'Deep dive into your vision, market, and challenges to forge a clear path forward.', gradient: 'from-blue-600 to-cyan-400' },
    { icon: <Palette size={32} />, title: '2. Design & Prototyping', description: 'Creative UI/UX design and interactive prototypes ensure your solution looks and feels perfect.', gradient: 'from-fuchsia-600 to-pink-400' },
    { icon: <Code size={32} />, title: '3. Development & QA', description: 'Our expert engineers build robust solutions, rigorously tested for quality and performance.', gradient: 'from-amber-600 to-orange-400' },
    { icon: <Rocket size={32} />, title: '4. Launch & Evolution', description: 'Seamless deployment, ongoing support, and continuous optimization for sustained success.', gradient: 'from-emerald-600 to-green-400' },
  ];

  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
              Our Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              From AI-driven innovations to pixel-perfect web development, we provide a comprehensive suite of digital services to elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      {React.cloneElement(service.icon, { className: 'text-white' })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.keyPoints.map(point => (
                      <li key={point} className="flex items-center gap-3 text-sm">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className={`mt-auto inline-block text-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.gradient} group-hover:scale-105 transition-transform`}>
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              We leverage a modern, robust stack to build scalable and efficient solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <Tilt key={tech.name} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} scale={1.05}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex flex-col items-center justify-center p-6 h-36 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl"
                >
                  <div className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                  <div className={`absolute -inset-px ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`} />
                  <TechLogo className={tech.color}>{tech.icon}</TechLogo>
                  <p className="mt-3 font-semibold text-gray-800 dark:text-gray-200">{tech.name}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
                Our Blueprint for Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey through our revolutionary AI-powered development pipeline.
            </p>
          </div>
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 hidden md:block" />

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={step.title} className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-5/12">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 text-center md:text-left"
                    >
                      <div className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} opacity-10 blur-2xl`} />
                      <h3 className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${step.gradient}`}>{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex md:w-2/12 justify-center">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl z-10`}>
                      {React.cloneElement(step.icon, { className: 'text-white' })}
                    </motion.div>
                  </div>
                  <div className="md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Have a project in mind?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can turn your ideas into reality. Reach out for a free consultation.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl shadow-blue-500/50 dark:shadow-blue-500/30 overflow-hidden"
            >
              <span className="relative z-10">
                Contact Us
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;