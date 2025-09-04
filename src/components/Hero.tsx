import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typewriter from './TypingEffect';

const Hero: React.FC = () => {
  const roles = ["Web Developer", "Frontend Developer", "Backend Developer", "Project Manager"];



  return (
    <section className="pt-32 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Anil Wagle</span>
              <br />
              <Typewriter words={roles} speed={100} delay={1500} />
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              Focused on creating clean, user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://github.com/anilSysBit/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/anil-wagle-a09609224/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white dark:bg-blue-700 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:anil.wagle808@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white dark:bg-red-600 rounded-lg hover:bg-red-600 dark:hover:bg-red-500 transition-colors">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src="anil-wagle-image.png"
              alt="Software Developer Anil Wagle" 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;