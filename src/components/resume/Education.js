import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'

const Education = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <div className="py-12 font-titleFont flex gap-20">
    <div>
        <div className= 'flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>2021-2025</p>
            <h2 className='text-4xl font-bold'>Education</h2>
        </div>
        <div className='mt-14 w-full h-[full] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pb-10'>
            <ResumeCard 
            title = "Double Major: BA in Computer Science and BS in Information Systems Technology Management (ISTM)"
            subTitle = "The George Washington University"
            result= "Aug 2021 - May 2025"
            des = "Relavent Coursework: Algorithms & Data Structures, Database Systems and Team Projects, Software Engineering, Foundations of Information Systems Security and Ethics, Web Applications Development, Internet of Things Management" /> 
            <ResumeCard 
            des = "At The George Washington University School of Engineering, I'm pursuing dual degrees: a B.A. in Computer Science and a B.S. in Information Systems Technology Management, with an expected graduation in May 2025. My academic journey has been enriched by engaging in a variety of relevant coursework, including Algorithms & Data Structures, Database Systems and Team Projects, Software Engineering, Foundations of Information Systems Security and Ethics, Web Applications Development, and Internet of Things Management. This diverse curriculum has not only fortified my theoretical knowledge but also honed my practical skills, preparing me for the complexities of the tech world." /> 
        </div> 
    </div>
    </div>
    </motion.div>
  )
}

export default Education