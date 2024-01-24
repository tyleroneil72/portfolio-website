import { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from "./Footer.jsx";
import Modal from "./effects/Modal.jsx";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleBlur = () => {
      if (!isMobile) {
        document.title = "Thank You For Visiting! - Tyler O'Neil";
      }
    };

    const handleFocus = () => {
      if (!isMobile) {
        document.title = "Tyler O'Neil";
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selected]);

  const renderSelectedComponent = () => {
    switch (selected) {
      case 0:
        return <HomePage />;
      case 1:
        return <AboutMe />;
      case 2:
        return <Projects />;
      case 3:
        return <Experience />;
      case 4:
        return <ContactMe />;
      case 5:
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <div className='text-slate-100 flex'>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          innerScale={1}
          outerScale={1.5}
          outerAlpha={0}
          trailingSpeed={7}
          innerStyle={{
            backgroundColor: "rgb(79, 70, 229)",
          }}
          outerStyle={{
            border: "3px solid rgb(79, 70, 229)",
          }}
        />
      )}
      {/* <Modal /> */}
      {renderSelectedComponent()}
      <NavBar selected={selected} setSelected={setSelected} />
      <Footer />
    </div>
  );
};

export default App;
