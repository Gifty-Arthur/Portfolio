import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import Lottie from "lottie-react";
import AnimationData from "../../assets/Images/animation.json";
import CV1 from "../../assets/Images/CV1.pdf";

function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false);
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav);

  return (
    <nav className="flex justify-between p-5 items-center border-b bg-tertiary nav">
      <Lottie animationData={AnimationData} className="w-[250px] h-[100px]" />
      <ul className="hidden  md:flex gap-6 text-white">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>About Me</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <a
        href={CV1}
        download="CV1"
        className="hidden md:block text-white bg-primary w-[188px] h-[52px] rounded-md hover:bg-white hover:text-black text-center p-4 mt-4"
      >
        Download CV {/* Add any additional button styling here */}
      </a>

      {/* Hamburger or Close Icon */}
      <div className=" md:hidden z-10" onClick={handleClick}>
        {nav ? (
          <FaTimes className="text-white size-6" />
        ) : (
          <RxHamburgerMenu className="text-white size-6" />
        )}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? "text-white opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80  flex flex-col justify-center items-center text-2xl `}
        onClick={() => setNav(false)}
      >
        <Link to="/">
          <li className="hover:text-primary">Home</li>
        </Link>
        <Link to="/about">
          <li className="hover:text-primary">About</li>
        </Link>
        <Link to="/services">
          <li className="hover:text-primary">Services</li>
        </Link>
        <Link to="/projects">
          <li className="hover:text-primary">Projects</li>
        </Link>

        <Link to="/contact">
          <li className="hover:text-primary">Contact </li>
        </Link>
        <a
          href={CV1}
          download="CV1"
          className=" text-white bg-primary w-[188px] h-[52px] rounded-md hover:bg-white hover:text-black flex items-center justify-center mt-4 md: text-[15px]"
        >
          Download CV {/* Add any additional button styling here */}
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
