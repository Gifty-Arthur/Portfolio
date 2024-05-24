import React from "react";
import d1 from "../assets/Images/d1.png";
import d3 from "../assets/Images/d3.png";

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
          <div className="space-x-10 mt-8">
            <button className="w-[70px] h-[56px] bg-white rounded-[12px] text-[24px] text-poppins hover:bg-primary">
              All
            </button>
            <button className="w-[108px] h-[56px] bg-white rounded-[12px] text-[24px] text-poppins hover:bg-primary">
              UI/UX
            </button>
            <button className="w-[190px] h-[56px] bg-primary rounded-[12px]  text-[20px] text-poppins hover:bg-white">
              Web Development
            </button>
          </div>
          <div className="mt-10 space-x-8 ">
            <div className="mt-10 flex flex-wrap gap-10">
              <div className="bg-[#FFEBDB] w-[445px] h-[489px] rounded-[12px] hover:bg-primary">
                <div className="">
                  <div className="pt-10 ml-20">
                    <img
                      src={d1}
                      alt=""
                      className="absolute w-[290px] h-[405px] "
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#FFEBDB] w-[445px] h-[489px] rounded-[12px] hover:bg-primary">
                <div className="">
                  <div className="pt-10 ml-20">
                    <img
                      src={d3}
                      alt=""
                      className="absolute w-[290px] h-[405px] "
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
