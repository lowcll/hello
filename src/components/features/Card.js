import React from 'react'
import {HiArrowRight} from "react-icons/hi";

const Card = ({title, des, icon}) => {
  return(
    <div className="w-full px-12 h-100 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-{#8C8C8C} group hover:bg-gradient-to-b hover:from-grey hover:to-[#C9CAC9] transition-colors duration-100 group">
        <div className='h-72 overflow-y-hidden'>
            <div className='flex h-full flex-col gap-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
                <div>
                    <span className='text-5xl text-designColor'>{icon}</span> 
                </div>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-2xl font-titleFont font-bold text-black'>
                        {title}
                    </h2>
                    <p className='base'>{des}</p>  
                    <span className='text-2xl text-designColor'>
                        <HiArrowRight />
                    </span>  
                </div>
            </div>
        </div>
    </div>
  );
}
    export default Card