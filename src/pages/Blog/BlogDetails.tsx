import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import { posts } from '../../data/blogData';

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-display font-bold mb-4">Post not found</h2>
                <button onClick={() => navigate('/blog')} className="btn-primary">
                    Back to Blog
                </button>
            </div>
        );
    }

    return (
        <main className="bg-black text-white min-h-screen">
            {/* Hero / Header */}
            <section className="relative pt-32 pb-16 px-6 lg:px-8">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 border-b border-neutral-800 pb-10">
                            <span className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                                    <User size={14} />
                                </div>
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-6 lg:px-8 max-w-5xl mx-auto -mt-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="aspect-video rounded-3xl overflow-hidden border border-neutral-800"
                >
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>
            </section>

            {/* Content */}
            <section className="px-6 lg:px-8 pb-24">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        {post.content ? (
                            post.content.map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">{paragraph.replace('## ', '')}</h2>
                                }
                                return <p key={index} className="text-neutral-300 leading-relaxed mb-6">{paragraph}</p>;
                            })
                        ) : (
                            <p className="text-neutral-300 leading-relaxed mb-6">{post.excerpt}</p>
                        )}
                    </motion.div>

                    {/* Share */}
                    <div className="mt-16 pt-10 border-t border-neutral-800 flex items-center justify-between">
                        <h3 className="font-display font-bold text-white">Share this article</h3>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogDetails;
