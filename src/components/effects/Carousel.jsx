import { useState } from "react";

const Carousel = ({ slides, labels }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const isAtFirstSlide = currentSlide === 0;
  const isAtLastSlide = currentSlide === totalSlides - 1;

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
              <p className='text-center'>{labels && labels[index]}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md ${
          isAtFirstSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={prevSlide}
        disabled={isAtFirstSlide}
        aria-label='Previous Slide'
      >
        Prev
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md ${
          isAtLastSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={nextSlide}
        disabled={isAtLastSlide}
        aria-label='Next Slide'
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
