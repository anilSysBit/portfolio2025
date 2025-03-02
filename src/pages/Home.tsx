import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;