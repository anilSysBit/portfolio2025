import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
    <Helmet>
        {/* 🔹 Basic SEO */}
        <title>About Me | Anil Wagle – Web Developer</title>
        <meta
          name="description"
          content="Learn more about Anil Wagle – a passionate web developer from Nepal specializing in React, Node.js, and SEO-friendly websites. Discover my journey, skills, and professional background."
        />
        <link rel="canonical" href="https://www.anilwagle.com.np/about" />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About Anil Wagle – Web Developer" />
        <meta
          property="og:description"
          content="Passionate React & Node.js developer from Nepal. Learn about my journey, skills, and web development experience."
        />
        <meta property="og:url" content="https://www.anilwagle.com.np/about" />
        <meta property="og:image" content="https://www.anilwagle.com.np/anil-wagle-portfolio.jpg" />

        {/* 🔹 Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Anil Wagle – Web Developer" />
        <meta
          name="twitter:description"
          content="Get to know Anil Wagle, React & Node.js developer from Nepal, with experience in building SEO-friendly web applications."
        />
        <meta name="twitter:image" content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg" />

        {/* 🔹 Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Anil Wagle",
            description:
              "Web developer from Nepal specializing in React, Node.js, and SEO-friendly websites.",
            url: "https://www.anilwagle.com.np/about",
            image: "https://www.anilwagle.com.np/anil-wagle-portfolio.jpg",
            jobTitle: "Software Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance / ThinkMove Solutions"
            },
            sameAs: [
              "https://github.com/anilSysBit",
              "https://www.linkedin.com/in/anil-wagle-a09609224"
            ]
          })}
        </script>
      </Helmet>

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
    
    </>
   
  );
};

export default About;