"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { cursorContext } from "@/components/cursorContext";
import Image from "next/image";


const About = () => {
  return (
    <motion.section
     initial={{opacity:0}}
     animate={{ opacity: 1, transition: { delay: 2 } }}
     className="min-h-screen flex item-center overflow-x-hidden"
  >
    <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
        {/* image */}
        <div className="relative w-[304px] h-[420px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0" >
          <Image
            src="/assets/about/belindaLogo1.svg"
            fill quality={100}
            priority
            alt=""
            className="object-contain"
          />
        </div>
        {/* text */}
        <div className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
          <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none text-5xl"  >
            Committed to Inspiring Change and Compassionate Service
          </h2>
          <p>
            I’m Belinda Odhiambo, owner of Belshy Global, dedicated to empowering and supporting individuals and
            organizations through a diverse range of services. I am committed to helping people build resilience
            and navigate life’s challenges with strength. My work in humanitarian diplomatic chaplaincy reflects 
            my dedication to fostering compassion and understanding across communities. At Belshy Global, we offer
            personalized solutions designed to make a positive impact through purposeful engagement and compassionate care.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default About