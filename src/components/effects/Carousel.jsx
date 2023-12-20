import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className='relative'>
      <div className='overflow-hidden w-full'>
        <div
          className='flex transition-transform ease-in-out duration-300'
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className='w-full flex-shrink-0'
              style={{ width: `${100 / totalSlides}%` }}
            >
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
