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

  const projects = [
    {
      id: 1,
      title: "Chat Bot",
      image: chatbot,
      description:
        "This is a chat bot built with React.js, Node.js and Express.js, integrated with OpenAI's API to provide natural language processing capabilities. The bot can engage in conversations with users, answer questions, and provide responses based on the context of the conversation.",
      githubLink: "https://github.com/tyleroneil72/react-chat-bot",
    },
    {
      id: 2,
      title: "Learning Path Creator",
      image: learningPath,
      description:
        "The Learning Path Creator is a full stack web application designed to facilitate collaborative learning and knowledge sharing. This project when deployed operates on the LAMP stack, leveraging Linux, Apache web server, MySQL, and PHP. Additionally, Bootstrap is employed for frontend development, ensuring a visually appealing and responsive website.",
      githubLink: "https://github.com/tyleroneil72/learning-path-creator",
    },
    {
      id: 3,
      title: "Hr & Payroll Management System",
      image: hrPayroll,
      description:
        "This project represents a Human Resources Payroll System developed in Java, utilizing JavaFX and Maven for its implementation. FXML and CSS were used for styling. Completed as part of an 'Application Development Using Java' course, the system facilitates employee management functionalities such as addition, editing, and deletion from the payroll. Additionally, it provides the capability to generate individual employee reports.",
      githubLink: "https://github.com/tyleroneil72/hr-payroll-system",
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
    },
    {
      id: 5,
      title: "Portfolio Website",
      image: portfolio,
      description:
        "This is my portfolio website built using React (Vite), styled with Tailwind CSS, and hosted with Firebase. The site is designed to showcase my projects, skills, and experiences. Please note that this project is currently under active development. (This is the project you are currently viewing!)",
      githubLink: "link_to_github_project",
    },
    {
      id: 6,
      title: "Miscellaneous Projects",
      image: misc,
      description:
        "Repo for my miscellaneous code, pet projects, or just code that doesn't fit into specific categories or projects.",
      githubLink: "https://github.com/tyleroneil72/misc-code",
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
            className='border-2 border-gray-300 rounded-md p-6 bg-gray-300'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-80 object-cover rounded-md mb-4'
            />
            <h2 className='text-xl font-semibold mb-2 text-gray-900'>
              {project.title}
            </h2>
            <p className='text-gray-800 mb-4'>{project.description}</p>
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
