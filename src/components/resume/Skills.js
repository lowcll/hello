import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lg:flex-row gap-10 px-4 lg:px-20 py-12"
      >
        {/* Design Skills Section */}
        <div className="flex-1">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">Design Skills</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Design Skill</h2>
          </div>
          <div className='mt-14 flex flex-col gap-6'>
            <SkillItem title="Visual Studio Code" percentage="90%" />
            <SkillItem title="Visual Studio" percentage="80%" />
            <SkillItem title="R Studio" percentage="85%" />
            <SkillItem title="Databricks" percentage="90%" />
            <SkillItem title="Figma" percentage="75%" />
            <SkillItem title="Adobe Lightroom" percentage="80%" />
            <SkillItem title="Notion" percentage="90%" />
            <SkillItem title="Microsoft Excel" percentage="65%" />
            <SkillItem title="Microsoft Teams" percentage="100%" />
            <SkillItem title="Microsoft Office 365 (PowerPoint, Word, Outlook)" percentage="100%" />
            
          </div>
        </div>

        {/* Development Skills Section */}
        <div className="flex-1">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">Development Skills</p>
            <h2 className="text-3xl lg:text-4xl font-bold">Development Skill</h2>
          </div>
          <div className='mt-14 flex flex-col gap-6'>
            <SkillItem title="HTML-5" percentage="85%" />
            <SkillItem title="CSS-3" percentage="90%" />
            <SkillItem title="JavaScript" percentage="85%" />
            <SkillItem title="React" percentage="85%" />
            <SkillItem title="SQL" percentage="90%" />
            <SkillItem title="Java" percentage="80%" />
            <SkillItem title="Python" percentage="80%" />
            <SkillItem title="C" percentage="70%" />
            <SkillItem title="R" percentage="80%" />
            <SkillItem title="Git" percentage="95%" />
          </div>
        </div>
      </motion.div>
    );
};

const SkillItem = ({ title, percentage }) => (
    <div className="overflow-x-hidden">
        <p className="text-sm uppercase font-medium">{title}</p>
        <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: percentage, transition: { duration: 0.5, delay: 0.5 } }}
                className={`h-full bg-gradient-to-r from-violet-600 via-blue-500 to-teal-400 rounded-md relative before:content-['${percentage}'] before:absolute before:right-0 before:-top-8`}
            >
                <span className="absolute -top-7 right-0">{percentage}</span>
            </motion.div>
        </div>
    </div>
);

export default Skills;
