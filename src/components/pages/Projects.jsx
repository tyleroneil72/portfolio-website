import { useState, useEffect } from "react";
import Title from "../Title";
import Github from "../svgs/Github";
import Gear from "../svgs/Gear";
import Notification from "../effects/Notification";
import chatbot from "../../assets/images/chatbot.jpeg";
import learningPath from "../../assets/images/learningPath.png";
import hrPayroll from "../../assets/images/hrAndPayroll.png";
import sorting from "../../assets/images/sorting.jpeg";
import misc from "../../assets/images/misc.jpeg";
import portfolio from "../../assets/images/portfolio.jpeg";

const Projects = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const techStack = [
    "https://img.shields.io/badge/License-MIT-blue.svg",
    "https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge",
    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    "https://img.shields.io/badge/Openai-404D59?style=for-the-badge",
    "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    "https://img.shields.io/badge/Apache%20Web%20Server-404D59?style=for-the-badge",
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/JavaFX-208691?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/Maven-404D59?style=for-the-badge",
    "https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
    "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
  ];

  const projects = [
    {
      id: 1,
      title: "Chat Bot",
      image: chatbot,
      description:
        "This is a chat bot built with React.js, Node.js and Express.js, integrated with OpenAI's API to provide natural language processing capabilities. The bot can engage in conversations with users, answer questions, and provide responses based on the context of the conversation.",
      githubLink: "https://github.com/tyleroneil72/react-chat-bot",
      techstack: [
        techStack[0],
        techStack[1],
        techStack[2],
        techStack[3],
        techStack[4],
      ],
    },
    {
      id: 2,
      title: "Learning Path Creator",
      image: learningPath,
      description:
        "The Learning Path Creator is a full stack web application designed to facilitate collaborative learning and knowledge sharing. This project when deployed operates on the LAMP stack, leveraging Linux, Apache web server, MySQL, and PHP. Additionally, Bootstrap is employed for frontend development, ensuring a visually appealing and responsive website.",
      githubLink: "https://github.com/tyleroneil72/learning-path-creator",
      techstack: [
        techStack[0],
        techStack[5],
        techStack[6],
        techStack[7],
        techStack[8],
        techStack[9],
      ],
    },
    {
      id: 3,
      title: "Hr & Payroll Management System",
      image: hrPayroll,
      description:
        "This project represents a Human Resources Payroll System developed in Java, utilizing JavaFX and Maven for its implementation. FXML and CSS were used for styling. Completed as part of an 'Application Development Using Java' course, the system facilitates employee management functionalities such as addition, editing, and deletion from the payroll. Additionally, it provides the capability to generate individual employee reports.",
      githubLink: "https://github.com/tyleroneil72/hr-payroll-system",
      techstack: [
        techStack[0],
        techStack[10],
        techStack[11],
        techStack[12],
        techStack[13],
      ],
    },
    {
      id: 4,
      title: "Sorting Algorithm Visualizer",
      image: sorting,
      description:
        "This project is a web application designed to visualize the workings of various sorting algorithms, including Bubble Sort, Selection Sort, Insertion Sort, Heap Sort, and Quick Sort. Through dynamic and interactive visualizations, users can observe the step-by-step execution of these algorithms and compare their performance metrics.",
      githubLink:
        "https://github.com/tyleroneil72/sorting-algorithm-visualizer",
      productionLink:
        "https://htmlpreview.github.io/?https://github.com/tyleroneil72/sorting-algorithm-visualizer/blob/main/sorting_algorithms/index.html",
      techstack: [techStack[0], techStack[14], techStack[15], techStack[16]],
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: portfolio,
      description:
        "This is my portfolio website built using React (Vite), styled with Tailwind CSS, and hosted with Firebase. The site is designed to showcase my projects, skills, and experiences. Please note that this project is currently under active development. (This is the project you are currently viewing!)",
      githubLink: "https://github.com/tyleroneil72/portfolio-website",
      techstack: [techStack[1], techStack[17], techStack[18]],
    },
    {
      id: 6,
      title: "Miscellaneous Projects",
      image: misc,
      description:
        "Repo for my miscellaneous code, pet projects, or just code that doesn't fit into specific categories or projects.",
      githubLink: "https://github.com/tyleroneil72/misc-code",
      techstack: [techStack[0], techStack[19], techStack[20], techStack[21]],
    },
  ];

  return (
    <>
      <Notification
        text='If you like any of my projects check out my Github!'
        icon={Github}
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
                  className='text-blue-500 hover:underline'
                >
                  <Github />
                  Github
                </a>
                {project.productionLink && (
                  <a
                    href={project.productionLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:underline'
                  >
                    <Gear />
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
