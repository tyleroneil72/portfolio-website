import { IconContext } from "react-icons";
import { SiGithub } from "react-icons/si";
import { SlUser, SlHome } from "react-icons/sl";
import { FaAddressCard } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { LuBinary } from "react-icons/lu";
import { PiBracketsCurlyFill } from "react-icons/pi";
import NavItem from "./NavItem";
// Icons from https://react-icons.github.io/react-icons/

const NavBar = ({ selected, setSelected }) => {
  const navSize = 17;
  return (
    <nav className='h-full w-fit bg-slate-950 p-[0.8rem] flex flex-col items-center gap-[0.6rem] fixed'>
      {/* Main header icon */}
      <IconContext.Provider value={{ className: "w-10 h-10" }}>
        <PiBracketsCurlyFill />
      </IconContext.Provider>
      {/* Home Page */}
      <NavItem
        selected={selected === 0}
        id={0}
        setSelected={setSelected}
        title='Home Page'
      >
        <SlHome size={navSize} />
      </NavItem>
      {/* About Me */}
      <NavItem
        selected={selected === 1}
        id={1}
        setSelected={setSelected}
        title='About Me'
      >
        <SlUser size={navSize} />
      </NavItem>
      {/* Projects */}
      <NavItem
        selected={selected === 2}
        id={2}
        setSelected={setSelected}
        title='Projects'
      >
        <SiGithub size={navSize} />
      </NavItem>
      {/* Skills and Experience */}
      <NavItem
        selected={selected === 3}
        id={3}
        setSelected={setSelected}
        title='Skills'
      >
        <LuBinary size={navSize} />
      </NavItem>
      {/* Contact Me */}
      <NavItem
        selected={selected === 4}
        id={4}
        setSelected={setSelected}
        title='Contact Me'
      >
        <FaAddressCard size={navSize} />
      </NavItem>
      {/* Blog */}
      <NavItem
        selected={selected === 5}
        id={5}
        setSelected={setSelected}
        title='Blog'
      >
        <TfiWrite size={navSize} />
      </NavItem>
    </nav>
  );
};

export default NavBar;
