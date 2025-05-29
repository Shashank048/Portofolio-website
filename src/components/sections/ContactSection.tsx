import React from 'react';
import { contactInfo } from '../../data/portfolioData';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Feel free to reach out for collaboration or just to say hello!
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Info Card */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-700 dark:text-gray-300 break-all hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 break-all hover:underline"
              >
                {contactInfo.linkedin}
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 break-all hover:underline"
              >
                {contactInfo.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
