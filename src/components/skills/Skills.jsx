import "./skills.scss";
// import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import typescript from "../../img/typescript.png";
import nodejs from "../../img/nodejs.png";
import python from "../../img/python.png";
import mongodb from "../../img/mongodb.png";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png";
import webpack from "../../img/webpack.png";
import babel from "../../img/babel.png";
import bootstrap from "../../img/bootstrap.png";
import mui from "../../img/mui.png";
import tailwind from "../../img/tailwind.png";
import styledcomponents from "../../img/styledcomponents.png";
import vscode from "../../img/vscode.png";
import github from "../../img/github.png";
import njitcert from "../../img/njitcert.png";


const Skills = () => {
  const tech = [
    {
      id: 1,
      src: "/assets/img/javascript.png",
      title: "JavaScript",
    },
    {
      id: 2,
      src: react,
      title: "React",
    },
    {
      id: 3,
      src: typescript,
      title: "TypeScript",
    },
    {
      id: 4,
      src: nodejs,
      title: "Node.js",
    },
    {
      id: 5,
      src: python,
      title: "Python",
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 7,
      src: html5,
      title: "HTML5",
    },
    {
      id: 8,
      src: css3,
      title: "CSS3",
    },
    {
      id: 9,
      src: webpack,
      title: "Webpack",
    },
    {
      id: 10,
      src: babel,
      title: "Babel",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
    },
    {
      id: 12,
      src: mui,
      title: "MUI",
    },
    {
      id: 13,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 14,
      src: styledcomponents,
      title: "styled components",
    },
    {
      id: 15,
      src: vscode,
      title: "Visual Studio Code",
    },
    {
      id: 16,
      src: github,
      title: "Github",
    },
  ];

  return (
    <div id="skills" className="container">
      <div className="wrapper">
        <div className="left">
          <div>
            <p className="title">Skills</p>
            <p className="subtitle">
              These are the technologies that I've worked with
            </p>
          </div>
          <div className="left-wrapper">
            <div className="cards">
              {tech.map(({ id, src, title }) => (
                <div key={id} className="card">
                  <img src={src} alt="" className="img" />
                  <p className="card-title">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-wrapper">
            <div className="right-title">
              <p>NJIT Certification</p>
            </div>
            <img src={njitcert} alt="certification" className="right-img" />
            <div className="resume">
              <a href="/assets/files/resume.pdf" target="_blank" rel="noreferrer">
                <button>View Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
