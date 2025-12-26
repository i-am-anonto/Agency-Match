
import React from 'react';
import { motion } from 'framer-motion';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-3xl bg-slate-800 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="text-center mb-10">
          <span className="text-pink-500 font-bold uppercase text-xs tracking-[0.2em]">Our Core Mission</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <motion.div 
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl"
          >
            ✨
          </motion.div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Built for Better Matches</h2>
            <div className="text-indigo-400 font-semibold text-sm">Integrity • Transparency • Results</div>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            <strong>Why we are building this:</strong> We've observed too many businesses waste months and thousands of dollars on wrong-fit marketing agencies. The current search process is fundamentally broken—it relies on guesswork rather than data-driven compatibility.
          </p>
          <p>
            <strong>Our promise to you:</strong> AgencyMatch is built on a foundation of absolute honesty. We provide a space free from fake social proof and impossible promises, focusing solely on the strategic alignment between businesses and specialized agencies.
          </p>
          <p>
            <strong>The Founding Member commitment:</strong> As a founding member, you receive dedicated attention from our team. We manually review every requirement, research the specific agency landscape for your industry, and only initiate introductions with partners we would trust with our own enterprise.
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-bold text-indigo-400 text-center md:text-left border-t border-white/5 pt-6 mt-8"
          >
            Let's build a more transparent marketing ecosystem together.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
