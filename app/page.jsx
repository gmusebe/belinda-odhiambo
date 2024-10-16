"use client"

import { motion } from "framer-motion";
import { useContext } from "react";
import { cursorContext } from "@/components/cursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(cursorContext);
  return (
  <motion.section
  initial={{ opacity:0 }}
  animate={{opacity: 1, transition: { delay: 2 } }}
  className="min-h-screen flex items-center overflow-x-hidden"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center h-full">
        {/* text */}
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition:{ delay: 2, duration: 1, ease: "easeInOut" } 
        }}
        className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
          <motion.h1
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h1 mb-6">
            Belinda Odhiambo <br /> <h className="text-5xl">Your Solution Partner</h>
          </motion.h1>
          <motion.p
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="lead max-w-xl mx-auto"
          >
            Personalized solutions designed to fulfill your specific needs in the pursuit of your purpose.
          </motion.p>
          <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
            <motion.button
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn btn-lg"
            >
              Book an appointment
            </motion.button>
            <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            >
              <ModalVideo />
            </motion.div>
          </div>
        </motion.div>
        {/* image */}
        <div className="flex-1">
          <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            bottom: 0,
            transition:{ delay: 2.4, duration: 1.2, ease: "easeInOut" } 
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex fixed bottom-0">
            <Image
            src={"/assets/home/belindaFront.png"}
            width={864}
            height={650}
            quality={100}
            alt=""
            />
          </motion.div>
        </div>
        
      </div>
    </div>
  </motion.section>
  );
};

export default Home