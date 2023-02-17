import "./Contacts.css";
import githubSvg from "./assets/svgs/github.svg";
import linkednSvg from "./assets/svgs/linkedin.svg";
import emailSvg from "./assets/svgs/email.svg";

const Contacts = ({ showResume, toggleShowResume }) => {
  return (
    <section id="contacts" className="contacts section">
      <h2>Contacts</h2>
      <div className="flex f-column">
        <div className="contact flex">
          <img src={githubSvg} alt="github" />
          <a href="https://github.com/TerenceChew?tab=repositories">GitHub</a>
        </div>

        <div className="contact flex">
          <img src={linkednSvg} alt="linked in" />
          <a href="https://www.linkedin.com/in/terence-chew-03316922a/">
            LinkedIn
          </a>
        </div>

        <div className="contact flex">
          <img src={emailSvg} alt="email" />
          <a href="mailto:wschew97@gmail.com">wschew97@gmail.com</a>
        </div>

        <button className="btn resume-btn" onClick={toggleShowResume}>
          {showResume ? "Hide Resume" : "Show Resume"}
        </button>
      </div>
    </section>
  );
};

export default Contacts;
