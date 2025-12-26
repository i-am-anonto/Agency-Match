
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm mb-2">© 2025 AgencyMatch. Built honestly, one match at a time.</p>
        <div className="flex justify-center gap-6 mt-4">
          <span className="text-slate-600 text-xs uppercase tracking-widest font-bold">Privacy Policy</span>
          <span className="text-slate-600 text-xs uppercase tracking-widest font-bold">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
