import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // For the CTA button link
import React from "react";
import aboutimg from "../../public/aboutt.jpg";
import about1 from "../../public/about-us_773186-1364.avif"; // Replace with your image path

function AboutUs() {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

  {/* Background Image – Updated */}
  <img
    src={aboutimg}
    alt="DigitalOrbit Solutions"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Blue Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>

  {/* Soft Blue Glow */}
  <div className="absolute top-20 left-8 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-3xl px-6 md:px-14">

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight text-left">
        About <span className="text-cyan-400">Us</span>
      </h1>

      <p className="mt-3 text-lg sm:text-xl md:text-2xl text-white/90 font-semibold text-left">
        DIGITALORBIT SOLUTIONS LLP
      </p>

      {/* Accent Line */}
      <div className="mt-4 w-24 h-1 bg-cyan-400 rounded-full"></div>

      <p className="mt-4 max-w-lg text-sm md:text-lg text-white/80 leading-relaxed text-left">
        A professional IT training and development company focused on
        industry-ready skills, modern technologies, and real-world exposure.
      </p>

    </div>
  </div>
</div>


      <section className="bg-white md:py-20">
        <div className="container mx-auto px-4 md:px-4 text-center">
          <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-5">
            {/* MAIN TITLE */}
            <h1 className="text-xl md:text-4xl font-extrabold text-red-600 text-center mb-12">
              Best IT Training Institute in Pune with Strong Ties to Top IT
              Companies
            </h1>

            {/* ABOUT CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="text-left">
                <p className="text-gray-800 text-sm md:text-lg leading-relaxed">
                  <span className="font-semibold">
                    DIGITALORBIT SOLUTIONS LLP
                  </span>{" "}
                  is a leading IT Training and Development company based in
                  Sonai, Ahmednagar. We specialise in AI, Software Development,
                  Web & App Development, Cloud Technologies, and professional IT
                  training.
                </p>

                <ul className="mt-6 space-y-3 text-gray-800 text-sm md:text-lg">
                  <li>✔ IT Training & Certification Programs</li>
                  <li>✔ AI & Machine Learning Training</li>
                  <li>✔ Web & Mobile App Development</li>
                  <li>✔ Software Development & IT Solutions</li>
                  <li>✔ Internship & Industrial Training</li>
                  <li>✔ Career Guidance & Skill Development</li>
                </ul>
              </div>

              {/* RIGHT IMAGE – BIGGER */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={about1}
                  alt="DigitalOrbit Solutions LLP Training"
                  className="w-[360px] sm:w-[440px] md:w-[560px] lg:w-[620px] 
                   h-auto rounded-[2.5rem] 
                   border border-gray-300 shadow-2xl"
                />
              </div>
            </div>

            {/* SECOND SECTION */}
            <h2 className="text-xl md:text-4xl font-bold text-orange-600 text-center mt-20 mb-8">
              Top Campus Recruitment & IT Training Institute
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-gray-800 text-sm md:text-lg leading-relaxed text-left">
                DIGITALORBIT SOLUTIONS LLP delivers job-oriented IT training
                programs aligned with real industry requirements and connects
                students with top IT companies through structured campus
                recruitment initiatives.
              </p>
            </div>
          </section>

          {/* Our Mission & Vision Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
              {/* SECTION TITLE */}
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-4xl font-extrabold text-blue-700">
                  Our Mission & Vision
                </h2>
                <p className="mt-3 text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
                  Driving excellence through innovation, industry relevance, and
                  student-focused learning
                </p>
              </div>

              {/* CARDS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* MISSION CARD */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                    🎯 Our Mission
                  </h3>

                  <ol className="space-y-4 text-gray-800 text-sm md:text-lg leading-relaxed">
                    <li>
                      ✔ Provide high-quality Job-Oriented Training to students.
                    </li>
                    <li>
                      ✔ Offer strategic Campus Recruitment solutions connecting
                      students with top IT companies.
                    </li>
                    <li>
                      ✔ Empower students to build successful careers in the Tech
                      and Digital industries.
                    </li>
                    <li>
                      ✔ Bridge the gap between education and employment by
                      equipping students with industry-relevant skills.
                    </li>
                    <li>
                      ✔ Ensure every student is job-ready and prepared for the
                      competitive job market.
                    </li>
                  </ol>
                </div>

                {/* VISION CARD */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                    🚀 Our Vision
                  </h3>

                  <ul className="space-y-4 text-gray-800 text-sm md:text-lg leading-relaxed">
                    <li>
                      ✔ To be the leading IT training institute providing
                      top-notch online and classroom courses.
                    </li>
                    <li>
                      ✔ Offer hands-on experience in cutting-edge technologies
                      like Full Stack, Data Science, Python, DevOps, Cloud
                      Computing, Digital Marketing, Java, and more.
                    </li>
                    <li>
                      ✔ Empower students with practical skills to excel in their
                      careers in the Tech and Digital industries.
                    </li>
                    <li>
                      ✔ Provide comprehensive internship opportunities to
                      enhance real-world learning.
                    </li>
                    <li>
                      ✔ Ensure students receive placement assistance to secure
                      rewarding career opportunities.
                    </li>
                    <li>
                      ✔ Continuously innovate and adapt our training programs to
                      meet industry demands and trends.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          {/* WHY CHOOSE US */}
          <section className="relative py-14 md:py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 rounded-3xl shadow-xl">
            {/* Section Title */}
            <h3 className="text-2xl md:text-4xl font-extrabold text-purple-700 text-center mb-10">
              Why Choose Us?
            </h3>

            {/* Content Card */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <ul className="text-gray-800 text-sm md:text-lg leading-relaxed space-y-6">
                <li className="flex gap-4">
                  <span className="mt-1 text-purple-600 text-xl">✔</span>
                  <p>
                    <strong>Cutting-Edge Curriculum:</strong> Our courses are
                    designed by experts to cover the latest technologies,
                    frameworks, and tools. From Java Full Stack to AI and Cloud
                    Computing, our programs keep you ahead of the curve.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-purple-600 text-xl">✔</span>
                  <p>
                    <strong>Hands-On Learning:</strong> We believe in learning
                    by doing. Our students work on real-world projects that help
                    them build a portfolio and gain practical experience.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-purple-600 text-xl">✔</span>
                  <p>
                    <strong>Expert Instructors:</strong> Learn from experienced
                    professionals who have years of industry experience and are
                    committed to your success.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-purple-600 text-xl">✔</span>
                  <p>
                    <strong>Personalized Support:</strong> We offer one-on-one
                    mentorship and career guidance to help you achieve your
                    goals, both during and after your course.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-purple-600 text-xl">✔</span>
                  <p>
                    <strong>Placement Assistance:</strong> With our strong
                    network of industry partners, we provide job placement
                    support to help you secure your dream job.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section className="relative mt-20 py-16 md:py-20 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl text-center overflow-hidden">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
              <h3 className="text-2xl md:text-4xl font-extrabold mb-6">
                Start Your Tech Journey Today
              </h3>

              <p className="text-base md:text-lg mb-10 text-white/90">
                Ready to take the next step in your career? Join{" "}
                <strong>DIGITALORBIT SOLUTIONS LLP</strong> today and gain the
                skills needed to succeed in the ever-evolving tech industry.
              </p>

              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 bg-white text-blue-700 
                 px-10 py-4 rounded-full text-lg font-semibold 
                 shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300"
              >
                🚀 Get Started
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
