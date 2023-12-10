import { useState } from "react";

import NavBar from "./NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Resume from "./pages/Resume.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from "./Footer.jsx";

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
      <div className='text-slate-100 flex'>
        <NavBar selected={selected} setSelected={setSelected} />
        {renderSelectedComponent()}
        <Footer />
      </div>
    </>
  );
};

export default App;