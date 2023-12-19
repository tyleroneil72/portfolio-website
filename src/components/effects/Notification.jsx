import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Notification = ({ text, icon: Icon }) => {
  const [showNotification, setShowNotification] = React.useState(true);
  const isMobile = window.innerWidth <= 775; // Define your mobile threshold here

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <>
      {!isMobile && showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='fixed top-8 right-8 p-4 rounded-lg shadow-md flex items-center bg-indigo-400'
        >
          {Icon && (
            <div className='mr-4'>
              <Icon />
            </div>
          )}
          <p className='text-gray-50'>{text}</p>
          <button onClick={handleClose} className='ml-4'>
            <FiX className='w-4 h-4 text-gray-200 cursor-pointer' />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Notification;
