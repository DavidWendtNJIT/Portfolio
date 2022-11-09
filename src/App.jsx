import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import { useState } from "react";
import Menu from "./components/menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
