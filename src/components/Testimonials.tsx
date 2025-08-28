import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Saugat Devkota',
      position: 'CEO, SD Tech Company',
      content: "It was very nice working with Anil Wagle, who was a game-changer. He completed the work very well.",
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQH-gIyE-TWdyQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707847055735?e=1746662400&v=beta&t=LcyLx2u0rFcVsXye0RVHvhv0yzSid_4IyihUD8IuLnw',
    },
    {
      name: 'Padma Adhikari',
      position: 'Co-Founder, Jagatpur E Bazar',
      content: "Anil is one of the most talented developers I've worked with. He has a deep understanding of both frontend and backend technologies, and consistently delivers high-quality code. He's also great at communicating complex technical concepts.",
      image: 'https://picsum.photos/100?random=2',

    },
    {
      name: 'Sushant Rimal',
      position: 'Project Manager, SD Tech',
      content: "I kept Anil Wagle for an internship at our company. He has progressed very fast and demonstrated exceptional quick learning skills.",
      image: 'https://picsum.photos/100?search=person',
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <Quote className="h-12 w-12 text-primary-200 dark:text-primary-800 mb-6" />
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 italic">
              "{testimonials[current].content}"
            </p>
            
            <div className="flex items-center">
              <img 
                src={testimonials[current].image} 
                alt={'Anil Wagle Nepal ' + testimonials[current].name} 
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[current].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;