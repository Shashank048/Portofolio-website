import React from 'react';
import { education } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {edu.institution}
                </h4>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors duration-300">
                  {edu.duration}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {edu.degree}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;