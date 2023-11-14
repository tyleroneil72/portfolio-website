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

  const renderSelectedComponent = () => {
    switch (selected) {
      case 0:
        return <HomePage />;
      case 1:
        return <AboutMe />;
      case 2:
        return <Projects />;
      case 3:
        return <Skills />;
      case 4:
        return <ContactMe />;
      case 5:
        return <Resume />;
      case 6:
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='bg-slate-900 text-slate-100 flex'>
        <NavBar selected={selected} setSelected={setSelected} />
        {renderSelectedComponent()}
      </div>
    </>
  );
};

export default App;
