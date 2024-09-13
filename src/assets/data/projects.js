import chatbot from "../images/chatbot.jpeg";
import learningPath from "../images/learningPath.png";
import hrPayroll from "../images/hrAndPayroll.png";
import sorting from "../images/sorting.jpeg";
import folder from "../images/folder.png";
import portfolio from "../images/portfolio.png";
import gpterminal from "../images/GPTerminal.png";
import chatRoom from "../images/chatRoom.png";
import connectFour from "../images/connectFour.png";
import webVoyager from "../images/webVoyager.png";
import duordle from "../images/duordle.png";
import techStack from "./techStack";

const projects = [
  {
    id: 1,
    title: "Duordle",
    image: duordle,
    description:
      "Duordle is an online game inspired by the popular Wordle, designed to offer a unique cooperative word-guessing experience for players. The game is built using a modern tech stack that includes MongoDB for data storage, Express.js and Node.js for backend functionality, React for the user interface, and TypeScript to ensure robust and maintainable code. Tailwind CSS is used to style the game for a sleek and responsive design across devices. The real-time gameplay is powered by Socket.io, allowing players to join or create rooms seamlessly. The game is hosted on Render, ensuring a reliable and scalable online experience for users.",
    githubLink: "https://github.com/tyleroneil72/duordle",
    productionLink: "https://duordle.net/",
    techstack: [
      techStack[0],
      techStack[1],
      techStack[26],
      techStack[17],
      techStack[2],
      techStack[3],
      techStack[33],
      techStack[24],
      techStack[34],
      techStack[18],
    ],
  },
  {
    id: 2,
    title: "Web Voyager",
    image: webVoyager,
    description:
      "Web Voyager is a comprehensive travel platform designed to simplify the planning process for travelers around the globe. This ASP.NET Core MVC application serves as a one-stop shop for booking flights, hotels, and car rentals, offering users a seamless and intuitive interface to explore a wide range of travel options. Implementing Microsoft's Identity Technology for Authorization and Authentication for security.",
    githubLink: "https://github.com/tyleroneil72/web-voyager",
    techstack: [
      techStack[0],
      techStack[28],
      techStack[20],
      techStack[14],
      techStack[15],
      techStack[7],
      techStack[16],
      techStack[29],
      techStack[6],
      techStack[30],
      techStack[31],
      techStack[32],
      techStack[27],
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "HR & Payroll Management System",
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
    id: 6,
    title: "GPTerminal",
    image: gpterminal,
    description:
      "GPTerminal is a CLI application that brings the power of chat-based GPT models to your terminal. With GPTerminal, you can have interactive conversations with an AI-powered chatbot right from your command line. This program is currently Linux and Mac only.",
    githubLink: "https://github.com/tyleroneil72/GPTerminal",
    techstack: [
      techStack[0],
      techStack[19],
      techStack[8],
      techStack[22],
      techStack[23],
      techStack[4],
    ],
  },
  {
    id: 7,
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
    id: 8,
    title: "Chat Room",
    image: chatRoom,
    description:
      "This is a chatroom application built to understand the workings of WebSockets. The application allows users to join different chat rooms, send messages in real-time, and see active participants in each room.",
    githubLink: "https://github.com/tyleroneil72/chat-room",
    techstack: [
      techStack[0],
      techStack[1],
      techStack[26],
      techStack[2],
      techStack[3],
      techStack[25],
      techStack[24],
    ],
  },
  {
    id: 9,
    title: "Minimax Algorithm for the Connect Four Game",
    image: connectFour,
    description:
      "This project features a Java application of Connect Four, using a Minimax algorithm with alpha-beta pruning for the AI. The Minimax algorithm is employed to forecast possible moves and their outcomes, enabling the AI to make strategic decisions. Alpha-beta pruning is integrated to trim down the search tree, reducing the number of nodes evaluated and speeding up the decision process. This results in a more challenging and efficient AI opponent.",
    githubLink: "https://github.com/tyleroneil72/connect-four-mini-max",
    techstack: [techStack[0], techStack[10]],
  },
  {
    id: 10,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "This is my portfolio website built using React (Vite), styled with Tailwind CSS, and hosted with Render. The site is designed to showcase my projects, skills, and experiences. Please note that this project is currently under active development. (This is the project you are currently viewing!)",
    githubLink: "https://github.com/tyleroneil72/portfolio-website",
    techstack: [techStack[1], techStack[17], techStack[18], techStack[24]],
  },
  {
    id: 11,
    title: "Miscellaneous Projects",
    image: folder,
    description:
      "Repository for my miscellaneous code, pet projects, or just code that doesn't fit into specific categories or projects.",
    githubLink: "https://github.com/tyleroneil72/misc-code",
    techstack: [
      techStack[0],
      techStack[19],
      techStack[20],
      techStack[21],
      techStack[23],
    ],
  },
];

export default projects;
