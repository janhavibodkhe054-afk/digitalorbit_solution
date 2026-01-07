import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const AboutHome = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const toggleForm = useCallback(() => {
    setShowForm((prev) => !prev);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5r25imp",
        "template_kd8ybev",
        formRef.current,
        { publicKey: "jU-1FIjK-BxDlu-KT" }
      )
      .then(() => setShowForm(false))
      .catch(console.error);
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-16 pt-16">
      
      {/* Heading */}
      <h1 className="
        text-center font-extrabold
        text-3xl sm:text-4xl md:text-5xl
        bg-gradient-to-r from-blue-600 to-orange-500
        text-transparent bg-clip-text
        mb-6
      ">
        DIGITALORBIT SOLUTIONS LLP
      </h1>

      {/* Description */}
      <p className="
        text-center text-sm sm:text-base md:text-lg
        text-gray-600
        max-w-4xl mx-auto
        leading-relaxed
      ">
        Empowering careers through technology and innovation. DIGITALORBIT
        SOLUTIONS LLP is a professional IT Training and Development Institute
        based in Sonai, Ahmednagar. We deliver industry-oriented courses,
        practical learning, and real-world projects to help students and
        professionals succeed in today’s digital industry.
      </p>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={toggleForm}
          className="
            bg-blue-600 text-white
            px-10 py-3 rounded-xl font-semibold
            shadow-md transition-all duration-300
            hover:bg-orange-500 hover:shadow-orange-400/40
            hover:-translate-y-1
          "
        >
          Join Us Now
        </button>

        <Link to="/about">
          <button
            className="
              border-2 border-blue-600 text-blue-600
              px-10 py-3 rounded-xl font-semibold
              transition-all duration-300
              hover:bg-orange-500 hover:text-white hover:border-orange-500
              hover:-translate-y-1
            "
          >
            Read More
          </button>
        </Link>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="
          fixed inset-0 z-50 flex items-center justify-center
          bg-black/70 backdrop-blur-sm px-4
        ">
          <div className="
            bg-white w-full max-w-lg
            p-6 sm:p-8
            rounded-2xl shadow-2xl
            relative animate-fadeIn
          ">
            
            {/* Close Button */}
            <button
              onClick={toggleForm}
              aria-label="Close"
              className="
                absolute top-3 right-4
                text-gray-400 text-3xl
                hover:text-red-500 transition
              "
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="
              text-xl sm:text-2xl font-bold
              text-center text-gray-800
              mb-6
            ">
              Get in Touch
            </h2>

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              
              {[
                { label: "Name", name: "from_name", type: "text" },
                { label: "Email", name: "from_email", type: "email" },
                { label: "Phone Number", name: "from_phone", type: "text" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter your ${field.label}`}
                    required
                    className="
                      w-full px-4 py-2
                      border rounded-lg
                      focus:ring-2 focus:ring-orange-500
                      outline-none transition
                    "
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                  className="
                    w-full px-4 py-2
                    border rounded-lg
                    focus:ring-2 focus:ring-orange-500
                    outline-none transition
                  "
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="
                    bg-blue-600 text-white
                    px-12 py-3 rounded-xl font-semibold
                    transition-all duration-300
                    hover:bg-orange-500 hover:shadow-lg
                    hover:-translate-y-1
                  "
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutHome;
