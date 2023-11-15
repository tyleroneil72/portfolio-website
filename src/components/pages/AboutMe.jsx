import { useState, useEffect } from "react";
import Title from "../Title";

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"About Me"} />

      <div
        className={`absolute mt-40 ml-20 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* This doesnt look that good but its a good start */}
        <div className='bg-gray-100 p-6 rounded-lg shadow-md text-gray-800'>
          <p className='text-lg font-semibold mb-4'>
            Highly motivated and aspiring Software Developer
          </p>
          <p className='text-base'>
            Skilled in a wide range of programming languages and technologies,
            with a passion for creating intuitive user experiences. Currently
            pursuing an Advanced Diploma in Computer Programming and Analysis at
            George Brown College. Previously attended The University of Toronto
            majoring in Computer Science and Mathematics.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
