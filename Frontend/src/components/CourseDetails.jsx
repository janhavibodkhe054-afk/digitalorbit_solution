import React from "react";
import { useParams, Link } from "react-router-dom";

const courses = [
  {
    slug: "java-full-stack",
    title: "Java Full Stack Developer",
    img: "/JavaFullStack.webp",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    tools: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JS"],
    description:
      "Master end-to-end Java Full Stack development with live projects, interview preparation, and certification.",
    syllabus: [
      "Core Java & OOP",
      "Spring Boot & REST APIs",
      "Hibernate & JPA",
      "Frontend Development",
      "MySQL Database",
      "Git & Deployment",
      "Live Projects & Interviews",
    ],
  },

  {
    slug: "python-full-stack",
    title: "Python Full Stack Developer",
    img: "/PythonFullStack.webp",
    duration: "5 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    tools: ["Python", "Django", "Flask", "PostgreSQL", "HTML", "CSS", "JS"],
    description:
      "Learn Python Full Stack with Django & Flask, APIs, real-world projects and placement support.",
    syllabus: [
      "Python Fundamentals",
      "Django Framework",
      "Flask & REST APIs",
      "Frontend Development",
      "Database Management",
      "Deployment",
      "Interview Preparation",
    ],
  },

  {
    slug: "mern-stack",
    title: "MERN Stack Developer",
    img: "/MERN.webp",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Build scalable web applications using the MERN stack with modern best practices.",
    syllabus: [
      "MongoDB & Schema Design",
      "Express & Node.js",
      "React.js & Hooks",
      "Authentication",
      "API Integration",
      "Deployment",
      "Live Projects",
    ],
  },

  {
    slug: "mean-stack",
    title: "MEAN Stack Developer",
    img: "/MEAN.webp",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    tools: ["MongoDB", "Express", "Angular", "Node.js"],
    description:
      "Develop enterprise-level applications using MEAN stack with Angular frontend.",
    syllabus: [
      "MongoDB Database",
      "Node.js & Express",
      "Angular Framework",
      "Authentication & Security",
      "REST APIs",
      "Deployment",
      "Live Projects",
    ],
  },

  {
    slug: "data-science",
    title: "Data Science",
    img: "/DataScience.webp",
    duration: "5 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "ML"],
    description:
      "Learn data analysis, visualization, machine learning and real-world data handling.",
    syllabus: [
      "Python for Data Science",
      "Data Analysis & Cleaning",
      "Data Visualization",
      "Statistics",
      "Machine Learning",
      "Real-world Projects",
    ],
  },

  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    img: "/AIML.webp",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Advanced",
    tools: ["Python", "TensorFlow", "PyTorch", "NLP", "Deep Learning"],
    description:
      "Advanced AI & ML training covering deep learning, NLP and real-world use cases.",
    syllabus: [
      "Machine Learning Algorithms",
      "Deep Learning",
      "Neural Networks",
      "NLP",
      "Model Deployment",
      "AI Projects",
    ],
  },

  {
    slug: "devops",
    title: "DevOps & Cloud Computing",
    img: "/DEVOPS.webp",
    duration: "4 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    tools: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    description:
      "Master DevOps tools and cloud platforms with automation and CI/CD pipelines.",
    syllabus: [
      "Linux Fundamentals",
      "Git & GitHub",
      "Docker & Containers",
      "Kubernetes",
      "AWS Cloud",
      "CI/CD Pipelines",
    ],
  },

  {
    slug: "software-testing",
    title: "Software Testing",
    img: "/TESTING.webp",
    duration: "4 Months",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    tools: ["Manual Testing", "Selenium", "TestNG", "JIRA"],
    description:
      "Comprehensive manual and automation testing with real-time projects.",
    syllabus: [
      "Software Testing Basics",
      "Manual Testing",
      "Automation with Selenium",
      "TestNG Framework",
      "Bug Tracking (JIRA)",
      "Live Testing Projects",
    ],
  },

  {
    slug: "ui-ux",
    title: "UI / UX Design",
    img: "/UIUX.webp",
    duration: "3 Months",
    mode: "Online / Offline",
    level: "Beginner",
    tools: ["Figma", "Wireframes", "Prototyping", "Usability Testing"],
    description:
      "Design beautiful and user-friendly interfaces using modern UI/UX practices.",
    syllabus: [
      "UI/UX Fundamentals",
      "Design Principles",
      "Wireframing",
      "Prototyping with Figma",
      "Usability Testing",
      "Portfolio Projects",
    ],
  },
];

const CourseDetails = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold text-red-600">Course Not Found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full bg-slate-50 py-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Back Button */}
        <Link
          to="/#courses"
          onClick={() => {
            setTimeout(() => {
              const el = document.getElementById("courses");
              el?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="inline-block mb-6"
        >
          <button className="flex items-center gap-2 text-blue-900 font-semibold hover:text-sky-600 transition">
            ← Back to Courses
          </button>
        </Link>

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src={course.img}
            alt={course.title}
            className="rounded-2xl shadow-lg w-full"
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
              {course.title}
            </h1>

            <p className="text-slate-600 text-lg mb-6">{course.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div className="bg-white p-4 rounded-xl shadow">
                <span className="font-semibold">Duration</span>
                <p>{course.duration}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <span className="font-semibold">Mode</span>
                <p>{course.mode}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <span className="font-semibold">Level</span>
                <p>{course.level}</p>
              </div>
            </div>

            <Link to="/contact">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>

        {/* Tools */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Syllabus */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Course Syllabus
          </h2>
          <ul className="space-y-3">
            {course.syllabus.map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-900"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
