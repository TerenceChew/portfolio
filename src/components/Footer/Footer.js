import "./Footer.css";
import githubSvg from "./assets/svgs/github.svg";

const Footer = () => {
  return (
    <footer className="footer flex f-center">
      <div className="footer-box flex f-center">
        <span>Built By Terence</span>
        <a
          className="flex f-center"
          href="https://github.com/TerenceChew?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubSvg} alt="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
