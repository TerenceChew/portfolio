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
        <div className="greeting">Hi there! My name is</div>
        <div className="name-box flex">
          <span className="prompt">{">"}</span>
          <span className="name">Terence.</span>
        </div>
        <h1>Front-End Developer.</h1>
        <p>I build things and make them pretty on the Internet.</p>
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
