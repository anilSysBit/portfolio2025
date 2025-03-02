import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with a user website, admin panel, and seller panel.',
      image: '/projects/jagatpuradmin.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Sports Management System',
      description: 'A platform with team users, admin users, and a visitor website for managing sports events.',
      image: '/projects/sportstable.png',
      tags: ['Django', 'React.js', 'REST Framework'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      image: '/projects/portfolio.png',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/anilSysBit',
    }
  ]
  

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Here are some of my recent projects. Each one was carefully crafted to solve specific problems
              and deliver exceptional user experiences.
            </p>
          </div>
          <Link 
            to="/projects" 
            className="mt-6 md:mt-0 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;