import React from 'react';
import { Link } from 'react-scroll'; // Ensure react-scroll is installed
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"; // Ensure your logo import path is correct
import { navLinksdata } from '../../constants'; // Ensure this path matches where you store your navLinksdata

const Footer = () => {
  return (
    <div className="w-full py-10 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className='flex gap-4 justify-start'>
          <a href="https://www.linkedin.com/in/lowell-pioquinto-1520a0238/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/lowcll">
            <span className="bannerIcon">
                <FaGithub />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({_id, title, link}) => (
            <li key={_id}>
              <Link
                activeClass="active" // Highlight the link as "active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
              >
                {title}
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
