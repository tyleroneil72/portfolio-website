import { SiGithub } from "react-icons/si";
import { SlUser, SlHome } from "react-icons/sl";
import { FaAddressCard } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import NavItem from "./NavItem";
import { TfiWrite } from "react-icons/tfi";
// Icons from https://react-icons.github.io/react-icons/
const NavBar = ({ selected, setSelected }) => {
  return (
    <nav className='h-screen w-fit bg-slate-950 p-4 flex flex-col items-center gap-2'>
      {/* This svg is the top icon must change to something better */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <circle cx='12' cy='7' r='4' />
        <path d='M2 20s0-4 4-4h12s4 0 4 4' />
      </svg>

      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <SlHome />
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <SlUser />
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <SiGithub />
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <FaAddressCard />
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <IoIosPaper />
      </NavItem>
      <NavItem selected={selected === 5} id={5} setSelected={setSelected}>
        <TfiWrite />
      </NavItem>
    </nav>
  );
};

export default NavBar;
