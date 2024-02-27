import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { MdWebStories, MdSupportAgent } from "react-icons/md";
import { FaDatabase, FaFigma } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion

const Features = () => {
  // Variants for the container to stagger the children's animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
      },
    },
  };

  // Variants for each child (Card component)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='features' className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do"/>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show" // Animates the items when they come into view
          viewport={{ once: true }} // Ensures animation only happens once
        >
          <motion.div variants={itemVariants}>
            <Card 
              title="Web Development"
              des="I'm deeply interested in web design and front-end development, driven by a love for crafting visually appealing and user-friendly websites. My focus is on mastering HTML, CSS, JavaScript, and React to bring creative ideas and visualize data in a digital format. I'm passionate about staying up-to-date with the latest trends and technologies, aiming to make the web more engaging and accessible for everyone."
              icon={<MdWebStories />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              title="Technical Support"
              des="In my technical support experience, I've successfully resolved a wide range of issues, ensuring smooth technology operations and high satisfaction levels. This role involved troubleshooting software and hardware problems, managing technical assets, and developing efficient testing protocols to optimize team performance. My hands-on approach and problem-solving skills have significantly minimized downtime and enhanced productivity, making technology more accessible and reliable for users."
              icon={<MdSupportAgent />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              title="Database Building"
              des="I enjoy using SQL for creating databases and visualizing data, applying it to projects like developing a university system database. My skills in SQL have allowed me to design and manage databases, execute complex queries, and improve data interaction. This work includes building user-friendly interfaces and ensuring data integrity, making the process of data handling and visualization both efficient and satisfying."
              icon={<FaDatabase />}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card 
              title="UX/UI Designing"
              des="I'm passionate about UX and UI design, particularly using Figma for crafting digital interfaces and data visualization. With Figma, I delve into creating intuitive, visually compelling designs and prototypes, focusing on user-friendly layouts and interactions. My work emphasizes seamless user experiences, grounded in design best practices and enriched by incorporating data visualization to convey complex information in an accessible way."
              icon={<FaFigma />}
            />
          </motion.div>
        </motion.div>
    </section>
  );
}

export default Features;
