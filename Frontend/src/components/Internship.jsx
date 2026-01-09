import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const InternshipOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const form = useRef(); // Form reference

  // EmailJS configuration
  const EMAIL_JS_SERVICE_ID = "service_5r25imp";
  const EMAIL_JS_TEMPLATE_ID = "template_xuov1bu";
  const EMAIL_JS_PUBLIC_KEY = "jU-1FIjK-BxDlu-KT";

  const internships = [
    {
      title: "Java Full Stack",
      description:
        "Gain practical experience by building scalable full-stack applications with Java technologies.",
      buttonColor: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700",
      certification: "Full Stack Development with Java",
    },
    {
      title: "Python Full Stack",
      description:
        "Master Python full-stack development with real-world projects and industry-relevant skills.",
      buttonColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      certification: "Full Stack Development with Python",
    },
    {
      title: "MERN Stack",
      description:
        "Become a MERN Stack expert by building cutting-edge, real-time web applications.",
      buttonColor: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700",
      certification: "MERN Stack Web Development",
    },
  ];

  // Function to handle email sending
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        form.current,
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-screen-xl mx-auto py-3 px-4">
      {/* Header Section */}
      <h4 className="text-center text-2xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Internship Opportunities
      </h4>
      <p className="text-center text-sm md:text-lg mb-5 md:mb-8 text-black">
        Boost Your Career with Internships at DIGITALORBIT SOLUTIONS LLP – Top IT Courses Institute. 
        Join our hands-on internship programs and kickstart your career with real-world experience in the latest technologies. We offer certification and job-ready skills.
      </p>

      {/* Internship Cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-xl shadow-xl max-w-sm w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            <h3 className="text-3xl font-semibold text-white mb-6">
              {internship.title}
            </h3>
            <p className="text-white mb-6 text-lg">{internship.description}</p>
            <div className="flex justify-center gap-6 mb-6">
              <button
                className={`${internship.buttonColor} text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${internship.hoverColor}`}
                onClick={() => setIsModalOpen(true)}
              >
                Apply Now
              </button>
              <Link to="/course">
                <button
                  className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Learn More
                </button>
              </Link>
            </div>
            <p className="text-sm text-white">
              Certification: {internship.certification}
            </p>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div className="text-center mt-10">
        <h3 className="text-xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 mb-2">
          Certification Upon Completion
        </h3>
        <p className="text-sm md:text-lg text-black mb-2 md:mb-4">
          Successful completion of the internship ensures you receive the following certifications:
        </p>
        <ul className="list-disc text-left max-w-lg mx-auto mb-8 text-black">
          <li className="text-sm md:text-lg ml-8">1. Internship Completion Certificate</li>
          <li className="text-sm md:text-lg ml-8">
            2. Field-Specific Certificate (Java Full Stack, Python Full Stack, MERN Stack)
          </li>
          <li className="text-sm md:text-lg ml-8">3. Real-World Project Completion Certificate</li>
        </ul>
        <div className="flex flex-wrap gap-4 items-center">
          <button
            className="bg-green-600 text-sm md:text-lg text-white ml-20 md:ml-72 px-3 py-1 md:py-3 md:px-4 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now for Internships
          </button>
          <Link to="/internship">
            <button
              className="bg-green-600 text-sm md:text-lg text-white  ml-20 md:ml-0 px-3 py-1 md:py-3 md:px-8 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore More Opportunities
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Internship Application
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              {["name", "email", "phone", "resumeLink"].map((field, index) => (
                <div key={index} className="mb-4">
                  <label htmlFor={field} className="block text-lg capitalize">
                    {field === "resumeLink"
                      ? "Resume Link (Google Drive, Dropbox, etc.)"
                      : field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                  {field === "resumeLink" && (
                    <small className="text-gray-500">
                      Please upload your resume and provide the shareable link.
                    </small>
                  )}
                </div>
              ))}
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipOpportunities;
