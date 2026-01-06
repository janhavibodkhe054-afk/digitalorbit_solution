import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const AboutHome = () => {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();

  const handleFormToggle = useCallback(() => {
    setShowForm((prev) => !prev);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailjs || !form.current) return;

    emailjs
      .sendForm("service_5r25imp", "template_kd8ybev", form.current, {
        publicKey: "jU-1FIjK-BxDlu-KT",
      })
      .then(() => setShowForm(false))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-16 px-4 py-14">
      
      {/* Heading */}
      <h1 className="text-center font-extrabold text-3xl md:text-5xl 
                     bg-gradient-to-r from-blue-600 to-orange-500 
                     text-transparent bg-clip-text mb-5">
        DIGITALORBIT SOLUTIONS LLP
      </h1>

      {/* Description */}
      <p className="text-center text-sm md:text-lg text-gray-600 
                    max-w-4xl mx-auto leading-relaxed">
        Empowering Careers Through Technology & Innovation. DIGITALORBIT
        SOLUTIONS LLP is a leading IT Training and Development company based in
        Sonai, Ahmednagar. We deliver industry-relevant education, practical
        training, and technology-driven solutions to help students and
        professionals succeed in the digital era.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
        <button
          onClick={handleFormToggle}
          className="bg-blue-600 text-white px-10 py-3 rounded-xl 
                     font-semibold shadow-lg transition-all duration-300
                     hover:bg-orange-500 hover:shadow-orange-300/40 
                     hover:-translate-y-1"
        >
          Join Us Now
        </button>

        <Link to="/about">
          <button
            className="border-2 border-blue-600 text-blue-600 px-10 py-3 
                       rounded-xl font-semibold shadow-sm transition-all duration-300
                       hover:bg-orange-500 hover:text-white hover:border-orange-500 
                       hover:-translate-y-1"
          >
            Read More
          </button>
        </Link>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center 
                        bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-lg p-6 md:p-8 
                          rounded-2xl shadow-2xl relative animate-fadeIn">
            
            <button
              onClick={handleFormToggle}
              className="absolute top-3 right-4 text-gray-400 
                         hover:text-red-500 text-3xl transition"
            >
              &times;
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-center 
                           text-gray-800 mb-6">
              Get in Touch
            </h2>

            <form ref={form} onSubmit={sendEmail}>
              {["Name", "Email", "Phone Number", "Message"].map((field, idx) => (
                <div className="mb-4" key={idx}>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    {field}
                  </label>

                  {field === "Message" ? (
                    <textarea
                      name="message"
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-2 border rounded-lg
                                 focus:ring-2 focus:ring-orange-500
                                 transition"
                    ></textarea>
                  ) : (
                    <input
                      name={`from_${field.toLowerCase().replace(" ", "_")}`}
                      type={field === "Email" ? "email" : "text"}
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-2 border rounded-lg
                                 focus:ring-2 focus:ring-orange-500
                                 transition"
                    />
                  )}
                </div>
              ))}

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-12 py-3 
                             rounded-xl font-semibold transition-all duration-300
                             hover:bg-orange-500 hover:shadow-lg
                             hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHome;