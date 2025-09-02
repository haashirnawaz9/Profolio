import React from 'react';
import { ExternalLink, Github, Globe, Database, Smartphone } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  codeUrl: string;
  liveUrl: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Masjid-e-Khazra',
      description: 'A dynamic, community-focused web platform for a masjid with emphasis on mobile responsiveness, accessibility, and performance.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Event listings and announcements',
        'Prayer time schedules with location updates',
        'Mobile-responsive design',
        'Community engagement features'
      ],
      icon: <Globe size={24} />,
      gradient: 'from-emerald-500 to-teal-600',
      codeUrl: 'https://github.com/haashirnawaz9/Masjid-E-KhazraV3', // replace with your repo if needed
      liveUrl: 'https://masjid-e-khazra.netlify.app/'
    },
    {
      title: 'HashBot AI',
      description: 'A full-stack AI application featuring real-time communication between authenticated users and an AI assistant with photo generation capabilities.',
      technologies: ['Next.js', 'TailwindCSS', 'Prisma ORM', 'AI Models'],
      features: [
        'Real-time AI chat functionality',
        'AI-powered photo generation',
        'Secure user authentication',
        'Session management and message history'
      ],
      icon: <Database size={24} />,
      gradient: 'from-blue-500 to-purple-600',
      codeUrl: 'https://github.com/haashirnawaz9/HashBot-AI', // replace if different
      liveUrl: 'https://hashbotai.vercel.app/'
    },
    {
      title: 'HashManga',
      description: 'A full-stack MERN web application with responsive UI that allows users to browse, search, and read manga with secure user management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: [
        'Manga browsing and search functionality',
        'JWT-based user authentication',
        'User preferences and data storage',
        'Responsive design across devices'
      ],
      icon: <Smartphone size={24} />,
      gradient: 'from-pink-500 to-rose-600',
      codeUrl: 'https://github.com/haashirnawaz9/HashManga', // replace if different
      liveUrl: 'https://hashmanga.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex space-x-3">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
