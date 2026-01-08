import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Internships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r25imp",
        "template_xuov1bu",
        form.current,
        "jU-1FIjK-BxDlu-KT"
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          form.current.reset();
          setIsModalOpen(false);
        },
        () => alert("Something went wrong. Please try again.")
      );
  };

  const internships = [
    {
      title: "Java Full Stack Development",
      description:
        "Build scalable enterprise applications using Java, Spring Boot, Hibernate, and modern frontend frameworks.",
    },
    {
      title: "Python Full Stack Development",
      description:
        "Develop dynamic web applications using Python, Django, REST APIs, and frontend technologies.",
    },
    {
      title: "MERN Stack Development",
      description:
        "Master MongoDB, Express, React, and Node.js to create modern full-stack web applications.",
    },
    {
      title: "MEAN Stack Development",
      description:
        "Learn Angular, Node.js, Express, and MongoDB to build high-performance web solutions.",
    },
    {
      title: "Data Science",
      description:
        "Work on data analysis, visualization, and predictive modeling using Python and industry tools.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Gain hands-on experience with ML algorithms, automation, and real-world AI applications.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto pt-28 md:pt-32 pb-16 px-4">
      
      {/* Header */}
      <h1 className="text-center text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">
        IT Internship Programs at DIGITALORBIT SOLUTIONS 
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
        Industry-driven IT internships with real-world projects, expert
        mentorship, and career-focused learning.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {internships.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-md
                       transition-all duration-300 hover:-translate-y-2
                       hover:shadow-2xl hover:border-orange-500"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-3 
                           group-hover:text-orange-600 transition-colors">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {item.description}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                         transition-all duration-300
                         hover:bg-orange-500 hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 p-10 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Why Choose Our IT Internships?
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base">
          <li>✔ Live industry projects</li>
          <li>✔ Mentorship by experienced professionals</li>
          <li>✔ Internship & project completion certificates</li>
          <li>✔ Career guidance & interview preparation</li>
          <li>✔ Portfolio & skill development support</li>
          <li>✔ Industry-aligned learning outcomes</li>
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">
              Internship Application
            </h3>

            <form ref={form} onSubmit={sendEmail}>
              {["name", "email", "phone"].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    className="w-full px-4 py-2 border rounded-md
                               focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Resume Link
                </label>
                <input
                  type="url"
                  name="resume"
                  required
                  placeholder="Google Drive / Dropbox link"
                  className="w-full px-4 py-2 border rounded-md
                             focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg
                             hover:bg-orange-600 transition-all"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400"
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

export default Internships;