
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { date: 'NOW', title: 'Recruiting Phase', description: 'Accepting first 50 businesses and building relationships with 20+ specialized agencies across different industries.' },
  { date: 'Week 3-4', title: 'Matching Begins', description: 'Start making personalized matches between founding members and vetted agencies. Each match is done manually.' },
  { date: 'Week 6-8', title: 'Feedback & Iteration', description: 'Gather feedback from founding members on match quality and refine the process based on real results.' },
  { date: 'Week 10-12', title: 'Public Launch', description: 'Open to everyone with a proven process, real testimonials, and a wide network of pre-vetted agencies.' }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          The Launch Roadmap
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800 border border-white/5 border-l-4 border-l-indigo-500 rounded-2xl p-8 flex flex-col md:flex-row gap-6 md:items-center hover:bg-slate-700/50 transition-colors cursor-default"
            >
              <div className="md:w-32 flex-shrink-0">
                <span className="text-indigo-400 font-bold uppercase text-sm tracking-widest">{step.date}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
