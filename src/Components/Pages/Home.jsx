import React from "react";
import image from "../../assets/Images/port.jpg";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center h-auto py-20 md:h-[686px] bg-center">
      <div className=" container px-4 md:px-0">
        <div className="flex flex-wrap-reverse md:flex-wrap md:gap-x-40 mt-4 md:ml-28">
          <div className="flex flex-col items-start justify-center mt-10 md:mt-40 md:px-0">
            <h3 className="text-white text-[20px] md:text-[24px] font-poppins font-semibold">
              Hi I am
            </h3>
            <h2 className="text-primary font-poppins text-[28px] md:text-[32px] font-semibold">
              Gifty Arthur
            </h2>
            <h1 className="text-[36px] md:text-[50px] text-white font-bold font-poppins">
              UI & UX
            </h1>
            <h1 className="text-[36px] md:text-[50px] text-white font-bold font-poppins md:ml-32">
              Frontend Developer
            </h1>
            <p className="text-white font-poppins text-[18px] md:text-[21px] font-regular mt-4 md:mt-0">
              I'm passionate about crafting visually appealing{" "}
              <br className="hidden md:block" /> and intuitive interfaces that
              delight users
            </p>
            <a
              href="mailto:giftyarthur031@gmail.com"
              className="text-white bg-primary w-full md:w-[188px] h-[52px] rounded-md hover:bg-white hover:text-black text-center p-4 mt-4"
            >
              Hire Me
            </a>
          </div>

          <div className="flex-col">
            <img
              className="w-full max-w-[538px] h-auto rounded-lg mt-10"
              src={image}
              alt=""
            />
            <div className="flex flex-wrap gap-6 justify-center mt-10 sm:gap-10">
              <a
                href="https://www.instagram.com/tiitt_y?igsh=MTMzZG43ZmFianBxYw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/gifty-arthur-95316a1b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
              </a>
              <a
                href="https://github.com/Gifty-Arthur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub className="text-white w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
