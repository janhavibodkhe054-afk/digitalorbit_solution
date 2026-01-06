import React from "react";

const Banner = () => {
  return (
    <section className="w-full py-10">
      <div className="relative w-full h-screen overflow-hidden">

        {/* Banner Image */}
        <img
          src="/llp.png"
          alt="DIGITALORBIT SOLUTIONS LLP"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      </div>
    </section>
  );
};

export default Banner;
