import Typewriter from "./effects/Typewriter";

const Title = ({ title }) => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-slate-100 mt-16 mb-4 text-center'>
        <Typewriter text={title} delay={100} infinite={false} />
      </h1>
    </div>
  );
};

export default Title;
