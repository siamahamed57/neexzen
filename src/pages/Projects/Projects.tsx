import React, { useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Globe, X, Zap, Code2, ArrowUpRight } from 'lucide-react';
import CursorGlow from '../../components/CursorGlow/CursorGlow';

/* ─── Data ─── */
const ACCENTS = [
  { color: '#818cf8', glow: 'rgba(129,140,248,0.5)', bg: 'rgba(129,140,248,0.08)', label: 'indigo' },
  { color: '#f472b6', glow: 'rgba(244,114,182,0.5)', bg: 'rgba(244,114,182,0.08)', label: 'pink' },
  { color: '#34d399', glow: 'rgba(52,211,153,0.5)', bg: 'rgba(52,211,153,0.08)', label: 'emerald' },
  { color: '#fb923c', glow: 'rgba(251,146,60,0.5)', bg: 'rgba(251,146,60,0.08)', label: 'orange' },
  { color: '#38bdf8', glow: 'rgba(56,189,248,0.5)', bg: 'rgba(56,189,248,0.08)', label: 'sky' },
  { color: '#c084fc', glow: 'rgba(192,132,252,0.5)', bg: 'rgba(192,132,252,0.08)', label: 'purple' },
  { color: '#facc15', glow: 'rgba(250,204,21,0.5)', bg: 'rgba(250,204,21,0.08)', label: 'yellow' },
];

