import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:haashirn007@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'haashirn007@gmail.com',
      href: 'mailto:haashirn007@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '(516) 547-6312',
      href: 'tel:+15165476312',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'West Babylon, NY 11704',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white/30 dark:bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </div>
                  </div>
                  {item.href !== '#' && (
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-200" />
                  )}
                </a>
              ))}
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 group"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};