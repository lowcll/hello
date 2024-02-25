import React from 'react';
import { motion } from 'framer-motion'; // Import the motion component
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  // Define the initial and animate states for the fade-in animation
  const containerVariants = {
      hidden: { opacity: 0 }, // Start as invisible
      visible: { 
          opacity: 1, // Fade in to fully visible
          transition: { duration: 2 } // Customize the transition duration
      },
  };

  return (
    <motion.div 
      className='flex-1 flex justify-center items-center relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto'
      variants={containerVariants} // Apply the variants
      initial="hidden" // Initial state before animation
      animate="visible" // State after animation
    >
        <img className="w-full max-w-[426px] h-auto z-10"
             src={bannerImg}
             alt="Banner"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[425px] h-56 lg:h-72 xl:h-80 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </motion.div>
  );
}

export default RightBanner;
