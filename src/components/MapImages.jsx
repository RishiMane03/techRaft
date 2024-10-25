import React from 'react';
import { motion } from 'framer-motion';
import { animationStart } from '../utils/animation';

function MapImages() {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-20 -z-10 overflow-hidden">
      <motion.img
        src="src/assets/map_1.png"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: 'tween',
          duration: 0.5,
        }}
        className="w-full h-[250px] max-w-[200px] lg:max-w-[300px] object-cover"
      />
      <motion.img
        src="src/assets/map_2.png"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: animationStart + 1.2,
          type: 'tween',
          duration: 0.5,
        }}
        className="w-full h-[250px] max-w-[200px] lg:max-w-[300px] object-cover"
      />
    </div>
  );
}

export default MapImages;
