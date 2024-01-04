import { useState, useEffect, useMemo } from "react";
import Title from "../Title.jsx";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { LuConstruction } from "react-icons/lu";
import ESI from "../../assets/images/esi.png";
import presentec from "../../assets/images/presentec.jpeg";
import gbc from "../../assets/images/gbc.png";
import {
  FaBriefcase,
  FaLaptopCode,
  FaCode,
  FaDatabase,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";

const Experience = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = useMemo(() => {
    return `absolute mt-28 ml-[5.5rem] mr-5 pb-14 pt-4 md:pt-0 transition-opacity duration-1000 text-gray-800 md:w-[calc(100%-7rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  return (
    <>
      <Notification
        text="I'm currently working on this page!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <LuConstruction />
          </IconContext.Provider>
        )}
      />
      <Title title={"Experience and Skills"} />

      <div className={containerClasses}>
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-3 flex justify-center text-gray-50'>
            <FaBriefcase className='mr-2' />
          </h2>
          <div className='bg-white shadow-md rounded-md p-4'>
            <p className='font-semibold flex items-center'>
              <img
                src={ESI}
                alt='ESI icon'
                className='w-8 h-8 mr-2 object-contain'
                loading='lazy'
              />
              Software Developer - Intern @ Exchange Solutions Inc.{" "}
              <span className='text-sm text-gray-500 ml-2'>
                May 2023 - September 2023
              </span>
            </p>
            <ul className='list-disc ml-6'>
              <li>
                Created Node.js scripts to build proof of concept applications
                for cutting-edge projects, including Retrieval Augmented AI
                Agents, Digital Coupon Automation, and the Snowflake Native
                Application Framework.
              </li>
              <li>
                Collaborated with cross-functional teams to explore innovative
                solutions, conduct experiments, and iterate on ideas to drive
                the development of new technologies and applications.
              </li>
              <li>
                Worked closely with senior developers and researchers to create
                prototypes, conduct feasibility studies, and validate concepts,
                ensuring alignment with project goals and objectives.
              </li>
            </ul>

            <p className='font-semibold mt-2 flex items-center'>
              <img
                src={presentec}
                alt='presentec icon'
                className='w-8 h-8 mr-2 object-contain'
                loading='lazy'
              />
              Front-End Developer - Intern @ PresenTEC Solutions.{" "}
              <span className='text-sm text-gray-500 ml-2'>
                December 2022 - April 2023
              </span>
            </p>
            <ul className='list-disc ml-6'>
              <li>
                Oversaw the ongoing maintenance and enhancements of the company
                website using WordPress, ensuring it remained up-to-date and
                functional.
              </li>
              <li>
                Played a key role in selecting templates and shaping the user
                interface to align with the company's branding, enhancing the
                overall user experience.
              </li>
              <li>
                Utilised HTML and CSS to fine-tune website layouts and styles,
                optimising the site's performance and appearance
              </li>
            </ul>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-3 flex items-center justify-center text-gray-50'>
            <FaLaptopCode className='mr-2' />
          </h2>
          <div className='bg-white shadow-md rounded-md p-4'>
            <ul className='list-disc list-inside'>
              <li className='flex items-center'>
                <div className='text-2xl my-1'>
                  <FaCode className='mr-2' />
                </div>{" "}
                Languages: Javascript/Typescript, Python, Java, C#, Bash, PHP,
                SQL
              </li>
              <li className='flex items-center'>
                <div className='text-2xl my-1'>
                  <FaTools className='mr-2' />
                </div>
                Technologies and Frameworks: HTML, CSS, Node.js, Express.js,
                React.js, Vite, Tailwind CSS, Bootstrap, .NET
              </li>
              <li className='flex items-center'>
                <div className='text-2xl my-1'>
                  <FaDatabase className='mr-2' />
                </div>{" "}
                Databases: MySQL, Snowflake
              </li>
              <li className='flex items-center'>
                <div className='text-2xl my-1'>
                  <FaTools className='mr-2' />
                </div>
                Development Tools: AWS, Linux, Git/Github, Firebase Hosting,
                Wordpress, Jira, Confluence, Slack
              </li>
            </ul>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-3 flex items-center justify-center text-gray-50'>
            <FaGraduationCap className='mr-2' />
          </h2>
          <div className='bg-white shadow-md rounded-md p-4'>
            <p className='font-semibold flex items-center'>
              <img
                src={gbc}
                alt='GBC Image'
                className='w-8 h-8 mr-2 object-contain'
                loading='lazy'
              />
              Advanced Diploma, George Brown College, Computer Programming and
              Analysis{" "}
              <span className='text-sm text-gray-500 ml-2'>
                Graduating April 2025
              </span>
            </p>
            <p className='font-semibold mt-2 flex items-center'>
              <FaGraduationCap className='mr-2' />
              Honours Bachelor of Science, University of Toronto, Computer
              Science and Mathematics{" "}
              <span className='text-sm text-gray-500 ml-2'>2019 - 2022</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;
