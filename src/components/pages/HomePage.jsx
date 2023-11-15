import { useState, useEffect } from "react";
import headshot from "../../assets/headshot.jpg";
import Title from "../Title";

function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Home Page"} />

      <div
        className={`absolute mt-40 ml-20 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='bg-gray-100 p-6 rounded-lg shadow-md text-gray-800'>
          <p className='text-lg font-semibold mb-4'>Site Coming Soon</p>
          <p className='text-base'>
            I am currently reworking my website. Stay tuned! Feel free to
            connect with me on&nbsp;
            <a
              class='text-blue-500 hover:underline'
              target='_blank'
              href='https://www.linkedin.com/in/tyler-oneil-dev/'
            >
              LinkedIn
            </a>
            .&nbsp;Check out my&nbsp;
            <a
              class='text-blue-500 hover:underline'
              target='_blank'
              href='https://github.com/tyleroneil72'
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
