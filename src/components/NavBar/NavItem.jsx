import { useState } from "react";
import { motion } from "framer-motion";

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
      {isHovered && (
        <div className='fixed top-0 left-full ml-4 bg-gray-400 text-white rounded-md shadow-md p-4 z-50 max-w-xs truncate'>
          {title}
        </div>
      )}
    </motion.button>
  );
};

export default NavItem;
