import Footer from "./Footer";
import { Helmet } from "react-helmet";
import React from "react";

const Career = () => {
  // Job openings array
  const jobOpenings = [
    {
      title: "Software Engineer",
      company: "Accenture",
      location: "Remote",
      link: "https://www.accenture.com/us-en/careers/jobdetails?id=XYZ1234",
    },
    {
      title: "Web Developer",
      company: "Redington",
      location: "Bengaluru, India",
      link: "https://www.redingtonindia.com/career/jobdetails?id=XYZ5678",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
    {
      title: "Data Scientist",
      company: "Tata Consultancy Services",
      location: "Mumbai, India",
      link: "https://www.tcs.com/careers/jobdetails?id=XYZ9012",
    },
  ];

  const firstTenJobs = jobOpenings.slice(0, 10);
  const remainingJobs = jobOpenings.slice(10);

  return (
    <>
          <Helmet>
        <title>Careers at DIGITALORBIT SOLUTIONS LLP | Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at DIGITALORBIT SOLUTIONS LLP. Join our team and contribute to delivering industry-leading IT training programs in Pune. Apply now!"
        />
        <meta
          name="keywords"
          content="careers at DIGITALORBIT SOLUTIONS LLP, job openings Pune, IT training institute careers, career opportunities in Pune, teaching jobs Pune, IT instructor positions, ArrayLogic job vacancies, internship opportunities Pune, tech jobs Pune"
        />
        <meta property="og:title" content="Careers at DIGITALORBIT SOLUTIONS LLP | Join Our Team" />
        <meta
          property="og:description"
          content="DIGITALORBIT SOLUTIONS LLP is hiring! Explore career opportunities in IT training, administration, and tech support. Be a part of Pune's leading IT training institute."
        />
        <meta property="og:image" content="https://www.arraylogicacademy.in/assets/career-og-image.jpg" />
        <meta property="og:url" content="https://www.arraylogicacademy.in/career" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at ArrayLogic Academy | Join Our Team" />
        <meta
          name="twitter:description"
          content="Looking for a career in IT training? Join DIGITALORBIT SOLUTIONS LLP in Pune. We offer opportunities for IT trainers, support staff, and more. Apply now!"
        />
        <meta name="twitter:image" content="https://www.arraylogicacademy.in/assets/career-twitter-image.jpg" />
        <meta name="author" content="ArrayLogic Academy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arraylogicacademy.in/career" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>


      <div className="bg-gray-50 py-16 px-5">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-8 mt-9">
            Explore Top Job Opportunities with Leading Tech Companies
          </h1>
          <h1 className="text-lg text-black mb-12 text-left">
            At <b className="text-orange-600">DIGITALORBIT SOLUTIONS </b>, we are committed to empowering individuals to
            grow both professionally and personally. As a dynamic organization,
            we continuously evolve to provide the best training and development
            programs. In addition to equipping our students with top-tier
            skills, we also understand the importance of supporting their career
            journeys.<br></br><br /> Our carefully compiled resources are designed to aid your
            Career Development and simplify your Job Search process. By clicking
            the links below, you can access the latest job openings and career
            pages from renowned companies, giving you the chance to land your
            dream role. Start exploring today and take the next big step in your
            career journey with ArrayLogic Academy!At ArrayLogic Academy, we are
            committed to empowering individuals to grow both professionally and
            personally. As a dynamic organization, we continuously evolve to
            provide the best training and development programs. In addition to
            equipping our students with top-tier skills, we also understand the
            importance of supporting their career journeys. Our carefully
            compiled resources are designed to aid your Career Development and
            simplify your Job Search process. By clicking the links below, you
            can access the latest job openings and career pages from renowned
            companies, giving you the chance to land your dream role. Start
            exploring today and take the next big step in your career journey
            with DIGITALORBIT SOLUTIONS!
          </h1>
          <h1 className="mb-10 text-4xl">
          Ready to Land Your Dream Job? Explore Job Opportunities and Build a Standout Resume! –{" "}
            <b className="text-green-500 font-bold">
              <a href="/contact">Contact Us today!</a>
            </b>
          </h1>

          {/* Display the first 10 job cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {firstTenJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* Add the "Do you want any software course?" section */}
          <div className="mt-12 p-8 bg-purple-100 rounded-lg">
            <h2 className="text-2xl font-semibold text-rose-500 mb-4">
            Looking to Upgrade Your Skills? Explore Our Software Courses and Job Opportunities!
            </h2>
            <h2 className="text-lg text-black mb-6">
            Whether you're aiming for a Career Opportunities  in software development or looking to level up your existing skills, our industry-focused IT courses can help you achieve your goals. Take the first step toward a successful career in tech Companies.
            </h2>
            <a
              href="/course"
              className="text-white bg-black hover:bg-purple-700 py-3 px-6 rounded-lg transition duration-300 block md:inline-block"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="text-white bg-black hover:bg-purple-700 py-3 px-6 md:ml-3 mt-4 md:mt-0 rounded-lg transition duration-300 block md:inline-block"
            >
              If Any Query Contact Us
            </a>
          </div>

          {/* Display the remaining job cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
            {remainingJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-lg text-black mb-6">
        To help you achieve your goals, we've curated a comprehensive list of Career Opportunities from leading Tech Companies and education sectors. Whether you're searching for Job Opportunities, exploring Career Advice, or seeking Internship Opportunities, we've got you covered.
        We understand that job descriptions can sometimes leave you with more questions than answers. If you're interested in learning more about any of the job openings listed or need further details about a specific role, we’re here to help! Whether it's about job responsibilities, qualifications, company culture, or the application process, we're ready to provide you with the insights you need to make an informed decision.
        </h2>
        <p className="text-3xl mb-4">Have a question?</p>
        <p className="mb-4">
          Reach out to us for detailed information on any job listing and take
          the next step in your career journey with confidence!
        </p>
        <div className="flex sm:flex-row flex-col sm:items-center justify-center gap-4">
          {/* IT Courses Button */}
          <div className="flex sm:flex-row flex-col sm:items-center justify-center gap-4">
            {/* IT Courses Button */}
            <a
              href="/course"
              className="bg-black text-white py-2 px-4 mb-5 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full"
            >
              IT Courses
            </a>

            {/* Contact Us Button */}
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-500 mb-5 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full"
            >
              Contact Us for More Details
            </a>

            {/* Resume Building Button */}
            <a
              href="/contact"
              className="bg-black text-white py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 mb-5 hover:from-blue-500 hover:to-purple-600 focus:outline-none sm:w-auto w-full"
            >
              Resume Building
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
