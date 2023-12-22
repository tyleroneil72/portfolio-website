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

  const containerClasses =
    "absolute mt-28 ml-[5.5rem] mr-5 transition-opacity duration-1000 w-[calc(100%-7rem)] " +
    (fadeIn ? "opacity-100" : "opacity-0");

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
        <div className='bg-gray-100 p-6 rounded-lg shadow-md text-gray-800 text-lg font-semibold mb-4 w-full'>
          <h2 className='text-2xl mb-2'>Welcome To My Website!</h2>
          <p className='mb-4'>
            I am currently working on enhancing my portfolio. Check out my
            latest updates below:
          </p>
          <div className='flex flex-col md:flex-row items-center w-full'>
            <a
              href='https://github.com/tyleroneil72/portfolio-website'
              target='_blank'
              rel='noopener noreferrer'
              className=''
            >
              <img
                src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneil72&repo=portfolio-website&theme=dark'
                alt='Github Repo Card'
                className='h-full'
              />
            </a>
            <img
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=tyleroneil72&layout=compact&theme=dark'
              alt='Github Stats Card'
              className='h-full'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
