import React from 'react';
import { achievements } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  return (
    <section 
      id="achievements" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Achievements & Certifications
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {achievement.title}
              </h4>
              
              <p className="text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                {achievement.description}
              </p>
              
              {achievement.link && (
                <a 
                  href={`https://${achievement.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;