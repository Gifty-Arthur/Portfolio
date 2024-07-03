import { Link } from "react-scroll";

//images
import logo from "../../assets/Images/logo.png";

//icons
import { BiUser } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { MdLibraryBooks } from "react-icons/md";
import { CgBriefcase } from "react-icons/cg";
// import { FaToggleOn } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <nav className="bg-black w-full h-[120px]  shadow-xl ">
        <div className="container">
          <div className="  ">
            <div className=" sticky top-0 z-[20]  p-6">
              <nav className="flex justify-between items-center w-[92%]">
                <div className="flex flex-row gap-2">
                  <img src={logo} alt="" className="w-[60px] h-[60px]" />
                  <h1 className=" text-3xl font-poppins font-extrabold cursor-pointer text-primary mt-4">
                    Arthur.
                  </h1>
                </div>
                {/* links */}
                <div className="">
                  <ul className="flex-row text-white justify-between gap-10 md:flex hidden cursor-pointer">
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins ">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins">
                        Skils
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins">
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins">
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link className="text-2xl hover:text-primary font-poppins">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* button */}
                <button className="relative group overflow-hidden pl-6 h-14 flex space-x-6 items-center bg-primary rounded-full">
                  <span className="relative uppercase text-base text-white font-poppins font-bold">
                    Download CV
                  </span>
                  <div
                    aria-hidden="true"
                    className="w-14 bg-orange-600 transition duration-300 -translate-y-7 group-hover:translate-y-7 "
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
              </nav>
            </div>
          </div>

          {/* mobile side */}
          <div className="fixed bottom-2 flex sm:hidden lg:bottom-8 w-full overflow-hidden z-50">
            <div
              className=" w-full mr-6 bg-primary/50 h-[80px]  backdrop-blur-2xl rounded-full  max-auto px-5 flex justify-between 
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
