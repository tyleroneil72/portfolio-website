const Button = ({ href, type, text }) => {
  const buttonClasses = "relative px-5 py-2 font-medium text-white group mt-4";
  const isAnchor = href ? true : false;

  return (
    <>
      {isAnchor ? (
        <a href={href} className={buttonClasses} target='_blank'>
          <span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12'></span>
          <span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12'></span>
          <span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12'></span>
          <span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12'></span>
          <span className='relative'>{text}</span>
        </a>
      ) : (
        <button type={type} className={buttonClasses}>
          <span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-indigo-500 group-hover:bg-indigo-700 group-hover:skew-x-12'></span>
          <span className='absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-indigo-700 group-hover:bg-indigo-500 group-hover:-skew-x-12'></span>
          <span className='absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-indigo-600 -rotate-12'></span>
          <span className='absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-indigo-400 -rotate-12'></span>
          <span className='relative'>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