const projects = [
  { id: 1, title: 'Unies', category: 'PWA Application', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.06.49_PM_n4djxo.png', technologies: ['GSAP', 'PHP', 'HTML', 'CSS', 'JS', 'MySQL'], description: 'Advanced E-Learning Platform with DRM, Session Management, Advanced Security Features, Login Restrictions, Quiz, Assignment, Lessons, QNA and many more features.', link: 'https://unies.com.bd', tagline: 'E-Learning Reimagined' },
  { id: 2, title: 'Uixpertise', category: 'WordPress Dev', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.07.38_PM_v5n4hb.png', technologies: ['WordPress', 'Custom Plugin', 'Elementor Pro', 'Custom Code'], description: 'Figma to WordPress — a scalable digital designer website crafted for premium brand identity.', link: 'https://uixpertise.com', tagline: 'Design Meets Function' },
  { id: 3, title: 'Lyvaa', category: 'E-Commerce', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771911849/Screenshot_2026-02-16_at_11.09.54_PM_zrj1xi.png', technologies: ['WordPress', 'Custom Plugin', 'Custom Theme', 'SSL Payment', 'Social Login'], description: 'Full-featured E-Commerce platform with product add-ons, live preview, and secure checkout flow.', link: 'https://lyvaa.com', tagline: 'Shop the Future' },
  { id: 4, title: 'Tusqa Well Being', category: 'Well Being Platform', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708402/Screenshot_2026-02-16_at_11.12.05_PM_nxlfzv.png', technologies: ['React Native', 'Firebase', 'GraphQL'], description: 'Cross-platform health tracking app that empowers users to manage their wellbeing seamlessly.', link: '#', tagline: 'Your Health, Elevated' },
  { id: 5, title: 'Achol Computers', category: 'E-commerce Store', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.10.39_PM_opygtr.png', technologies: ['React js', 'Node js', 'Mongobd', 'Firebase'], description: 'Modern Electronics E-commerce website', link: 'https://acholcomputers.com', tagline: 'Tech Meets Creativity' },
  { id: 6, title: 'Being Smile', category: 'Crowed Funding Website', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708404/Screenshot_2026-02-16_at_11.11.31_PM_lqwd4s.png', technologies: ['React js', 'Node js', 'Mongobd', 'Firebase'], description: 'Digital Crowd Funding website', link: 'https://beingsmile.org', tagline: 'Smart. Fast. Reliable.' },
  { id: 7, title: 'Neexzen', category: 'Software Company', image: 'https://res.cloudinary.com/di1vdilgj/image/upload/v1771708388/Screenshot_2026-02-16_at_11.07.58_PM_ogelmn.png', technologies: ['React js', 'Fremer Motion', 'Three js', 'Node js', 'Mongobd', 'Firebase', 'TailwindCSS', 'Gsap'], description: 'Our own digital studio portfolio — a high-performance, animated web experience showcasing our brand, services, and creative projects.', link: '#', tagline: 'We Build What Inspires' },
];

const CATEGORIES = ['All', 'AI & ML', 'Cloud', 'Web Apps', 'Mobile', 'Design'];

type Project = typeof projects[0];

/* ─── Project Card ─── */
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onClick: () => void;
}> = ({ project, index, onClick }) => {
  const accent = ACCENTS[index % ACCENTS.length];
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-60, 60], [8, -8]), { stiffness: 200, damping: 22 });
  const rotY = useSpring(useTransform(mx, [-60, 60], [-8, 8]), { stiffness: 200, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); setIsHovered(false); };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30, scale: 0.94 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 900 }}
      onMouseMove={onMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -6 }}
    >
      {/* Card shell */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        animate={isHovered
          ? { boxShadow: `0 0 0 1.5px ${accent.color}55, 0 20px 60px ${accent.glow}, 0 4px 20px rgba(0,0,0,0.6)` }
          : { boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 4px 20px rgba(0,0,0,0.5)' }
        }
        transition={{ duration: 0.4 }}
      >
        {/* Accent top bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] z-30"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)` }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {/* Image area */}
        <div className="relative h-52 overflow-hidden bg-neutral-950">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered
              ? { scale: 1.08, filter: 'grayscale(0%) brightness(0.75)' }
              : { scale: 1, filter: 'grayscale(50%) brightness(0.6)' }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Scan line sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${accent.color}22 50%, transparent 100%)`,
              backgroundSize: '100% 40px',
            }}
            animate={isHovered ? { backgroundPositionY: ['0px', '208px'] } : { backgroundPositionY: '0px' }}
            transition={{ duration: 0.9, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
          />

          {/* Colored tint on hover */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${accent.color}22, transparent 70%)` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Top-left category badge */}
          <motion.div
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border"
            style={{ color: accent.color, borderColor: `${accent.color}40`, background: 'rgba(0,0,0,0.55)' }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <Zap size={9} />
            {project.category}
          </motion.div>

          {/* Top-right index */}
          <div
            className="absolute top-3 right-3 z-20 font-black font-mono text-4xl pointer-events-none select-none"
            style={{ color: `${accent.color}25`, lineHeight: 1 }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: accent.color }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <ArrowUpRight size={14} color="#000" />
          </motion.div>
        </div>

        {/* Bottom info area */}
        <div
          className="relative p-5"
          style={{ background: 'linear-gradient(180deg, #0c0c14 0%, #08080f 100%)' }}
        >
          {/* Subtle accent glow behind text area */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% -20%, ${accent.color}14, transparent 70%)` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative z-10">
            {/* Tagline */}
            <motion.p
              className="text-[10px] font-semibold uppercase tracking-widest mb-1"
              style={{ color: accent.color }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0.6 }}
            >
              {project.tagline}
            </motion.p>

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-white leading-snug mb-3">
              {project.title}
            </h3>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium px-2 py-0.5 rounded border"
                  style={{ color: accent.color, borderColor: `${accent.color}30`, background: accent.bg }}
                >
                  {t}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded border border-white/10 text-white/40">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Bottom row */}
            <motion.div
              className="flex items-center justify-between mt-4 pt-4 border-t"
              style={{ borderColor: `${accent.color}18` }}
              animate={isHovered ? { borderColor: `${accent.color}35` } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                <Code2 size={10} />
                {project.technologies.length} tech
              </span>
              <motion.span
                className="text-[11px] font-semibold flex items-center gap-1"
                style={{ color: accent.color }}
                animate={isHovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                View Details <ArrowRight size={10} />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Centered Modal Popup ─── */
const ProjectModal: React.FC<{
  project: Project;
  index: number;
  onClose: () => void;
}> = ({ project, index, onClose }) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 backdrop-blur-xl"
        style={{ background: 'rgba(2,2,8,0.85)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d0d18 60%, #111122 100%)',
          boxShadow: `0 0 0 1px ${accent.color}30, 0 40px 120px ${accent.glow}, 0 0 0 1px rgba(255,255,255,0.04)`,
        }}
        initial={{ scale: 0.88, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent glow top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${accent.color} 40%, ${accent.color} 60%, transparent 100%)` }}
        />

        {/* Corner grid decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <X size={15} />
        </motion.button>

        <div className="flex flex-col md:flex-row">
          {/* Left – image */}
          <div className="md:w-[45%] relative overflow-hidden min-h-[240px] md:min-h-full">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ minHeight: 260 }}
              initial={{ scale: 1.1, filter: 'blur(8px)' }}
              animate={{ scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Gradient fade right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d0d18] hidden md:block" />
            {/* Gradient fade bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d18] via-transparent to-transparent md:hidden" />

            {/* Category chip */}
            <div className="absolute top-4 left-4 z-10  flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
              style={{ color: accent.color, background: 'rgba(0,0,0,0.65)', border: `1px solid ${accent.color}35` }}>
              <Zap size={9} />
              {project.category}
            </div>
          </div>

          {/* Right – details */}
          <div className="md:w-[55%] p-7 md:p-10 flex flex-col justify-center gap-5">
            {/* Index */}
            <motion.p
              className="font-mono font-black text-5xl pointer-events-none select-none leading-none"
              style={{ color: `${accent.color}18` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.p>

            {/* Tagline + title */}
            <div>
              <motion.p
                className="text-[11px] font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: accent.color }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
              >
                {project.tagline}
              </motion.p>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                {project.title}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-neutral-400 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              {project.technologies.map((t, i) => (
                <motion.span
                  key={t}
                  className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border"
                  style={{ color: accent.color, borderColor: `${accent.color}30`, background: accent.bg }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.26 + i * 0.04 }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              className="h-px"
              style={{ background: `linear-gradient(90deg, ${accent.color}40, transparent)` }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.32, duration: 0.5 }}
            />

            {/* CTA */}
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-black transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: accent.color, boxShadow: `0 6px 30px ${accent.glow}` }}
              >
                <Globe size={14} />
                Visit Live Site
                <ExternalLink size={13} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>

              {project.link !== '#' && (
                <span className="text-xs text-neutral-500 font-mono">
                  {project.link.replace('https://', '')}
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Main Page ─── */
const Projects: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const openProject = useCallback((p: Project) => setSelectedProject(p), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeProject(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeProject]);

  const selectedIndex = selectedProject ? projects.findIndex(p => p.id === selectedProject.id) : 0;

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-fit md:min-h-screen flex items-center overflow-hidden py-12 md:py-16 lg:py-20">
        <CursorGlow containerRef={heroRef} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-subtle-glow" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm text-blue-300">Our Work</span>
              </motion.div>
              <h1 className="hero-title">
                <span className="text-white">Featured</span><br />
                <span className="text-shimmer">Projects</span>
              </h1>
              <p className="hero-subtitle mt-6">
                Explore our portfolio of innovative solutions that have transformed businesses and delighted users.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="hidden md:block h-[500px] w-full relative" />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 border-t border-neutral-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === cat
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32" style={{ perspective: 1200 }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={projects.findIndex(p => p.id === project.id)}
                  onClick={() => openProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            index={selectedIndex}
            onClose={closeProject}
          />
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-32 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Have a Project</span><br />
              <span className="text-blue-400">in Mind?</span>
            </h2>
            <p className="mt-6 text-xl text-neutral-300 max-w-xl mx-auto">
              Let's collaborate to bring your vision to life.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary group text-base px-10 py-4">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-10 py-4">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;