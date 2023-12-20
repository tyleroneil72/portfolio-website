import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='relative'>
      <div className='overflow-hidden w-full'>
        <div
          className='flex justify-center align-center' // Add justify-center class here
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className='w-full flex-shrink-0'>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <button
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md'
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md'
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
