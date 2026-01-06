import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/course", label: "Courses" },
    { path: "/why", label: "Why Us" },
    { path: "/internship", label: "Internships" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/arraylogic.academy", icon: faFacebook, style: "text-blue-600 hover:text-blue-800" },
    { href: "https://www.twitter.com/arraylogic_academy", icon: faTwitter, style: "text-blue-400 hover:text-blue-600" },
    { href: "https://www.linkedin.com/company/arraylogic-academy", icon: faLinkedin, style: "text-blue-500 hover:text-blue-700" },
    { href: "https://www.instagram.com/arraylogic_academy", icon: faInstagram, style: "text-pink-500 hover:text-pink-700" },
  ];

  const activeClass = "text-orange-500 font-bold border-b-2 border-orange-500";

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky ? "bg-black text-white shadow-md" : "bg-white dark:bg-slate-900 text-black dark:text-white"}`}>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 flex items-center justify-between py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/onlylogo.png" alt="DIGITALORBIT SOLUTIONS LLP" className="h-10 w-10 object-contain" />
          <span className={`hidden sm:block md:text-xl font-bold cursor-pointer transition-colors duration-300 ${sticky ? "text-white" : "text-blue-900"}`}>
            DIGITALORBIT SOLUTIONS LLP
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `px-3 py-2 rounded-md transition-colors duration-300 hover:text-orange-500 ${isActive ? activeClass : ""}`}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Social Icons + Connect Button */}
        <div className="hidden lg:flex items-center space-x-3">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`${link.style} duration-300 text-xl`}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
          <a className="bg-orange-500 text-white text-sm px-3 py-1 rounded-md hover:bg-slate-800 duration-300 ml-3" target="_blank" href="https://api.whatsapp.com/send?phone=8669747823">
            Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        {/* Mobile Hamburger Button */}
<div className="lg:hidden">
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 transition-colors duration-300 ${sticky ? "text-white" : "text-black"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={
          isMobileMenuOpen
            ? "M6 18L18 6M6 6l12 12" // Cross icon
            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
        }
      />
    </svg>
  </button>
</div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-10 text-black text-xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Button at top-right */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-md hover:bg-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `transition-colors duration-300 hover:text-orange-500 ${isActive ? activeClass : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        <div className="flex space-x-6 mt-5">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`${link.style} text-2xl`}>
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>

        <a
          className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-slate-800 duration-300 mt-5"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=8669747823"
        >
          Connect
        </a>
      </div>
    </div>
  );
}

export default Navbar;
