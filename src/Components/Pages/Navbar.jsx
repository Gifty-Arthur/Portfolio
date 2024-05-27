import React from "react";
import Lottie from "lottie-react";
import AnimationData from "../../assets/Images/animation.json";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  return (
    <div className="shadow-md w-full h-[87px] fixed top-0 left-0 bg-black">
      <nav className="md:flex md:items-center md:justify-between">
        <div className="container">
          <div className="flex items-center flex-wrap gap-14 ">
            <Lottie
              animationData={AnimationData}
              className="w-[250px] h-[100px]"
            />
            <ul
              className={
                "ml-2 font-roboto font-medium md:flex md:items-center md:pb-0 pb-12 absolute md:static hidden:  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in "
              }
            >
              {Links.map((link) => (
                <li Key={link.name} className="md:ml-8 text-xl md:my-0 my-7 mx-4">
                  <a
                    href={link.link} 
                    className="text-white text-[21px] font-poppins font-regular hover:text-[#00DDB3] duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end">
            <button className="text-white bg-primary w-[188px] h-[52px] rounded-md -mt-20 flex justify-center items-center hover:bg-white hover:text-black">
              {" "}
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
