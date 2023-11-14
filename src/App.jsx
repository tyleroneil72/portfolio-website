import { useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Resume from "./components/Resume.jsx";
import Blog from "./components/Blog.jsx";

const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className='bg-slate-900 text-slate-100 flex'>
        <NavBar selected={selected} setSelected={setSelected} />
        {/* Replace h1's with components once implemented */}
        {selected === 0 && <HomePage />}
        {selected === 1 && <AboutMe />}
        {selected === 2 && <Projects />}
        {selected === 3 && <Skills />}
        {selected === 4 && <ContactMe />}
        {selected === 5 && <Resume />}
        {selected === 6 && <Blog />}
      </div>
    </>
  );
};

export default App;
