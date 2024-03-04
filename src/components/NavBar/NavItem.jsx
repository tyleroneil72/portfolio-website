import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// Custom hook for checking window size
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

const NavItem = ({ children, selected, id, setSelected, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [width] = useWindowSize();
  const isMobile = width <= 768; // 768px is the breakpoint for mobile

  const handleHover = (hovered) => {
    if (!isMobile) {
      setIsHovered(hovered);
    }
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
      <AnimatePresence>
        {!isMobile && isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className='fixed top-0 left-full ml-4 text-gray-200 bg-indigo-500 rounded-md shadow-md px-3 py-2 z-50 max-w-xs truncate'
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
