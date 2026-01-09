import React, { useRef } from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Project() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5r25imp", // Your EmailJS service ID
        "template_kd8ybev", // Your EmailJS template ID
        form.current,
        "jU-1FIjK-BxDlu-KT" // Your EmailJS public key
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
      {/* SEO */}
      <Helmet>
        <title>Contact Us | Hire a Developer | DIGITALORBIT SOLUTIONS LLP</title>
        <meta
          name="description"
          content="Looking to hire skilled developers? Fill out the form to connect with DIGITALORBIT SOLUTIONS LLP's talented professionals. Start your project today!"
        />
        <meta
          name="keywords"
          content="hire developers, contact DIGITALORBIT SOLUTIONS LLP, skilled IT professionals, project developers, software developers, hire developers in Pune"
        />
      </Helmet>

      {/* Form */}
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 relative">
          {/* Close Button */}
          <Link
            to="/"
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110"
            title="Close"
          >
            ✕
          </Link>

          {/* Hiring Information */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Looking to Hire a Developer?
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              If you’re looking to hire skilled developers for your project, fill out the form below, and we’ll get back to you soon.
            </p>
          </div>

          {/* Contact Form */}
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
            Contact Us
          </h2>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-6">
            We’d love to hear from you! Fill out the form below and we’ll get back
            to you soon.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="from_phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Project;
