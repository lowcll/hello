import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
    const [activeSection, setActiveSection] = useState('education');

    // Function to return additional classes if the section is active
    const activeClass = (section) => activeSection === section ? 'text-designColor border-b-2 border-designColor' : '';

    return (
        <section id="resume" className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title 
                    title="2+ YEARS OF IT EXPERIENCE"
                    des="My Resume"
                />
            </div>
            <ul className='w-full flex justify-center text-center gap-4'>
                <li 
                    onClick={() => setActiveSection('education')}
                    className={`resumeli ${activeClass('education')}`}>Education
                </li>
                <li 
                    onClick={() => setActiveSection('skills')}
                    className={`resumeli ${activeClass('skills')}`}>Professional Skills
                </li>
                <li 
                    onClick={() => setActiveSection('experience')}
                    className={`resumeli ${activeClass('experience')}`}>Experience & Achievements
                </li>
            </ul>
            {activeSection === 'education' && <Education />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'experience' && <Experience />}
        </section>
    );
}

export default Resume;
