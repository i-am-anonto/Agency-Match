
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SignupForm } from './components/SignupForm.tsx';
import { Timeline } from './components/Timeline.tsx';
import { FounderSection } from './components/FounderSection.tsx';
import { ThankYou } from './components/ThankYou.tsx';
import { Footer } from './components/Footer.tsx';
import { AppStatus, SignupData, GeminiAnalysis } from './types.ts';
import { getSignupCount, submitSignup } from './lib/supabase.ts';
import { analyzeNeed } from './services/geminiService.ts';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [spotsRemaining, setSpotsRemaining] = useState(47);
  const [memberNumber, setMemberNumber] = useState(3);
  const [aiAnalysis, setAiAnalysis] = useState<GeminiAnalysis | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCount = async () => {
      const count = await getSignupCount();
      setMemberNumber(count);
      setSpotsRemaining(Math.max(0, 50 - count));
    };
    fetchCount();
  }, []);

  const handleSignup = async (data: SignupData) => {
    setStatus(AppStatus.SUBMITTING);
    setErrorMessage('');
    
    try {
      await submitSignup(data);
      // Analyze the need using Gemini to provide immediate value on the thank you page
      const analysis = await analyzeNeed(data.need, data.industry);
      setAiAnalysis(analysis);
      
      const nextMember = memberNumber + 1;
      setMemberNumber(nextMember);
      setSpotsRemaining(Math.max(0, 50 - nextMember));
      
      setStatus(AppStatus.SUCCESS);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Signup Error:', error);
      setErrorMessage("We couldn't process your registration. Please try again or check your connection.");
      setStatus(AppStatus.ERROR);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col relative overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <motion.div 
          animate={{ 
            x: [0, 40, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] bg-pink-500/10 blur-[120px] rounded-full" 
        />
      </div>

      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {status === AppStatus.SUCCESS ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ThankYou memberNumber={memberNumber} analysis={aiAnalysis} />
            </motion.div>
          ) : (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <div id="signup-section" className="py-12 px-4 relative z-10">
                <SignupForm 
                  onSubmit={handleSignup} 
                  status={status} 
                  spotsRemaining={spotsRemaining}
                  error={errorMessage}
                />
              </div>
              <Timeline />
              <FounderSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
