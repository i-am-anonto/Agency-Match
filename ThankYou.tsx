
import React from 'react';
import { motion } from 'framer-motion';
import { GeminiAnalysis } from '../types';

interface Props {
  memberNumber: number;
  analysis: GeminiAnalysis | null;
}

export const ThankYou: React.FC<Props> = ({ memberNumber, analysis }) => {
  return (
    <section className="py-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-2xl shadow-emerald-500/20"
        >
          🎉
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Welcome, Founding Member!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-slate-400 mb-12"
        >
          You're officially one of the first 50. Thank you for believing in this vision.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
          className="text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-12"
        >
          #{memberNumber}
        </motion.div>

        {analysis && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-indigo-500/5 border border-indigo-500/30 rounded-3xl p-8 mb-10 text-left backdrop-blur-sm"
          >
            <h3 className="text-indigo-400 font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-xl">🤖</span> AI Initial Assessment
            </h3>
            <p className="text-slate-300 mb-6 italic leading-relaxed">"{analysis.summary}"</p>
            <div className="mb-6">
              <strong className="text-white block mb-1 text-sm uppercase">Recommended Agency Focus:</strong>
              <span className="text-emerald-400 font-medium">{analysis.recommendedAgencyType}</span>
            </div>
            <div>
              <strong className="text-white block mb-3 text-sm uppercase tracking-wider">Strategic Recommendations:</strong>
              <ul className="space-y-3">
                {analysis.priorityTips.map((tip, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="flex items-center gap-3 text-sm text-slate-400"
                  >
                    <span className="w-5 h-5 bg-indigo-500/20 rounded-full flex items-center justify-center text-[10px] text-indigo-300 font-bold">{i+1}</span>
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-6"
        >
          <div className="bg-slate-800 border border-white/10 rounded-2xl p-8 text-left">
            <h3 className="text-xl font-bold mb-4 text-white">The Matching Process</h3>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p><strong>Next 48 Hours:</strong> Our team will review your application and send a follow-up briefing to clarify specific goals.</p>
              <p><strong>Next 3-4 Weeks:</strong> We will finalize your hand-picked agency recommendations based on current market vetting.</p>
              <p><strong>Ongoing Collaboration:</strong> Your feedback will be directly utilized to refine the platform features before public launch.</p>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-indigo-500/10 border-2 border-indigo-500 rounded-2xl p-6 text-left"
          >
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <span>📩</span> Registration Confirmed
            </h3>
            <p className="text-sm text-slate-400">
              We have sent a confirmation message to your work email. Please ensure our domain is marked as safe to receive your matching updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
