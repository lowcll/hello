import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Title from '../layouts/Title';
import { img1, img2, img3, img4, img5, vid1, vid2, vid3 } from '../../assets'; // Ensure these imports point to your actual images
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects() {
  const slides = [
    { 
      url: img1, 
      title: 'Personal Portfolio', 
      description: 'The current website that you are viewing!', 
      githubUrl: 'https://github.com/lowcll/portfolio.git',
      languages: ['HTML', 'Tailwind CSS', 'JavaScript', 'React.JS'],
    },
    { url: img2, 
      title: 'VIP Concierge Service Web Application', 
      description: 'Spearheaded development of a mock coorporation consiting of different travel plans and destinations. Created a dynamic review section where reviews are uploaded at real time', 
      githubUrl: 'https://github.com/lowcll/VIP-Concierge-Service.git', 
      languages: ['HTML', 'CSS', 'JavaScript'],
      videoUrl: vid1,
    },
    { url: img3, 
      title: 'Find Your Match Web Application', 
      description: 'Led Javascript development within this application to display mock atheltic arenas and parks for a new athletic company.', 
      githubUrl: 'https://github.com/lowcll/Find-Your-Match.git',
      languages: ['HTML', 'CSS', 'JavaScript'],
      videoUrl: vid2, 
    },
    { url: img4, 
      title: 'University Database', 
      description: 'Utilized MySQL and over 20 different queries with set theory to create a mock database of information within a university. Alongside this an admin page was created to display all information ranging from student records to financial payments.', 
      githubUrl: 'https://github.com/lowcll/University-Database.git',
      languages: ['C#', 'MySQL'],
      videoUrl: vid3, 
    },
    { url: img5, 
      title: 'Slack-Simulator', 
      description: 'Created a Chat Room simulator that connects to a port with a valid IP address. Included within this has a members list as well as a history of messages found within the system.', 
      githubUrl: 'https://github.com/lowcll/Slack-Simulator',
      languages: ['Java'],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return prevIndex < slides.length - 1 ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : slides.length - 1;
      }
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  const animation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 2.5 } },
  };

  return (
    <motion.section
      id="projects"
      className="w-full py-10 border-b border-black sm:py-20"
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={animation}
    >
      <div className="flex justify-center items-center text-center px-4 sm:px-6 lg:px-8 xl:px-10">
        <Title title="VISIT MY PORTFOLIO AND SEND YOUR FEEDBACK" des="My Projects" />
      </div>
      <div className="max-w-7xl w-full m-auto py-8 px-2 sm:py-16 sm:px-4 lg:px-6 xl:px-8 relative group flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {[-1, 0, 1].map((position) => {
          const cardIndex = currentIndex + position < 0 ? slides.length + (currentIndex + position) : (currentIndex + position) % slides.length;
          const slide = slides[cardIndex];
          return (
            <div key={cardIndex} className={`transition-opacity duration-500 transform ${position === 0 ? 'opacity-100 scale-105' : 'opacity-50 scale-100 blur-sm'} flex-none 
            w-11/12 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}>
              <img src={slide.url} alt={slide.title} className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-t-lg" />
              <div className="bg-white shadow-lg rounded-b-lg p-4 sm:p-6 md:p-8">
                <div className="font-bold text-xl mb-2">{slide.title}</div>
                <p className="text-gray-700 text-base mb-2">
                  {slide.description}
                </p>
                <div>
                  {slide.languages && slide.languages.map((language, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-teal-300 hover:cursor-pointer sm:px-3 sm:py-1 sm:text-sm md:px-3 md:py-1 md:text-sm">
                      {language}
                    </span>
                  ))}
                </div>
                <a href={slide.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm mt-4 inline-block">
                  View on GitHub
                </a>
                {slide.videoUrl && (
                  <a href={slide.videoUrl} target="_blank" rel="noopener noreferrer" className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm mt-4 inline-block">
                    Live Demo!
                  </a>
                )}
              </div>
            </div>
          );
        })}
        <BsChevronCompactLeft className="absolute left-0 text-3xl sm:text-4xl rounded-full p-2 bg-black/40 text-white cursor-pointer" onClick={() => navigateSlide('prev')} />
        <BsChevronCompactRight className="absolute right-0 text-3xl sm:text-4xl rounded-full p-2 bg-black/40 text-white cursor-pointer" onClick={() => navigateSlide('next')} />
      </div>
    </motion.section>
  );
}

export default Projects;