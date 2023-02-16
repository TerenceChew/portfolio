import "./ProjectTechs.css";
import uniqid from "uniqid";

const ProjectTechs = ({ techs }) => {
  const techLists = techs.map((tech) => <li key={uniqid()}>{tech}</li>);

  return (
    <div className="project-techs">
      <h4>Technologies</h4>
      <ul>{techLists}</ul>
    </div>
  );
};

export default ProjectTechs;
