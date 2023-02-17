import "./Resume.css";
import sample from "./resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <h2>Resume</h2>
      <embed src={sample} title="Terence's resume" />
    </section>
  );
};

export default Resume;
