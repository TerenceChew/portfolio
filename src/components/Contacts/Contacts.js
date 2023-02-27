import "./Contacts.css";
import githubSvg from "./assets/svgs/github.svg";
import linkednSvg from "./assets/svgs/linkedin.svg";
import mobileSvg from "./assets/svgs/mobile.svg";
import emailSvg from "./assets/svgs/email.svg";

const Contacts = ({ shouldShowResume, toggleResume }) => {
  return (
    <section id="contacts" className="contacts section">
      <h2>Contacts</h2>
      <div className="flex f-column">
        <div className="contact flex">
          <img src={githubSvg} alt="github" />
          <a
            href="https://github.com/TerenceChew?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="contact flex">
          <img src={linkednSvg} alt="linked in" />
          <a
            href="https://www.linkedin.com/in/terence-chew-03316922a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact flex">
          <img src={mobileSvg} alt="mobile phone" />
          <p>010-272-2015</p>
        </div>

        <div className="contact flex">
          <img src={emailSvg} alt="email" />
          <a href="mailto:wschew97@gmail.com" target="_blank" rel="noreferrer">
            wschew97@gmail.com
          </a>
        </div>

        <button className="btn resume-btn" onClick={toggleResume}>
          {shouldShowResume ? "Hide Resume" : "View Resume"}
        </button>
      </div>
    </section>
  );
};

export default Contacts;
