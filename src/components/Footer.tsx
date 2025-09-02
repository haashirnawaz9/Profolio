import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            <p className="flex items-center space-x-1">
              <span>© 2025 Haashir Nawaz. Built with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and React</span>
            </p>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p>Let's build something amazing together</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 dark:border-slate-700 text-center">
          <p className="text-slate-500 text-sm">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};