import React, { useEffect, useState } from "react";

import Cards from "../components/Cards";
;
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// import axios from "axios";

const Course = () => {
  // const [book, setBook] = useState([]);

  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await fetch("/bookStore.books.json"); // Fetch the JSON file
        const data = await res.json(); // Parse the JSON data
        console.log(data);
        setBook(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBook();
  }, []);

  const coursesSection = [
    {
      id: 1,
      name: "Java Full Stack",

      image: "JavaTrainding.webp",
      syllabus: "/syllabus/java-full-stack.pdf",
    },
    {
      id: 2,
      name: "Python Full Stack",

      image: "PythonTrending.webp",
      syllabus: "/syllabus/python-full-stack.pdf",
    },
    {
      id: 3,
      name: "MERN Stack",

      image: "MERNTrainding.webp",
      syllabus: "/syllabus/mern-stack.pdf",
    },
    {
      id: 4,
      name: "Digital Marketing",
      image: "DMTrainding.webp",
      syllabus: "/syllabus/digital-marketing.pdf",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          IT Courses | DIGITALORBIT SOLUTIONS LLP - Premier IT Training Institute in
          Pune
        </title>
        <meta
          name="description"
          content="DIGITALORBIT SOLUTIONS LLP offers a diverse range of industry-relevant IT courses in Pune. Learn Java Full Stack, MERN Stack, MEAN Stack, Python Full Stack, Data Science, Cloud Computing, Machine Learning, Artificial Intelligence, and more from experienced instructors to enhance your career in technology. Our training programs are designed to give you hands-on experience and skills that employers demand."
        />
        <meta
          name="keywords"
          content="IT courses in Pune, DIGITALORBIT SOLUTIONS LLP Pune, Java Full Stack training, MERN Stack courses, MEAN Stack training, Python Full Stack courses, Data Science courses, Machine Learning courses, AI training, Cloud Computing classes, software development courses, technology career training, professional IT certification, coding bootcamp Pune, best IT institute Pune, job-ready IT courses, career-oriented IT training"
        />
      </Helmet>

      <div className="mt-14">
        <img src="/CourseIMG.webp" alt="Image Coomin Soon"></img>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-18 px-3">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mt-10 md:mt-16 px-4 md:px-0 text-center">
  {/* Main Heading */}
  <h1 className="text-2xl md:text-4xl font-extrabold text-blue-900 leading-snug mb-6">
    Shape Your Future with <span className="text-orange-500">DIGITALORBIT SOLUTIONS</span>'s In-Demand Software Courses
  </h1>

  {/* Subheading / Description */}
  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-left md:text-center">
    Welcome to <strong>DIGITALORBIT SOLUTIONS</strong>, your destination for professional IT training and software courses. 
    Whether you're a beginner ready to kickstart your tech career or an experienced professional aiming to upgrade your skills, 
    we provide industry-oriented courses in AI, Software Development, Web & App Development, Cloud Technologies, and more.
  </p>

  {/* Services Highlight Box */}
  <div className="bg-blue-50 border-l-4 border-blue-900 rounded-lg p-6 md:p-8 mb-6 text-left shadow-md">
    <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-4">
      Our Core Services:
    </h3>
    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
      <li>IT Training & Certification Programs</li>
      <li>AI & Machine Learning Training</li>
      <li>Web & Mobile App Development</li>
      <li>Software Development & IT Solutions</li>
      <li>Internship & Industrial Training</li>
      <li>Career Guidance & Skill Development</li>
    </ul>
  </div>

  {/* Motivational CTA Line */}
  <p className="text-gray-800 text-lg md:text-xl font-semibold mb-6">
    Launch your career with <span className="text-orange-500">DIGITALORBIT SOLUTIONS</span>'s job-ready software courses!
  </p>

  {/* Back Button */}
  <Link to="/">
    <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
      Back
    </button>
  </Link>
</div>


        {/* Course Cards Section */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <hr className="border-t-4 border-black font-extrabold mt-5" />

        <div className="container mx-auto px-1 md:px-6 pb-8 pt-20">
          <h2 className="text-xl md:text-4xl font-bold text-center mb-3  text-blue-900">
            DIGITALORBIT SOLUTIONS IT Training Institute: Trending Software Courses
          </h2>
          <h2 className=" md:px-8 px-1 text-sm md:text-lg  mb-8">
            At DIGITALORBIT SOLUTIONS IT Courses Institute, we are dedicated to
            training students from diverse backgrounds, making it easier for
            them to learn and thrive in the IT industry. Our mission is to
            create a future where anyone passionate about software development
            can pursue a career in IT. We offer the Trending Software Courses
            and Software Programs that are designed to be accessible,
            high-quality, and industry-relevant, breaking down barriers to
            entry. In our supportive and dynamic environment, we encourage
            honesty, hard work, and innovation. Our experienced trainers don’t
            just teach the basics—they empower students with practical skills
            they can apply in real jobs. Our goal goes beyond teaching; we are
            committed to helping students shape their futures and succeed with
            Best IT Job-Oriented Courses, ensuring they are well-prepared for
            the digital world.{" "}
          </h2>
          
        </div>

        {/* Additional Text Section Below Cards */}
        
      </div>
    </>
  );
};

export default Course;
