import React, { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Code, Smartphone, Bot, Play,
  Star, ChevronDown, Zap,
  Globe, MessageSquare, ArrowUpRight,
  CheckCircle2, Sparkles,
} from 'lucide-react';
import Hero3D from '../../components/Hero3D/Hero3D';

/* ─── Data ─── */
const stats = [
  { value: '15+', label: 'Projects', desc: 'Successfully delivered across 5 countries worldwide.', color: '#a78bfa' },
  { value: '20+', label: 'Clients', desc: 'Long-term partnerships built on trust and results.', color: '#38bdf8' },
  { value: '05+', label: 'Years', desc: 'Deep expertise in software development & AI.', color: '#34d399' },
];

const topProjects = [
  { id: 1, title: 'Unies', category: 'PWA Application', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.06.49_PM_n4djxo.png', color: '#a78bfa', glow: 'rgba(167,139,250,0.4)', link: 'https://unies.com.bd' },
  { id: 2, title: 'Uixpertise', category: 'WordPress Dev', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.07.38_PM_v5n4hb.png', color: '#f472b6', glow: 'rgba(244,114,182,0.4)', link: 'https://uixpertise.com' },
  { id: 3, title: 'Lyvaa', category: 'E-Commerce', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771911849/Screenshot_2026-02-16_at_11.09.54_PM_zrj1xi.png', color: '#38bdf8', glow: 'rgba(56,189,248,0.4)', link: 'https://lyvaa.com' },
  { id: 4, title: 'Being Smile', category: 'Crowd Funding', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.11.31_PM_lqwd4s.png', color: '#34d399', glow: 'rgba(52,211,153,0.4)', link: 'https://beingsmile.org' },
];

const services = [
  { icon: <Globe size={20} />, title: 'Web Development', description: 'High-conversion landing pages, e-commerce & enterprise systems with stunning animations.', color: '#a78bfa', glow: 'rgba(167,139,250,0.35)', dim: 'rgba(167,139,250,0.09)', features: ['React / Next.js', 'E-commerce', 'Enterprise LMS/ERP'] },
  { icon: <Smartphone size={20} />, title: 'Mobile Application', description: 'Cross-platform Flutter & React Native apps with on-demand ecosystems and IoT dashboards.', color: '#38bdf8', glow: 'rgba(56,189,248,0.35)', dim: 'rgba(56,189,248,0.09)', features: ['Flutter / React Native', 'IoT Dashboards', 'App Store Launch'] },
  { icon: <Bot size={20} />, title: 'AI Integration', description: 'Enterprise RAG systems, AI customer support, and autonomous agents with custom LLM fine-tuning.', color: '#34d399', glow: 'rgba(52,211,153,0.35)', dim: 'rgba(52,211,153,0.09)', features: ['RAG / LLM Fine-tuning', 'AI Chatbots', 'Autonomous Agents'] },
];

const processSteps = [
  { number: '01', title: 'Discovery', description: 'Understanding your vision, challenges, and goals through collaborative workshops.', icon: <MessageSquare size={16} /> },
  { number: '02', title: 'Strategy', description: 'Crafting a tailored roadmap with clear milestones and measurable outcomes.', icon: <Zap size={16} /> },
  { number: '03', title: 'Execution', description: 'Building and testing with agile methodologies and continuous delivery.', icon: <Code size={16} /> },
  { number: '04', title: 'Launch', description: 'Seamless deployment with ongoing support and performance optimization.', icon: <Sparkles size={16} /> },
];

const testimonials = [
  { quote: 'Neexzen transformed our business with their AI-powered solutions. The platform they delivered exceeded every expectation.', author: 'Sarah Chen', role: 'CTO, TechVentures', rating: 5, initial: 'SC', color: '#a78bfa' },
  { quote: 'Their ML expertise helped us achieve a 40% increase in operational efficiency. Outstanding team to work with.', author: 'Michael Roberts', role: 'CEO, DataFlow Inc', rating: 5, initial: 'MR', color: '#38bdf8' },
  { quote: 'A truly collaborative partner. They delivered a product our customers absolutely love. 10/10 would recommend.', author: 'Emily Watson', role: 'Product Lead, Innovate Labs', rating: 5, initial: 'EW', color: '#34d399' },
];

const faqs = [
  { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, Node.js, Python, AI/ML, cloud platforms (AWS, GCP), Flutter, React Native, and more — covering the full modern stack.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope and complexity. A standard web project takes 4–8 weeks, while enterprise platforms or AI integrations can take 10–16 weeks from discovery to launch.' },
  { q: 'Do you provide post-launch support?', a: 'Yes! We offer comprehensive support and maintenance packages for long-term partnerships, including bug fixes, feature updates, security patches, and performance monitoring.' },
  { q: 'What industries do you serve?', a: 'We work across fintech, healthcare, e-commerce, edtech, SaaS, and enterprise sectors — bringing deep domain expertise to every project.' },
];

const clients = ['Unies', 'Uixpertise', 'Lyvaa', 'Neexzen', 'Tusqa Well Being', 'AcholComputers', 'Dr Shaiful Islam', 'N3X Venture'];

/* ─── Modern Unique Stat Block ─── */
const StatCard: React.FC<{ stat: typeof stats[0]; index: number }> = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative group p-8 md:p-10 rounded-[2rem] overflow-hidden flex flex-col justify-between
        ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
        ${index === 1 ? 'md:col-span-1 md:row-span-1' : ''}
        ${index === 2 ? 'md:col-span-1 md:row-span-1' : ''}
      `}
      style={{
        background: 'linear-gradient(145deg, rgba(20,20,30,0.8) 0%, rgba(10,10,15,0.9) 100%)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.4)',
        minHeight: index === 0 ? '340px' : '220px'
      }}
      whileHover={{ y: -8, boxShadow: `inset 0 0 0 1.5px ${stat.color}40, 0 30px 60px rgba(0,0,0,0.6)` }}
    >
      {/* Dynamic Background Glow */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
        style={{ background: stat.color }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 delay-100"
        style={{ background: stat.color }}
      />

      <div className="relative z-10 flex justify-between items-start mb-auto">
        <span className="text-sm font-bold tracking-widest uppercase text-white/40 group-hover:text-white/80 transition-colors">
          Our Impact
        </span>
        <Sparkles size={16} style={{ color: stat.color }} className="opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="relative z-10 mt-12">
        <motion.div
          className="font-display font-black leading-[0.85] tracking-tighter mb-4"
          style={{
            fontSize: index === 0 ? 'clamp(5rem, 12vw, 9rem)' : 'clamp(4rem, 8vw, 6rem)',
            color: 'transparent',
            WebkitTextStroke: `1.5px rgba(255,255,255,0.2)`,
            backgroundImage: `linear-gradient(135deg, ${stat.color} 0%, #fff 100%)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
          whileHover={{ WebkitTextStroke: `0px` }}
          transition={{ duration: 0.3 }}
        >
          {stat.value}
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{stat.label}</h3>
            <p className="text-sm text-neutral-400 max-w-[280px] leading-relaxed">{stat.desc}</p>
          </div>

          <motion.div
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            whileHover={{ background: stat.color, color: '#000', borderColor: stat.color }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Project preview card ─── */
const ProjectCard: React.FC<{ p: typeof topProjects[0]; index: number }> = ({ p, index }) => (
  <Link to="/projects">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
      whileHover={{ y: -6, boxShadow: `0 0 0 1.5px ${p.color}55, 0 16px 48px ${p.glow}` }}
    >
      <motion.img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(50%)' }}
        whileHover={{ scale: 1.07, filter: 'grayscale(0%)' }}
        transition={{ duration: 0.55 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {/* Accent top */}
      <motion.div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${p.color}80,transparent)` }} initial={{ opacity: 0.2 }} whileHover={{ opacity: 1 }} />
      {/* Category badge */}
      <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-md" style={{ color: p.color, borderColor: `${p.color}40`, background: 'rgba(0,0,0,0.65)' }}>
        {p.category}
      </div>
      {/* Arrow */}
      <motion.div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: p.color }} initial={{ scale: 0, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
        <ArrowUpRight size={13} color="#000" />
      </motion.div>
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <h3 className="font-display text-lg font-bold text-white leading-tight">{p.title}</h3>
      </div>
    </motion.div>
  </Link>
);

/* ─── Main ─── */
const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ════════════════════════════════════════
          HERO — UNCHANGED
      ════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-100px)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[200px] animate-subtle-glow" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm text-purple-300">Now accepting new projects</span>
              </motion.div>
              <h1 className="hero-title">
                <span className="block text-white">We Build</span>
                <span className="block text-shimmer">Digital Products</span>
                <span className="block text-neutral-400">That Matter</span>
              </h1>
              <p className="hero-subtitle mt-6 mx-auto lg:mx-0">
                From AI-powered innovations to pixel-perfect interfaces, we craft software solutions that transform businesses.
              </p>
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
              <div className="mt-8 pt-6 border-t border-neutral-800 hidden lg:block">
                <p className="text-xs text-neutral-400 mb-3">Trusted by innovative companies</p>
                <div className="flex flex-wrap items-center gap-5">
                  {clients.slice(0, 4).map((client) => (
                    <span key={client} className="text-sm font-display font-medium text-neutral-500 hover:text-white transition-colors">{client}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-32 h-32 rounded-full border-2 border-purple-500/30 border-t-purple-500 animate-spin" /></div>}>
                  <Hero3D />
                </Suspense>
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-8 right-0 p-3 rounded-xl bg-neutral-900/90 border border-neutral-700 backdrop-blur-sm z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center"><Bot size={16} className="text-white" /></div>
                    <div><p className="text-[10px] text-neutral-400">AI Integration</p><p className="text-xs font-medium text-white">GPT-4 Ready</p></div>
                  </div>
                </motion.div>
                <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute bottom-8 left-0 p-3 rounded-xl bg-neutral-900/90 border border-neutral-700 backdrop-blur-sm z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center"><Code size={16} className="text-white" /></div>
                    <div><p className="text-[10px] text-neutral-400">Full Stack</p><p className="text-xs font-medium text-white">React + Node</p></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full border-2 border-neutral-600 flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          CLIENT MARQUEE
      ════════════════════════════════════════ */}
      <section className="py-6 border-y border-neutral-800/50">
        <div className="relative overflow-hidden">
          <motion.div className="flex gap-24" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
            {[...clients, ...clients].map((client, i) => (
              <span key={i} className="text-lg font-display font-medium text-neutral-500 hover:text-white whitespace-nowrap transition-colors cursor-default">{client}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          IMPACT / STATS — Bento Grid Design
      ════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
            <p className="section-label mb-3">By The Numbers</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Driving real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">impact</span> across the globe.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 w-full">
            {stats.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TOP 4 PROJECTS
      ════════════════════════════════════════ */}
      <section className="py-24 border-t border-neutral-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Featured Work</motion.p>
              <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Top Projects</motion.h2>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link to="/projects" className="hidden sm:flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors group">
                View all <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topProjects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-purple-400">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES — redesigned, links to /services
      ════════════════════════════════════════ */}
      <section className="py-24 border-t border-neutral-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What We Offer</motion.p>
              <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Services</motion.h2>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <Link to="/services" className="hidden sm:flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors group">
                All services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/services" className="block h-full group">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden h-full flex flex-col p-7"
                    style={{ background: 'linear-gradient(160deg,#0e0e1c,#08080f)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
                    whileHover={{ y: -6, boxShadow: `0 0 0 1.5px ${svc.color}50, 0 16px 48px ${svc.glow}` }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Accent top bar */}
                    <motion.div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${svc.color}80,transparent)` }} initial={{ opacity: 0.2 }} whileHover={{ opacity: 1 }} />

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-all duration-300" style={{ color: svc.color, borderColor: `${svc.color}35`, background: svc.dim }}>
                      {svc.icon}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{svc.description}</p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-6">
                      {svc.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-neutral-400">
                          <CheckCircle2 size={12} style={{ color: svc.color }} className="flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA row */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: `${svc.color}15` }}>
                      <span className="text-xs text-neutral-600">Click to explore</span>
                      <motion.span className="flex items-center gap-1 text-xs font-bold" style={{ color: svc.color }} whileHover={{ x: 3 }} transition={{ duration: 0.15 }}>
                        Learn more <ArrowUpRight size={12} />
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS — horizontal timeline redesign
      ════════════════════════════════════════ */}
      <section className="py-24 border-t border-neutral-800/40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>How We Work</motion.p>
            <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Our Process</motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px]" style={{ background: 'linear-gradient(90deg,transparent,rgba(167,139,250,0.3),rgba(167,139,250,0.3),transparent)' }} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  {/* Circle node */}
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 border"
                    style={{ background: 'linear-gradient(135deg,#0e0e1c,#070710)', borderColor: 'rgba(167,139,250,0.2)' }}
                    whileHover={{ boxShadow: '0 0 0 1.5px rgba(167,139,250,0.5), 0 8px 32px rgba(167,139,250,0.3)', y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-display text-2xl font-black" style={{ color: 'rgba(167,139,250,0.4)' }}>{step.number}</span>
                  </motion.div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-purple-400">{step.icon}</div>
                    <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS — premium card redesign
      ════════════════════════════════════════ */}
      <section className="py-24 border-t border-neutral-800/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Testimonials</motion.p>
            <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>What Clients Say</motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden p-7 flex flex-col gap-5"
                style={{ background: 'linear-gradient(160deg,#0e0e1c,#08080f)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
                whileHover={{ y: -5, boxShadow: `0 0 0 1.5px ${item.color}40, 0 12px 40px rgba(0,0,0,0.5)` }}
              >
                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${item.color}70,transparent)` }} />

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, si) => (
                    <Star key={si} size={13} fill={item.color} style={{ color: item.color }} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-300 text-sm leading-relaxed flex-1">"{item.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: `${item.color}15` }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border flex-shrink-0"
                    style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}12` }}
                  >
                    {item.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{item.author}</p>
                    <p className="text-[11px] text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ — redesigned
      ════════════════════════════════════════ */}
      <section className="py-24 border-t border-neutral-800/40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/4 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>FAQ</motion.p>
            <motion.h2 className="section-title" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Common Questions</motion.h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.08 }}
                >
                  <motion.div
                    className="rounded-2xl overflow-hidden border transition-all duration-300"
                    animate={isOpen
                      ? { borderColor: 'rgba(167,139,250,0.35)', boxShadow: '0 0 0 1px rgba(167,139,250,0.2), 0 8px 32px rgba(167,139,250,0.12)' }
                      : { borderColor: 'rgba(255,255,255,0.06)', boxShadow: 'none' }
                    }
                    style={{ background: isOpen ? 'rgba(14,14,28,0.95)' : 'rgba(255,255,255,0.02)' }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 p-6 text-left"
                    >
                      {/* Number pill */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black font-mono transition-all duration-300"
                        style={isOpen
                          ? { background: 'linear-gradient(135deg,#7c3aed,#a78bfa)', color: '#fff', boxShadow: '0 4px 16px rgba(167,139,250,0.4)' }
                          : { background: 'rgba(255,255,255,0.05)', color: 'rgb(115,115,115)' }
                        }
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <span className={`flex-1 font-display text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-300'}`}>
                        {faq.q}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        style={{ color: isOpen ? '#a78bfa' : 'rgb(115,115,115)' }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-20">
                            <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg,rgba(167,139,250,0.3),transparent)' }} />
                            <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="py-32 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Ready to Build</span>
              <br />
              <span className="text-shimmer">Something Great?</span>
            </h2>
            <p className="mt-8 text-xl text-neutral-300 max-w-xl mx-auto">Let's transform your ideas into reality.</p>
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