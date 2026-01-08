import { Helmet } from "react-helmet";
import React from "react";

function WhyUs() {
  return (
    <>
  

      <div className="mt-16">
      <img src="../../public/whyimg.webp" alt="ArrayLogic Academy" className="w-full h-auto" />

      </div>
      <section className="bg-white py-4 px-9 ">
        <div className="container mx-auto text-center">
          <h1 className= " text-xl md:text-4xl font-bold text-black mb-3">
          Why to Choose DIGITALORBIT SOLUTIONS IT Courses Institute in Pune, India
          </h1>
          <h3 className="text-lg text-black mb-12">
          Your Path to Expert IT Skills, Real-World Experience, and Career Excellence

          </h3>

          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-orange-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-orange-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Expert IT Trainers:
              </h2>
              <h2 className="text-gray-800 text-center">
              Unlock your potential with expert IT Trainers! Learn from seasoned professionals and master in-demand skills to stay ahead in the fast-paced tech industry.              </h2>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-teal-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-teal-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-book-open"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Comprehensive Curriculum
              </h2>
              <h2 className="text-gray-800 text-center">
              Dive into our Comprehensive Curriculum, covering in-demand tech skills like Full Stack, AI, Cloud Computing, and more, to excel in today’s evolving tech industry.
              </h2>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-indigo-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-indigo-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Hands-On Learning
              </h2>
              <h2 className="text-gray-800 text-center">
              Unlock the power of Hands-On Learning with real-world projects that build your portfolio. Gain in-demand skills and practical experience to thrive in the tech industry.              </h2>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center bg-yellow-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-yellow-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-users"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                24/7 Support
              </h2>
              <h2 className="text-gray-800 text-center">
              Need help with concepts or career advice? Our 24/7 Support team is always here to provide expert guidance, ensuring your success and helping you excel in your tech journey.              </h2>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center bg-pink-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-pink-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-network-wired"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Industry Connections
              </h2>
              <h2 className="text-gray-800 text-center">
              Tap into our vast Industry Connections with top recruiters and companies seeking skilled professionals like you. Unlock exciting career opportunities and expand your network for success.              </h2>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center bg-purple-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-purple-400">
              <div className="mb-4 text-4xl text-white">
                <i className="fas fa-clock"></i>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Flexible Learning
              </h2>
              <h2 className="text-gray-800 text-center">
              Learn at your own pace with Flexible Learning options, offering both online and offline classes that seamlessly fit into your busy schedule, ensuring you gain essential career skills.              </h2>
            </div>
            {/* Card 7 */}
<div className="flex flex-col items-center bg-green-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-green-400">
  <div className="mb-4 text-4xl text-white">
    <i className="fas fa-briefcase"></i> {/* New icon */}
  </div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Internship & Project Guidance:
  </h2>
  <h2 className="text-gray-800 text-center">
    Gain personalized feedback on your projects, refine your work, and enhance your skills with expert internship guidance. Strengthen your understanding of industry IT practices.
  </h2>
</div>

{/* Card 8 */}
<div className="flex flex-col items-center bg-red-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-red-400">
  <div className="mb-4 text-4xl text-white">
    <i className="fas fa-lightbulb"></i> {/* New icon */}
  </div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    Project Based Learning:
  </h2>
  <h2 className="text-gray-800 text-center">
    Our Project-Based Learning approach tackles real-world challenges, fostering critical thinking and problem-solving skills. Students research, analyze, and create solutions for IT careers.
  </h2>
</div>

{/* Card 9 */}
<div className="flex flex-col items-center bg-blue-300 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:bg-blue-400">
  <div className="mb-4 text-4xl text-white">
    <i className="fas fa-check-circle"></i> {/* New icon */}
  </div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    100% Placement Assistance:
  </h2>
  <h2 className="text-gray-800 text-center">
    Our 100% Placement Assistance ensures a smooth transition into the workforce. A dedicated team supports students with resume building, interview preparation, and unlimited employment opportunities until they are successfully placed.
  </h2>
</div>

          </div>

          <p className="mt-12 text-2xl text-gray-800 font-semibold">
            Join ArrayLogic Academy today, and take the first step toward transforming your future in technology!
          </p>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
