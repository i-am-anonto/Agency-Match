
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-white/10 py-5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-poppins text-2xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          AgencyMatch
        </div>
        <div className="bg-orange-500/10 border border-orange-500 text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Pre-Launch
        </div>
      </div>
    </header>
  );
};
