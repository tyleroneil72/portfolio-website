import { IconContext } from "react-icons";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='fixed bottom-1 md:right-5 right-1 md:scale-100 scale-95 max-w-md mx-auto bg-slate-950 rounded-md px-3 py-1 w-auto'>
      <p className='text-slate-100'>
        <span className='flex'>
          &copy; {currentYear} Tyler O&apos;Neil
          <a
            href='https://github.com/tyleroneil72'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center mx-4 md:hover:underline transition duration-300'
          >
            <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
              <SiGithub />
            </IconContext.Provider>
            GitHub
          </a>
          <a
            href='https://linkedin.com/in/tyler-oneil-dev'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center md:hover:underline transition duration-300'
          >
            <IconContext.Provider value={{ className: "w-5 h-5 mr-1" }}>
              <SiLinkedin />
            </IconContext.Provider>
            LinkedIn
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
