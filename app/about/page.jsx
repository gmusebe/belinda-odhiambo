"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { cursorContext } from "@/components/cursorContext";
import Image from "next/image";
import StatsItem from "@/components/StatsItem";


const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(cursorContext);
  return (
    <motion.section
     initial={{opacity:0}}
     animate={{ opacity: 1, transition: { delay: 2 } }}
     className="min-h-screen flex item-center overflow-x-hidden"
  >
    <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
        {/* image */}
        <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        initial={{ opacity: 0, x: -60}}
        animate={{
          opacity: 1,
          x:0,
          transition: {delay: 2, duration: 0.8, ease: "easeInOut"}
        }}
        className="relative w-[304px] h-[420px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0" >
          <Image
            src="/assets/about/belindaLogo1.svg"
            fill quality={100}
            priority
            alt=""
            className="object-contain"
          />
        </motion.div>
        {/* text */}
        <motion.div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, x: 60}}
          animate={{
            opacity: 1,
            x:0,
            transition: {delay: 2.4, duration: 0.8, ease: "easeInOut"}
          }}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0"
        >
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none text-5xl"  >
            Tailored Solutions for Your Success
          </h2>
          <p className="lead max-w-[600px] mx-auto font-primary">
             I am Belinda, dedicated to understanding your unique challenges and tailoring solutions that address them precisely.
             I believe in a personalized approach that not only meets your needs but also aligns with your long-term
             goals. Let me be your partner in navigating every step toward success.
          </p>
          {/* Items */}
          <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
            <div>
              <StatsItem countNum={13} text="Years on Market" />
            </div>
            <div>
              <StatsItem countNum={35} countText="k+" text="Satisfied Clients"/>
            </div>
            <div>
            <StatsItem countNum={99} countText="%" text="Service Excellence"/>
            </div>
          </div>
          {/* btn */}
          <button className="btn mx-auto xl:mx-0">Contact Me</button>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default About