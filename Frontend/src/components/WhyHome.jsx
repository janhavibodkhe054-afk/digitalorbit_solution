function WhyHome() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-6 md:p-10 bg-gray-50 gap-8">
      
      {/* Left Side - Why Us Content */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl md:text-3xl font-extrabold text-blue-700 mb-4">
          Why Choose DIGITALORBIT SOLUTIONS LLP?
        </h3>

        <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
          DIGITALORBIT SOLUTIONS LLP is committed to delivering industry-focused
          IT education and technology solutions that prepare learners for
          real-world challenges and long-term career success.
        </p>

        <ul className="space-y-3 text-gray-700 text-sm md:text-base">
          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Industry-Relevant Training:</strong> Curriculum aligned
              with current technologies, tools, and market demands.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Practical & Project-Based Learning:</strong> Hands-on
              training with real-time projects and use-case scenarios.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Experienced Trainers & Mentors:</strong> Learn from
              professionals with strong industry exposure.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Internship & Placement Assistance:</strong> Real-world
              exposure with internship programs and career support.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Affordable & Flexible Learning:</strong> High-quality
              education with flexible schedules and cost-effective plans.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-blue-600 font-bold">✔</span>
            <span>
              <strong>Career Guidance & Skill Development:</strong> Resume
              building, interview prep, and soft-skill enhancement.
            </span>
          </li>
        </ul>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src="./WhyUs.jpeg"
          alt="Why Choose DigitalOrbit Solutions"
          className="w-full h-auto rounded-xl transform hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default WhyHome;