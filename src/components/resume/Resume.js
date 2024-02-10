import React from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
            <Title 
                title="2+ YEARS OF IT EXPERIENCE"
                des="My Resume"
            />
        </div>
        <div>
            <ul className='w-full grid grid-cols-3 text-center'>
                <li className='resumeli'>Education</li>
                <li className='resumeli'>Professional Skills</li>
                <li className='resumeli'>Experience</li>
            </ul>
        </div>
        <div className='w-full flex gap-20'>
            <div>
                <div className= 'py-12 font-titleFont gap'>
                    <p className='text-sm text-designColor tracking-[4px]'>2021-2025</p>
                    <h2 className='text-4xl font-bold'>Education</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard 
                    title = "BA in Computer Science and BS in Information Systems Technology Management (ISTM)"
                    subTitle = "The George Washington University"
                    result= "Aug 2021 - May 2025"
                    des = "Relavent Coursework: Algorithms & Data Structures, Database Systems and Team Projects, Software Engineering, Foundations of Information Systems Security and Ethics, Web Applications Development, Internet of Things Management" /> 
                </div>
            </div>
            <div>
                <div className= 'py-12 font-titleFont gap'>
                    <p className='text-sm text-designColor tracking-[4px]'>2021-2025</p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard 
                    title = "Technical Support Associate II"
                    subTitle = "The George Washington University"
                    result= "Aug 2022 - Present"
                    des = "Promoted from Tech Support I. Resolved over 200 support tickets, ensuring smooth university operations and high satisfaction. Assisted in development and implementation of a ticket triage system, saving the support team 20+ hours weekly." /> 
                    <ResumeCard 
                    title = "Retail Sales Associate"
                    subTitle = "Uniqlo"
                    result= "Sept 2022 - Nov 2023"
                    des = "Utilizing technical skills University IT Position, I resolved issues with the RFID and wireless scanning system, resulting in improved stability. I assisted in managing store inventory and providing excellent customer assistance, creating efficient daily operations." />
                    <ResumeCard 
                    title = "Food Runner and Busser"
                    subTitle = "Harpoon Harry's"
                    result= "July 2022 - Aug 2022"
                    des = "At Harpoon Harry's, I showcased multitasking and customer service by prepping tables, aiding in food prep, and maintaining ice supplies. These efforts enhanced dining efficiency and customer satisfaction." />
                    <ResumeCard 
                    title = "Technical Support Associate I"
                    subTitle = "The George Washington University"
                    result= "Aug 2021 - May 2022"
                    des = "Assisted with over 100 support tickets at the School of Engineering, resolving networking, software, and hardware issues for students and faculty. Utilized Apporto to remotely solve over 30 VPN and home network issues, enhancing staff productivity" />  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Resume