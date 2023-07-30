import "./ProjectsGrid.css";
// Components
import Project from "../Project/Project";
import ProjectIntro from "../ProjectIntro/ProjectIntro";
import ProjectSkillsLearned from "../ProjectSkillsLearned/ProjectSkillsLearned";
import ProjectTechs from "../ProjectTechs/ProjectTechs";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
// Videos
import faceRecogAppVid from "./assets/videos/face-recognition.mp4";
import tenziVid from "./assets/videos/tenzi.mp4";
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
            Face Recognition App is built with both <span>front-end</span>
            {" and "}
            <span>back-end</span> technologies. It detects faces in an image
            {" via "}
            <span>machine learning API</span> {" from "}
            <a
              href="https://www.clarifai.com/"
              target="_blank"
              rel="noreferrer"
            >
              Clarifai
            </a>
            . User authentication is performed on the client side as well as on
            the server which is hosted on{" "}
            <a href="https://render.com/" target="_blank" rel="noreferrer">
              Render
            </a>
            , where user data is stored and managed by <span>PostgreSQL</span>.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={[
              "Routing",
              "Input validation",
              "Performing user authentication",
              "Establishing data constraints",
              "Interacting with database via SQL queries",
              "Integrating the back- and front-end",
              "Deploying application on cloud platform",
            ]}
          />
          <ProjectTechs
            techs={[
              "React",
              "PostgreSQL",
              "Express",
              "Node.js",
              "Knex.js",
              "Bcrypt",
              "JavaScript",
              "HTML & CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/face-recog-app-client"
            demoLink="https://terencechew.github.io/face-recog-app-client/"
          />
        </Project>

        <Project video={tenziVid} title="Tenzi">
          <ProjectIntro>
            A classic Tenzi game built with <span>React</span> which utilizes
            web storage API to enable users to keep track of their best score
            and compete against it.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={[
              "Handling array and object updates in React",
              "Implementing React hooks",
              "Conditional rendering in React",
            ]}
          />
          <ProjectTechs
            techs={["React", "JavaScript", "localStorage", "HTML & CSS"]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/tenzi"
            demoLink="https://terencechew.github.io/tenzi/"
          />
        </Project>

        <Project video={weatherAppVid} title="Weather App">
          <ProjectIntro>
            A fully responsive weather application that enables users to search
            weather information via city&apos;s name. By leveraging data fetched
            {" from "}
            <a
              href="https://openweathermap.org/"
              target="_blank"
              rel="noreferrer"
            >
              OpenWeatherMap API
            </a>
            , the app displays the current weather forecast, hourly forecast for
            the next 24 hours as well as daily forecast for the next 7 days. It
            also includes a toggle to switch between Celsius and Fahrenheit.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={[
              "Integrating third-party APIs",
              "Handling time zone conversions",
              "Async/Await",
              "Formatting dates",
            ]}
          />
          <ProjectTechs
            techs={[
              "OpenWeatherMap API",
              "JavaScript",
              "Webpack",
              "date-fns Library",
              "HTML & CSS",
            ]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/weather-app"
            demoLink="https://terencechew.github.io/weather-app/"
          />
        </Project>

        <Project video={todoVid} title="To-do">
          <ProjectIntro>
            To-do is a classic productivity app that allows users to organize
            and manage tasks effectively. It also enables users to organize
            tasks into projects, view tasks by day as well as by week. Every
            task and project is editable and stored in the browser&apos;{"s "}
            <span>local storage</span>.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={[
              "Handling JSON data",
              "Working with web storage API",
              "Configuring Webpack",
              "Implementing factory functions",
              "Writing modular code",
            ]}
          />
          <ProjectTechs
            techs={["JavaScript", "LocalStorage", "Webpack", "HTML & CSS"]}
          />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/to-do"
            demoLink="https://terencechew.github.io/to-do/"
          />
        </Project>

        <Project video={ticTacToeVid} title="Tic Tac Toe">
          <ProjectIntro>
            This classic childhood game is built to challenge myself to complete
            it with as little global code as possible, which is achieved by
            encapsulating each part of the application in it&apos;s own
            respective <span>module</span>.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={["Module pattern", "Transitions", "Animations"]}
          />
          <ProjectTechs techs={["JavaScript", "HTML & CSS"]} />
          <ProjectButtons
            sourceLink="https://github.com/TerenceChew/tic-tac-toe"
            demoLink="https://terencechew.github.io/tic-tac-toe/"
          />
        </Project>

        <Project video={etchASketchVid} title="Etch-A-Sketch">
          <ProjectIntro>
            A simple sketching app built with the goal of solidifying my
            understanding of <span>DOM traversal</span> {" and "}{" "}
            <span>manipulation</span> techniques.
          </ProjectIntro>
          <ProjectSkillsLearned
            concepts={[
              "Pointer events",
              "Event capture, bubbling and propagation",
              "DOM traversal and manipulation",
            ]}
          />
          <ProjectTechs techs={["JavaScript", "HTML & CSS"]} />
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
