import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { MdWebStories, MdSupportAgent } from "react-icons/md";
import { FaDatabase, FaCamera } from "react-icons/fa";

const features = () => {
  return (
    <section id='features' className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
        <div className="grid grid-cols-2 gap-20">
          <Card 
            title="Web Development"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            icon={<MdWebStories/>}
          />
          <Card 
            title="Technical Support"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            icon={<MdSupportAgent/>}
          />
          <Card 
          title="Database Builder"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          icon={<FaDatabase/>}
          />
          <Card 
          title="UX/UI Designer"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          icon={<FaCamera/>}
          />
        </div>
    </section>
  )
}

export default features