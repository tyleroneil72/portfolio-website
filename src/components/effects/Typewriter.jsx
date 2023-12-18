import React, { useState, useEffect } from "react";

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

  const textStyle = {
    fontFamily: "sans-serif", // Change this to the appropriate Segoe font name
  };

  const cursorStyle = {
    opacity: 0.25,
    visibility: showCursor ? "visible" : "hidden",
    fontFamily: "sans-serif",
  };

  return (
    <span className='relative'>
      <span style={textStyle}>{currentText}</span>
      <span style={cursorStyle}>|</span>
    </span>
  );
};

export default Typewriter;
