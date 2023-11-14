import { useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import HomePage from "./components/HomePage.jsx";

const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className='bg-slate-900 text-slate-100 flex'>
        <NavBar selected={selected} setSelected={setSelected} />
        {/* Replace h1's with components once implemented */}
        {selected === 0 && <HomePage />}
        {selected === 1 && <h1>About Me</h1>}
        {selected === 2 && <h1>Projects</h1>}
        {selected === 3 && <h1>Skills and Technology</h1>}
        {selected === 4 && <h1>Contact Me</h1>}
        {selected === 5 && <h1>Resume</h1>}
        {selected === 6 && <h1>Blog</h1>}
      </div>
    </>
  );
};

export default App;
