import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import CursorGlow from '../../components/CursorGlow/CursorGlow';
// import ProjectsHero3D from '../../components/ProjectsHero3D/ProjectsHero3D';

const Projects: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const projects = [
    { id: 1, title: 'Unies E-learning Platform', category: 'PWA Application', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', technologies: ['GSAP', 'PHP', 'HTML', 'CSS', 'JS', 'MySql'], description: 'Advanced E-Learning Platform with DRM, Session Management,Advanced Security Features,Login Restrictions,Quiz, Assignment,Lessions,QNA and many more features.' },
    { id: 2, title: 'Uixpertise', category: 'Wordpress Development', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop', technologies: ['Wordpress', 'Custom Plugin', 'Elementor Pro', 'Custom code'], description: 'Figma to Wordpress Design,a scalable digital designer website' },
    { id: 3, title: 'Lyvaa', category: 'E-Commerce Website', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', technologies: ['Wordpress', 'Custom Plugin', 'Custom theme', 'SSL payment gateway', 'Social Login'], description: 'Advanced E-commerce website made with full complete features of e-commerce, Product add ones and live preview' },
    { id: 4, title: 'Fitness & Wellness App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop', technologies: ['React Native', 'Firebase', 'GraphQL'], description: 'Cross-platform health tracking app.' },
    { id: 5, title: 'Generative Art Platform', category: 'Design', image: 'https://images.unsplash.com/photo-1501471691285-b903de749416?q=80&w=2070&auto=format&fit=crop', technologies: ['p5.js', 'Three.js', 'WebGL'], description: 'Interactive generative art with real-time rendering.' },
    { id: 6, title: 'Trading Bot System', category: 'AI & ML', image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76f8c8?q=80&w=1974&auto=format&fit=crop', technologies: ['Python', 'WebSockets', 'Redis'], description: 'Automated trading with ML predictions.' },
  ];

  const categories = ['All', 'AI & ML', 'Cloud', 'Web Apps', 'Mobile', 'Design'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [hoveredProject, setHoveredProject] = React.useState<typeof projects[0] | null>(null);
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (project: typeof projects[0]) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 200); // 200ms grace period
  };

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden bg-black">
        <CursorGlow containerRef={heroRef} />

        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-subtle-glow" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm text-blue-300">Our Work</span>
              </motion.div>

              <h1 className="hero-title">
                <span className="text-white">Featured</span>
                <br />
                <span className="text-shimmer">Projects</span>
              </h1>

              <p className="hero-subtitle mt-6">
                Explore our portfolio of innovative solutions that have
                transformed businesses and delighted users.
              </p>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[500px] w-full relative"
            >
              {/* <ProjectsHero3D /> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onMouseLeave={handleMouseLeave}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800 cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Default Content (Always visible in card, removed on hover in favor of modal? No, keep it as anchor) */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{project.category}</span>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Full Width Hover Modal (Fixed Bottom) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none flex justify-center pb-8"
          >
            <div className="pointer-events-auto bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/50 rounded-3xl shadow-2xl p-8 max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {hoveredProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                    {hoveredProject.title}
                  </h3>
                </div>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                  {hoveredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {hoveredProject.technologies.map(tech => (
                    <span key={tech} className="text-[10px] md:text-xs font-medium text-neutral-400 border border-neutral-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#" // In a real app, this would link to project.link
                  className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                >
                  View Live Site
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>

            </div>
          </motion.div>
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
              <span className="text-white">Have a Project</span>
              <br />
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