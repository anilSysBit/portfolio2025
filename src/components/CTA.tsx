import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 dark:bg-primary-950 text-white">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Web Project?
          </h2>
          <p className="text-lg text-primary-100 mb-10">
            I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary-900 hover:bg-gray-100 focus:ring-white dark:bg-gray-200 dark:hover:bg-gray-300"
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;