import Github from "./svgs/Github";
import LinkedIn from "./svgs/LinkedIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='fixed bottom-1 right-5 max-w-md mx-auto bg-slate-950 rounded-md px-3 py-1 w-auto'>
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
