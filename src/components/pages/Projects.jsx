import { useState, useEffect, useCallback, useMemo } from "react";
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

  // useMemo for calculating class names to avoid recalculations on each render
  const containerClasses = useMemo(() => {
    return `absolute mt-24 ml-[5.5rem] mr-5 grid grid-cols-1 md:grid-cols-2 lg:ml-24 lg:mr-8 lg:grid-cols-3 gap-6 pb-14 transition-opacity duration-1000 ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  // useCallback for memoizing the icon provider
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
        text='If you like any of my projects check out my GitHub!'
        icon={() => iconProvider(<SiGithub />)}
      />
      <Title title={"Projects"} />

      <div className={containerClasses}>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='border-2 border-gray-300 rounded-md p-3 bg-slate-300 flex flex-col transition-transform transform-gpu md:hover:scale-102 hover:scale:100'
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto rounded-md mb-4 max-h-80 object-fill'
                loading='lazy'
              />
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                {project.title}
              </h2>
              <p className='text-gray-800 mb-4 text-sm rounded bg-slate-50 px-3 py-2'>
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
                      loading='lazy'
                    />
                  ))}
              </div>

              <div className='flex justify-between'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-blue-500 hover:underline gap-1'
                >
                  {iconProvider(<SiGithub />)}
                  GitHub
                </a>
                {project.productionLink && (
                  <a
                    href={project.productionLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center text-blue-500 hover:underline gap-1'
                  >
                    {iconProvider(<FaGear />)}
                    Production
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Projects;
