import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Title from '../layouts/Title';
import { img1, img2, img3 } from '../../assets';

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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    <section id="projects" className='w-full py-20 border-b-[1px] border-b-black'>
      <style>
        {`
          @media (max-width: 768px) {
            .description-text {
              font-size: 0.75rem; /* Smaller font size on smaller screens */
            }
          }
        `}
      </style>
      <div className='flex justify-center items-center text-center'>
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className='max-w-[1400px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full' style={{ paddingTop: '56.25%', position: 'relative' }}>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='absolute top-0 left-0 w-full h-full rounded-2xl bg-center bg-cover duration-500 flex flex-col justify-end p-8'
          >
            <div className='text-white bg-black/50 p-2 rounded-lg mb-4 max-w-[80%] description-text'>{slides[currentIndex].description}</div>
            <a href={slides[currentIndex].githubUrl} target="_blank" rel="noopener noreferrer" className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs'>View on GitHub</a>
          </div>
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
