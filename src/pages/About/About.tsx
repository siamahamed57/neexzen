import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Linkedin, Twitter, Github, ChevronDown, Sparkles, Users, Brain, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const journey = [
    { year: '2019', title: 'The Genesis', description: 'Founded with a mission to bridge business needs and technology.' },
    { year: '2020', title: 'First Major Project', description: 'Delivered a complex e-commerce platform, establishing our reputation.' },
    { year: '2021', title: 'Team Expansion', description: 'Grew our team with specialized talent in UI/UX and marketing.' },
    { year: '2022', title: 'AI Integration', description: 'Launched our first AI-powered analytics tool.' },
    { year: '2023', title: 'SaaS Launch', description: 'Released our first proprietary SaaS product.' },
    { year: '2024', title: 'Global Recognition', description: 'Received industry awards and expanded internationally.' },
    { year: '2025', title: 'Future Forward', description: 'Pioneering new frontiers in AI and decentralized applications.' },
  ];

  const team = [
    { name: 'Siam Ahmed', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sarah Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
    { name: 'Marcus Johnson', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Emily Park', role: 'AI Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
  ];

  const values = [
    { icon: <Sparkles size={22} />, title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions.' },
    { icon: <Users size={22} />, title: 'Collaboration', description: 'Working together to achieve exceptional results.' },
    { icon: <Award size={22} />, title: 'Excellence', description: 'Committed to the highest quality in everything.' },
    { icon: <Zap size={22} />, title: 'Agility', description: 'Adapting quickly to deliver optimal outcomes.' },
  ];

  const faqs = [
    { q: 'What makes Neexzen different?', a: 'Our "innovation-first" approach. We partner with you to discover what\'s possible.' },
    { q: 'How do you ensure project success?', a: 'Transparency, agile methodology, and a dedicated project manager.' },
    { q: 'Do you work with startups?', a: 'Absolutely. Our processes scale for startups and enterprises alike.' },
    { q: 'What is the typical engagement process?', a: 'Discovery → Strategy → Design → Development → QA → Launch → Support.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <main className="bg-black text-white">
      {/* Hero Section - Slick & Modern */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[180px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="text-sm text-gray-400">About Us</span>
            </motion.div>

            <h1 className="hero-title">
              <span className="text-white">Pioneering the</span>
              <br />
              <span className="gradient-text">Future of Digital</span>
            </h1>

            <p className="hero-subtitle mt-8 max-w-xl">
              We craft intelligent, human-centered software solutions that
              transform businesses and define the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card card-glow p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Target size={26} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with transformative technology, creating intelligent
                software that drives growth, efficiency, and a competitive edge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card card-glow p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Eye size={26} />
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To be a globally recognized leader in AI-driven innovation, known for
                our commitment to quality, client success, and shaping future technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">What Drives Us</p>
            <h2 className="section-title">Our <span className="text-gray-500">Values</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title">The <span className="text-gray-500">Journey</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-cyan-500/50" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black -translate-x-1/2 z-10" />
                  <div className="flex-1 ml-16 md:ml-0">
                    <div className="card p-6">
                      <span className="text-sm text-purple-400 font-semibold">{item.year}</span>
                      <h3 className="font-display text-lg font-semibold text-white mt-1">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">Our Team</p>
            <h2 className="section-title">Meet the <span className="text-gray-500">Experts</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <div className="mt-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={16} /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={16} /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common <span className="text-gray-500">Questions</span></h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-display font-medium text-white">{faq.q}</span>
                  <ChevronDown size={20} className={`text-gray-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Ready to Partner</span>
              <br />
              <span className="gradient-text">With Us?</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-xl mx-auto">
              Let's build something extraordinary together.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary group text-base px-10 py-4">
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;