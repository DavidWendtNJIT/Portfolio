import "./skills.scss";


const Skills = () => {
  const tech = [
    {
      id: 1,
      src: "/assets/img/javascript.png",
      title: "JavaScript",
    },
    {
      id: 2,
      src: "/assets/img/react.png",
      title: "React",
    },
    {
      id: 3,
      src: "/assets/img/typescript.png",
      title: "TypeScript",
    },
    {
      id: 4,
      src: "/assets/img/nodejs.png",
      title: "Node.js",
    },
    {
      id: 5,
      src: "/assets/img/python.png",
      title: "Python",
    },
    {
      id: 6,
      src: "/assets/img/mongodb.png",
      title: "MongoDB",
    },
    {
      id: 7,
      src: "/assets/img/postgresql.png",
      title: "PostgreSQL",
    },
    {
      id: 8,
      src: "/assets/img/html5.png",
      title: "HTML5",
    },
    {
      id: 9,
      src: "/assets/img/css3.png",
      title: "CSS3",
    },
    {
      id: 10,
      src: "/assets/img/webpack.png",
      title: "Webpack",
    },
    {
      id: 11,
      src: "/assets/img/babel.png",
      title: "Babel",
    },
    {
      id: 12,
      src: "/assets/img/bootstrap.png",
      title: "Bootstrap",
    },
    {
      id: 13,
      src: "/assets/img/mui.png",
      title: "MUI",
    },
    {
      id: 14,
      src: "/assets/img/tailwind.png",
      title: "Tailwind",
    },
    {
      id: 15,
      src: "/assets/img/styledcomponents.png",
      title: "styled components",
    },
    {
      id: 16,
      src: "/assets/img/vscode.png",
      title: "VS Code",
    },
    {
      id: 17,
      src: "/assets/img/github.png",
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
            <img src="/assets/img/njitcert.png" alt="certification" className="right-img" />
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
