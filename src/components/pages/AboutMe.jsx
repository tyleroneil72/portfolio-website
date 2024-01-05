import { IconContext } from "react-icons";
import { useState, useEffect, useCallback } from "react";
import Title from "../Title";
import headshot from "../../assets/images/headshot.png";
import Notification from "../effects/Notification";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoLocation, IoTime } from "react-icons/io5";
import Button from "../Button";

const AboutMe = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      timeZone: "America/Toronto",
      hour: "numeric",
      minute: "numeric",
    })
  );

  useEffect(() => {
    setFadeIn(true);

    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          timeZone: "America/Toronto",
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerClasses = `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-16 mr-0 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  const iconProvider = useCallback(
    (icon) => (
      <IconContext.Provider value={{ className: "w-5 h-5" }}>
        {icon}
      </IconContext.Provider>
    ),
    []
  );

  return (
    <>
      <Notification
        text='Feel free to connect with me on LinkedIn!'
        icon={() => iconProvider(<SiLinkedin />)}
      />
      <Title title={"About Me"} />

      <div className={containerClasses}>
        <div className='flex flex-col items-center border-b-2 border-gray-300 pb-4 md:border-b-0 md:pb-0 md:w-80 lg:w-96'>
          <img
            src={headshot}
            alt='Profile'
            className='w-60 h-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full object-cover mb-4'
          />

          <div className='text-center'>
            <p className='text-lg font-semibold'>Tyler O'Neil</p>
            <p className='text-gray-400'>Aspiring Software Developer</p>
          </div>

          <div className='text-left mt-4'>
            <p className='mb-2 flex items-center'>
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <IoLocation />
              </IconContext.Provider>
              Toronto, Ontario
            </p>
            <p className='mb-2 flex items-center'>
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <IoTime />
              </IconContext.Provider>
              {currentTime}
              <p>&nbsp; (UTC -05:00)</p>
            </p>
          </div>

          <div className='flex gap-4 mt-auto'>
            <a
              href='https://github.com/tyleroneil72'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center'
            >
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <SiGithub />
              </IconContext.Provider>
              Github
            </a>

            <a
              href='https://linkedin.com/in/tyler-oneil-dev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline flex items-center'
            >
              <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                <SiLinkedin />
              </IconContext.Provider>
              LinkedIn
            </a>
          </div>
          <Button href='/resume.pdf' text='View Resume' />
        </div>

        <div className='border-2 border-gray-300 p-4 w-[calc(100%-2rem)] md:w-2/3 lg:w-2/3 rounded-lg bg-slate-300 mb-14'>
          <p className='text-lg font-semibold mb-4 text-gray-900'>
            tyleroneil/AboutMe<span className='text-gray-600'>.md</span>
          </p>

          <p className='text-gray-800 rounded bg-slate-50 px-3'>
            <h2 className='text-2xl font-bold mb-2 text-gray-900'>
              Hi, I'm Tyler O'Neil!
            </h2>
          </p>

          <div className='space-y-4'>
            <div>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                Profile
              </h2>
              <p className='text-gray-800 rounded bg-slate-50 px-3 py-2'>
                Highly motivated aspiring Software Developer with hands-on
                experience in crafting applications and websites. I've served as
                a{" "}
                <a
                  href='https://www.exchangesolutions.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-50 bg-indigo-400 rounded px-1 py-1 hover:underline hover:text-white'
                >
                  Software Developer Intern at Exchange Solutions Inc
                </a>
                , contributing to cutting-edge projects involving Node.js for
                applications like Retrieval Augmented AI Agents and Digital
                Coupon Automation. Additionally, my role as a{" "}
                <a
                  href='https://presentecsolutions.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-50 bg-indigo-400 rounded px-1 py-1 hover:underline hover:text-white'
                >
                  Front-End Developer Intern at PresenTEC Solutions
                </a>{" "}
                involved maintaining and enhancing company websites using
                WordPress, ensuring optimal functionality and user experience.
                Currently pursuing an Advanced Diploma in Computer Programming
                and Analysis at George Brown College after previously attending{" "}
                The University of Toronto majoring in Computer Science and
                Mathematics before transferring.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                Hobbies and Interests
              </h2>
              <p className='text-gray-800 rounded bg-slate-50 px-3 py-2'>
                Programming is more than a job for me; it's a passion. I'm
                constantly diving into new side projects and experimenting with
                the latest tech trends. I particularly enjoy creating things
                with Raspberry Pi's and Arduino's, and finding innovative ways
                to bring ideas to life. I'm an enthusiastic NBA fan, with a
                special loyalty to the Raptors. Additionally, I'm an avid chess
                player, boasting a bullet rating of 1100+ and a puzzle rating of
                2100+ on{" "}
                <a
                  href='https://www.chess.com/member/tyleroneil'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-50 bg-indigo-400 rounded px-1 py-1 hover:underline hover:text-white'
                >
                  Chess.com
                </a>
                . I also enjoy a variety of music, especially R&B, hip-hop, and
                alternative.
              </p>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                My Skills and Tools
              </h2>
              <div className='text-gray-800 rounded bg-slate-50 px-3 py-2'>
                <p className='flex items-center justify-center pb-2'>
                  <img
                    src='https://skillicons.dev/icons?i=html,css,bootstrap,tailwind,js,ts,react,nodejs,expressjs,php,python,java,cs,bash,r'
                    alt='HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React, Node.js, Express.js, PHP, Python, Java, C#, Bash, R'
                    loading='lazy'
                  />
                </p>
                <p className='flex items-center justify-center'>
                  <img
                    src='https://skillicons.dev/icons?i=aws,vscode,visualstudio,git,github,linux,mysql,wordpress,firebase,dotnet,vite'
                    alt='AWS, VSCode, Visual Studio, Git, Github, Linux, MySQL, Wordpress, Firebase, .Net, Vite'
                    loading='lazy'
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
