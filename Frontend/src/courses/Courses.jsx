import ContactForm from '../components/ContactForm';
import Course from '../components/Course';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import React from 'react';
import TechStack from '../components/TechStack';

function Courses() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Explore IT Courses | DIGITALORBIT SOLUTIONS LLP | Learn & Build Your Career</title>
        <meta
          name="description"
          content="Join DIGITALORBIT SOLUTIONS LLP to master IT skills with courses in Java Full Stack, MERN, MEAN, Python, Data Science, AI, Cloud Computing, AWS, Machine Learning, and more. Build a tech-savvy career today!"
        />
        <meta
          name="keywords"
          content="IT courses, tech training, Java Full Stack, MERN Stack, MEAN Stack, Python Full Stack, Data Science, Artificial Intelligence, AI courses, Machine Learning, Cloud Computing, AWS training, software development, career development, IT certification, programming courses, technology education, IT institute in Pune, ArrayLogic Academy courses, coding bootcamps, full-stack development, IT training institute in India"
        />
        <meta
          property="og:title"
          content="Explore IT Courses | DIGITALORBIT SOLUTIONS LLP | Learn & Build Your Career"
        />
        <meta
          property="og:description"
          content="DIGITALORBIT SOLUTIONS LLP offers industry-relevant IT courses including Java, MERN, Python, Data Science, AI, and Cloud Computing. Enroll now and shape your career in technology."
        />
        <meta property="og:url" content="https://www.arraylogicacademy.in/courses" />
        <meta
          property="og:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Explore IT Courses |DIGITALORBIT SOLUTIONS LLP | Learn & Build Your Career"
        />
        <meta
          name="twitter:description"
          content="Find top IT courses at DIGITALORBIT SOLUTIONS LLP in Pune, offering Java Full Stack, Python, MERN, MEAN, Data Science, AI, Machine Learning, Cloud Computing, and more."
        />
        <meta
          name="twitter:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
      </Helmet>

      {/* Page Structure */}
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <TechStack />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Courses;
