import React from "react";

const services = [
  {
    title: "IT Training & Certification Programs",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    description:
      "Comprehensive training programs aligned with industry standards, hands-on learning, real-time projects, and globally recognized certifications.",
  },
  {
    title: "AI & Machine Learning Training",
    img: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    description:
      "Use-case-driven AI & ML training covering data handling, model development, automation, and intelligent decision-making.",
  },
  {
    title: "Web & Mobile App Development",
    img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    description:
      "Design and development of scalable, modern websites and mobile applications using cutting-edge technologies.",
  },
  {
    title: "Software Development & IT Solutions",
    img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    description:
      "Custom software solutions tailored to business needs, ensuring efficiency, scalability, and performance.",
  },
  {
    title: "Internship & Industrial Training",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    description:
      "Industry-oriented internships and industrial training with real-world exposure and live project experience.",
  },
  {
    title: "Career Guidance & Skill Development",
    img: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
    description:
      "Personalized career counseling, resume building, interview preparation, and soft-skill development.",
  },
];

const Companies = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20 px-4 overflow-hidden bg-slate-50">
      
      {/* Heading */}
      <h3 className="text-center text-2xl md:text-4xl font-extrabold text-blue-900 mb-4">
        Our Services
      </h3>

      <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
        DIGITALORBIT SOLUTIONS delivers industry-relevant training and
        technology solutions designed to empower careers and businesses.
      </p>

      {/* Auto Scroll Carousel */}
      <div className="relative">
        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[360px]
                         bg-white rounded-2xl border border-slate-200
                         shadow-md hover:shadow-2xl
                         transition-all duration-300 hover:-translate-y-2
                         overflow-hidden"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover
                             hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h4>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
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
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Companies;
