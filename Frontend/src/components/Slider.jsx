import "swiper/css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const ServiceSlider = () => {
  const [activeArrow, setActiveArrow] = useState(null);
  const swiperRef = useRef(null);

  const handleArrowClick = (direction) => {
    setActiveArrow(direction);
    if (swiperRef.current) {
      direction === "next"
        ? swiperRef.current.swiper.slideNext()
        : swiperRef.current.swiper.slidePrev();
    }
  };

  const courses = [
    {
      title: "Java Full Stack",
      img: "./JavaFullStack.webp",
      desc:
        "Java, Spring Boot, Hibernate, REST APIs, HTML, CSS, JavaScript, SQL, Git.",
    },
    {
      title: "Python Full Stack",
      img: "./PythonFullStack.webp",
      desc:
        "Python, Django, Flask, REST APIs, PostgreSQL, HTML, CSS, JavaScript.",
    },
    {
      title: "MERN Stack",
      img: "./MERN.webp",
      desc:
        "Modern web apps using MongoDB, Express, React, Node.js, Redux, REST APIs.",
    },
    {
      title: "MEAN Stack",
      img: "./MEAN.webp",
      desc:
        "High-performance apps using MongoDB, Express, Angular, Node.js.",
    },
    {
      title: "Data Science",
      img: "./DataScience.webp",
      desc:
        "Data analysis, visualization, ML, statistics, Python libraries.",
    },
    {
      title: "AI & Machine Learning",
      img: "./AIML.webp",
      desc:
        "ML algorithms, deep learning, NLP, TensorFlow, PyTorch.",
    },
    {
      title: "DevOps & Cloud",
      img: "./DEVOPS.webp",
      desc:
        "CI/CD, Docker, Kubernetes, AWS, Azure, automation.",
    },
    {
      title: "Software Testing",
      img: "./TESTING.webp",
      desc:
        "Manual & automation testing using Selenium, TestNG, CI/CD tools.",
    },
    {
      title: "UI/UX Design",
      img: "./UIUX.webp",
      desc:
        "UI/UX design with Figma, wireframes, prototyping, usability testing.",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto pt-28 md:pt-32 pb-16 px-4 relative">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-blue-900 mb-12">
        Industry-Focused IT Training Programs
      </h2>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="h-auto">
            {/* CARD */}
            <div
              className="group h-full bg-white rounded-2xl border border-slate-200
                         shadow-sm hover:shadow-xl transition-all duration-300
                         flex flex-col p-6"
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
                loading="lazy"
              />

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0b1c2d] mb-2 group-hover:text-sky-600 transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-4 mb-6">
                {course.desc}
              </p>

              {/* Button aligned bottom */}
              <div className="mt-auto">
                <Link to="/course">
                  <button
                    className="w-full bg-[#0b1c2d] text-white py-2.5 rounded-lg
                               font-semibold tracking-wide
                               hover:bg-sky-600 transition-all duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div
        className={`absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full cursor-pointer z-10
        transition-all ${
          activeArrow === "prev"
            ? "bg-sky-600"
            : "bg-[#0b1c2d]"
        } text-white`}
        onClick={() => handleArrowClick("prev")}
      >
        &lt;
      </div>

      <div
        className={`absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full cursor-pointer z-10
        transition-all ${
          activeArrow === "next"
            ? "bg-sky-600"
            : "bg-[#0b1c2d]"
        } text-white`}
        onClick={() => handleArrowClick("next")}
      >
        &gt;
      </div>
    </section>
  );
};

export default ServiceSlider;
