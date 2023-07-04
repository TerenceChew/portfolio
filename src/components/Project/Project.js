import "./Project.css";
import { useInView } from "react-intersection-observer";

const Project = ({ video, title, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const style = {
    animation: "slide-in 1500ms forwards",
  };

  return (
    <div
      className="project flex f-column"
      ref={ref}
      style={inView ? style : {}}
    >
      <div className="flex f-column f-center">
        <video className="project-video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h3 className="project-title">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Project;
