import React from "react";
import web from "../../assets/Images/web.jpg";
import ui from "../../assets/Images/ui.jpg";

const Services = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center md:h-[686px] h-auto bg-center py-10">
      <div className="container md:px-0 px-4">
        <div className="flex flex-col justify-center items-center md:mt-0 md:px-0">
          <h1 className="text-white text-4xl md:text-[65px] font-poppins p-5">
            Services
          </h1>
          <p className="text-white text-base md:text-[21px] font-poppins font-regular text-center mt-4 md:mt-0">
            I offer comprehensive services to create seamless and engaging
            digital experiences. My expertise spans responsive web design,
            interactive user interfaces, and optimized front-end development.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 mt-10">
          <div className="bg-white w-full md:w-[330px] h-auto md:h-[346px] rounded-[14px] border-primary border-2 hover:bg-sky-100 p-4">
            <div className="flex justify-center mt-8">
              <img
                src={ui}
                alt="UI/UX"
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <h1 className="text-xl md:text-[20px] font-bold font-poppins">
                UI/UX
              </h1>
              <p className="text-sm md:text-[19px] font-regular font-poppins mt-2">
                I specialize in creating intuitive and visually appealing user
                interfaces that enhance the overall user experience.
              </p>
            </div>
          </div>
          <div className="bg-white w-full md:w-[330px] h-auto md:h-[346px] rounded-[14px] border-primary border-2 hover:bg-sky-100 p-4">
            <div className="flex justify-center mt-8">
              <img
                src={web}
                alt="Web Development"
                className="w-[100px] h-[100px]"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <h1 className="text-xl md:text-[20px] font-bold font-poppins">
                Web Development
              </h1>
              <p className="text-sm md:text-[19px] font-regular font-poppins mt-2">
                I specialize in creating intuitive and visually appealing user
                interfaces that enhance the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
