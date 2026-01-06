import React from "react";

const services = [
  {
    title: "IT Training & Certification Programs",
    description:
      "Comprehensive training programs aligned with current industry standards, offering hands-on experience, real-time project exposure, and globally recognized certifications.",
  },
  {
    title: "AI & Machine Learning Training",
    description:
      "Practical, use-case-driven training covering data handling, model development, automation, and AI-driven decision-making.",
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Design and development of modern, scalable, and user-friendly websites and mobile applications using the latest technologies.",
  },
  {
    title: "Software Development & IT Solutions",
    description:
      "Customized software solutions tailored to business needs, ensuring efficiency, scalability, and high performance across industries.",
  },
  {
    title: "Internship & Industrial Training",
    description:
      "Industry-oriented internships and industrial training programs providing real-world exposure, live projects, and professional environments.",
  },
  {
    title: "Career Guidance & Skill Development",
    description:
      "Personalized career counseling, resume building, interview preparation, and soft-skill development to boost employability and confidence.",
  },
];

const Companies = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-14 px-4 overflow-hidden">
      
      {/* Heading */}
      <h3 className="text-center text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Our Services
      </h3>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
        DIGITALORBIT SOLUTIONS LLP delivers industry-relevant training and
        technology solutions designed to empower careers and businesses.
      </p>

      {/* Carousel Wrapper */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100 
                         hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-3">
                {service.title}
              </h4>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Companies;