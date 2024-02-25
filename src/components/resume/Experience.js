import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col items-center lg:flex-row gap-10 lg:gap-20 px-4 lg:px-0"
    >
      <div className="w-full lg:w-auto py-12 font-titleFont">
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2021-2025</p>
          <h2 className='text-2xl lg:text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-14 w-full flex flex-col gap-10 items-center'>
          <div className='w-full lg:w-auto h-auto flex flex-col gap-10'>
            <ResumeCard 
              title="Technical Support Associate II"
              subTitle="The George Washington University"
              result="Aug 2022 - Present"
              des="As a promotion from Tech Support I, I successfully handled more than 200 support issues throughout the entire university, leading to smooth operations within the support pod and proud customer satisfaction. I assisted over 50 faculty and staff with different software and system operations, such as recovering previous data and managing hardware assets for employees changing roles or newly hired employees. Additionally, I assisted in the creation of a new system for sorting and triaging support tickets, which saved the support team's work time by over 20 hours per week."
            /> 
            <ResumeCard 
              title="Retail Sales Associate"
              subTitle="Uniqlo"
              result="Sept 2022 - Nov 2023"
              des="Utilizing my technical skills from my position at the University, I resolved issues with the existing RFID and wireless scanning system, resulting in improved system performance and stability. Additionally, I skillfully assisted in managing store inventory and providing excellent customer assistance, contributing to maintaining stable and efficient daily operations.              "
            />
            <ResumeCard 
              title="Food Runner and Busser"
              subTitle="Harpoon Harry's"
              result="July 2022 - Aug 2022"
              des="I showcased multitasking abilities and a commitment to excellent customer service. I efficiently cleared and prepped tables, maintaining a clean and inviting dining environment for guests. I actively contributed the to kitchen by assisting in food preparation before service began."
            />
            <ResumeCard 
              title="Technical Support Associate I"
              subTitle="The George Washington University"
              result="Aug 2021 - May 2022"
              des="In my initial role at the School of Engineering, I assisted in over 100 support tickets, covering a range of issues from networking issues, software concerns, and hardware troubleshooting concerns. I provided front-desk technical support to more than 50 students in both the Engineering and Medical schools, where I successfully diagnosed and resolved various academic technical issues, ensuring the system remained highly functional. Furthermore, by using Apporto, I remotely accessed and resolved over 30 faculty and staff issues related to VPN and home networks, significantly minimizing downtime and boosting staff productivity."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
