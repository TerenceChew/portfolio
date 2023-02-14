import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me section">
      <h2>About Me</h2>
      <p>
        {"Hello! My name is "}
        <span>Terence</span>
        {" and I am a self-taught "}
        <span>JavaScript</span>
        {" developer. I enjoy learning and building new things."}
      </p>
      <p>
        {"Ever since I started dabbling in HTML and CSS, I knew that "}
        <code>this</code>
        {
          " is what I want to do in my career. From then on, I've been exploring more about Front-End technologies like "
        }
        <span>React</span>
        {" and use them to build exciting projects."}
      </p>
      <p>
        {"Currently, I'm planning to dive deeper into the "}
        <span>Back-End</span>
        {" side of web development, particularly technologies such as "}
        <span>PostgreSQL</span>
        {" and "}
        <span>Node.js</span>.
      </p>
    </section>
  );
};

export default AboutMe;
