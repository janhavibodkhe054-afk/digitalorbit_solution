import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./About/About.jsx";
import CSSNotes from "./components/ProgrammingNotes/CSSNotes.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact";
import Courses from "./courses/Courses";
import HTMLNotes from "./components/HTMLNotes.jsx";
import { Helmet } from "react-helmet";
import Hiring from "./components/Hiring.jsx";
import Home from "./home/Home.jsx";
import Intern from "./Internship/Intern.jsx";
import Internships from "./components/Internships.jsx";
import JSNotes from "./components/ProgrammingNotes/JSNotes.jsx";
import NotesAll from "./components/NotesAll.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Project from "./components/Project.jsx";
import TermsCondition from "./components/TermsCondition.jsx";
import { Toaster } from "react-hot-toast";
import Why from "./Why/why.jsx";
import { useAuth } from "./components/context/AuthProvider";
import CourseDetails from "./components/CourseDetails.jsx";

const App = () => {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Helmet>
        <title>DIGITALORBIT SOLUTIONS LLP | IT Training Institute in Pune</title>
        <meta
          name="description"
          content="DIGITALORBIT SOLUTIONS LLP offers industry-relevant IT training in Pune, providing courses in Java, MERN, Python, Data Science, Cloud Computing, and more."
        />
      </Helmet>

      <div className="bg-white text-gray-900 min-h-screen">
        
        {/* ✅ ADD HERE */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/why" element={<Why />} />
          <Route path="/internship" element={<Intern />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/project" element={<Project />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditons" element={<TermsCondition />} />
          <Route path="/notes" element={<NotesAll />} />
          <Route path="/html-notes" element={<HTMLNotes />} />
          <Route path="/css-notes" element={<CSSNotes />} />
          <Route path="/javascript-notes" element={<JSNotes />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
};

export default App;
