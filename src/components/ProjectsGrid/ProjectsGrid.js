import "./ProjectsGrid.css";
import Project from "../Project/Project";
import ProjectIntro from "../ProjectIntro/ProjectIntro";
import ProjectChallenges from "../ProjectChallenges/ProjectChallenges";
import ProjectTechs from "../ProjectTechs/ProjectTechs";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import testImg from "../SkillsGrid/assets/svgs/css.svg";

const ProjectsGrid = () => {
  return (
    <section id="projects-grid" className="projects-grid section">
      <h2>Projects</h2>
      <div>
        <Project img={testImg} title="Face Recognizer">
          <ProjectIntro>
            Face Recognizer is an application built with <span>React</span> and{" "}
            <span>Express</span>.
          </ProjectIntro>
          <ProjectChallenges>
            The challenges of making this project are intergrating a
            Machine-Learning API, creating server using Node and Express,
            Postgres database, and finally deploy to heroku.
          </ProjectChallenges>
          <ProjectTechs
            techs={[
              "React",
              "PostgreSQL",
              "Express",
              "Node.js",
              "JavaScript",
              "PostgreSQL",
              "HTML/CSS",
            ]}
          />
          <ProjectButtons />
        </Project>
      </div>
    </section>
  );
};

export default ProjectsGrid;
