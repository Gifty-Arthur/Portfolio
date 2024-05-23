import React from "react";
import image from "../../assets/Images/port.jpg";

//icons
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center  h-[686px] bg-center">
      <div className="container">
        <div className="flex flex-wrap gap-x-40 mt-4 ml-28">
          <div className="flex flex-col items-start justify-center mt-40 ">
            <h3 className="text-white text-[24px] font-poppins font-semibold">
              Hi I am
            </h3>
            <h2 className="text-primary font-poppins text-[32px] font-semibold">
              Gifty Arthur
            </h2>
            <h1 className="text-[50px] text-white font-bold font-poppins">
              UI & UX
            </h1>
            <h1 className="text-[50px] text-white font-bold font-poppins ml-32">
              Frontend Developer
            </h1>
            <p className="text-white font-poppins text-[21px] font-regular">
              {" "}
              I'm passionate about crafting visually appealing <br />
              and intuitive interfaces that delight users
            </p>
            <button className="bg-primary w-[188px] h-[52px] rounded-sm mt-4 text-[21px] text-white hover:bg-white hover:text-black">
              Hire Me
            </button>
          </div>
          <div className="flex-col">
            <img
              className="w-[538px] h-[417px] rounded-lg mt-10"
              src={image}
              alt=""
            />
            <div className="flex flex-wrap gap-10 justify-center mt-10">
              <FaInstagram className="text-white w-[32px] h-[32px]" />
              <FaLinkedin className="text-white w-[32px] h-[32px]" />
              <FaTwitter className="text-white w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
