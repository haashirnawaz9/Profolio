import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a commitment to creating exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm a dedicated software engineer currently pursuing my Bachelor's degree in Computer Programming & Information Systems. 
              With over 3 years of experience in web development, I specialize in building scalable, responsive applications using cutting-edge technologies.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My journey spans from freelance projects helping local organizations to internship experiences at tech companies. 
              I'm passionate about creating solutions that make a positive impact on communities and businesses.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                <span>West Babylon, NY</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <Calendar size={20} className="text-emerald-600 dark:text-emerald-400" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    Farmingdale State College
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Bachelor of Science, Computer Programming & Information Systems
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Expected July 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    Amazon Web Services
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Full-Stack Web Development Course
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Expected August 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};