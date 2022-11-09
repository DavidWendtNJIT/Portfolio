import "./projects.scss";
import taskMaster from "../../img/AdminPage.png";
import citrus from "../../img/citrus.png";
import restRant from "../../img/restRant.png";
import planeBomber from "../../img/planeBomber.png";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  return (
    <div className="pl" id="projects">
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          These are some of the projects that I have worked on thus far. The list will be continually growing and growing...
        </p>
      </div>
      <div className="pl-list">
        <div className="p">
          <div className="p-wrapper">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <img src={taskMaster} alt="" className="p-img" />
            <div className="p-info">
              <h2 className="p-title"><span>TaskMaster</span></h2>
              <h4 className="p-stack">React, Node.js, Express, Mongo</h4>
              <h5 className="p-desc">
                This web application allows employers to track and assign tasks
                to their users within their individual organization. Normal
                users can log in to track what tasks have been assigned, and
                check them off upon completion.
              </h5>
              <div className="icon-wrapper">
                <div className="icon">
                  <a
                    href="https://www.taskmasterusa.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LanguageIcon fontSize="large" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/DavidWendtNJIT/TaskMaster"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p">
          <div className="p-wrapper">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <img src={citrus} alt="" className="p-img" />
            <div className="p-info">
              <h2 className="p-title"><span>Citrus Property Management</span></h2>
              <h4 className="p-stack">React, Node.js, Express, Mongo</h4>
              <h5 className="p-desc">
                This browser application allows users like landlords/realtors to
                be able to create, display, and maintain valuable information
                for their properties.
              </h5>
              <div className="icon-wrapper">
                <div className="icon">
                  <a
                    href="http://citrusproperty.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LanguageIcon fontSize="large" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/DavidWendtNJIT/milestoneTwo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p">
          <div className="p-wrapper">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <img src={restRant} alt="" className="p-img" />
            <div className="p-info">
              <h2 className="p-title"><span>REST-Rant</span></h2>
              <h4 className="p-stack">
                React (SSR), Node.js, Express, PostgreSQL
              </h4>
              <h5 className="p-desc">
                Browse local restaurants, add a new restaurant, view ratings and
                comments, or rate and comment yourself.
              </h5>
              <div className="icon-wrapper">
                <div className="icon">
                  <a
                    href="http://david-rest-rant.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LanguageIcon fontSize="large" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/DavidWendtNJIT/project-Rest-rant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p">
          <div className="p-wrapper">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <img src={planeBomber} alt="" className="p-img" />
            <div className="p-info">
              <h2 className="p-title"><span>Plane Bomber</span></h2>
              <h4 className="p-stack">Vanilla Javascript</h4>
              <h5 className="p-desc">
                Destroy 10 targets as quickly as possible with the least amount
                of bombs dropped to achieve your highest score possible!
              </h5>
              <div className="icon-wrapper">
                <div className="icon">
                  <a
                    href="https://davidwendtnjit.github.io/Plane-Bomber-game/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LanguageIcon fontSize="large" />
                  </a>
                </div>
                <div className="icon">
                  <a
                    href="https://github.com/DavidWendtNJIT/Plane-Bomber-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
