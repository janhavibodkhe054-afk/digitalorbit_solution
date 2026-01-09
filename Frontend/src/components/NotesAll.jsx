import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';

function NotesAll() {
  return (
    <>
    <Helmet>
  <title>Notes | DIGITALORBIT SOLUTIONS LLP - IT Learning Resources and Study Materials</title>
  <meta name="description" content="Access study notes, learning resources, and materials for various IT courses at ArrayLogic Academy in Pune. Our notes cover topics in Java Full Stack, MERN Stack, Python, Data Science, Machine Learning, and more to help you excel in your IT career and exams." />
  <meta name="keywords" content="IT notes Pune, study materials ArrayLogic Academy, Java Full Stack notes, MERN Stack notes, Python notes, Data Science study resources, Machine Learning notes, AI learning materials, IT learning resources, coding notes Pune, exam preparation notes, software development study materials, career development notes, IT certification notes" />
</Helmet>

      <Navbar />
      <div className="notes-container min-h-screen bg-gray-50 mt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 pt-16">
            Programming Languages Notes
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Note Button Link */}
            <Link to="/html-notes">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                HTML Notes
              </button>
            </Link>
            <Link to="/css-notes">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                CSS Notes
              </button>
            </Link>
            <Link to="/javascript-notes">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                JavaScript Notes
              </button>
            </Link>
            <Link to="/java-notes">
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Java Notes
              </button>
            </Link>
            <Link to="/python-notes">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Python Notes
              </button>
            </Link>
            <Link to="/react-notes">
              <button className="bg-gradient-to-r from-teal-400 to-teal-600 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                React.js Notes
              </button>
            </Link>
            <Link to="/node-notes">
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Node.js Notes
              </button>
            </Link>
            <Link to="/c-notes">
              <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                C Notes
              </button>
            </Link>
            <Link to="/express-notes">
              <button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Express.js Notes
              </button>
            </Link>
            <Link to="/cplusplus-notes">
              <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                C++ Notes
              </button>
            </Link>
            <Link to="/mysql-notes">
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                MySQL Notes
              </button>
            </Link>
            <Link to="/mongodb-notes">
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                MongoDB Notes
              </button>
            </Link>
            <Link to="/git-notes">
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Git Notes
              </button>
            </Link>
            <Link to="/github-notes">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                GitHub Notes
              </button>
            </Link>
            <Link to="/angular-notes">
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Angular Notes
              </button>
            </Link>
            <Link to="/digital-marketing-notes">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Digital Marketing Notes
              </button>
            </Link>
            <Link to="/cloud-computing-notes">
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-lg font-semibold w-full py-4 rounded-lg shadow-xl transform hover:scale-105 hover:bg-gradient-to-l transition duration-300 ease-in-out">
                Cloud Computing Notes
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotesAll;
