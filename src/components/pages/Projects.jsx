import { useState, useEffect } from "react";
import Title from "../Title";
import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { FaGear } from "react-icons/fa6";
import Notification from "../effects/Notification";
import projects from "../../assets/data/projects";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Notification
        text='If you like any of my projects check out my Github!'
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
            <SiGithub />
          </IconContext.Provider>
        )}
      />
      <Title title={"Projects"} />

      <div
        className={`absolute mt-28 ml-24 mr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pb-14 transition-opacity duration-1000 ${
          fadeIn ? " opacity-100" : " opacity-0"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className='border-2 border-gray-300 rounded-md p-3 bg-gray-300 flex flex-col'
          >
            <div>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-auto rounded-md mb-4 max-h-80 object-cover'
                />
              </a>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                {project.title}
              </h2>
              <p className='text-gray-800 mb-4 text-sm'>
                {project.description}
              </p>
            </div>

            <div className='mt-auto'>
              <div className='flex flex-wrap items-center justify-center mb-4'>
                {project.techstack &&
                  project.techstack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt='techstack'
                      className='h-5 mr-2 mb-2'
                    />
                  ))}
              </div>

              <div className='flex justify-between'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-blue-500 hover:underline'
                >
                  <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                    <SiGithub />
                  </IconContext.Provider>
                  Github
                </a>
                {project.productionLink && (
                  <a
                    href={project.productionLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-blue-500 hover:underline'
                  >
                    <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
                      <FaGear />
                    </IconContext.Provider>
                    Production
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
