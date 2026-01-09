import React, { useRef } from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r25imp",
        "template_kd8ybev",
        form.current,
        "jU-1FIjK-BxDlu-KT"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending message:", error.text);
          alert("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | DigitalOrbit Solutions - IT Training Institute
        </title>
        <meta
          name="description"
          content="Get in touch with DigitalOrbit Solutions LLP, top IT training institute in Pune. Inquire about our IT courses, internships, placement support, and more."
        />
      </Helmet>

      <Navbar />

      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen px-4 md:px-10 py-28 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-4xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Contact DigitalOrbit Solutions
          </h1>
          <p className="text-gray-700 text-sm md:text-xl">
            Have questions about our IT courses, internships, or placements?
            Fill out the form below or reach us directly. Our team will get back
            to you promptly.
          </p>
        </div>

        {/* Main Contact Container */}
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
          {/* Contact Info Card */}
          <div className="lg:w-1/2 bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-between hover:shadow-2xl transition duration-500">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Reach Out
              </h2>
              <p className="text-gray-700 mb-6">
                You can contact us via the form, phone, or social media. We’d
                love to hear from you!
              </p>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-lg">+91 8669747823</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600 text-lg">
                  DIGITALORBIT SOLUTIONS LLP
                  <br />
                  Sonai - Rahuri Rd, Prashantnagar, Sonai, Maharashtra 414105
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Follow Us</h3>
                <div className="flex space-x-4 mt-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61569193050354"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-600 transition duration-300"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/arraylogic_academy/?igsh=cXNqcWp5b25mcXpr"
                    target="_blank"
                    className="text-pink-500 hover:text-pink-700 transition duration-300"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/arraylogic-academy/about/?viewAsMember=true"
                    target="_blank"
                    className="text-blue-700 hover:text-blue-900 transition duration-300"
                  >
                    <i className="fab fa-linkedin-in text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition duration-500">
            <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
              Send a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Your Phone"
                  pattern="[0-9]{10}"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transform transition duration-300 hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full max-w-6xl mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-300">
          <iframe
            title="DigitalOrbit Solutions LLP Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4684411385906!2d74.81071659999999!3d19.392155900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc99179a958eab%3A0x99de9286d6b91ce1!2sDIGITALORBIT%20SOLUTIONS%20LLP!5e0!3m2!1sen!2sin!4v1767695980749!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactForm;
