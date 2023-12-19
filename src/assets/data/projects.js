import chatbot from "../images/chatbot.jpeg";
import learningPath from "../images/learningPath.png";
import hrPayroll from "../images/hrAndPayroll.png";
import sorting from "../images/sorting.jpeg";
import misc from "../images/misc.jpeg";
import portfolio from "../images/portfolio.jpeg";
import techStack from "./techStack";

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
    githubLink: "https://github.com/tyleroneil72/sorting-algorithm-visualizer",
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

export default projects;
