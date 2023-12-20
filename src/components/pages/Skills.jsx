import { useState, useEffect } from "react";
import Title from "../Title";
import Carousel from "../effects/Carousel";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const slides = [
    <img src='https://via.placeholder.com/1300x500' alt='Slide 1' />,
    <img src='https://via.placeholder.com/1300x500' alt='Slide 2' />,
    <img src='https://via.placeholder.com/1300x500' alt='Slide 3' />,
  ];

  return (
    <>
      <Title title={"Skills"} />

      <div
        className={`absolute mt-28 ml-24 mr-6 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <Carousel slides={slides} />
      </div>
    </>
  );
};

export default Skills;
