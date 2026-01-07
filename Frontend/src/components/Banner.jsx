import React from "react";

const Banner = () => {
  return (
    <section className="w-full">
      <div
        className="
          relative w-full overflow-hidden
          h-[65vh]
          sm:h-[75vh]
          md:h-[85vh]
          lg:h-screen
        "
      >
        {/* FULL WIDTH & HEIGHT IMAGE */}
        <img
          src="https://www.insightit.in/wp-content/uploads/2024/11/image.png"
          alt="DIGITALORBIT SOLUTIONS LLP"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-16 max-w-3xl">
            <h1
              className="
                text-white font-extrabold
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
              "
            >
              DIGITALORBIT <br />
              <span className="text-sky-400">SOLUTIONS LLP</span>
            </h1>

            <p
              className="
                mt-4 text-slate-200
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
              "
            >
              Professional IT Training Institute offering job-oriented
              courses in Web Development, MERN Stack, React, Node.js
              and real-world project-based learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
