"use client"

import { motion } from "framer-motion";

const Home = () => {
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{
    opacity: 1,
    transition: {
      delay: 2
    }
  }}
  className="min-h-screen flex item-center overflow-x-hidden">
    Home Page
  </motion.div>
  );
};

export default Home