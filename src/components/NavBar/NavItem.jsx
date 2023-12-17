import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ children, selected, id, setSelected, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  return (
    <motion.button
      className='p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative z-10'
      onClick={() => setSelected(id)}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className='block relative z-10'>{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            key='highlight'
            className='absolute inset-0 rounded-md bg-indigo-600 z-0'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className='fixed top-0 left-full ml-4 bg-gray-400 text-white rounded-md shadow-md px-3 py-2 z-50 max-w-xs truncate'
        >
          {title}
        </motion.div>
      )}
    </motion.button>
  );
};

export default NavItem;
