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
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>Coming Soon... </p>
        <div className='bg-white rounded-lg shadow-md p-6 mr-4'>
          <p className='mt-2 text-lg leading-relaxed text-gray-800'>
            Highly motivated Software Developer with hands-on experience in
            crafting applications and websites. I've served as a Software
            Developer Intern at Exchange Solutions Inc, contributing to
            cutting-edge projects involving Node.js for applications like
            Retrieval Augmented AI Agents and Digital Coupon Automation.
            Additionally, my role as a Front-End Developer Intern at PresenTEC
            Solutions involved maintaining and enhancing company websites using
            WordPress, ensuring optimal functionality and user experience.
            Currently pursuing an Advanced Diploma in Computer Programming and
            Analysis at George Brown College after previously attending The
            University of Toronto majoring in Computer Science and Mathematics
            before transferring.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
