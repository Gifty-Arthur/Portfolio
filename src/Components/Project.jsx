import React from "react";
import d1 from "../assets/Images/d1.png";
import d3 from "../assets/Images/d3.png";

const Project = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center h-auto md:h-[1020px] bg-center py-10">
      <div className="container px-4 md:px-0">
        <div className="flex flex-col justify-center items-center md:mt-0">
          <h1 className="text-3xl md:text-[98px] text-white p-20">
            My Project
          </h1>
          <p className="text-base md:text-[21px] text-white font-poppins mt-4 md:mt-0 text-center">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="w-16 md:w-[70px] h-[40px] md:h-[56px] bg-white rounded-[12px] text-sm md:text-[24px] font-poppins hover:bg-primary">
              All
            </button>
            <button className="w-24 md:w-[108px] h-[40px] md:h-[56px] bg-white rounded-[12px] text-sm md:text-[24px] font-poppins hover:bg-primary">
              UI/UX
            </button>
            <button className="w-40 md:w-[190px] h-[40px] md:h-[56px] bg-primary rounded-[12px] text-sm md:text-[20px] font-poppins hover:bg-white">
              Web Development
            </button>
          </div>
          <div className="mt-10 flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
            <div className="bg-[#FFEBDB] w-full md:w-[445px] h-auto md:h-[489px] rounded-[12px] hover:bg-primary p-6">
              <img
                src={d1}
                alt=""
                className="w-full h-auto md:w-[290px] md:h-[405px] mx-auto"
              />
            </div>
            <div className="bg-[#FFEBDB] w-full md:w-[445px] h-auto md:h-[489px] rounded-[12px] hover:bg-primary p-6">
              <img
                src={d3}
                alt=""
                className="w-full h-auto md:w-[290px] md:h-[405px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
