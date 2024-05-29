import React from "react";
import about from "../../assets/Images/about.jpg";

//icons
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center  h-[552px] bg-center">
      <div className="container">
        <div className="flex justify-center items-center">
          <img
            src={about}
            alt=""
            className="w-[52px] h-[52px] rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-20">
          <h2 className="text-[21px] text-poppins text-white">Home</h2>
          <h2 className="text-[21px] text-poppins text-white">About Me</h2>
          <h2 className="text-[21px] text-poppins text-white">Services</h2>
          <h2 className="text-[21px] text-poppins text-white">Projects</h2>
          <h2 className="text-[21px] text-poppins text-white">Contact</h2>
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          <FaInstagram className="text-white w-[32px] h-[32px]" />
          <FaLinkedin className="text-white w-[32px] h-[32px]" />
          <FaTwitter className="text-white w-[32px] h-[32px]" />
        </div>
        <div className="bg-black w-full h-[84px] mt-14 mb-2">
          <div className="flex justify-center flex-col items-center pt-2 ">
            <p className="text-white text-[21px]">© 2024, Gifty Arthur.</p>
            <p className="text-primary text-[21px]">
              Made with Reactjs and Tailwindcss❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
