import Typewriter from "./effects/Typewriter";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Typewriter text='Welcome to My Website' delay={100} infinite={false} />
    </div>
  );
}

export default HomePage;
