import React from 'react';
import { Code, Database, Shield, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}


export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Prisma', 'MongoDB'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Database & Auth',
      icon: <Shield size={24} />,
      skills: ['Supabase', 'Neon', 'MongoDB', 'Clerk', 'OAuth', 'JWT'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['Git', 'Vercel', 'Netlify', 'AWS Amplify', 'Jest', 'VS Code', 'Cursor'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/30 dark:bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Methodologies & Best Practices
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Agile Methodology', 'Scrum Methodology', 'UI/UX Optimization', 'Mobile-First Design', 'Performance Optimization', 'Accessibility'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 text-slate-800 dark:text-slate-200 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};