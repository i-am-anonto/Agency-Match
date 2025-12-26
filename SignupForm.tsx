
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignupData, AppStatus } from '../types';

interface Props {
  onSubmit: (data: SignupData) => void;
  status: AppStatus;
  spotsRemaining: number;
  error?: string;
}

export const SignupForm: React.FC<Props> = ({ onSubmit, status, spotsRemaining, error }) => {
  const [formData, setFormData] = useState<SignupData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    budget: '',
    need: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isLoading = status === AppStatus.SUBMITTING;

  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      aria-labelledby="signup-heading" 
      className="max-w-xl mx-auto bg-slate-800 border border-white/10 rounded-[2rem] p-10 shadow-2xl relative"
    >
      <div className="text-center mb-10">
        <h2 id="signup-heading" className="text-3xl font-bold mb-3">Join as a Founding Member</h2>
        <p className="text-slate-400">Be one of the first 50 businesses. Get matched free, forever.</p>
      </div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border-2 border-indigo-500/40 rounded-2xl p-6 mb-8 text-center"
      >
        <strong className="text-indigo-400 text-lg block mb-2">🌟 Founding Member Perks</strong>
        <p className="text-sm text-slate-400">Free matching forever • Priority support • Shape the service • First access to new features</p>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            role="alert" 
            className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded-xl mb-6 text-center overflow-hidden"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-300">Your Name *</label>
            <input 
              id="name"
              required name="name" value={formData.name} onChange={handleChange}
              className="w-full bg-slate-900/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all text-white" 
              placeholder="John Smith" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-300">Work Email *</label>
            <input 
              id="email"
              required type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full bg-slate-900/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all text-white" 
              placeholder="john@company.com" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-semibold text-slate-300">Company Name *</label>
          <input 
            id="company"
            required name="company" value={formData.company} onChange={handleChange}
            className="w-full bg-slate-900/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all text-white" 
            placeholder="Your Company Inc." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="industry" className="text-sm font-semibold text-slate-300">Industry *</label>
            <select 
              id="industry"
              required name="industry" value={formData.industry} onChange={handleChange}
              className="w-full bg-slate-900 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all text-slate-200 appearance-none"
            >
              <option value="" className="bg-slate-800">Select industry</option>
              <option value="ecommerce" className="bg-slate-800">E-commerce / DTC</option>
              <option value="saas" className="bg-slate-800">SaaS / Tech</option>
              <option value="services" className="bg-slate-800">Professional Services</option>
              <option value="healthcare" className="bg-slate-800">Healthcare</option>
              <option value="realestate" className="bg-slate-800">Real Estate</option>
              <option value="finance" className="bg-slate-800">Finance / FinTech</option>
              <option value="education" className="bg-slate-800">Education</option>
              <option value="other" className="bg-slate-800">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-semibold text-slate-300">Marketing Budget *</label>
            <select 
              id="budget"
              required name="budget" value={formData.budget} onChange={handleChange}
              className="w-full bg-slate-900 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all text-slate-200 appearance-none"
            >
              <option value="" className="bg-slate-800">Select range</option>
              <option value="<5k" className="bg-slate-800">Under $5k/mo</option>
              <option value="5k-15k" className="bg-slate-800">$5k - $15k/mo</option>
              <option value="15k-30k" className="bg-slate-800">$15k - $30k/mo</option>
              <option value="30k+" className="bg-slate-800">$30k+/mo</option>
              <option value="unsure" className="bg-slate-800">Not sure yet</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="need" className="text-sm font-semibold text-slate-300">What do you need help with? *</label>
          <textarea 
            id="need"
            required name="need" value={formData.need} onChange={handleChange}
            className="w-full bg-slate-900/50 border-2 border-white/10 rounded-xl px-4 py-3 focus:border-indigo-500 focus:outline-none transition-all min-h-[120px] text-white" 
            placeholder="Example: We need help with Facebook ads for our DTC brand..."
          />
        </div>

        <motion.button 
          whileTap={{ scale: 0.98 }}
          disabled={isLoading}
          type="submit" 
          className="w-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:to-indigo-600 py-4 rounded-xl font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-500/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block"
              />
              Securing Spot...
            </span>
          ) : 'Secure My Founding Member Spot →'}
        </motion.button>

        <div className="border-t border-white/10 pt-6 text-center">
          <motion.span 
            key={spotsRemaining}
            initial={{ scale: 1.5, color: '#818cf8' }}
            animate={{ scale: 1, color: '#818cf8' }}
            className="block text-4xl font-black mb-1"
          >
            {spotsRemaining}
          </motion.span>
          <span className="text-xs uppercase font-bold text-slate-500 tracking-widest">founding member spots remaining</span>
        </div>
      </form>
    </motion.section>
  );
};
