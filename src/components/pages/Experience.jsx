import { useState, useEffect, useMemo } from "react";
import Title from "../Title.jsx";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { LuConstruction } from "react-icons/lu";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  const containerClasses = useMemo(() => {
    return `absolute mt-28 ml-[5.5rem] mr-5 transition-opacity duration-1000 ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  return (
    <>
      <Notification
        text="I'm currently working on this page!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <LuConstruction />
          </IconContext.Provider>
        )}
      />
      <Title title={"Experience"} />

      <div className={containerClasses}>
        <p>Coming Soon...</p>
      </div>
    </>
  );
};

export default Skills;
