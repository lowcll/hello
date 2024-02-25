import React from 'react';
import { motion } from 'framer-motion';

const ResumeCard = ({ title, subTitle, result, des }) => {
  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="w-full group flex">
      <motion.div 
        className='w-full bg-white bg-opacity-90 duration-300 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 shadow-shadowOne hover:bg-gradient-to-r from-gray-100 to-[#C9CAC9]'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }} // Adjust 'amount' as needed
        variants={cardVariants}
      >
          <div className='flex justify-between items-center'>
              <div>
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl pt-3 font-semibold group-hover:text-black duration-300">
                      {title}
                  </h3>
                  <p className="text-base sm:text-sm md:text-sm lg:text-base mt-2 text-sky-600 group-hover:text-black duration-300">
                      {subTitle}
                  </p>
                  <p className="py-1 mt-2 text-sky-600 group-hover:text-black duration-300 flex text-xs font-xs text-center">
                      {result}
                  </p>
              </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-base pb-5 sm:pb-7 md:pb-10 lg:pb-10 font-medium text-sky-600 group-hover:text-black duration-300">
                <p>
                    Description:
                </p>
              {des}
          </p>
       </motion.div>
    </div>
  );
};

export default ResumeCard;
