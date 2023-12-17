import { useState, useEffect } from "react";
import Title from "../Title";
import headshot from "../../assets/headshot.jpg";

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
        <div className='flex flex-col items-center border-b-2 border-gray-300 pb-4 md:border-b-0 md:pb-0 md:w-80 lg:w-96'>
          <img
            src={headshot}
            alt='Profile'
            className='w-32 h-32 rounded-full object-cover mb-4'
          />

          <div className='text-center'>
            <p className='text-lg font-semibold'>Tyler O'Neil</p>
            <p className='text-gray-600'>Passionate Software Developer</p>
          </div>

          <div className='text-left mt-4'>
            <p className='mb-2'>
              <span className='font-semibold'>Location:</span> Toronto
            </p>
            <p className='mb-2'>
              <span className='font-semibold'>Current time:</span>{" "}
              {new Date().toLocaleTimeString()}
            </p>
          </div>

          <div className='flex gap-4 mt-auto'>
            <a
              href='https://github.com/tyleroneil72'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              GitHub Profile
            </a>

            <a
              href='https://linkedin.com/in/tyler-oneil-dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className='border-2 border-gray-300 rounded-md p-4 w-full md:w-2/3 lg:w-1/2'>
          <p className='text-lg font-semibold mb-4'>tyleroneil/AboutMe.md</p>

          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-semibold mb-2'>
                Professional Information
              </h2>
              <p className='text-gray-600'>
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

            <div>
              <h2 className='text-xl font-semibold mb-2'>
                Personal Information
              </h2>
              <p className='text-gray-600'>
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
