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
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    {
      href: "https://www.facebook.com/arraylogic.academy",
      target: "_blank",
      icon: faFacebook,
      style: "text-blue-600 hover:text-blue-800",
    },
    {
      href: "https://www.twitter.com/arraylogic_academy",
      target: "_blank",
      icon: faTwitter,
      style: "text-blue-400 hover:text-blue-600",
    },
    {
      href: "https://www.linkedin.com/company/arraylogic-academy",
      target: "_blank",
      icon: faLinkedin,
      style: "text-blue-500 hover:text-blue-700",
    },
    {
      href: "https://www.instagram.com/arraylogic_academy",
      target: "_blank",
      icon: faInstagram,
      style: "text-pink-500 hover:text-pink-700",
    },
  ];

  const activeClass =
    "text-orange-500 font-bold border-b-2 border-orange-500"; // Active link style

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "bg-black text-white shadow-md duration-300 transition-all ease-in-out"
          : "bg-white dark:bg-slate-900 text-black dark:text-white"
      }`}
    >
      <div className="navbar flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/onlylogo.png"
              alt="DIGITALORBIT SOLUTIONS LLP"
              className="h-10 w-10 object-contain"
            />
            <span
              className={`hidden sm:block md:text-xl font-bold cursor-pointer transition-colors duration-300 ${
                sticky ? "text-white" : "text-blue-900"
              }`}
            >
              DIGITALORBIT SOLUTIONS LLP
            </span>
          </Link>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="btn btn-ghost lg:hidden ml-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors duration-300 hover:text-orange-500 ${
                  isActive ? activeClass : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Social Icons + Connect Button */}
        <div className="flex items-center space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.style} duration-300 text-sm md:text-xl`}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}

          <a
            className="bg-orange-500 text-white text-sm px-3 py-1 rounded-md hover:bg-slate-800 duration-300 ml-3"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=8669747823"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul
            className="fixed top-0 left-0 w-1/2 h-full bg-black text-white p-10 flex flex-col gap-8 z-50"
            style={{ paddingTop: "25%" }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-bold hover:text-orange-500 ${
                    isActive ? activeClass : ""
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex space-x-5 mt-10">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.style} text-2xl`}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
