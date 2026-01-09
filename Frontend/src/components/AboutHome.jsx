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
        bg-blue-900
        text-transparent bg-clip-text
        mb-6
        drop-shadow-sm
      ">
        DIGITALORBIT SOLUTIONS
      </h1>

      {/* Description */}
      <p className="
        text-center text-sm sm:text-base md:text-lg
        text-gray-700
        max-w-4xl mx-auto
        leading-relaxed
        drop-shadow-sm
      ">
        Empowering careers through technology and innovation. DIGITALORBIT
        SOLUTIONS is a professional IT Training and Development Institute
        based in Sonai, Ahmednagar. We deliver industry-oriented courses,
        practical learning, and real-world projects to help students and
        professionals succeed in today’s digital industry.
      </p>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
        <button
          onClick={toggleForm}
          className="
            w-full sm:w-auto min-w-[200px]
            bg-blue-900
            text-white px-10 py-3 rounded-2xl font-semibold
            shadow-lg shadow-[#0f1f3d]/30
            transition-all duration-300 transform hover:-translate-y-1
            hover:shadow-xl hover:shadow-[#1a2a4f]/50
          "
        >
          Join Us Now
        </button>

        <Link to="/about" className="w-full sm:w-auto">
          <button
            className="
              w-full sm:w-auto min-w-[200px]
              border-2 border-blue-900
              px-10 py-3 rounded-2xl font-semibold
              transition-all duration-300 transform hover:-translate-y-1
              hover:bg-blue-900
              hover:text-white hover:border-transparent
              shadow-sm hover:shadow-lg
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
          bg-black/60 backdrop-blur-sm px-4 animate-fadeIn
        ">
          <div className="
            bg-white/95 backdrop-blur-md w-full max-w-lg
            p-6 sm:p-8
            rounded-3xl shadow-2xl border border-white/20
            relative animate-slideUp
          ">
            {/* Close Button */}
            <button
              onClick={toggleForm}
              aria-label="Close"
              className="
                absolute top-4 right-5
                text-gray-500 text-3xl
                hover:text-red-500 transition
              "
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="
              text-2xl sm:text-3xl font-bold
              text-center text-blue-900
              mb-6 drop-shadow-sm
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
  w-full px-4 py-3
  border border-gray-300 rounded-xl
  shadow-inner focus:ring-2 focus:ring-[#0f1f3d]
  outline-none transition-all duration-300
  hover:shadow-md
  text-white
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
                    w-full px-4 py-3
                    border border-gray-300 rounded-xl
                    shadow-inner focus:ring-2 focus:ring-[#0f1f3d]
                    outline-none transition-all duration-300
                    hover:shadow-md
                  "
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="
                    bg-blue-900
                    text-white px-12 py-3 rounded-2xl font-semibold
                    transition-all duration-300 transform hover:-translate-y-1
                    hover:shadow-lg hover:shadow-[#1a2a4f]/40
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
