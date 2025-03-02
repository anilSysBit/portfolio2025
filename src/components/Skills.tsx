import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/SCSS', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 60 },
    { name: 'Django', level: 90 },
    { name: 'Laravel', level: 60 },
    { name: 'MySQL', level: 70 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Git/GitHub', level: 85 },
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's a breakdown of my technical skills.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;