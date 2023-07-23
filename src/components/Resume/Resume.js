import "./Resume.css";
import { useEffect, useRef } from "react";
import resume from "./Terence Chew Resume.pdf";

const Resume = () => {
  const resumeRef = useRef();

  useEffect(() => {
    resumeRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={resumeRef} id="resume" className="resume section">
      <h2>Resume</h2>
      <div className="resume-wrapper">
        <embed src={resume} title="Terence's resume" />
      </div>
    </section>
  );
};

export default Resume;
