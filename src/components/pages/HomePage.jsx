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
        <p className='mt-2'>This is the homepage</p>
      </div>
    </>
  );
}

export default HomePage;
