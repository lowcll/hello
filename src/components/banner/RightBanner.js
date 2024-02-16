import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className='flex-1 flex justify-center items-center relative max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
        <img className="w-full max-w-[425px] h-auto z-10"
             src={bannerImg}
             alt="Banner"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[425px] h-56 lg:h-72 xl:h-80 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
