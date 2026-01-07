import AboutHome from "../components/AboutHome";
import Banner from "../components/Banner";
import Companies from "../components/Companies";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Metrics from "../components/Matrices";
import Navbar from "../components/Navbar";
import ServiceSlider from "../components/Slider";
import SuccessStories from "../components/SuccessStories";
import WhyHome from "../components/WhyHome";

function Home() {
  return (
    <>
      <Helmet>
        <title>Top IT Training Institute in Pune | DIGITALORBIT SOLUTIONS LLP</title>
        <meta
          name="description"
          content="Join DIGITALORBIT SOLUTIONS LLP, Pune's best IT training institute, for courses in Java Full Stack, MERN Stack, MEAN Stack, Python Full Stack, Cloud Computing, Data Science, Machine Learning, Artificial Intelligence, and more. Kickstart your tech career with expert guidance."
        />
        <meta
          name="keywords"
          content="IT training in Pune, best IT institute Pune, Java Full Stack courses, MERN Stack training, MEAN Stack institute, Python Full Stack training, Data Science courses, Cloud Computing certifications, Machine Learning training, AI courses in Pune, Software Development, tech career training, professional IT courses"
        />
        <meta property="og:title" content="Top IT Training Institute in Pune | ArrayLogic Academy" />
        <meta
          property="og:description"
          content="Learn from industry experts at DIGITALORBIT SOLUTIONS LLP, Pune's top IT training institute. Specializing in Java, MERN, MEAN, Python, Data Science, Cloud Computing, AI, and more, we prepare you for a successful tech career."
        />
        <meta property="og:image" content="https://www.arraylogicacademy.in/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.arraylogicacademy.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top IT Training Institute in Pune | ArrayLogic Academy" />
        <meta
          name="twitter:description"
          content="DIGITALORBIT SOLUTIONS LLP is a leading IT Training and Development company based in Sonai, Ahmednagar. We specialise in AI, Software Development, Web & App Development, Cloud Technologies, and Professional IT Training Our Core Services IT Training & Certification Programs AI & Machine Learning Training Web and Mobile App Development Software Development & IT Solutions Internship & Industrial Training Career Guidance & Skill Development."
        />
        <meta name="twitter:image" content="https://www.arraylogicacademy.in/assets/twitter-image.jpg" />
        <meta name="author" content="ArrayLogic Academy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.arraylogicacademy.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <Navbar />
      <Banner />
      <AboutHome />
      <ServiceSlider />
      <WhyHome />
      <Companies />
      <Metrics />
      <SuccessStories />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;