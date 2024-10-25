import React from 'react'
import Logo from '../assets/Logo.png'
import { motion } from "framer-motion";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { animationStart, reveal } from '../utils/animation';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    function handleNavigate(){
        navigate("/explore")
    }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          duration: 0.6,
          delayChildren: animationStart + 0.6,
        }}
        className="w-full flex items-center justify-around h-24 fixed top-0 bg-white z-100"
      >
        <motion.div variants={reveal}>
          <img src={Logo} alt="logo" width={220} />
        </motion.div>
        <div className="hidden sm:flex gap-[20px] items-center">
          <motion.span variants={reveal}>
            Phone.
          </motion.span>
          <motion.span variants={reveal}>
            Laptop.
          </motion.span>
          <motion.span variants={reveal}>
            Earphone.
          </motion.span>
        </div>
        <motion.div
          variants={reveal}
          className="flex gap-5 items-center cursor-pointer"
          onClick={handleNavigate}
        >
        <div className='exploreBtn'>
          <a className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-200 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-200 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Explore <ArrowForwardIcon className="ml-2 text-black group-hover:text-white transition-colors duration-200" /></span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar