import React from "react";
import web from "../../assets/Images/web.jpg";
import ui from "../../assets/Images/ui.jpg";

const Services = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center  h-[584px] bg-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-white text-[65px] font-poppins">Services</h1>
          <p className="text-white text-[21px] font-poppins font-regular">
            {" "}
            I offer comprehensive services to create seamless and engaging
            digital experiences. My expertise spans
            <br /> responsive web design, interactive user interfaces, and
            optimized front-end development.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-20 mt-10">
          <div className="bg-white w-[330px] h-[346px] rounded-[14px] border-primary border-2 hover:bg-sky-100">
            {" "}
            <div className="flex justify-center mt-8 flex-col ml-24">
              <img
                src={ui}
                alt=""
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
            <div className="mt-14">
              <h1 className="text-[20px] font-bold font-poppins  ml-32">
                UI/UX
              </h1>
              <p className="text-[19px] font-poppinst-8 font-regular m ml-2 ">
                I specializes in creating intuitive and visually appealing user
                interfaces that enhance the overall user experience
              </p>
            </div>
          </div>
          <div className="bg-white w-[330px] h-[346px] rounded-[14px] border-2 border-primary hover:bg-sky-100">
            <div className="flex justify-center mt-8 flex-col ml-24">
              <img src={web} alt="" className="w-[100px] h-[100px] " />
            </div>
            <div className="mt-14">
              <h1 className="text-[20px] font-bold font-poppins  ml-10   ">
                Web Development
              </h1>
              <p className="text-[19px] font-poppinst-8 font-regular m ml-2 ">
                I specializes in creating intuitive and visually appealing user
                interfaces that enhance the overall user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
