import { useState, useEffect } from "react";
import Title from "../Title";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Projects"} />

      <div
        className={`absolute mt-40 ml-20 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>This is the projects page</p>
      </div>
    </>
  );
};

export default Projects;
