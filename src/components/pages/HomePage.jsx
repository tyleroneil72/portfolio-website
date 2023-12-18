import { useState, useEffect } from "react";
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
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='bg-gray-300 p-6 rounded-lg shadow-md text-gray-800 mr-6'>
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
