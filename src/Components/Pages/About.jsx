import React from "react";
import about from "../../assets/Images/about.jpg";
import { FaCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center md:h-[686px] h-auto bg-center py-10">
      <div className="container px-4 md:px-0">
        <div className="flex flex-col md:flex-row wrap gap-8 md:gap-32">
          <img
            className="w-full max-w-[538px] h-auto rounded-lg mt-10"
            src={about}
            alt="About"
          />
          <div className="flex flex-col items-start  justify-center mt-10 md:mt-0 md:px-0">
            <div>
              <h1 className="font-poppins text-white text-3xl md:text-[50px] font-semibold p-5 ">
                About Me
              </h1>
            </div>
            <p className="text-white text-base md:text-[21px] font-regular font-poppins mt-4 md:mt-0">
              Hi my name is Gifty Arthur, I specialize in crafting visually
              compelling and user-friendly digital experiences. Proficient in
              HTML, CSS, JavaScript, and modern frameworks such as Reactjs and
              Tailwindcss, . My expertise in user-centered design principles
              ensures intuitive interfaces that enhance engagement and usability
              that meet client needs and exceed user expectation.
            </p>
            <h1 className="font-poppins text-white text-xl md:text-[24px] font-semibold mt-8">
              UI/UX
            </h1>
            <div className="bg-emerald-200/20 h-3 w-full md:w-[687px] rounded-full mt-4">
              <div className="bg-primary w-[70%] h-full flex justify-end items-center ">
                <FaCircle className="w-4 h-4 md:w-[32px] md:h-[32px] text-white border-2 rounded-full  border-primary" />
              </div>
            </div>

            <h1 className="font-poppins text-white text-xl md:text-[24px] font-semibold mt-8">
              Web Development
            </h1>
            <div className="bg-emerald-200/20 h-3 w-full md:w-[687px] rounded-full mt-4">
              <div className="bg-primary w-[90%] h-full flex justify-end items-center ">
                <FaCircle className="w-4 h-4 md:w-[32px] md:h-[32px] text-white border-2 rounded-full  border-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
