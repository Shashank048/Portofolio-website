import React from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  date: string;
  index: number;
}> = ({ title, description, techStack, githubLink, date, index }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            {title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
            {date}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 transition-colors duration-300">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.split(', ').map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <a 
            href={`https://${githubLink}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>
          {/* Placeholder for demo link if available */}
          {/* <a 
            href="#" 
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Here are some of my recent projects showcasing my skills and experience.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              date={project.date}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;