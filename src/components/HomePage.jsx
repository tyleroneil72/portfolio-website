import Typewriter from "./effects/Typewriter";
import headshot from "../assets/headshot.jpg";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Typewriter text='Welcome to My Website' delay={100} infinite={false} />
      <img src={headshot} alt='Headshot photo of Tyler Oneil' />
    </div>
  );
}

export default HomePage;
