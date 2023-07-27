import { useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import AboutMe from "../components/AboutMe/AboutMe";
import SkillsGrid from "../components/SkillsGrid/SkillsGrid";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import Contacts from "../components/Contacts/Contacts";
import Resume from "../components/Resume/Resume";
import Footer from "../components/Footer/Footer";

const App = () => {
  const [shouldShowResume, setShouldShowResume] = useState(false);

  const toggleResume = () => {
    setShouldShowResume((prevVal) => !prevVal);
  };

  const showResume = () => {
    setShouldShowResume(true);
  };

  return (
    <div className="app">
      <Header />
      <div>
        <Intro showResume={showResume} />
        <AboutMe />
        <SkillsGrid />
        <ProjectsGrid />
        <Contacts
          shouldShowResume={shouldShowResume}
          toggleResume={toggleResume}
        />
        {shouldShowResume && <Resume />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
