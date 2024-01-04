import { useState, useEffect, useMemo } from "react";
import Title from "../Title";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { BiAlarmExclamation } from "react-icons/bi";
import { FaArrowTurnUp } from "react-icons/fa6";
import { MdOutlineWavingHand } from "react-icons/md";
import { motion } from "framer-motion";

function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Use useMemo for containerClasses to prevent unnecessary calculations
  const containerClasses = useMemo(() => {
    return `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-20 mr-0 pb-10 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-6rem)] ${
      fadeIn ? "opacity-100" : "opacity-0"
    }`;
  }, [fadeIn]);

  const iconProvider = useMemo(
    () => (
      <IconContext.Provider value={{ className: "w-5 h-5" }}>
        <BiAlarmExclamation />
      </IconContext.Provider>
    ),
    []
  );

  return (
    <>
      <Notification
        text="I'm currently seeking Summer 2024 Opportunities!"
        icon={() => iconProvider}
      />
      <Title title={"Home Page"} />

      <div className={containerClasses}>
        <div className='bg-slate-300 p-6 rounded-lg shadow-md text-gray-800 mb-8 md:mb-16 h-full'>
          <h2 className='text-3xl mb-4 font-semibold'>
            Welcome To My Website!
            <span className='inline-block ml-3'>
              <motion.span
                className='inline-block animate-waving-hand'
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -40, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <MdOutlineWavingHand />
              </motion.span>
            </span>
          </h2>
          <p className='mb-6 rounded bg-slate-50 px-3 py-2'>
            Here, I present a collection of my projects and skills. I encourage
            you to explore the site and delve into the showcased projects.
            Should you have any inquiries or wish to get in touch, please feel
            free to contact me.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='w-full'>
              <a
                href='https://github.com/tyleroneil72/portfolio-website'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneil72&repo=portfolio-website&theme=material-palenight&title_color=FFF'
                  alt='Github Repo Card'
                  className='w-full h-auto rounded-lg shadow-md transition-transform transform-gpu md:hover:scale-105 hover:scale:100'
                  loading='lazy'
                />
              </a>
              <p className='text-center flex items-center justify-center pt-3'>
                <span className='text-gray-200 bg-indigo-500 rounded flex items-center px-3 py-2'>
                  I am currently Working on&nbsp;&nbsp; <FaArrowTurnUp />
                </span>
              </p>
            </div>
            <img
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=tyleroneil72&layout=donut&theme=material-palenight&title_color=FFF'
              alt='Github Stats Card'
              className='w-full h-auto rounded-lg shadow-md'
              loading='lazy'
            />
            <img
              src='https://github-readme-stats.vercel.app/api?username=tyleroneil72&show_icons=true&theme=material-palenight&hide_rank=true&title_color=FFF'
              alt='Github Stats Card'
              className='w-full h-auto rounded-lg shadow-md'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
