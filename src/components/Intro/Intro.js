import "./Intro.css";

const Intro = () => {
  return (
    <section id="intro" className="intro section">
      <div className="greeting">Hi there! My name is</div>
      <div className="name-box flex">
        <span className="prompt">{">"}</span>
        <span className="name">Terence.</span>
      </div>
      <h1>Front-End Web Developer.</h1>
      <h1>I build things and make them pretty on the Internet.</h1>
      <button className="btn">
        <a href="#resume">Resume</a>
      </button>
    </section>
  );
};

export default Intro;
