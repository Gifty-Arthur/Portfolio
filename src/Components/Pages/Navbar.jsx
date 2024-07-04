import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// images
import logo from "../../assets/Images/logo.png";
import moon from "../../assets/Images/moon.png";
import sun from "../../assets/Images/sun.png";

// icons
import { BiUser } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { CgBriefcase } from "react-icons/cg";

function Navbar() {
  // Initialize the theme state based on localStorage or default to "dark"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`w-full h-full ${
        theme === "dark" ? "bg-[#212121]" : "bg-[#ffffff]"
      }`}
    >
      <nav
        className={`w-full h-[100px] shadow-xl ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <div className="container">
          <div className="sticky top-0 z-[20] p-6">
            <nav className="flex justify-between items-center w-[100%]">
              <div className="flex flex-row gap-2">
                <motion.img
                  src={logo}
                  alt=""
                  className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <h1
                  className={`sm:text-2xl font-poppins font-extrabold text-xl cursor-pointer text-primary sm:mt-2 mt-1 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  ARTHUR.
                </h1>
              </div>
              {/* links */}
              <div className="">
                <ul
                  className={`flex-row items-center text-lg font-medium gap-8 md:flex hidden cursor-pointer ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`text-xl hover:text-primary font-poppins font-semibold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* button */}
              <button className="relative group overflow-hidden pl-6 h-14 space-x-6 items-center bg-primary rounded-full sm:flex hidden">
                <span className="relative uppercase text-base text-white font-poppins font-bold hidden sm:block">
                  Download CV
                </span>
                <div
                  aria-hidden="true"
                  className="w-14 bg-orange-600 transition duration-300 -translate-y-7 group-hover:translate-y-7"
                >
                  <div className="h-14 flex rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-auto fill-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="h-14 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-auto fill-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* mobile view */}
              <button className="w-[120px] h-[29px] bg-primary text-white rounded-md items-center mt-2 hover:text-black hover:bg-orange-900 flex sm:hidden justify-center">
                Download CV
              </button>

              {/* Theme Toggle */}
              <div className="ml-4">
                <img
                  src={theme === "light" ? moon : sun}
                  id="icon"
                  className="w-[30px] cursor-pointer"
                  alt=""
                  onClick={toggleTheme}
                />
              </div>
            </nav>
          </div>
        </div>

        {/* mobile side */}
        <div className="fixed bottom-2 flex sm:hidden lg:bottom-8 w-full overflow-hidden z-50">
          <div
            className="w-full mr-6 bg-primary/50 h-[80px] backdrop-blur-2xl rounded-full max-auto px-5 flex justify-between 
             text-white text-3xl"
          >
            <Link
              to="/"
              className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-black"
            >
              <BiUser />
            </Link>

            <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-black">
              <BsClipboardData />
            </Link>
            <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-black">
              <MdLibraryBooks />
            </Link>
            <Link className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-black">
              <CgBriefcase />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
