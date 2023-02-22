import "./Project.css";

const Project = ({ video, title, children }) => {
  return (
    <div className="project flex f-column">
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
