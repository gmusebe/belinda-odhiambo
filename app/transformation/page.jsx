"use client"
import { motion } from 'framer-motion';

const Transformation = () => {
  return (
  <motion.section
  initial={{opacity:0}}
  animate={{
    opacity: 1,
    transition: {
      delay: 2
    }
  }}
  className="min-h-screen flex item-center overflow-x-hidden">
    Transformation Page
  </motion.section>
  );
};

export default Transformation