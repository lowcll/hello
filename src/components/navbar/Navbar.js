import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { logo, resume } from "../../assets/index";
import { navLinksdata } from '../../constants';
import { MdMenu, MdClose } from 'react-icons/md'; // Ensure you have react-icons installed

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Ensure the Navbar extends fully across the top with `w-screen` to ensure full width of the screen
        // `left-0` ensures it aligns to the very left edge of the screen
        // Consider using `fixed` instead of `sticky` if you want the Navbar to stay at the top even when scrolling
        <div className="w-screen h-24 fixed top-0 left-0 z-50 bg-bodyColor mx-auto flex justify-between items-center px-4 md:px-10 border-b-[1px] cursor-pointer font-titleFont border-b-black">
            <div className="flex justify-between items-center w-full">
                <div>
                    <img src={logo} alt="Logo" className="h-12" />
                </div>
                <div className="hidden md:flex items-center gap-10">
                    <a href={resume} download="LowellPioquintoResume.pdf" className="text-base font-normal text-black tracking-wide hover:text-designColor duration-300 p-4 no-underline">Download My CV</a>
                    {navLinksdata.map(({_id, title, link}) => (
                        <Link
                            key={_id}
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-base font-normal text-black tracking-wide hover:text-designColor duration-300 cursor-pointer"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="flex md:hidden flex-col items-center absolute top-full left-0 w-full bg-bodyColor">
                    <a href={resume} download="LowellPioquintoResume.pdf" className="text-base font-normal text-black tracking-wide hover:text-designColor duration-300 p-4 no-underline">Download My CV</a>
                    <ul className="flex flex-col items-center gap-10 p-4">
                        {navLinksdata.map(({_id, title, link}) => (
                            <li key={_id} className="text-base font-normal text-black tracking-wide hover:text-designColor duration-300">
                                <Link
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
