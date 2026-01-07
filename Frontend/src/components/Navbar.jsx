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
    const handleScroll = () => setSticky(window.scrollY > 0);
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

  const activeClass = "text-orange-500 font-semibold border-b-2 border-orange-500";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky ? "bg-black shadow-md" : "bg-white"}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="flex items-center justify-between h-16 min-w-0">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0">
            <img src="/onlylogo.png" alt="DIGITALORBIT SOLUTIONS LLP" className="h-9 w-9 shrink-0" />
            <span className={`font-bold tracking-wide leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl whitespace-nowrap truncate ${sticky ? "text-white" : "text-blue-900"}`}>
              DIGITALORBIT SOLUTIONS LLP
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-6 flex-shrink">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-1 transition-colors duration-300 ${sticky ? "text-white hover:text-orange-400" : "text-slate-800 hover:text-orange-500"} ${isActive ? activeClass : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Social + Connect (only for xl screens and above) */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`${link.style} text-lg transition`}>
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
            <a href="https://api.whatsapp.com/send?phone=8669747823" target="_blank" className="ml-3 bg-orange-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-orange-600 transition">
              Connect
            </a>
          </div>

          {/* Mobile / Tablet Hamburger */}
          <div className="xl:hidden flex-shrink-0">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${sticky ? "text-white" : "text-black"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet / iPad / Nest Hub Menu */}
      <div className={`xl:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 p-2 text-2xl font-bold">✕</button>

        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-orange-500 transition">
            {item.label}
          </NavLink>
        ))}

        <div className="flex gap-6 mt-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={link.icon} className="text-2xl" />
            </a>
          ))}
        </div>

        <a href="https://api.whatsapp.com/send?phone=8669747823" target="_blank" className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md">
          Connect
        </a>
      </div>
    </header>
  );
}

export default Navbar;
