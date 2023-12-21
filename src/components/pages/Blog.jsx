import { useState, useEffect } from "react";
import Title from "../Title";

const Blog = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Blog"} />

      <div
        className={`absolute mt-28 ml-[5.5rem] transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2'>Coming Soon...</p>
      </div>
    </>
  );
};

export default Blog;
