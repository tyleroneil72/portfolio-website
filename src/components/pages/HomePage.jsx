import { useState, useEffect } from "react";
import Title from "../Title";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { BiAlarmExclamation } from "react-icons/bi";

function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 ml-[5.5rem] mr-5 transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Notification
        text="I'm currently seeking Summer 2024 Opportunities!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
            <BiAlarmExclamation />
          </IconContext.Provider>
        )}
      />
      <Title title={"Home Page"} />

      <div className={containerClasses}>
        <div className='bg-gray-300 p-6 rounded-lg shadow-md text-gray-800'>
          <p className='text-lg font-semibold mb-4'>Welcome To My Website!</p>
          <p className='text-base'>
            While I rework my site feel free to connect with me on{" "}
            <a
              className='text-blue-500 hover:underline'
              target='_blank'
              href='https://www.linkedin.com/in/tyler-oneil-dev/'
            >
              LinkedIn
            </a>{" "}
            or check out my github projects{" "}
            <a
              className='text-blue-500 hover:underline'
              target='_blank'
              href='https://github.com/tyleroneil72'
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
