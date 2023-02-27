import "./ProjectSkillsLearned.css";
import uniqid from "uniqid";

const ProjectSkillsLearned = ({ concepts }) => {
  const conceptsList = concepts.map((concept) => (
    <li key={uniqid()}>{concept}</li>
  ));

  return (
    <div className="project-challenges">
      <h4>Skills Learned</h4>
      <ul>{conceptsList}</ul>
    </div>
  );
};

export default ProjectSkillsLearned;