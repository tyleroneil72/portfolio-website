import Typewriter from "./effects/Typewriter";
import headshot from "../assets/headshot.jpg";

function HomePage() {
  return (
    <>
      <h1 className='text-4xl font-bold text-slate-100'>Home Page</h1>
      {/* Needs Fix */}
      <div className='relative'>
        <img
          src={headshot}
          alt='Headshot photo of Tyler Oneil'
          className='h-40 w-40'
        />
      </div>
      <Typewriter text='Welcome to My Website' delay={100} infinite={false} />
    </>
  );
}

export default HomePage;
