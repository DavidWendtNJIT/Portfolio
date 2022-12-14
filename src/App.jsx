import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     }
  //   });
  // });

  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((el) => observer.observe(el));
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
