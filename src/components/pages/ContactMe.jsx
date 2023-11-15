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
        className={`absolute mt-40 ml-20 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>Coming Soon...</p>
      </div>
    </>
  );
};

export default ContactMe;
