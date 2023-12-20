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

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
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
              className='w-full flex items-center justify-center'
              style={{ width: `${100 / totalSlides}%` }}
            >
              <div className='relative'>
                {slide}
                <div className='absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-2'>
                  {labels[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md ${
          isAtFirstSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={prevSlide}
        disabled={isAtFirstSlide}
        aria-label='Previous Slide'
      >
        {"<"} Prev
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md ${
          isAtLastSlide ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={nextSlide}
        disabled={isAtLastSlide}
        aria-label='Next Slide'
      >
        Next {">"}
      </button>
    </div>
  );
};

export default Carousel;
