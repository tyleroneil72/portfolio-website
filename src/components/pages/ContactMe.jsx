import { useState, useEffect } from "react";
import Title from "../Title";

const ContactMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Contact Me"} />

      <div
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='bg-gray-300 rounded-lg shadow-md p-6 mr-4'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>
            Let's Connect!
          </h2>

          <p className='text-lg mb-4 text-gray-800'>
            Thank you for visiting my website. I'd love to hear from you! Please
            feel free to reach out using any of the following methods:
          </p>

          <div className='flex flex-col space-y-4'>
            <div>
              <h3 className='text-lg font-bold text-gray-800'>Email:</h3>
              <p className='text-gray-800'>tyleroneildev@gmail.com</p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-gray-800'>Social Media:</h3>
              <p className='text-gray-800'>
                Connect with me on{" "}
                <a
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  href='https://www.linkedin.com/in/tyler-oneil-dev/'
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  className='text-blue-500 hover:underline'
                  target='_blank'
                  href='https://www.github.com/tyleroneil72'
                >
                  Github
                </a>
                . Let's stay in touch!
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-gray-800'>Contact Form:</h3>
              <p className='text-gray-800'>
                Coming soon! In the meantime, please use the provided contact
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
