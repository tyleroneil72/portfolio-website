import { useState, useEffect } from "react";
import Title from "../Title";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Skills"} />

      <div
        className={`absolute mt-40 ml-20 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>This is the skills page</p>
      </div>
    </>
  );
};

export default Skills;
