import React from "react";
import d1 from "../assets/Images/d1.png";
import d4 from "../assets/Images/d4.png";

const Project = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center  h-[1020px] bg-center">
      <div className="container">
        <div className="flex-col flex justify-center items-center">
          <h1 className="text-[98px] text-white">My Project</h1>
          <p className="text-[21px] text-white text-poppins">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus
          </p>
          <div className="mt-10 space-x-8">
            <button className="w-[70px] h-[56px] bg-white rounded-[12px] text-[24px] text-poppins">
              All
            </button>
            <button className="w-[108px] h-[56px] bg-white rounded-[12px] text-[24px] text-poppins">
              UI/UX
            </button>
            <button className="w-[190px] h-[56px] bg-primary rounded-[12px]  text-[20px] text-poppins hover:bg-white">
              Web Development
            </button>
            <div className="mt-10">
              <div className="bg-[#FFEBDB] w-[445px] h-[489px] rounded-[12px] ">
                <div className="">
                  <div className="relative ">
                    <img
                      src={d1}
                      alt=""
                      className="absolute w-[274px] h-[405px] "
                    />
                    <img
                      src={d4}
                      alt=""
                      className="absolute w-[274px] h-[489px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
