import "./Resume.css";
import { useEffect, useRef } from "react";

const Resume = () => {
  const resumeRef = useRef();

  useEffect(() => {
    resumeRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={resumeRef} id="resume" className="resume section">
      <h2>Resume</h2>
      <div className="resume-wrapper">
        <iframe
          src="https://drive.google.com/file/d/1UNLdsgrJ_hTncqqoohfktHGEQdz6l2dg/preview"
          title="Terence's resume"
        />
      </div>
    </section>
  );
};

export default Resume;
