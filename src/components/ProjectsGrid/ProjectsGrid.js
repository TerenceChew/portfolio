import "./ProjectsGrid.css";
// Components
import Project from "../Project/Project";
import ProjectIntro from "../ProjectIntro/ProjectIntro";
import ProjectChallenges from "../ProjectChallenges/ProjectChallenges";
import ProjectTechs from "../ProjectTechs/ProjectTechs";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
// Videos
import faceRecogAppVid from "./assets/videos/face-recognition.mp4";
import weatherAppVid from "./assets/videos/weather-app.mp4";
import todoVid from "./assets/videos/todo.mp4";
import ticTacToeVid from "./assets/videos/tic-tac-toe.mp4";
import etchASketchVid from "./assets/videos/etch-a-sketch.mp4";

const ProjectsGrid = () => {
  return (
    <section id="projects-grid" className="projects-grid section">
      <h2>Projects</h2>
      <div className="projects-container flex f-column">
        <Project video={faceRecogAppVid} title="Face Recognition App">
          <ProjectIntro>
            Face Recognizer is an application built with <span>React</span> and{" "}
            <span>Express</span>.
          </ProjectIntro>
          <ProjectChallenges>
            The challenges of making this project are intergrating
            Machine-Learning API, creating server using Node and Express,
            Postgres database, and finally deploy to render.
          </ProjectChallenges>
          <ProjectTechs
            techs={[
              "React",
              "PostgreSQL",
              "Express",
              "Node.js",
              "JavaScript",
              "HTML",
              "CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/face-recog-app-client"
            demoLink="https://terencechew.github.io/face-recog-app-client/"
          />
        </Project>

        <Project video={weatherAppVid} title="Weather App">
          <ProjectIntro>
            Weather App is an application built with ..
          </ProjectIntro>
          <ProjectChallenges>The challenges are ..</ProjectChallenges>
          <ProjectTechs
            techs={[
              "OpenWeatherMap API",
              "Async/Await",
              "JavaScript",
              "HTML",
              "CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/weather-app"
            demoLink="https://terencechew.github.io/weather-app/"
          />
        </Project>

        <Project video={todoVid} title="Todo">
          <ProjectIntro>Todo is an application built with ..</ProjectIntro>
          <ProjectChallenges>The challenges are ..</ProjectChallenges>
          <ProjectTechs
            techs={[
              "JavaScript",
              "LocalStorage",
              "date-fns Library",
              "Webpack",
              "HTML",
              "CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/todo-app"
            demoLink="https://terencechew.github.io/todo-app/"
          />
        </Project>

        <Project video={ticTacToeVid} title="Tic Tac Toe">
          <ProjectIntro>Tic Tac Toe is a ..</ProjectIntro>
          <ProjectChallenges>The challenges are ..</ProjectChallenges>
          <ProjectTechs
            techs={[
              "OpenWeatherMap API",
              "Async/Await",
              "JavaScript",
              "HTML",
              "CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/tic-tac-toe"
            demoLink="https://terencechew.github.io/tic-tac-toe/"
          />
        </Project>

        <Project video={etchASketchVid} title="Etch-A-Sketch">
          <ProjectIntro>Etch-A-Sketch is a ..</ProjectIntro>
          <ProjectChallenges>The challenges are ..</ProjectChallenges>
          <ProjectTechs
            techs={[
              "OpenWeatherMap API",
              "Async/Await",
              "JavaScript",
              "HTML",
              "CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/etch-a-sketch"
            demoLink="https://terencechew.github.io/etch-a-sketch/"
          />
        </Project>
      </div>
    </section>
  );
};

export default ProjectsGrid;
