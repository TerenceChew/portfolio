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
          src="https://drive.google.com/file/d/1FvnQ1a73Whki1e7CSBp6Bt5MeOe66lir/preview"
          title="Terence's resume"
        />
      </div>
    </section>
  );
};

export default Resume;
