const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // TODO: Fix footer to look nicer and have content
    <footer className='fixed bottom-2 right-10 max-w-md mx-auto bg-slate-950 rounded-md pl-4 pr-4'>
      <p className='text-slate-100'>&copy; Tyler O'Neil {currentYear}</p>
    </footer>
  );
};

export default Footer;
