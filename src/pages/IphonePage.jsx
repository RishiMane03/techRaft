import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, useScroll, useTransform } from 'framer-motion';
import NavbarProducts from '../components/NavbarProducts';
import iphonePageVideo from '../videos/iphonePage.mp4';
import products from "../utils/products"
import Card from '../components/Card';

function IphonePage() {

  const features = Object.values(products.iphoneFeature);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  // Track scroll position
  const { scrollYProgress } = useScroll();

  // Apply scale transformation based on scroll position with a slower range
  const videoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]); // Slows down the shrinking effect
  
  return (
    <div>
      <NavbarProducts />
      {/* Content Section */}
      <div className="px-20 py-10">
        <div className="flex items-center justify-center sm:justify-between py-2 flex-wrap text-center">
          <motion.h1
            className="text-6xl text-[#1d1d1f] font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            iPhone
          </motion.h1>

          <motion.p
            className="text-2xl text-[#1d1d1f] font-semibold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Designed to be loved.
          </motion.p>
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        className="w-full h-[95vh] overflow-hidden rounded-xl mx-auto"
        style={{ scale: videoScale }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }} 
      >
        <video
          autoPlay
          loop
          muted
          src={iphonePageVideo}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* cards */}
      <div className="px-20 py-10">
        <motion.h1 
          className='text-[#1d1d1f] font-semibold text-3xl sm:text-5xl'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 0.8, ease: 'linear', delay: 0.5 }}
        >
          Get to know iPhone.
        </motion.h1>
        <div className='flex items-center justify-evenly flex-wrap'>
          {
            features.map((item, index) => (
              <motion.div
                key={index}
                className='relative mt-10 w-80' // Adjust the width to scale down
                whileHover={{ scale: 1.05 }} // Hover scaling effect
                initial={{ opacity: 0, y: 50 }} // Initial state (before appearing)
                animate={{ opacity: 1, y: 0 }} // Animate to final state
                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }} // Smooth staggered animation
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='rounded-2xl w-full object-cover object-top h-[80vh]' // Crop from the bottom
                />
                <div className='absolute top-0 left-0 text-white p-7 rounded-bl-lg'>
                  <h2 className='text-lg font-bold'>{item.title}</h2>
                  <h1 className='text-3xl font-semibold mt-2'>{item.description}</h1>
                </div>
              </motion.div>
            ))
          }
        </div>

      </div>

      {/* Products */}
      <div className="w-full min-h-screen mt-10 ">
        <div className='bg-[#F4F4F7] px-20 py-10 relative overflow-hidden'>
          <h1 className={`text-[#1D1D1F] mt-16 font-semibold ${isSmallScreen ?' text-3xl' : 'text-5xl'}`}>Explore the line-up.</h1>
          <div className='relative pt-10'>
          </div>
            <Card productName="iphone" />

            <div className='flex items-center justify-between text-sm opacity-30 mb-2 mt-20 h-3 w-full' style={{borderTop: "1px solid black"}}>
              <div className='pt-10'>
                <p>Copyright © 2024 TechRaft Inc. All rights reserved.</p>
              </div>

              <div className='pt-10'>
                <p>Privacy Policy | Terms of Use | Sales Policy | Legal Site Map</p>
              </div>

              <div className='pt-10'>
                <p>India</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default IphonePage;
