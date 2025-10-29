import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Target, Eye, Award, Brain, Zap, Sparkles, Linkedin, Twitter, Github, ChevronDown, Rocket
} from 'lucide-react';

const About: React.FC = () => {
  const journey = [
    { year: 2019, title: 'The Genesis', description: 'Neexzen was founded with a mission to bridge the gap between business needs and technological possibilities.', side: 'left' },
    { year: 2020, title: 'First Major Project', description: 'Successfully delivered a complex e-commerce platform, establishing our reputation for quality and reliability.', side: 'right' },
    { year: 2021, title: 'Expanding the Team', description: 'Grew our team of experts, bringing in specialized talent in UI/UX and digital marketing.', side: 'left' },
    { year: 2022, title: 'AI & ML Integration', description: 'Launched our first AI-powered analytics tool, marking our entry into machine learning solutions.', side: 'right' },
    { year: 2023, title: 'SaaS Platform Launch', description: 'Released our first proprietary SaaS product, helping businesses automate their workflows.', side: 'left' },
    { year: 2024, title: 'Global Recognition', description: 'Received industry awards for innovation and design, expanding our client base internationally.', side: 'right' },
    { year: 2025, title: 'Future of Intelligence', description: 'Pioneering new frontiers in quantum-inspired AI and decentralized applications.', side: 'left' },
  ];

  const teamMembers = [
    { name: 'Siam', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Jane Doe', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'John Smith', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Emily White', role: 'Marketing Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop', socials: { linkedin: '#', twitter: '#', github: '#' } },
  ];

  const coreValues = [
    { icon: <Sparkles size={24} />, text: 'Innovation at Core', gradient: 'from-blue-500 to-cyan-400' },
    { icon: <Users size={24} />, text: 'Client Partnership', gradient: 'from-purple-500 to-pink-400' },
    { icon: <Award size={24} />, text: 'Uncompromising Quality', gradient: 'from-green-500 to-emerald-400' },
    { icon: <Brain size={24} />, text: 'Continuous Learning', gradient: 'from-orange-500 to-yellow-400' },
    { icon: <Zap size={24} />, text: 'Agility & Adaptability', gradient: 'from-red-500 to-rose-400' },
  ];

  const faqs = [
    { q: 'What makes Neexzen different from other agencies?', a: 'Our core difference lies in our "innovation-first" approach. We don\'t just build what\'s asked; we partner with you to discover what\'s possible, leveraging AI and modern tech to create solutions that provide a competitive edge.' },
    { q: 'How do you ensure project success?', a: 'Success is built on transparency and collaboration. We use an agile methodology with regular check-ins, clear communication channels, and a dedicated project manager to ensure your project stays on track and aligned with your goals.' },
    { q: 'Can you work with startups and large enterprises?', a: 'Absolutely. Our processes are scalable and adaptable. For startups, we focus on speed-to-market and building a solid MVP. For enterprises, we focus on scalability, security, and seamless integration with existing systems.' },
    { q: 'What does the typical engagement process look like?', a: 'It starts with a discovery call to understand your vision. From there, we move to strategy and planning, followed by design, development, and rigorous QA. We conclude with a seamless launch and offer ongoing support to ensure long-term success.' },
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-all duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100">
              About Neexzen
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
              Pioneering the future of digital innovation by crafting intelligent, human-centered software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl mb-4 shadow-lg">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400">To empower businesses with transformative technology, creating intelligent software that drives growth, efficiency, and a competitive edge in a rapidly evolving digital landscape.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-400 rounded-xl mb-4 shadow-lg">
                <Eye className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400">To be a globally recognized leader in AI-driven innovation and software engineering, known for our commitment to quality, client success, and shaping the future of technology.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 hidden md:block" />
            <div className="space-y-16">
              {journey.map((item, index) => (
                <div key={item.year} className={`relative md:flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-5/12">
                    <motion.div initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
                      <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">{item.year} - {item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex md:w-2/12 justify-center">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg z-10">
                      <Rocket className="text-white" size={24} />
                    </motion.div>
                  </div>
                  <div className="md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">The brilliant minds behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-blue-500 dark:text-blue-400 font-semibold">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-blue-500"><Linkedin size={20} /></a>
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-blue-500"><Twitter size={20} /></a>
                  <a href={member.socials.github} className="text-gray-400 hover:text-blue-500"><Github size={20} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Our Core Values</h2>
          </div>
          <div className="mt-24 h-[500px] lg:h-[600px] relative flex items-center justify-center">
            <motion.div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[620px] lg:h-[620px] rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20" animate={{ rotate: 360 }} transition={{ duration: 90, ease: 'linear', repeat: Infinity }} />
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
              <Brain size={48} className="text-blue-500 dark:text-blue-400" />
            </div>
            {coreValues.map((item, index) => {
              const angle = (index / coreValues.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 220;
              const x = `calc(50% + ${radius * Math.cos(angle)}px)`;
              const y = `calc(50% + ${radius * Math.sin(angle)}px)`;
              return (
                <motion.div key={item.text} className="absolute w-44 p-3 rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-xl" style={{ top: y, left: x, transform: 'translate(-50%, -50%)' }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md`}>
                      {React.cloneElement(item.icon, { className: 'text-white', size: 18 })}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Have Questions?
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group">
                <div className="rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500/30">
                  <button type="button" className="flex justify-between items-center w-full p-6 font-semibold text-left text-gray-900 dark:text-white" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span className="text-lg">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;