import { SiGithub } from "react-icons/si";
import { IoPerson } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";
// import { IoIosPaper } from "react-icons/io";
import mainIcon from "../../assets/images/portfolio.png";
import NavItem from "./NavItem";
import PropTypes from "prop-types";

const NavBar = ({ selected, setSelected }) => {
  const navSize = 17;
  return (
    <nav className='h-full w-fit bg-slate-950 p-[0.8rem] flex flex-col items-center gap-[0.6rem] fixed'>
      {/* Main header icon */}
      <img src={mainIcon} alt='Main Icon' className='w-10 h-10 my-3' />
      {/* Home Page */}
      <NavItem
        selected={selected === 0}
        id={0}
        setSelected={setSelected}
        title='Home'
      >
        <HiHome size={navSize} />
      </NavItem>
      {/* About Me */}
      <NavItem
        selected={selected === 1}
        id={1}
        setSelected={setSelected}
        title='About Me'
      >
        <IoPerson size={navSize} />
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
      {/* Experience */}
      <NavItem
        selected={selected === 3}
        id={3}
        setSelected={setSelected}
        title='Experience'
      >
        <MdOutlineWork size={navSize} />
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
      {/* <NavItem
        selected={selected === 5}
        id={5}
        setSelected={setSelected}
        title='Blog'
      >
        <IoIosPaper size={navSize} />
      </NavItem> */}
    </nav>
  );
};

NavBar.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default NavBar;
