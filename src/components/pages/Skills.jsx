import { useState, useEffect } from "react";
import Title from "../Title";
import Carousel from "../effects/Carousel";
import labels from "../../assets/data/labels";
import slides from "../../assets/data/slides";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 ml-[5.5rem] mr-5 transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Title title={"Skills"} />

      <div className={containerClasses}>
        <Carousel slides={slides} labels={labels} />
      </div>
    </>
  );
};

export default Skills;
