import { useState, useEffect } from "react";
import Title from "../Title";
import ContactForm from "../ContactForm";
import { TfiEmail } from "react-icons/tfi";

const ContactMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 ml-[5.5rem] flex pb-14 transition-opacity duration-1000 w-[calc(100%-7rem)] ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Title title='Contact Me' />

      <div className={containerClasses}>
        <div className='bg-gray-300 rounded-lg shadow-md p-6 pb-10 w-full'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800 flex items-center'>
            Let's Connect!
            <span className='inline-block ml-2'>
              <TfiEmail />
            </span>
          </h2>

          <p className='text-lg mb-4 text-gray-800'>
            Thank you for visiting my website. I'd love to hear from you! Please
            feel free to reach out using the form below or my email address
            directly at{" "}
            <span className='text-blue-500'>tyleroneildev@gmail.com</span> and I
            will get back to you as soon as possible.{" "}
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
