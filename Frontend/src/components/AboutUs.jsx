import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import React from "react";

/* NEW UNIQUE PROFESSIONAL IMAGES */
const heroImage =
  "https://images.pexels.com/photos/3184462/pexels-photo-3184462.jpeg"; // corporate team working
const aboutImage1 =
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"; // IT classroom / training
const aboutImage2 =
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"; // office meeting / discussion

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us | DIGITALORBIT SOLUTIONS LLP</title>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] md:h-[560px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="DigitalOrbit Solutions Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/75"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
              About <span className="text-orange-400">DIGITALORBIT</span>
            </h1>

            <p className="mt-4 text-base md:text-xl text-white/90 max-w-2xl">
              A professional IT Training & Development company delivering
              industry-ready skills, real-world exposure, and career-focused
              education.
            </p>

            <div className="mt-6 w-24 h-1 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-4xl font-extrabold text-blue-900 text-center mb-14">
            Best IT Training Institute with Industry Exposure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                <strong>DIGITALORBIT SOLUTIONS LLP</strong> is a trusted IT
                Training and Development organization based in Maharashtra. We
                specialize in AI, Software Development, Web & Mobile
                Applications, Cloud Technologies, and job-oriented IT training.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 text-sm md:text-lg">
                <li>✔ IT Training & Certification Programs</li>
                <li>✔ AI & Machine Learning Training</li>
                <li>✔ Web & Mobile App Development</li>
                <li>✔ Software Development & IT Solutions</li>
                <li>✔ Internship & Industrial Training</li>
                <li>✔ Career Guidance & Skill Development</li>
              </ul>
            </div>

            <div>
              <img
                src={aboutImage1}
                alt="IT Training Classroom"
                className="rounded-3xl shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND IMAGE SECTION ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutImage2}
            alt="Professional IT Team"
            className="rounded-3xl shadow-xl border border-gray-200"
          />

          <div>
            <h3 className="text-xl md:text-3xl font-bold text-blue-900 mb-4">
              Job-Oriented Training & Campus Recruitment
            </h3>

            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              Our training programs are aligned with real industry needs. We
              provide structured internships, live project exposure, and
              placement assistance to ensure students are ready for the
              professional IT environment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 text-center mb-14">
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-slate-50 rounded-3xl shadow-lg p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
                Our Mission
              </h3>

              <ul className="space-y-4 text-gray-700 text-sm md:text-lg">
                <li>✔ Deliver industry-ready IT training</li>
                <li>✔ Bridge the gap between education & employment</li>
                <li>✔ Provide hands-on real-world exposure</li>
                <li>✔ Prepare students for competitive IT careers</li>
                <li>✔ Ensure every learner becomes job-ready</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-3xl shadow-lg p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
                Our Vision
              </h3>

              <ul className="space-y-4 text-gray-700 text-sm md:text-lg">
                <li>✔ Become a leading IT training institute</li>
                <li>✔ Offer cutting-edge technology programs</li>
                <li>✔ Empower students with practical skills</li>
                <li>✔ Provide strong placement assistance</li>
                <li>✔ Continuously evolve with industry trends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl md:text-4xl font-extrabold text-blue-900 text-center mb-12">
            Why Choose DIGITALORBIT SOLUTIONS?
          </h3>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <ul className="space-y-6 text-gray-700 text-sm md:text-lg">
              <li>✔ Industry-aligned curriculum</li>
              <li>✔ Live projects & internships</li>
              <li>✔ Experienced industry professionals</li>
              <li>✔ Personalized career mentoring</li>
              <li>✔ Placement & recruitment assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-blue-900 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-6">
            Build Your IT Career with Confidence
          </h3>

          <p className="text-white/90 text-base md:text-lg mb-10">
            Join <strong>DIGITALORBIT SOLUTIONS LLP</strong> and gain practical,
            industry-ready skills to succeed in today’s competitive tech world.
          </p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full
                       font-semibold shadow-lg hover:bg-orange-400
                       hover:text-white transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
