function WhyHome() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT CONTENT */}
        <div
          className="h-full bg-white rounded-2xl border border-slate-200
                     shadow-sm hover:shadow-xl transition-all duration-300
                     p-8 md:p-10 flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0b1c2d] mb-4">
            Why Choose <span className="text-sky-600">DIGITALORBIT SOLUTIONS</span>?
          </h3>

          <p className="text-slate-600 mb-6 leading-relaxed">
            DIGITALORBIT SOLUTIONS is committed to delivering industry-focused
            IT education and technology solutions that prepare learners for
            real-world challenges and long-term career success.
          </p>

          <ul className="space-y-4 text-slate-700 text-sm md:text-base">
            {[
              "Industry-Relevant Training aligned with current technologies",
              "Practical & Project-Based hands-on learning",
              "Experienced trainers with real industry exposure",
              "Internship & placement assistance",
              "Affordable & flexible learning programs",
              "Career guidance, resume building & interview prep",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Spacer to keep height equal */}
          <div className="mt-auto" />
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="h-full bg-white rounded-2xl border border-slate-200
                     shadow-sm hover:shadow-xl transition-all duration-300
                     p-6 flex items-center"
        >
          <img
            src="./WhyUs.jpeg"
            alt="Why Choose DigitalOrbit Solutions"
            className="w-full h-full object-cover rounded-xl
                       transform hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

export default WhyHome;
