import Github from "./svgs/Github";
import LinkedIn from "./svgs/LinkedIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='fixed bottom-2 right-0 md:right-10 max-w-md mx-auto bg-slate-950 rounded-md pl-4 pr-4 py-2 w-auto'>
      <p className='text-slate-100'>
        <span className='flex'>
          &copy; Tyler O'Neil {currentYear}
          <a
            href='https://github.com/tyleroneil72'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center mx-4 hover:scale-105 transition-transform duration-300'
          >
            <Github /> Github
          </a>
          <a
            href='https://linkedin.com/in/tyler-oneil-dev'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center hover:scale-105 transition-transform duration-300'
          >
            <LinkedIn /> LinkedIn
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
