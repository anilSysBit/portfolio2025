import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Jagatpur E-Bazar',
      description: 'A real e-commerce website for selling projects with an interactive user site, admin panel, and seller panel.',
      image: '/projects/jagatpuradmin.jpg',
      tags: ['React.js', 'Admin Panel', 'Seller Panel' , "User Website"],
      liveUrl: 'https://next-jeb.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Football Management System',
      description: 'A project for managing football events, teams, and users with a robust backend.',
      image: '/projects/sportstable.png',
      tags: ['Django', 'React.js', 'REST API'],
      liveUrl: 'https://gpn-sports.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Jagatpur Blood Management System',
      description: 'A website for managing blood delivery, handling blood requests, and user management.',
      image: '/projects/bloodadmin.png',
      tags: ['React.js', 'Admin Panel'],
      liveUrl: 'bms.jagatpurebazar.com',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Meal Planner',
      description: 'A website that recommends personalized meals based on BMI, user preferences, and daily routines.',
      image: '/projects/mealbmi.png',
      tags: ['Django', 'Full Stack', 'Meal Planning'],
      liveUrl: 'http://localhost:8000/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Laravel Blood Management Project',
      description: 'A website for handling blood delivery data with Laravel for backend and user management.',
      image: '/projects/laravelblood.png',
      tags: ['Laravel', 'Backend', 'Blood Management'],
      liveUrl: 'http://localhost:5173',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Pinterest Clone',
      description: 'A Pinterest-like clone with React.js featuring image sharing and user interactions.',
      image: '/projects/pinterestclone.png',
      tags: ['React.js', 'UI/UX'],
      liveUrl: 'https://pinterestwebx.vercel.app/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Daraz Clone',
      description: 'A Daraz-like e-commerce UI built with React.js for product listing and shopping experience.',
      image: '/projects/darazclone.png',
      tags: ['React.js', 'E-commerce'],
      liveUrl: 'https://darazclone.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit/',
    },
    {
      title: 'Ghost House 3D Website',
      description: 'A 3D immersive website using Three.js for an interactive spooky house experience.',
      image: '/projects/ghosthouse.png',
      tags: ['Three.js', '3D Web', 'Interactive UI'],
      liveUrl: 'https://anilsysbit.github.io/ghostHouse.github.io/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      image: 'projects/portfolio.png',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://anilwagle.com.np',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'SportsPasal UI',
      description: 'A UI design for a sports product marketplace built using React.js.',
      image: 'projects/sportpasal.png',
      tags: ['React.js', 'UI Design'],
      liveUrl: 'https://sports-pasal.vercel.app/',
      githubUrl: 'https://github.com/anilSysBit',
    },
    {
      title: 'Hotel Booking UI',
      description: 'A hotel booking UI built with React.js as a practice project.',
      image: '/projects/hourlodge.png',
      tags: ['React.js', 'UI Design'],
      liveUrl: 'https://hourlodge.vercel.app/',
      githubUrl: 'https://github.com',
    },
  ];
  
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my web development work, including personal projects and client websites.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default Projects;