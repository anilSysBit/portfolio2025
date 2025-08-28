import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <>
    
    <Helmet>
        {/* 🔹 Basic SEO */}
        <title>Contact | Anil Wagle – Web Developer</title>
        <meta
          name="description"
          content="Get in touch with Anil Wagle, web developer from Nepal. Contact me for freelance projects, collaborations, or job opportunities in React, Node.js, and SEO-friendly web applications."
        />
        <link rel="canonical" href="https://www.anilwagle.com.np/contact" />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Anil Wagle – Web Developer" />
        <meta
          property="og:description"
          content="Reach out to Anil Wagle for web development projects, collaborations, or technical discussions."
        />
        <meta property="og:url" content="https://www.anilwagle.com.np/contact" />
        <meta
          property="og:image"
          content="https://www.anilwagle.com.np/anil-wagle-portfolio.jpg"
        />

        {/* 🔹 Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Anil Wagle – Web Developer" />
        <meta
          name="twitter:description"
          content="Connect with Anil Wagle, React & Node.js developer from Nepal. Let’s work together on your next project."
        />
        <meta
          name="twitter:image"
          content="https://www.anilwagle.com.np/anil-wagle-twitter.jpg"
        />

        {/* 🔹 Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: "https://www.anilwagle.com.np/contact",
            mainEntity: {
              "@type": "Person",
              name: "Anil Wagle",
              jobTitle: "Software Developer",
              url: "https://www.anilwagle.com.np",
              sameAs: [
              "https://github.com/anilSysBit",
              "https://www.linkedin.com/in/anil-wagle-a09609224"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "anil.wagle808@email.com",
                availableLanguage: ["English", "Nepali"]
              }
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20">
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.92731655490562!2d84.54915155656634!3d27.629562499364855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e9c413bcb537%3A0x582d089925682f95!2sBhupu%20Sainik%20Grocery%20Pasal!5e0!3m2!1sen!2snp!4v1694700318634!5m2!1sen!2snp" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Kathmandu, Nepal"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    </>
   
  );
};

export default Contact;