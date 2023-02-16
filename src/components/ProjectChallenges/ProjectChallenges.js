import "./ProjectChallenges.css";

const ProjectChallenges = ({ children }) => {
  return (
    <div className="project-challenges">
      <h4>Challenges</h4>
      <p>{children}</p>
    </div>
  );
};

export default ProjectChallenges;
