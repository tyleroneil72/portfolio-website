import { useState, useEffect } from "react";
import Title from "../Title";

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Title title={"Skills"} />

      <div
        className={`absolute mt-36 ml-24 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className='mt-2 mb-5'>Coming Soon...</p>
        <div className='bg-white rounded-lg shadow-md p-6 mr-4'>
          <p className='mt-2 text-lg leading-relaxed text-gray-800'>
            <strong>Languages:</strong> Javascript/Typescript, Python, Java, C#,
            Bash, PHP, SQL
            <br />
            <strong>Technologies and Frameworks:</strong> Node.js, Express.js,
            React.js, Vite, Tailwind, Bootstrap, .NET
            <br />
            <strong>Databases:</strong> MySQL, Snowflake
            <br />
            <strong>Development Tools:</strong> AWS, Linux, Git/Github, Firebase
            Hosting, Wordpress, Jira, Confluence, Slack
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
