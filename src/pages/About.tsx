import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import CTA from '../components/CTA';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about my background, skills, and experience as a web developer.
          </p>
        </div>
      </div>
      
      <AboutMe />
      <Skills />
      <CTA />
    </div>
  );
};

export default About;