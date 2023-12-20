import { useState, useEffect } from "react";
import Title from "../Title";
import Carousel from "../effects/Carousel";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const slides = [
    <img src='https://via.placeholder.com/900x500' alt='Slide 1' />,
    <img src='https://via.placeholder.com/900x500' alt='Slide 2' />,
    <img src='https://via.placeholder.com/900x500' alt='Slide 3' />,
  ];
  const labels = ["Label 1", "Label 2", "Label 3"];

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
