import AboutUs from '../components/AboutUs'; // Importing the AboutUs component
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import React from 'react';

function About() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About DIGITALORBIT SOLUTIONS | Leading IT Training Institute in Pune</title>
        <meta
          name="description"
          content="Learn about ArrayLogic Academy, Pune's premier IT training institute. We offer expert-led courses in Java Full Stack, MERN, MEAN, Data Science, Cloud Computing, AI, and more."
        />
        <meta
          name="keywords"
          content="IT training institute Pune, ArrayLogic Academy Pune, Java Full Stack courses Pune, MERN Stack courses, MEAN Stack courses, Python Full Stack, Data Science, Cloud Computing, Machine Learning, AI courses, Best IT institute Pune, software development training, technology career Pune, professional IT training,About ArrayLogic Academy, IT training institute Pune, Java Full Stack training, MERN Stack courses, MEAN Stack training, Data Science training Pune, Cloud Computing academy, Artificial Intelligence courses, top IT institute Pune, expert IT trainers, career-focused training programs"
        />
        <meta
          property="og:title"
          content="About ArrayLogic Academy | Leading IT Training Institute in Pune"
        />
        <meta
          property="og:description"
          content="Discover why ArrayLogic Academy is the trusted choice for IT training. We specialize in advanced courses to prepare you for a thriving tech career."
        />
        <meta
          property="og:url"
          content="https://www.arraylogicacademy.in/about"
        />
        <meta
          property="og:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About ArrayLogic Academy | Leading IT Training Institute in Pune"
        />
        <meta
          name="twitter:description"
          content="Explore ArrayLogic Academy's mission, values, and expertise in providing top-notch IT training courses in Pune."
        />
        <meta
          name="twitter:image"
          content="URL_to_image_or_logo_here.jpg" // Replace with a valid image URL
        />
      </Helmet>

      {/* Page Content */}
      <Navbar />
      <div className="min-h-screen">
        <AboutUs /> {/* Displaying the AboutUs section here */}
      </div>
      <Footer />
    </>
  );
}

export default About;
