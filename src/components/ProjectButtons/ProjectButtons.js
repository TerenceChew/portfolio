import "./ProjectButtons.css";

const ProjectButtons = ({ sourceLink, demoLink }) => {
  return (
    <div className="project-buttons flex f-center">
      <button className="btn">
        <a href={sourceLink} target="_blank" rel="noreferrer">
          Source
        </a>
      </button>
      <button className="btn">
        <a href={demoLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </button>
    </div>
  );
};

export default ProjectButtons;
