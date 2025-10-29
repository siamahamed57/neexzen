import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone} from 'lucide-react';

const Projects: React.FC = () => {
  const projectsList = [
    {
      id: 1,
      title: 'Predictive Analytics Dashboard',
      category: 'AI & ML',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      liveSiteUrl: '#',
    },
    {
      id: 2,
      title: 'Multi-Cloud Management Platform',
      category: 'Cloud',
      coverImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop',
      technologies: ['Go', 'Kubernetes', 'AWS', 'GCP'],
      liveSiteUrl: '#',
    },
    {
      id: 3,
      title: 'Enterprise SaaS Application',
      category: 'Web Apps',
      coverImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
      liveSiteUrl: '#',
    },
    {
      id: 4,
      title: 'Fitness & Wellness Mobile App',
      category: 'Mobile',
      coverImage: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop',
      technologies: ['React Native', 'Firebase', 'GraphQL'],
      liveSiteUrl: '#',
    },
    {
      id: 5,
      title: 'Generative Art Installation',
      category: 'Design',
      coverImage: 'https://images.unsplash.com/photo-1501471691285-b903de749416?q=80&w=2070&auto=format&fit=crop',
      technologies: ['p5.js', 'Three.js', 'GLSL'],
      liveSiteUrl: '#',
    },
    {
      id: 6,
      title: 'Real-time Trading Bot',
      category: 'AI & ML',
      coverImage: 'https://images.unsplash.com/photo-1642427749670-f20e2e76f8c8?q=80&w=1974&auto=format&fit=crop',
      technologies: ['Python', 'WebSockets', 'Redis'],
      liveSiteUrl: '#',
    },
    {
      id: 7,
      title: 'Collaborative Design System',
      category: 'Design',
      coverImage: 'https://images.unsplash.com/photo-1600723802116-9571b3565403?q=80&w=1974&auto=format&fit=crop',
      technologies: ['Figma', 'Storybook', 'React'],
      liveSiteUrl: '#',
    },
    {
      id: 8,
      title: 'Serverless E-commerce Backend',
      category: 'Cloud',
      coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
      liveSiteUrl: '#',
    },
  ];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'AI & ML', 'Cloud', 'Web Apps', 'Mobile', 'Design'];
  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(project => project.category === activeCategory);

  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-green-900 dark:from-white dark:via-purple-100 dark:to-green-100">
              Our Projects
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Explore our portfolio of innovative solutions that have transformed businesses and delighted users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
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
                    ? 'bg-gradient-to-r from-purple-600 to-green-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full self-start mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs text-gray-300 bg-black/30 px-2 py-1 rounded-md">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-green-600 transform scale-90 group-hover:scale-100 transition-transform">
                      View Live Site
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-green-600 to-cyan-600">
                Have a Project in Mind?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Link to="/contact" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-green-600 text-white font-semibold shadow-2xl shadow-purple-500/30 overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold hover:border-purple-500 dark:hover:border-purple-400 transition-colors">
                <Phone size={18} />
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;