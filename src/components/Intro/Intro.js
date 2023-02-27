import "./Intro.css";
import { useInView } from "react-intersection-observer";
import ScrollToTopIcon from "../ScrollToTopIcon/ScrollToTopIcon";

const Intro = ({ showResume }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <section id="intro" className="intro section" ref={ref}>
        <h1>
          <span className="greeting">Hello! My name is</span>
          <div className="name-box flex">
            <span className="prompt">{">"}</span>
            <span className="name">Terence.</span>
          </div>
        </h1>
        <p>
          I&apos;m a <span>Front-End Developer</span>.
        </p>
        <button className="btn">
          <a href="#resume" onClick={showResume}>
            Resume
          </a>
        </button>
      </section>
      {!inView && <ScrollToTopIcon />}
    </>
  );
};

export default Intro;
