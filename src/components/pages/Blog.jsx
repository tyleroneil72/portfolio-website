import { useState, useEffect } from "react";
import Title from "../Title";
import Notification from "../effects/Notification.jsx";
import { IconContext } from "react-icons";
import { LuConstruction } from "react-icons/lu";

/* 
  TODO: Use react router to link to blog posts.
        This page will display all blog posts at a high level
        and will link to the individual blog posts.
*/
const Blog = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClasses = `absolute mt-24 ml-[5.5rem] transition-opacity duration-1000 ${
    fadeIn ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <Notification
        text="I'm currently working on this page!"
        icon={() => (
          <IconContext.Provider value={{ className: "w-5 h-5" }}>
            <LuConstruction />
          </IconContext.Provider>
        )}
      />
      <Title title={"Blog"} />

      <div className={containerClasses}>
        <p>Coming Soon...</p>
      </div>
    </>
  );
};

export default Blog;
