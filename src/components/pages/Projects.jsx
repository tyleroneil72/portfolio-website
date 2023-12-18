import { useState, useEffect } from "react";
import Title from "../Title";
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
      <Title title={"Projects"} />

      <div
        className={`absolute mt-28 ml-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 pb-8 transition-opacity duration-1000 ${
          fadeIn ? " opacity-100" : " opacity-0"
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className='border-2 border-gray-300 rounded-md p-4 bg-gray-300 flex flex-col'
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
                  className='w-full h-auto rounded-md mb-4 max-h-80 object-cover cursor-pointer'
                />
              </a>
              <h2 className='text-xl font-semibold mb-2 text-gray-900'>
                {project.title}
              </h2>
              <p className='text-gray-800 mb-4'>{project.description}</p>
            </div>

            <div className='mt-auto'>
              <div className='flex flex-wrap items-center justify-center mb-4'>
                {project.techstack &&
                  project.techstack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt='techstack'
                      className='h-6 mr-2 mb-2'
                    />
                  ))}
              </div>

              <div className='flex justify-between'>
                {/* Keep the GitHub link outside of the image */}
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-1 inline-block mb-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.338-3.369-1.338-.455-1.157-1.112-1.465-1.112-1.465-.908-.62.069-.608.069-.608 1.004.07 1.53 1.03 1.53 1.03.892 1.527 2.34 1.087 2.91.831.09-.645.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.68-.103-.253-.446-1.27.097-2.647 0 0 .84-.269 2.75 1.025A9.61 9.61 0 0110 4.79c.855.004 1.715.115 2.52.34 1.91-1.294 2.75-1.025 2.75-1.025.544 1.377.202 2.394.1 2.647.64.7 1.03 1.59 1.03 2.68 0 3.842-2.337 4.688-4.565 4.936.36.31.68.922.68 1.855 0 1.338-.012 2.416-.012 2.746 0 .267.18.578.688.48C17.138 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z'
                      clipRule='evenodd'
                    />
                  </svg>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
