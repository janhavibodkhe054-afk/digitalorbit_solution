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
        "Enterprise-level application development using Java, Spring Boot, Hibernate, REST APIs, HTML, CSS, JavaScript, SQL, Git.",
    },
    {
      title: "Python Full Stack",
      img: "./PythonFullStack.webp",
      desc:
        "Develop scalable web applications using Python, Django, Flask, REST APIs, PostgreSQL, HTML, CSS, and JavaScript.",
    },
    {
      title: "MERN Stack",
      img: "./MERN.webp",
      desc:
        "Build modern web apps with MongoDB, Express, React, Node.js, Redux, REST APIs, and full JavaScript ecosystem.",
    },
    {
      title: "MEAN Stack",
      img: "./MEAN.webp",
      desc:
        "Create high-performance applications using MongoDB, Express, Angular, Node.js, and RESTful services.",
    },
    {
      title: "Data Science",
      img: "./DataScience.webp",
      desc:
        "Hands-on data analysis, visualization, machine learning, statistics, Python libraries, and data-driven decision making.",
    },
    {
      title: "AI & Machine Learning",
      img: "./AIML.webp",
      desc:
        "Learn ML algorithms, neural networks, deep learning, NLP, TensorFlow, PyTorch, and real-world AI applications.",
    },
    {
      title: "DevOps & Cloud Computing",
      img: "./DEVOPS.webp",
      desc:
        "Master CI/CD, Docker, Kubernetes, automation, AWS, Azure, and cloud-native deployment strategies.",
    },
    {
      title: "Software Testing",
      img: "./TESTING.webp",
      desc:
        "Manual & automation testing using Selenium, TestNG, JUnit, CI/CD tools to ensure software quality.",
    },
    {
      title: "UI/UX Design",
      img: "./UIUX.webp",
      desc:
        "Design intuitive user interfaces using Figma, Adobe XD, wireframing, prototyping, and usability testing.",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto pt-28 md:pt-32 pb-12 px-4 relative">
      
      <h2 className="text-center text-xl md:text-4xl font-extrabold text-gray-900 mb-8">
        Industry-Focused IT Training Programs
      </h2>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide
            key={index}
            className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-md
                       hover:shadow-2xl hover:border-orange-500 transition-all duration-300"
          >
            <img
              src={course.img}
              alt={course.title}
              className="w-full aspect-video object-cover rounded-xl mb-4"
              loading="lazy"
            />

            <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-orange-600 transition-colors">
              {course.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {course.desc}
            </p>

            <Link to="/course">
              <button
                className="w-full bg-black text-white py-2 rounded-lg font-semibold
                           hover:bg-orange-500 transition-all duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Learn More
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div
        className={`absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full cursor-pointer z-10
          ${activeArrow === "prev" ? "bg-orange-500" : "bg-gray-800"} text-white`}
        onClick={() => handleArrowClick("prev")}
      >
        &lt;
      </div>

      <div
        className={`absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full cursor-pointer z-10
          ${activeArrow === "next" ? "bg-orange-500" : "bg-gray-800"} text-white`}
        onClick={() => handleArrowClick("next")}
      >
        &gt;
      </div>
    </div>
  );
};

export default ServiceSlider;