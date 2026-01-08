import { Link } from "react-router-dom";
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
        { to: "/why", label: "Why Us" },
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

  return (
    <footer className="bg-[#020617] text-slate-300 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-4 tracking-wider text-blue-400 uppercase">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.to.startsWith("http") ||
                    link.to.startsWith("tel") ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
                      >
                        {link.icon && (
                          <span className="text-blue-500 text-sm">
                            {link.icon}
                          </span>
                        )}
                        <span className="text-sm">{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "instant" })
                        }
                        className="flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300"
                      >
                        {link.icon && (
                          <span className="text-blue-500 text-sm">
                            {link.icon}
                          </span>
                        )}
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wider text-blue-400 uppercase">
              Address
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sonai - Rahuri Rd, Prashantnagar, Sonai,
              Maharashtra 414105
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-xs text-slate-500 tracking-wide">
            © {new Date().getFullYear()} DIGITALORBIT SOLUTIONS LLP.  
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
