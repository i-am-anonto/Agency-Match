
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="pt-20 pb-16 text-center px-4">
      <motion.div 
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block bg-indigo-500/10 border border-indigo-500 text-indigo-400 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
          🚀 Now Accepting Founding Members
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
          We're Building a Better Way<br />to Find Marketing Agencies
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
          Tired of wasting weeks on discovery calls with wrong-fit agencies? Join us in creating a matching service that actually works. Be part of the first 50.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12 text-left">
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all shadow-xl group"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl group-hover:scale-110 transition-transform">✨</span> What We're Building
            </h2>
            <ul className="space-y-4">
              {[
                "Hand-picked agency matches based on your industry",
                "Budget-aligned recommendations (no wasted time)",
                "Transparent vetting process you can see",
                "Direct intros to specialists, not generalists",
                "100% free for businesses, always"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-slate-800/50 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all shadow-xl group"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl group-hover:scale-110 transition-transform">📍</span> Where We Are Now
            </h2>
            <ul className="space-y-4">
              {[
                "Recruiting our first 50 businesses",
                "Building relationships with 20+ specialized agencies",
                "First matches happening in 4-6 weeks",
                "Founding members get matched free forever",
                "Your feedback shapes how this works"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="bg-slate-800/80 border-l-4 border-orange-500 rounded-xl p-8 max-w-4xl mx-auto mt-12 text-left shadow-2xl backdrop-blur-sm"
        >
          <h3 className="text-orange-500 font-bold text-lg mb-3 uppercase tracking-wider">💯 Full Transparency</h3>
          <p className="text-slate-300 leading-relaxed">
            <strong>We are being 100% honest with you:</strong> We haven't matched anyone yet. This is a brand new project. We are recruiting businesses and agencies simultaneously to create the best matches possible. You're joining at the very beginning, which means you get extra attention and help shape how this service works. Plus, founding members get matched free forever—no strings attached.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
