import Typewriter from "./effects/Typewriter";

const Title = ({ title }) => {
  return (
    <div className='h-screen w-screen flex flex-col ml-20'>
      <h1 className='text-4xl font-bold text-slate-100 mt-8 mb-4 ml-4'>
        <Typewriter text={title} delay={70} infinite={false} />
      </h1>
    </div>
  );
};

export default Title;
