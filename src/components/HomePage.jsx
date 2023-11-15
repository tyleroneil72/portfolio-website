import Typewriter from "./effects/Typewriter";
import headshot from "../assets/headshot.jpg";

function HomePage() {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-slate-100 mt-16 mb-4 w-screen text-center'>
        Home Page
      </h1>
      <Typewriter
        text='Welcome to My Website...'
        delay={100}
        infinite={false}
      />
    </div>
  );
}

export default HomePage;
