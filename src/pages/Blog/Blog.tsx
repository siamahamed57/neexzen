import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, User } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    { id: 1, title: 'The Future of AI in Software Development', category: 'AI Solutions', author: 'Siam Ahmed', date: 'July 29, 2024', readTime: '7 min', excerpt: 'Explore how AI is revolutionizing the software development lifecycle.', image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop', featured: true },
    { id: 2, title: 'Scaling SaaS Platforms with AWS', category: 'Case Studies', author: 'Sarah Chen', date: 'July 25, 2024', readTime: '9 min', excerpt: 'Architecture and strategies for scaling high-traffic SaaS applications.', image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', featured: true },
    { id: 3, title: 'UI/UX Principles for Conversion', category: 'Design', author: 'Marcus Johnson', date: 'July 22, 2024', readTime: '5 min', excerpt: 'Core design principles that improve engagement and conversion rates.', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop', featured: false },
    { id: 4, title: 'Getting Started with Google Tag Manager', category: 'Marketing', author: 'Emily Park', date: 'July 18, 2024', readTime: '6 min', excerpt: 'A beginner-friendly guide to GTM and analytics insights.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', featured: false },
    { id: 5, title: 'Building Secure APIs with Node.js', category: 'Development', author: 'Sarah Chen', date: 'July 15, 2024', readTime: '8 min', excerpt: 'Creating secure token-based authentication for Node.js APIs.', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop', featured: false },
  ];

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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[200px] animate-subtle-glow" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm text-purple-300">Blog</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Insights &</span>
              <br />
              <span className="text-purple-400">Resources</span>
            </h1>

            <p className="hero-subtitle mt-6 max-w-xl">
              Insights on AI, software engineering, and digital innovation
              from our team of experts.
            </p>

            <div className="mt-8 max-w-md">
              <div className="relative">
                <input type="text" placeholder="Search articles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input pl-12" />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-y border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Featured */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-10">Featured</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-800">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <span className="text-xs text-purple-400 font-medium uppercase tracking-wider mb-3">{post.category}</span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white mb-10">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, index) => (
                <motion.article key={post.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group cursor-pointer">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-neutral-800">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-display text-xl font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">{post.title}</h3>
                  <p className="mt-3 text-sm text-neutral-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-neutral-600">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-neutral-800/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Stay <span className="text-purple-400">Updated</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-md mx-auto">
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