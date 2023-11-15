import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { SlUser, SlHome } from "react-icons/sl";
import { FaAddressCard } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { LuBinary } from "react-icons/lu";
import { PiBracketsCurlyFill } from "react-icons/pi";

import NavItem from "./NavItem";
// Icons from https://react-icons.github.io/react-icons/

// TODO: Make NavBar responsive and not overflow
const NavBar = ({ selected, setSelected }) => {
  return (
    <nav className='h-screen w-fit bg-slate-950 p-4 flex flex-col items-center gap-3'>
      {/* Main header icon */}
      <IconContext.Provider value={{ className: "w-11 h-11" }}>
        <div>
          <PiBracketsCurlyFill />
        </div>
      </IconContext.Provider>
      {/* Home Page */}
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <SlHome />
      </NavItem>
      {/* About Me */}
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <SlUser />
      </NavItem>
      {/* Projects */}
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <SiGithub />
      </NavItem>
      {/* Skills and Technology */}
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <LuBinary />
      </NavItem>
      {/* Contact Me */}
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <FaAddressCard />
      </NavItem>
      {/* Resume */}
      <NavItem selected={selected === 5} id={5} setSelected={setSelected}>
        <IoIosPaper />
      </NavItem>
      {/* Blog */}
      <NavItem selected={selected === 6} id={6} setSelected={setSelected}>
        <TfiWrite />
      </NavItem>
    </nav>
  );
};

export default NavBar;
