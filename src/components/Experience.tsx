import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export const Experience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences: ExperienceItem[] = [
    {
      company: 'CodeAlpha',
      position: 'Frontend Developer Intern',
      location: 'Remote',
      duration: 'Mar 2025 - May 2025',
      description: [
        'Developed and maintained responsive web applications using Tailwind CSS and Next.js, ensuring semantic HTML and CSS best practices for enhanced user experience.',
        'Enhanced UI/UX performance and increased page speed by 20% through modern frontend solutions and responsive design implementation.',
        'Streamlined development processes using component libraries such as ShadCN UI and React.js, contributing to scalable web architecture.'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'React.js', 'ShadCN UI']
    },
    {
      company: 'Freelance',
      position: 'Software Engineer',
      location: 'Remote',
      duration: 'Jul 2023 - Feb 2025',
      description: [
        'Designed and maintained responsive web applications using React, Next.js, and Tailwind CSS, aligning with performance optimization, accessibility, and mobile-first design principles.',
        'Collaborated with a mosque organization to develop a dynamic website featuring event announcements, prayer times, and donation integration while ensuring secure, user-friendly functionality.',
        'Delivered full-stack solutions with a focus on performance, UI/UX enhancements, and adherence to best practices in code quality and project management.'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
    },
    {
      company: 'Rainbow Shops Computer Bank',
      position: 'Data Analyst',
      location: 'Brooklyn, NY',
      duration: 'Aug 2021 - Jul 2022',
      description: [
        'Downloaded and consolidated bank transaction data from multiple financial institutions used by 900+ retail store locations.',
        'Analyzed and matched external bank data against internal company records to ensure accuracy and consistency.',
        'Investigated and resolved discrepancies by researching variances between matched datasets, improving data integrity and reconciliation efficiency.'
      ],
      technologies: ['Data Analysis', 'Excel', 'SQL', 'Financial Systems']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building impactful solutions across diverse industries and technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <div
                key={index}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {experience.position}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-4 md:mt-0 flex items-center space-x-1 px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-6 space-y-4 animate-fade-in">
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {experience.technologies && (
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};