import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Rss, Mail, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      category: 'AI Solutions',
      tags: ['AI', 'Development', 'Trends'],
      author: 'Siam',
      date: 'July 29, 2024',
      readingTime: '7 min read',
      excerpt: 'Explore how artificial intelligence is revolutionizing the software development lifecycle, from automated coding to intelligent testing...',
      imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'Case Study: Scaling a SaaS Platform with AWS',
      category: 'Case Studies',
      tags: ['Cloud', 'SaaS', 'AWS'],
      author: 'Jane Doe',
      date: 'July 25, 2024',
      readingTime: '9 min read',
      excerpt: 'A deep dive into the architecture and strategies we used to scale a high-traffic SaaS application on Amazon Web Services...',
      imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title: 'UI/UX Principles for High-Conversion Websites',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'Conversion'],
      author: 'John Smith',
      date: 'July 22, 2024',
      readingTime: '5 min read',
      excerpt: 'Learn the core design principles that can dramatically improve user engagement and increase conversion rates on your website...',
      imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title: 'Getting Started with Google Tag Manager for Analytics',
      category: 'Tech News',
      tags: ['Marketing', 'Analytics', 'GTM'],
      author: 'Emily White',
      date: 'July 18, 2024',
      readingTime: '6 min read',
      excerpt: 'A beginner-friendly guide to setting up Google Tag Manager and unlocking powerful insights about your user behavior...',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      id: 5,
      title: 'Building a Secure API with Node.js and JWT',
      category: 'Software Development',
      tags: ['Security', 'Node.js', 'API'],
      author: 'Jane Doe',
      date: 'July 15, 2024',
      readingTime: '8 min read',
      excerpt: 'Follow our step-by-step tutorial on creating a secure, token-based authentication system for your Node.js APIs using JSON Web Tokens.',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
      featured: true,
    },
  ];

  const categories = ['All', 'Software Development', 'AI Solutions', 'Case Studies', 'Design', 'Tech News'];
  const tags = ['AI', 'Cloud', 'SaaS', 'UI/UX', 'Security', 'Marketing', 'Development'];

  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPosts = posts.filter(p => p.featured);
  const latestPosts = filteredPosts.filter(p => !p.featured);

  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-orange-900 to-teal-900 dark:from-white dark:via-orange-100 dark:to-teal-100">
              The Neexzen Blog
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Insights on AI, software engineering, and digital innovation from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <motion.div key={post.id} whileHover={{ y: -5 }} className="group relative rounded-2xl overflow-hidden shadow-lg">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative p-8 flex flex-col justify-end h-96">
                  <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full self-start mb-2">{post.category}</span>
                  <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 font-semibold text-white group-hover:text-orange-400 transition-colors">
                    Read More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="space-y-12">
              <AnimatePresence>
                {latestPosts.map(post => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="group grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                  >
                    <div className="md:col-span-1 rounded-2xl overflow-hidden aspect-video">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">{post.category}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="text-xs text-gray-500">
                        <span>By {post.author}</span> &bull; <span>{post.date}</span> &bull; <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-16 space-x-2">
              <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Previous</button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">2</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">3</button>
              <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-16 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold mb-4">Search</h3>
                <div className="relative">
                  <input type="text" placeholder="Find articles..." onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-4 pr-10 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button onClick={() => setActiveCategory(cat)} className={`flex justify-between items-center w-full text-left ${activeCategory === cat ? 'text-blue-500 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}>
                        <span>{cat}</span>
                        <ChevronRight size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h3 className="font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map(tag => (
                    <button key={tag} className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <Rss size={24} className="mb-3" />
                <h3 className="font-bold text-xl mb-2">Stay Updated</h3>
                <p className="text-sm opacity-80 mb-4">Subscribe to our newsletter for the latest in tech and AI.</p>
                <form className="flex gap-2">
                  <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 text-sm text-gray-800 rounded-lg focus:ring-2 focus:ring-white focus:outline-none" />
                  <button type="submit" className="p-2 bg-white/30 rounded-lg hover:bg-white/50 transition-colors">
                    <Mail size={20} />
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Blog;