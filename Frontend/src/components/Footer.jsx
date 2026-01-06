import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/course", label: "Courses" },
        { to: "/why", label: "Why us" },
        { to: "/internship", label: "Internships" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Courses",
      links: [
        { to: "/course#java", label: "Java Full Stack" },
        { to: "/course#python", label: "Python Full Stack" },
        { to: "/course#data-science", label: "Data Science" },
        { to: "/course#mern-mean", label: "MERN / MEAN" },
        { to: "/course#ai", label: "Artificial Intelligence" },
        { to: "/course#ml", label: "Machine Learning" },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          to: "https://wa.me/919172725291",
          label: "WhatsApp",
          icon: <FaWhatsapp />,
        },
        {
          to: "https://www.facebook.com",
          label: "Facebook",
          icon: <FaFacebookF />,
        },
        {
          to: "https://www.instagram.com",
          label: "Instagram",
          icon: <FaInstagram />,
        },
        {
          to: "tel:09172725291",
          label: "Call Us",
          icon: <FaPhoneAlt />,
        },
      ],
    },
  ];

  const address = [
    {
      details: "Sonai - Rahuri Rd, Prashantnagar, Sonai, Maharashtra 414105",
    },
  ];

  return (
    <>
      <Navbar />

      <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-orange-500">
                  {section.title}
                </h3>

                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {link.to.startsWith("http") ||
                      link.to.startsWith("tel") ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                        >
                          {link.icon && (
                            <span className="text-orange-500 text-lg">
                              {link.icon}
                            </span>
                          )}
                          <span>{link.label}</span>
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                        >
                          {link.icon && (
                            <span className="text-orange-500 text-lg">
                              {link.icon}
                            </span>
                          )}
                          <span>{link.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Address
              </h3>
              {address.map((branch, index) => (
                <p key={index} className="text-gray-400 leading-relaxed">
                  {branch.details}
                </p>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <iframe
              title="DIGITALORBIT SOLUTIONS LLP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4684411385906!2d74.81071659999999!3d19.392155900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc99179a958eab%3A0x99de9286d6b91ce1!2sDIGITALORBIT%20SOLUTIONS%20LLP!5e0!3m2!1sen!2sin!4v1767695980749!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-6 mt-12 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DIGITALORBIT SOLUTIONS LLP. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
