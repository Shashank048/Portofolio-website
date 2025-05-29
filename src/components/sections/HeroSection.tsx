import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const HeroSection: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-500"
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-6 relative inline-block">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-xl overflow-hidden flex items-center justify-center text-white text-4xl font-bold">
            {personalInfo.image ? (
                   <img
                      src={personalInfo.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      />
                    ) : (
                    personalInfo.name.split(' ').map(name => name[0]).join('')
            )}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          {personalInfo.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">
          {personalInfo.title}
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-colors duration-300">
          {personalInfo.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
          
          <a 
            href="/resume.pdf" 
            className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-blue-200 dark:border-gray-700"
            download
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;