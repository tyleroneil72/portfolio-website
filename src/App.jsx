import { useState } from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import AboutMe from "./components/pages/AboutMe.jsx";
import Projects from "./components/pages/Projects.jsx";
import Skills from "./components/pages/Skills.jsx";
import ContactMe from "./components/pages/ContactMe.jsx";
import Resume from "./components/pages/Resume.jsx";
import Blog from "./components/pages/Blog.jsx";
import Footer from "./components/Footer.jsx";

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
        <Footer />
      </div>
    </>
  );
};

export default App;
