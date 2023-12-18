import { useState, useEffect } from "react";
import Title from "../Title";
import headshot from "../../assets/images/headshot.jpg";
import ResumeButton from "../resumeButton";

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"About Me"} />

      <div
        className={`absolute mt-28 ml-24 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 transition-opacity duration-1000 ${
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
              className='text-blue-500 hover:underline flex items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.338-3.369-1.338-.455-1.157-1.112-1.465-1.112-1.465-.908-.62.069-.608.069-.608 1.004.07 1.53 1.03 1.53 1.03.892 1.527 2.34 1.087 2.91.831.09-.645.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.68-.103-.253-.446-1.27.097-2.647 0 0 .84-.269 2.75 1.025A9.61 9.61 0 0110 4.79c.855.004 1.715.115 2.52.34 1.91-1.294 2.75-1.025 2.75-1.025.544 1.377.202 2.394.1 2.647.64.7 1.03 1.59 1.03 2.68 0 3.842-2.337 4.688-4.565 4.936.36.31.68.922.68 1.855 0 1.338-.012 2.416-.012 2.746 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z'
                  clipRule='evenodd'
                />
              </svg>
              GitHub
            </a>

            <a
              href='https://linkedin.com/in/tyler-oneil-dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
              &nbsp;LinkedIn
            </a>
          </div>
          <ResumeButton />
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
