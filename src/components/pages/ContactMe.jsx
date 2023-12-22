import { useState, useEffect } from "react";
import Title from "../Title";
import ContactForm from "../ContactForm";

const ContactMe = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 ml-[5.5rem] flex mr-5 transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Title title='Contact Me' />

      <div className={containerClasses}>
        <div className='bg-gray-100 rounded-lg shadow-md p-6 w-full'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>
            Let's Connect!
          </h2>

          <p className='text-lg mb-4 text-gray-800'>
            Thank you for visiting my website. I'd love to hear from you! Please
            feel free to reach out using the form below or at my email address
            directly{" "}
            <span className='text-blue-500'>tyleroneildev@gmail.com</span>.
          </p>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
