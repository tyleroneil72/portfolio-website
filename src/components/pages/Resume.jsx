import { useState, useEffect } from "react";
import Title from "../Title";

const Resume = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Resume"} />

      <div
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* TODO: Fill out, Maybe delete this, but if not needs to look nicer*/}
        {/* <div className='mb-8'>
          <iframe
            src='/resume.pdf'
            className='w-full h-96 border-2 border-gray-300 rounded-md shadow-md'
            title='Resume'
          />
        </div> */}
        <a
          href='/resume.pdf'
          class='relative px-5 py-2 font-medium text-white group'
          target='_blank'
        >
          <span class='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12'></span>
          <span class='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12'></span>
          <span class='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12'></span>
          <span class='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12'></span>
          <span class='relative'>View Resume</span>
        </a>
      </div>
    </>
  );
};

export default Resume;
