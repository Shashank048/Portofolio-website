import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
            <div className="w-60 h-69 bg-gradient-to-tr from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-2xl flex items-center justify-center overflow-hidden p-2 transition-colors duration-300">
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
            <div className="md:w-2/3">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Computer Science & Engineering Student
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                {personalInfo.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <div className="flex items-center">
                  <span className="font-medium mr-2">Name:</span>
                  <span>{personalInfo.name}</span>
                </div>
                
                <div className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                      <a
                         href="mailto:choureshashank21@gmail.com"
                         className="text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:underline"
                        >
                        choureshashank21@gmail.com
                      </a>
                </div>
                <div className="flex items-center">
                  <span className="font-medium mr-2">Focus:</span>
                  <span>Scalable Web Applications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;