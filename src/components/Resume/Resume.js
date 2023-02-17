import "./Resume.css";
import { useEffect, useRef } from "react";
import sample from "./resume.pdf";

const Resume = () => {
  const resumeRef = useRef();

  useEffect(() => {
    resumeRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={resumeRef} id="resume" className="resume section">
      <h2>Resume</h2>
      <embed src={sample} title="Terence's resume" />
    </section>
  );
};

export default Resume;
