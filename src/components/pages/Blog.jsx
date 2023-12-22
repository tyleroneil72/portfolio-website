import { useState, useEffect } from "react";
import Title from "../Title";

const Blog = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-28 ml-[5.5rem] transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Title title={"Blog"} />

      <div className={containerClasses}>
        <p className='mt-2'>Coming Soon...</p>
      </div>
    </>
  );
};

export default Blog;
