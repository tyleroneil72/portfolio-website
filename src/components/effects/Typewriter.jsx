import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // blinking cursor interval

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className='relative'>
      <span className='font-sans'>{currentText}</span>
      <span
        className={`absolute opacity-25 ${showCursor ? "visible" : "hidden"} `}
      >
        |
      </span>
    </span>
  );
};

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  infinite: PropTypes.bool.isRequired,
};

export default Typewriter;
