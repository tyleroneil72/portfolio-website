import { useState, useEffect, useMemo, lazy, Suspense } from "react";
const GitHubCalendar = lazy(() => import("react-github-calendar"));
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
    return `absolute mt-28 md:ml-[5.5rem] md:mr-5 ml-[4.5rem] mr-1 pb-10 transition-opacity duration-1000 md:w-[calc(100%-7rem)] w-[calc(100%-5rem)] ${
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

  const theme = {
    light: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
    dark: [
      "rgba(57,56,61,0.35)",
      "rgba(106,91,205,0.7)",
      "rgba(106,91,205,0.8)",
      "rgba(106,91,205,0.9)",
      "rgba(106,91,205,1)",
    ],
  };

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
            you to explore the site and delve into my showcased work. Each
            project reflects both my skills and my passion for creating
            impactful digital solutions. For collaborations, inquiries, or
            discussions, please feel free to reach out. Your interest and
            perspectives are highly valued.
          </p>
          {/* Github API Rate Limit sometimes will exceed. */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='w-full'>
              <a
                href='https://github.com/tyleroneil72/GPTerminal'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=tyleroneil72&repo=GPTerminal&theme=material-palenight&title_color=FFF'
                  alt='Github Repo Card'
                  className='w-full h-auto rounded-lg shadow-md transition-transform transform-gpu md:hover:scale-105 hover:scale:100'
                  loading='lazy'
                />
              </a>
              <p className='text-center flex items-center justify-center pt-3'>
                <span className='text-slate-50 bg-indigo-500 rounded flex items-center px-3 py-2'>
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
          <div className='flex align-center justify-center mt-5'>
            <div className='rounded-lg bg-slate-50 p-4 max-w-full overflow-hidden'>
              <Suspense fallback={<div>Loading Calendar...</div>}>
                <GitHubCalendar
                  username='tyleroneil72'
                  fontSize={16}
                  blockSize={14}
                  blockMargin={2}
                  blockRadius={0}
                  theme={theme}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
