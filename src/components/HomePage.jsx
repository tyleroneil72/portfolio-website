import Typewriter from "./effects/Typewriter";
import headshot from "../assets/headshot.jpg";

function HomePage() {
  return (
    <>
      {/* <img className='h-20 w-20' src={headshot} alt='' /> Needs resizing and formatting*/}
      <div className='max-w-md mx-auto'>
        <h1 className='text-4xl font-bold text-slate-100'>Home Page</h1>
        <Typewriter
          text='Welcome to My Website...'
          delay={100}
          infinite={false}
        />
      </div>
    </>
  );
}

export default HomePage;
