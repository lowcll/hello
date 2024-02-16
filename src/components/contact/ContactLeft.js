import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    // Adjust the width for smaller screens to full width and for large screens to 35%
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center items-center lg:items-start">
      <img
        className="w-full max-w-xs lg:max-w-none h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="text-center lg:text-left">
        <h3 className="text-2xl lg:text-3xl font-bold text-white">Lowell Pioquinto</h3>
        <p className="text-lg font-normal text-white">
          Aspiring Developer
        </p>
        <p className="text-base text-white tracking-wide">
          Thank you for taking the time to read my portfolio! I would love to hear from you soon!
        </p>
        <p className="text-base text-white flex justify-center lg:justify-start items-center gap-2">
          Email: <span className="text-white">lowellpioquinto@gmail.com</span>
        </p>
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-base uppercase font-titleFont mb-4 text-white">Find me in</h2>
        <div className="flex justify-center lg:justify-start gap-4">
          <a href="https://github.com/lowcll">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/lowell-pioquinto-1520a0238/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
