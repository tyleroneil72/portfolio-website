import React from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ text, icon: Icon }) => {
  const [showNotification, setShowNotification] = React.useState(true);
  const isMobile = window.innerWidth <= 775;

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <AnimatePresence>
      {!isMobile && showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.3 } }}
          transition={{ duration: 0.4 }}
          className='fixed top-8 right-8 p-4 rounded-lg shadow-md flex items-center bg-indigo-500 z-50'
          key='notification'
        >
          {Icon && (
            <div className='mr-4'>
              <Icon />
            </div>
          )}
          <p className='text-gray-50'>{text}</p>
          <button onClick={handleClose} className='ml-4'>
            <FiX className='w-4 h-4 text-gray-200' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
