import React from "react";

const Contact = () => {
  return (
    <div className="bg-tertiary w-full flex flex-col items-center justify-center h-auto md:h-[337px] bg-center py-10">
      <div className="container px-4 md:px-0">
        <div className="flex flex-col justify-center items-center md:mt-0">
          <h1 className="text-white font-semibold text-2xl md:text-[65px] font-poppins p-8 text-center">
            Let's Design Together
          </h1>
          <p className="text-white font-poppins text-sm md:text-[21px] text-center mt-4 md:mt-0">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
            <form className="w-full md:w-[440px] flex justify-center mt-4">
              <input
                type="search"
                placeholder="Enter Your Email"
                className="w-full md:w-[657px] h-[50px] md:h-[75px] placeholder-bg-primary font-roboto p-4 pl-4 md:pl-12 rounded-[14px] bg-white font-regular"
              />
            </form>

            <a
              href="mailto:giftyarthur031@gmail.com"
              className="bg-primary w-full md:w-[222px] h-[50px] md:h-[75px] mt-2 rounded-[14px] text-white text-base md:text-[24px] font-semibold font-poppins p-4 "
            >
              Contact Me
            </a>

            {/* <button className="bg-primary w-full md:w-[222px] h-[50px] md:h-[75px] mt-4 rounded-[14px] text-white text-base md:text-[24px] font-semibold font-poppins">
              Contact Me
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
