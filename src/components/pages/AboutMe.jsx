import { useState, useEffect } from "react";
import Title from "../Title";
import headshot from "../../assets/images/headshot.jpg";

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"About Me"} />

      <div
        className={`absolute mt-36 ml-24 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='flex flex-col items-center border-b-2 border-gray-300 pb-4 md:border-b-0 md:pb-0 md:w-80 lg:w-96 mr-6'>
          <img
            src={headshot}
            alt='Profile'
            className='w-80 h-80 rounded-full object-cover mb-4'
          />

          <div className='text-center'>
            <p className='text-lg font-semibold'>Tyler O'Neil</p>
            <p className='text-gray-400'>Aspiring Software Developer</p>
          </div>

          <div className='text-left mt-4'>
            <p className='mb-2'>
              <span className='font-semibold'>Location:</span> Toronto, ON
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>Current Time:</span>{" "}
              {new Date().toLocaleTimeString([], {
                timeZone: "America/Toronto",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>

          <div className='flex gap-4 mt-auto'>
            <a
              href='https://github.com/tyleroneil72'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              GitHub
            </a>

            <a
              href='https://linkedin.com/in/tyler-oneil-dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className='border-2 border-gray-300 p-4 w-full md:w-2/3 lg:w-1/2 mr-6 rounded-lg bg-gray-300'>
          <p className='text-lg font-semibold mb-4 text-gray-900'>
            tyleroneil/AboutMe<span className='text-gray-600'>.md</span>
          </p>

          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                Professional Information
              </h2>
              <p className='text-gray-800'>
                Highly motivated aspiring Software Developer with hands-on
                experience in crafting applications and websites. I've served as
                a Software Developer Intern at Exchange Solutions Inc,
                contributing to cutting-edge projects involving Node.js for
                applications like Retrieval Augmented AI Agents and Digital
                Coupon Automation. Additionally, my role as a Front-End
                Developer Intern at PresenTEC Solutions involved maintaining and
                enhancing company websites using WordPress, ensuring optimal
                functionality and user experience. Currently pursuing an
                Advanced Diploma in Computer Programming and Analysis at George
                Brown College after previously attending The University of
                Toronto majoring in Computer Science and Mathematics before
                transferring.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                Personal Information
              </h2>
              <p className='text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin consequat turpis in purus vestibulum, non sodales quam
                blandit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
