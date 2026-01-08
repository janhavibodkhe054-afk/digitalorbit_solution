import React, { useEffect, useState } from "react";

const slides = [
  "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
  "https://www.insightit.in/wp-content/uploads/2024/11/image.png",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative">
      <div className="relative h-screen overflow-hidden">

        {/* SLIDES */}
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner Slide"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* CLEAN NAVY OVERLAY (NO BLUR) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f3d]/70 via-[#0f1f3d]/50 to-[#020617]/75" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-5xl">

            {/* SUBTITLE */}
            <p className="text-slate-300 text-xs sm:text-sm tracking-[0.3em] uppercase">
              Professional IT Training Institute
            </p>

            {/* HEADING */}
            <h1 className="mt-4 text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Building Careers with <br />
              <span className="text-[#9bbcff] font-extrabold">
                DIGITALORBIT SOLUTIONS
              </span>
            </h1>

            {/* DIVIDER */}
            <div className="flex justify-center mt-6">
              <span className="w-20 h-[2px] bg-[#9bbcff]" />
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center gap-6">
              <a href="/course">
                <button className="bg-[#0f1f3d] hover:bg-[#1a2a4f] text-white px-12 py-3 rounded-md font-semibold shadow-lg transition-all hover:-translate-y-0.5">
                  Explore Courses
                </button>
              </a>

              <a href="/contact">
                <button className="bg-white hover:text-[#0f1f3d]  px-12 py-3 rounded-md hover:bg-white hover:text-[#0f1f3d] transition-all hover:-translate-y-0.5 shadow-md">
                  Contact Us
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
