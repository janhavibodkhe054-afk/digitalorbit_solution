import React from "react";

const SuccessStories = () => {
  const students = [
    { name: "Prachi Tantarpale", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Pallavi Khond", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Nikita Pechkade", college: "Amravati University", domain: "Full Stack Web Developer Intern" },
    { name: "Ankita Gulde", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Dhanashri Tayde", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Unnati Tidke", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Jayashri Tayde", college: "Amravati University", domain: "Web Developer Intern" },
    { name: "Samruddhi Raybole", college: "Amravati University", domain: "Web Developer Intern" },
  ];

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-extrabold text-blue-900 mb-3">
          Success Stories
        </h2>

        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Our students have successfully completed internships and gained
          real-world exposure through industry-aligned training programs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200
                         shadow-sm hover:shadow-lg transition-all duration-300
                         p-6 flex flex-col items-center text-center
                         hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-blue-900 text-white
                              flex items-center justify-center text-lg font-bold
                              ring-4 ring-orange-100 mb-4">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                {student.name}
              </h3>

              {/* College */}
              <p className="text-sm text-slate-500 mb-3">
                {student.college}
              </p>

              {/* Domain Badge */}
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full">
                {student.domain}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
