import React from 'react'

const ResumeCard = ({title, subTitle, result, des}) => {
  return (
    <div className="w-full h-1/3 group flex">
        <div className="w-10 h-[6px] bgOpacity mt-16 relative">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300">

                </span>
            </span>
        </div>
        <div className='w-full bg-white bg-opacity-90 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-xl md:text-xl pt-3 font-semibold group-hover:text-black duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mt-2 text-sky-600 group-hover:text-black duration-300">
                        {subTitle}
                    </p>
                </div>
                <div>
                    <p className="px-1 py-1 mt-1 text-designColor bg-white bg-opacity-90 rounded-lg flex justify-center items-center shadow-shadowOne text-xs font-small text-center">
                    {result}
                </p>
          </div>
            </div>
            <p className="text-sm md:text-base pb-3 font-medium text-sky-600 group-hover:text-black duration-300">
                {des}
            </p>
         </div>
    </div>
  )
}

export default ResumeCard