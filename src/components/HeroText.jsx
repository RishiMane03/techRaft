import React from 'react'
import { motion } from "framer-motion";
import Compass from "./Compass";
import { animationStart, reveal } from "../utils/animation";

function HeroText() {
  return (
    <div>
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-[3vw] md:text-[24px] font-bold mb-[30px] pt-[150px]"
      >
        <span className="flex items-center gap-[10px] text-[4vw]">
        showcasing <Compass /> apple's
        </span>
        <span className='text-[4vw] leading-[0.5]'>top electronics</span>
      </motion.div>
      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        className="pt-5 mb-[30px] w-1/2 lg:w-1/2 md:w-3/4 text-[14px] leading-tight"
      >
        Set sail with TechRaft! Explore our curated selection of laptops, iPhones, 
        and earphones, all displayed in a nautical theme. Find your perfect gadget and ride 
        the waves of technology today!
      </motion.span>
    </motion.div>
    </div>
  )
}

export default HeroText