import React, { useEffect, useState } from "react";

const MetricCard = ({ title, value, suffix }) => (
  <div
    className="bg-white rounded-xl p-5
               border border-slate-200
               shadow-sm hover:shadow-md
               transition-all duration-300"
  >
    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
      {title}
    </h3>

    <p className="mt-3 text-3xl font-extrabold text-blue-900">
      {value}
      <span className="text-blue-700">{suffix}</span>
    </p>
  </div>
);

function Metrics() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [placementPercentage] = useState(70);
  const [studentSatisfactionRate] = useState(90);
  const [topRecruiters, setTopRecruiters] = useState(0);

  const incrementCounter = (target, setter) => {
    const step = Math.ceil(target / 70);
    let counter = 0;

    const interval = setInterval(() => {
      counter += step;
      if (counter >= target) {
        setter(target);
        clearInterval(interval);
      } else {
        setter(counter);
      }
    }, 25);
  };

  useEffect(() => {
    incrementCounter(5000, setTotalStudents);
    incrementCounter(300, setTopRecruiters);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-extrabold text-blue-900 mb-3">
          Our Achievements
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Key milestones that reflect our commitment to quality education and
          career success.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetricCard title="Students Trained" value={totalStudents} suffix="+" />
          <MetricCard title="Top Recruiters" value={topRecruiters} suffix="+" />
          <MetricCard title="Placement Success" value={placementPercentage} suffix="%" />
          <MetricCard title="Student Satisfaction" value={studentSatisfactionRate} suffix="%" />
        </div>
      </div>
    </section>
  );
}

export default Metrics;
