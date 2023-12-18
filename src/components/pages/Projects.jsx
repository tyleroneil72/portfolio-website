import { useState, useEffect } from "react";
import Title from "../Title";
import headshot from "../../assets/headshot.jpg";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Chat Bot",
      image: headshot,
      description: "Description of Project One",
      githubLink: "link_to_github_project",
    },
    {
      id: 2,
      title: "Learning Path Creator",
      image: headshot,
      description: "Description of Project Two",
      githubLink: "link_to_github_project",
    },
    {
      id: 3,
      title: "Hr & Payroll Management System",
      image: headshot,
      description: "Description of Project Three",
      githubLink: "link_to_github_project",
    },
    {
      id: 4,
      title: "Sorting Algorithm Visualizer",
      image: headshot,
      description: "Description of Project Four",
      githubLink: "link_to_github_project",
      productionLink: "link_to_production_project",
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: headshot,
      description: "Description of Project Five",
      githubLink: "link_to_github_project",
      productionLink: "link_to_production_project",
    },
    {
      id: 6,
      title: "Miscellaneous Projects",
      image: headshot,
      description: "Description of Project Six",
      githubLink: "link_to_github_project",
    },
  ];

  return (
    <>
      <Title title={"Projects"} />

      <div
        className={`absolute mt-36 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 transition-opacity duration-1000${
          fadeIn ? " opacity-100" : " opacity-0"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className='border-2 border-gray-300 rounded-md p-6'
          >
            {/* Project content */}
            {/* Replace this with your project display */}
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-80 object-cover rounded-md mb-4'
            />
            <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-gray-600 mb-4'>{project.description}</p>
            <div className='flex justify-between'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                Github
              </a>
              {project.productionLink && (
                <a
                  href={project.productionLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  Production
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
