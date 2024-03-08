import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Notification = ({ text, icon: Icon }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClose = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isMobile && showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.3 } }}
          transition={{ duration: 0.4 }}
          className='fixed top-6 right-6 p-4 rounded-lg shadow-md flex items-center bg-indigo-500 z-50'
          key='notification'
        >
          {Icon && (
            <div className='mr-4'>
              <Icon />
            </div>
          )}
          <p className='text-gray-50'>{text}</p>
          <button
            onClick={handleClose}
            className='ml-4'
            aria-label='Close notification'
          >
            <FiX className='w-4 h-4 text-gray-200' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default Notification;
