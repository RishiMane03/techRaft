import React, { useEffect, useState } from 'react';
import NavbarProducts from '../components/NavbarProducts';
import { motion, useScroll, useTransform } from 'framer-motion';
import lowerCase from "../assets/products-images/airpod/lower_case.png";
import upperCase from "../assets/products-images/airpod/upper_case.png";
import left from "../assets/products-images/airpod/left.png";
import right from "../assets/products-images/airpod/right.png";
import AirpodCarousel from '../components/AirpodCarousel';

function AirpodPage() {

  const { scrollYProgress } = useScroll(); 
  const [transformEnd, setTransformEnd] = useState(650); // Default value for large screens

  // Update transformEnd based on the current screen size
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      setTransformEnd(screenHeight * 0.9); // Adjust based on 90% of screen height
    };
    
    handleResize(); // Call it initially to set the right value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Apply the dynamic y transform
  const y = useTransform(scrollYProgress, [0, 0.5], [0, transformEnd]);

  return (
    <div className='relative overflow-x-hidden'>
      <div className='bg-gray-100 h-[100vh] overflow-hidden flex flex-col items-center justify-center'>
        <div className='absolute top-0 z-40'>
          <NavbarProducts />
        </div>

        {/* Earbuds Section */}
        <motion.div 
          className='earbud flex z-20 absolute'
          style={{ y }}  // Apply slower scrolling transformation
          whileHover="hover"
        >
          {/* Left Earbud */}
          <motion.img 
            src={left} 
            alt="Left" 
            className='z-10' 
            variants={{
              hover: { y: -20 }  // Move up by 20px on hover
            }}
            transition={{
              type: "spring",    
              stiffness: 100,   
              damping: 10      
            }}
          />
          {/* Right Earbud */}
          <motion.img 
            src={right} 
            alt="Right" 
            className='z-10' 
            variants={{
              hover: { y: 20 }  // Move down by 20px on hover
            }}
            transition={{
              type: "spring",   
              stiffness: 100,    
              damping: 10      
            }}
          />
        </motion.div>

        {/* Intro Title Section */}
        <div className='introTitle flex items-center justify-around w-full z-10 relative p-10'>
          <h1 className='leftEarbud text-[#29292A] font-semibold -mt-56'>AIRPODS</h1>
          <h1 className='rightEarbud text-[#29292A] font-semibold mt-96'>EMPOWER</h1>
        </div>

        <div className='flex flex-col items-center justify-around w-full z-10 relative mb-10'>
          <p>The next evolution of sound and comfort.</p>
          <span>&darr;</span>
        </div>
      </div>

      {/* Second Section with Casing */}
      <div className='casing relative h-[100vh] flex flex-col items-center justify-center overflow-hidden'>
          <img 
            src={upperCase} 
            alt="Upper Case" 
            className='-mb-3' 
          />
          <img 
            src={lowerCase} 
            alt="Lower Case" 
            className='z-20' 
          />
          
          <div className='airpodDes gap-[60%] flex items-center p-20 justify-between z-30 w-full -mt-80'>
            <div className='content1 text-center flex flex-col items-center gap-3'>
              <p className='text-xl'>More Than</p>
              <h1 className='content2 text-6xl font-semibold'>24 hr</h1>
              <p className='text-xl w-3/4'>of battery life with charging case</p>
            </div>

            <div className='text-center flex flex-col items-center gap-3 -mx-16'>
              <p className='text-xl'>Only</p>
              <h1 className='text-6xl font-semibold'>15 min</h1>
              <p className='text-xl w-[50%]'>of charging provides upto 3 hours of listening time</p>
            </div>
          </div>
          <div className='hiddenContent hidden flex gap-10 font-bold text-[6vw]'>
            <p>24 hr battery</p>
            <p>02 hr charge</p>
          </div>
      </div>

      {/* carousel */}
      <div className=''>
        <AirpodCarousel/>
      </div>   

    </div>
  )
}

export default AirpodPage;
