import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorGlow from '../../components/CursorGlow/CursorGlow';
import { posts } from '../../data/blogData';
// import BlogHero3D from '../../components/BlogHero3D/BlogHero3D';

const Blog: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const categories = ['All', 'AI Solutions', 'Development', 'Design', 'Case Studies', 'Marketing'];
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <CursorGlow containerRef={heroRef} />

        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] animate-subtle-glow" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-subtle-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
                <span className="text-sm text-purple-300">Blog</span>
              </motion.div>

              <h1 className="hero-title">
                <span className="text-white">Insights &</span>
                <br />
                <span className="text-shimmer bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Resources</span>
              </h1>

              <p className="hero-subtitle mt-6 max-w-xl text-neutral-300">
                Insights on AI, software engineering, and digital innovation
                from our team of experts.
              </p>

              <div className="mt-8 max-w-md">
                <div className="relative">
                  <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input pl-12 bg-neutral-900/50 backdrop-blur-sm border-neutral-800 focus:border-purple-500/50" />
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                </div>
              </div>
            </motion.div>

            {/* Right 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[500px] w-full relative"
            >
              {/* <BlogHero3D /> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Featured */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-10">Featured</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-800 cursor-pointer h-full">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wider mb-3">{post.category}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{post.title}</h3>
                      <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-neutral-400">
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white mb-10">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, index) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group cursor-pointer h-full flex flex-col"
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-neutral-800">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                    </div>
                    <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-display text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">{post.title}</h3>
                    <p className="mt-3 text-sm text-neutral-400 line-clamp-2 flex-grow">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Stay <span className="text-purple-400">Updated</span>
            </h2>
            <p className="mt-4 text-neutral-300 max-w-md mx-auto">
              Subscribe to our newsletter for the latest insights on AI, technology, and innovation.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="input flex-1" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Blog;