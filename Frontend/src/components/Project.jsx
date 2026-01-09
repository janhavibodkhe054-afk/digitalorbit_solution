import React, { useRef } from "react";


import Footer from "./Footer";
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
          form.current.reset(); // Reset form after successful submission
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
  <title>Project Development for College Students & Clients | DIGITALORBIT SOLUTIONS LLP - IT Training in Pune</title>
  <meta name="description" content="ArrayLogic Academy in Pune offers expert Project Development services for both college students and clients. Our IT training programs in Java, MERN, Python, Data Science, and AI enable students to work on real-world projects, while clients can collaborate with us for professional software development solutions." />
  <meta name="keywords" content="Project development for college students, client project development Pune, real-world IT projects, Java Full Stack projects, MERN Stack software development, Python project development, Data Science projects, AI development for clients, software development services Pune, hands-on IT training, college student project collaboration, client IT solutions, IT industry experience, project-based learning for college students" />
</Helmet>

      {/* Image Section */}
      <div className="mt-12">
        <img
          src="/ArrayHome3.webp"
          alt="Image Coming Soon"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-6 lg:px-16 lg:py-3">
        <p className="text-3xl text-center mt-1 font-bold text-orange-500">
          Need Project Development? Let's Bring Your Ideas to Life!
        </p>
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide space-y-4 animate__animated animate__fadeIn animate__delay-2s mt-6">
          Are you a client looking to build custom software solutions for your
          business or a college student working on a project for your academic
          requirements? Look no further! We at DIGITALORBIT SOLUTIONS LLP specialize in
          transforming ideas into powerful digital solutions. Whether you need a
          scalable business application, an innovative web solution, or a
          cutting-edge mobile app, we’re here to help.
          <br />
          <br />
          At DIGITALORBIT SOLUTIONS LLP, we understand that different projects require
          different technologies. Whether you’re a business client seeking the
          most efficient solution for your company or a college student working
          on your next great project, we have the expertise in all programming
          languages to bring your ideas to life.
        </p>

        <p className="text-2xl font-bold text-green-400 mt-6">For College Students:</p>
        <p>
          Are you working on a college project and need technical guidance or
          development support? We’re here to make your academic dreams come
          true! Our team of experienced developers can assist you in bringing
          your project ideas to life, whether it’s a web application, a software
          tool, or a mobile app. With real-world expertise and hands-on support,
          we’ll help you build a project that stands out and makes a lasting
          impression.
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg">
          <li>Innovative Ideas: Turn your academic concepts into a working project.</li>
          <li>Project Guidance: From planning to execution, we’re with you every step.</li>
          <li>Timely Delivery: We understand the importance of deadlines in your academic journey.</li>
          <li>Learning Experience: Work with professionals who’ll guide you in the development process.</li>
        </ul>

        <p className="text-2xl font-bold text-green-400 mt-6">For Clients:</p>
        <p>
          In today’s fast-paced world, having the right software can make all the
          difference. At DIGITALORBIT SOLUTIONS LLP, we understand the unique needs of
          businesses, and we offer end-to-end development services tailored to
          your goals. From requirement gathering to deployment and support, we
          ensure that your project is built to meet your business objectives and
          deliver a competitive edge.
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg">
          <li>Custom Solutions: Tailored to your business needs.</li>
          <li>Scalability: Built to grow with your company.</li>
          <li>Expert Team: Skilled professionals handling your project with precision.</li>
          <li>On-time Delivery: We respect deadlines, ensuring timely delivery without compromising on quality.</li>
        </ul>

        <br />
        <p className="text-lg mt-6">
          Join us and transform your potential into expertise while gaining the
          confidence to conquer challenges in the IT industry and beyond!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-5">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center">
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Just Drop Your Message
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We’d love to hear from you! Drop us a message and we’ll get back to you.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Enter your full name"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Enter your email address"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="from_phone"
                placeholder="Enter your phone number"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="mt-4 text-green-600 text-center">Your message was sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Project;
