import Typewriter from "./effects/Typewriter";
import headshot from "../assets/headshot.jpg";

function HomePage() {
  return (
    <>
      <h1 className='text-4xl font-bold text-slate-100'>Home Page</h1>
      <div>
        <Typewriter text='Welcome to My Website' delay={100} infinite={false} />
      </div>
    </>
  );
}

export default HomePage;
