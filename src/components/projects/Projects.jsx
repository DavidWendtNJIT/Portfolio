import "./projects.css";
import taskMaster from "../../img/AdminPage.png";
import citrus from "../../img/citrus.png";
import restRant from "../../img/restRant.png";
import planeBomber from "../../img/planeBomber.png";

const Projects = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          These are some of the projects that I have worked on thus far.
        </p>
      </div>
      <div className="pl-list">
        
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="http://www.taskmasterusa.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={taskMaster} alt="" className="p-img" />
          </a>
        </div>
         
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="http://citrusproperty.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={citrus} alt="" className="p-img" />
          </a>
        </div>
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="http://david-rest-rant.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={restRant} alt="" className="p-img" />
          </a>
        </div>
        <div className="p">
          <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>
          <a
            href="https://davidwendtnjit.github.io/Plane-Bomber-game/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={planeBomber} alt="" className="p-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
