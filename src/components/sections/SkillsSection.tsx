import React from 'react';
import { skills } from '../../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

const SkillCategory: React.FC<{
  category: string;
  items: string[];
  index: number;
}> = ({ category, items, index }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
        {category}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li 
            key={i} 
            className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 transition-colors duration-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical abilities and expertise.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCategory 
              key={index}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;