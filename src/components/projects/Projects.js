import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Title from '../layouts/Title';
import { img1 } from '../../assets';
import { img2 } from '../../assets';
import { img3 } from '../../assets';


function Projects() {
  const slides = [
    {
      url: img1,
      description: 'My personal portfolio you are currently looking at!',
      githubUrl: 'https://github.com/lowcll/hello'
    },
    {
      url: img2,
      description: 'A web application I spearheaded development for. Developed a dynamic and interactive review page.',
      githubUrl: 'https://github.com/lowcll'
    },
    {
        url: img3,
        description: 'Primary programmer for all JS functionality of this web application',
        githubUrl: 'https://github.com/lowcll'
      },
    // Add additional slides with local images, descriptions, and GitHub URLs
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    <section id="projects" className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-end p-8'
        >
          <div className='text-white bg-black/50 p-4 rounded-lg mb-4'>{slides[currentIndex].description}</div>
          <a href={slides[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View on GitHub</a>
        </div>
        <BsChevronCompactLeft className='absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={prevSlide} size={30} />
        <BsChevronCompactRight className='absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' onClick={nextSlide} size={30} />
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {slides.map((_, index) => (
            <RxDotFilled key={index} onClick={() => goToSlide(index)} className={`inline-block cursor-pointer ${currentIndex === index ? 'text-white' : 'text-white/50'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
