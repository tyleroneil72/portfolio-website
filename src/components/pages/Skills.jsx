import { useState, useEffect } from "react";
import Title from "../Title";
import Carousel from "../effects/Carousel";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const labels = [
    "Javascript / Typescript ",
    "HTML & CSS",
    "Node.js & Express.js",
    "React.js & Vite",
    "Java",
    "C# & .NET",
    "Python",
    "SQL & MySQL & Snowflake",
    "Git & Github",
    "Bash & Linux",
    "PHP",
    "AWS",
    "Wordpress",
  ];

  const slides = [
    <img src='https://via.placeholder.com/900x500' alt={labels[0]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[1]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[2]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[3]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[4]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[5]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[6]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[7]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[8]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[9]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[10]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[11]} />,
    <img src='https://via.placeholder.com/900x500' alt={labels[12]} />,
  ];

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
