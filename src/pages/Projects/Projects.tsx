import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: 'Predictive Analytics Dashboard', category: 'AI & ML', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', technologies: ['Python', 'TensorFlow', 'React', 'D3.js'], description: 'Real-time analytics with predictive modeling.' },
    { id: 2, title: 'Multi-Cloud Management', category: 'Cloud', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop', technologies: ['Go', 'Kubernetes', 'AWS', 'GCP'], description: 'Enterprise cloud infrastructure management.' },
    { id: 3, title: 'Enterprise SaaS Platform', category: 'Web Apps', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', technologies: ['Node.js', 'React', 'PostgreSQL'], description: 'Scalable workflow automation SaaS.' },
    { id: 4, title: 'Fitness & Wellness App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop', technologies: ['React Native', 'Firebase', 'GraphQL'], description: 'Cross-platform health tracking app.' },
    { id: 5, title: 'Generative Art Platform', category: 'Design', image: 'https://images.unsplash.com/photo-1501471691285-b903de749416?q=80&w=2070&auto=format&fit=crop', technologies: ['p5.js', 'Three.js', 'WebGL'], description: 'Interactive generative art with real-time rendering.' },
    { id: 6, title: 'Trading Bot System', category: 'AI & ML', image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76f8c8?q=80&w=1974&auto=format&fit=crop', technologies: ['Python', 'WebSockets', 'Redis'], description: 'Automated trading with ML predictions.' },
  ];

  const categories = ['All', 'AI & ML', 'Cloud', 'Web Apps', 'Mobile', 'Design'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px] animate-subtle-glow" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-sm text-blue-300">Our Work</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Featured</span>
              <br />
              <span className="text-blue-400">Projects</span>
            </h1>

            <p className="hero-subtitle mt-6 max-w-xl">
              Explore our portfolio of innovative solutions that have
              transformed businesses and delighted users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-800"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-neutral-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white group-hover:hover:text-black cursor-pointer">
                    <ExternalLink size={18} className="text-white group-hover:hover:text-black" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-neutral-800/50 relative overflow-hidden">
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
            <p className="mt-6 text-xl text-neutral-400 max-w-xl mx-auto">
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