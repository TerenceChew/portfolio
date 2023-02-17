import { useState, useEffect } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import SkillsGrid from "../components/SkillsGrid/SkillsGrid";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import Contacts from "../components/Contacts/Contacts";
import Resume from "../components/Resume/Resume";

const debounce = (cb, delay = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showResume, setShowResume] = useState(false);

  const toggleShowResume = () => {
    setShowResume((prevVal) => !prevVal);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const debouncedHandleResize = debounce(handleResize);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div className="app">
      <Header windowWidth={windowWidth} />
      <div>
        <Intro />
        <AboutMe />
        <SkillsGrid />
        <ProjectsGrid />
        <Contacts showResume={showResume} toggleShowResume={toggleShowResume} />
        {showResume && <Resume />}
      </div>
    </div>
  );
};

export default App;
