import React from 'react';
import { ChevronDown, Download, Mail, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Haashir
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent"> Nawaz</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-2">
            Full-Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 mb-8">
            West Babylon, NY • Building modern web applications with passion
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-200">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
          <a
            href="tel:+15165476312"
            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 flex items-center space-x-2"
          >
            <Phone size={20} />
            <span>(516) 547-6312</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6 text-slate-500 dark:text-slate-400 animate-fade-in-up animation-delay-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">15+</div>
            <div className="text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
            <div className="text-sm">Projects</div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={24} className="text-slate-600 dark:text-slate-400" />
      </button>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};