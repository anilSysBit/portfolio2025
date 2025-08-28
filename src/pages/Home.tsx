import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Services from '../components/Services';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
     <Helmet>
        {/* 🔹 Basic SEO */}
        <title>Anil Wagle | Web Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Anil Wagle – a passionate web developer from Nepal specializing in React, Node.js, and SEO-friendly websites. Explore projects, skills, and contact information."
        />
        <link rel="canonical" href="https://www.anilwagle.com.np/" />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anil Wagle | Web Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Anil Wagle, React & Node.js developer. Projects, skills, and ways to connect."
        />
        <meta property="og:url" content="https://www.anilwagle.com.np/" />
        <meta property="og:image" content="https://www.anilwagle.com.np/preview.jpg" />

        {/* 🔹 Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anil Wagle | Web Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Full-stack developer portfolio showcasing React, Node.js, and SEO-friendly projects."
        />
        <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg" />

        {/* 🔹 Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Anil Wagle",
            jobTitle: "Web Developer",
            url: "https://www.anilwagle.com.np",
            sameAs: [
              "https://github.com/yourusername",
              "https://www.linkedin.com/in/yourusername"
            ]
          })}
        </script>
      </Helmet>
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