import { Helmet } from "react-helmet";
import React from "react";

const TechStack = () => {
  const techStack = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/html5.svg", color: "#E34F26" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/css3.svg", color: "#1572B6" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mongodb.svg", color: "#47A248" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonaws.svg", color: "#FF9900" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/java.svg", color: "#007396" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/python.svg", color: "#3776AB" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nodedotjs.svg", color: "#339933" },
    { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/react.svg", color: "#61DAFB" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/mysql.svg", color: "#4479A1" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/dot-net.svg", color: "#512BD4" },
    { name: "Salesforce", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/salesforce.svg", color: "#00A1E0" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tailwindcss.svg", color: "#38B2AC" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/nextdotjs.svg", color: "#000000" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/typescript.svg", color: "#3178C6" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/cplusplus.svg", color: "#00599C" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/php.svg", color: "#777BB4" },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/spring.svg", color: "#6DB33F" },
    { name: "Hibernate", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/hibernate.svg", color: "#59666C" },
    { name: "REST API", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/postman.svg", color: "#FF6C37" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/django.svg", color: "#092E20" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/angular.svg", color: "#DD0031" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/bootstrap.svg", color: "#7952B3" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/docker.svg", color: "#2496ED" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/kubernetes.svg", color: "#326CE5" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/postman.svg", color: "#FF6C37" },
    { name: "ML", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/tensorflow.svg", color: "#FF6F00" },
    { name: "AI", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/pytorch.svg", color: "#EE4C2C" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftazure.svg", color: "#0089D6" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/git.svg", color: "#F05032" },
    { name: "Selenium", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/selenium.svg", color: "#43B02A" },
    
  ];

  return (
    <> <Helmet>
    <title>IT Courses | DIGITALORBIT SOLUTIONS LLP - Premier IT Training Institute in Pune</title>
    <meta
      name="description"
      content="DIGITALORBIT SOLUTIONS LLP offers a diverse range of industry-relevant IT courses in Pune. Learn Java Full Stack, MERN Stack, MEAN Stack, Python Full Stack, Data Science, Cloud Computing, Machine Learning, Artificial Intelligence, and more from experienced instructors to enhance your career in technology. Our training programs are designed to give you hands-on experience and skills that employers demand."
    />
    <meta
      name="keywords"
      content="IT courses in Pune, DIGITALORBIT SOLUTIONS LLP Pune, Java Full Stack training, MERN Stack courses, MEAN Stack training, Python Full Stack courses, Data Science courses, Machine Learning courses, AI training, Cloud Computing classes, software development courses, technology career training, professional IT certification, coding bootcamp Pune, best IT institute Pune, job-ready IT courses, career-oriented IT training"
    />
  </Helmet>

    <div className="max-w-screen-xl mx-auto py-6 px-4 md:px-0">
      <h3 className="text-center text-xl md:text-2xl font-bold mb-8">
      Explore Our IT Courses Institute's Advanced Tech Stack for Cutting-Edge Learning and Industry-Ready Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transform hover:-translate-y-3 hover:scale-105 transition-transform duration-300 hover:shadow-xl border-t-4"
            style={{ borderColor: tech.color }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-16 w-16 object-contain"
              style={{ filter: `drop-shadow(2px 4px 6px ${tech.color}88)` }}
            />
            <p
              className="mt-2 text-lg font-medium"
              style={{ color: tech.color }}
            >
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>  </>
  );
};

export default TechStack;
