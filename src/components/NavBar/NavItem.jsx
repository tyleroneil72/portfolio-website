import { AnimatePresence, motion } from "framer-motion";
// More information -> https://www.framer.com/motion/
const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className='p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative'
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className='block relative z-10'>{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className='absolute inset-0 rounded-md bg-indigo-600 z-0'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default NavItem;
