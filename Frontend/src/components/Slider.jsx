import "swiper/css";
import "swiper/css/navigation";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const courses = [
  {
    slug: "java-full-stack",
    title: "Java Full Stack",
    img: "/JavaFullStack.webp",
    desc: "Java, Spring Boot, Hibernate, REST APIs, HTML, CSS, JavaScript, SQL, Git.",
  },
  {
    slug: "python-full-stack",
    title: "Python Full Stack",
    img: "/PythonFullStack.webp",
    desc: "Python, Django, Flask, REST APIs, PostgreSQL, HTML, CSS, JavaScript.",
  },
  {
    slug: "mern-stack",
    title: "MERN Stack",
    img: "/MERN.webp",
    desc: "MongoDB, Express, React, Node.js, Redux, REST APIs.",
  },
  {
    slug: "mean-stack",
    title: "MEAN Stack",
    img: "/MEAN.webp",
    desc: "MongoDB, Express, Angular, Node.js.",
  },
  {
    slug: "data-science",
    title: "Data Science",
    img: "/DataScience.webp",
    desc: "Data analysis, visualization, ML, statistics, Python libraries.",
  },
  {
    slug: "devops",
    title: "DevOps & Cloud",
    img: "/DEVOPS.webp",
    desc: "CI/CD, Docker, Kubernetes, AWS, Azure.",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    img: "/TESTING.webp",
    desc: "Manual & automation testing using Selenium, TestNG.",
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    img: "/UIUX.webp",
    desc: "Figma, wireframes, prototyping, usability testing.",
  },
];

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section id="courses" className="w-full py-28 px-4 relative">
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-blue-900 mb-14">
        Industry-Focused IT Training Programs
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          spaceBetween={40}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.slug}>
              {/* BIG CARD */}
              <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col h-[480px]">
                <img
                  src={course.img}
                  className="h-52 w-full object-cover rounded-2xl mb-6"
                  alt={course.title}
                />

                <h3 className="font-bold text-xl text-blue-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  {course.desc}
                </p>

                <Link to={`/course/${course.slug}`} className="mt-auto">
                  <button
                    type="button"
                    className="w-full bg-blue-900 text-white py-3 rounded-xl text-lg hover:bg-sky-600 transition"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute -left-6 top-1/2 -translate-y-1/2
                     bg-blue-900 text-white w-12 h-12
                     rounded-full flex items-center justify-center
                     text-2xl hover:bg-sky-600 transition z-10"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="absolute -right-6 top-1/2 -translate-y-1/2
                     bg-blue-900 text-white w-12 h-12
                     rounded-full flex items-center justify-center
                     text-2xl hover:bg-sky-600 transition z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Slider;
