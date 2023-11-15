import Typewriter from "../effects/Typewriter";
import headshot from "../../assets/headshot.jpg";
import Title from "../Title";

function HomePage() {
  return (
    <>
      <Title title={"Home Page"} />

      {/* Make this a component */}
      <div className='absolute mt-40 ml-20'>
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
