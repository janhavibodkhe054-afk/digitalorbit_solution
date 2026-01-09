import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import React from "react";

function PrivacyPolicy() {
  return (
    <><Helmet>
    <title>Privacy Policy | DIGITALORBIT SOLUTIONS LLP - IT Training Institute in Pune</title>
    <meta name="description" content="Read the privacy policy of ArrayLogic Academy, an IT training institute in Pune. Learn how we collect, use, and protect your personal data while you access our website and services, including courses, internships, and career development programs." />
    <meta name="keywords" content="Privacy Policy, ArrayLogic Academy, IT training privacy policy, personal data protection, website privacy, user data protection, data collection practices, privacy policy for IT training institute, privacy policy Pune, user information security, student data privacy, online training data protection, data usage, personal information security" />
  </Helmet>
  
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="mt-12 md:mt-20 mx-auto max-w-4xl px-8 py-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl text-center font-bold text-gray-800 mb-6 border-b-2 border-yellow-400 pb-2 pt-0">
            Privacy Policy
          </h1>
          <p className="text-gray-700 leading-relaxed">
            <strong>ArrayLogic Softwares Pvt. Ltd.</strong> (collectively
            “ArrayLogic Academy.” or “We” or “Us”) has generated this privacy
            statement to display our firm commitment towards privacy.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Purpose of our Privacy Statement:
          </h2>
          <p className="text-gray-700 mt-2">
            Our privacy statement discloses the privacy practices for ArrayLogic
            Academy, and applies solely to the information collected by this
            website. It aims to notify you of the following:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>What personally identifiable information is collected.</li>
            <li>How it is used and with whom it may be shared.</li>
            <li>Choices available to you regarding the use of your data.</li>
            <li>Security procedures in place to protect your data.</li>
            <li>How to correct inaccuracies in the information.</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Information Collected and Its Uses:
          </h2>
          <p className="text-gray-700 mt-2">
            To the extent permissible under applicable law, we collect
            information about you or any other party whose details you provide
            to us. This may occur through various means, such as online forms,
            surveys, offline contacts, and more.
          </p>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>
              <strong>Log File Information:</strong> Our servers
              automatically record certain log file information like web
              requests, IP addresses, browser types, and interaction statistics.
            </li>
            <li>
              <strong>Cookies:</strong> We use “cookies” to enhance your
              experience on our site.
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Your Security is Important to Us:
          </h2>
          <p className="text-gray-700 mt-2">
            We prioritize your security by taking appropriate technical and
            organizational measures. However, no data transmission over the
            Internet can be guaranteed to be 100% secure.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Marketing Strategies:
          </h2>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>
              <strong>Google AdWords:</strong> Tracks visitors and displays
              ads on other websites.
            </li>
            <li>
              <strong>Facebook:</strong> Tracks visitors and displays ads
              when they visit Facebook.
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            How to Opt Out of Remarketing Campaigns:
          </h2>
          <p className="text-gray-700 mt-2">
            Use the “Ads Settings” area in your Google account to control your
            data and privacy settings.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Third-Party Involvement:
          </h2>
          <p className="text-gray-700 mt-2">
            We may share necessary information with third-party partners for
            specific services, and they are bound to use it only for those
            purposes.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Changes to This Privacy Statement:
          </h2>
          <p className="text-gray-700 mt-2">
            We may update this Privacy Policy periodically. Please review this
            page for any changes.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Contact Us:
          </h2>
          <p className="text-gray-700 mt-2">
            If you have any queries or suggestions, contact us via email at{" "}
            <a
              href="mailto:info@arraylogicacademy.com"
              className="text-blue-500 underline"
            >
              info@arraylogicacademy.com
            </a>{" "}
            or via telephone.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
