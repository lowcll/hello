import React from 'react'
import Title  from '../layouts/Title'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../../constants'


const Projects = () => {
  return (
    <section
        id="projects"
        className='w-full py-20 border-b-[1px] border-b-black'
    >
    <div className='flex justify-center items-center text-center'>
        <Title 
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
        />
    </div>
        <div className='flex items-center justify-center flex-col pt-20 pb-20'>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    }
                }}
            
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='max-w-[80%] lg:max-w-[90%]'
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                    <div className="flex flex-col gap-6 group relative text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[600px] lg:w-[350px] overflow-hidden cursor-pointer bg-gradient-to-r from-bodyColor to-{#8C8C8C} group hover:bg-gradient-to-b hover:from-grey hover:to-[#C9CAC9] transition-colors duration-100">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.backgroundImage})` }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                        <div className="relative flex flex-col gap-3">
                            <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                            <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                            <p className="lg:text-[18px]">{item.content} </p>
                        </div>
                        <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                </SwiperSlide>
                            ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Projects