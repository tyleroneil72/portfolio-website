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

  return (
    <>
      <Title title={"Skills"} />

      <div
        className={`absolute mt-28 ml-24 mr-6 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <Carousel slides={slides} labels={labels} />
      </div>
    </>
  );
};

export default Skills;
