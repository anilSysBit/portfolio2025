import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const AboutMe: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "SD TECH",
      period: "2024 - 2025",
      description:
        "Developed and maintained web applications using modern technologies, collaborating with teams to enhance functionality and performance.",
    },
    {
      title: "React & Django Training",
      company: "Open Source Platforms",
      period: "Self-Learning",
      description:
        "Learned React for frontend development and Django for backend development through open-source materials, hands-on projects, and community contributions.",
    },
  ];
  


  const education = [
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Tribhuvan University',
      period: '2021 - 2025',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="anil-wagle-about.jpg" 
              alt="Anil Wagle - Web Developer" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Anil Wagle, a passionate web developer with hands on trainings and skills creating modern, 
              responsive websites and web applications. I specialize in frontend development with React 
              and have strong skills in backend technologies like Django or Laravel.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My approach to web development focuses on creating clean, efficient, and maintainable code 
              that delivers exceptional user experiences. I'm constantly learning and staying updated with 
              the latest technologies and best practices in the industry.
            </p>
            
            <a 
              href="./anilwaglecv2025.pdf"
              download="AnilWagle_CV.pdf"
              className="btn btn-primary mb-10"
              // onClick={(e) => {
              //   e.preventDefault();
              //   alert('Resume download functionality would be implemented here.');
              // }}
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </a>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Work Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
                    <h4 className="font-medium dark:text-white">{exp.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
                    <h4 className="font-medium dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution} | {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;