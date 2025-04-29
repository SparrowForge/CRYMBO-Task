"use client";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('Home');


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleClick = (button: SetStateAction<string>) => {
    setActiveButton(button);
  };

  return (
    <div className="w-full py-4 rounded-full bg-[#030C07]/20 flex justify-between items-center">

      <div className="flex lg:hidden ml-[20px]">
        <Image src="/asserts/logo.png" alt="image" width={149} height={35.28} />
      </div>
      <div className="hidden lg:flex md:ml-[20px]">
        <Image src="/asserts/logo.png" alt="image" width={189} height={35.28} />
      </div>


      <div className="hidden lg:flex justify-between items-center gap-[40px] font-semibold text-[16px]">
      <Link href="#home" className="cursor-pointer">
        <h1
          onClick={() => handleClick('Home')}
          className={`${activeButton === 'Home' ? 'text-[#FFFFFF]' : 'text-[#7A9188]  transition delay-150 duration-300 ease-in-out hover:scale-130'
            } cursor-pointer py-2 font-semibold `}
        >
          Home
        </h1>
        </Link>
        <Link href="#whychoose" className=" cursor-pointer">
        <h1
          onClick={() => handleClick('Why choose')}
          className={`${activeButton === 'Why choose' ? 'text-[#FFFFFF]' : 'text-[#7A9188]  transition delay-150 duration-300 ease-in-out hover:scale-130'
            } cursor-pointer py-2 font-semibold`}
        >
          Why choose
        </h1>
        </Link>
        <Link href="#aboutus" className="cursor-pointer">
        <h1
          onClick={() => handleClick('About Us ?')}
          className={`${activeButton === 'About Us ?' ? 'text-[#FFFFFF]' : 'text-[#7A9188]  transition delay-150 duration-300 ease-in-out hover:scale-130'
            } cursor-pointer py-2 font-semibold`}
        >
          About Us ?
        </h1>
        </Link>
        <Link href="#features" className="cursor-pointer">
          <h1
            onClick={() => setActiveButton('Features')}
            className={`${activeButton === 'Features' ? 'text-[#FFFFFF]' : 'text-[#7A9188]  transition delay-150 duration-300 ease-in-out hover:scale-130'
              } py-2 font-semibold`}
          >
            Features
          </h1>
        </Link>
      </div>

      <div className="hidden lg:flex mx-4">
        <button className="BTNWhite">
          Request Demo
        </button>
      </div>

      <div className=" flex lg:hidden items-center mr-4" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 md:h-8  w-6 md:w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>


      <div
        className={`lg:hidden absolute top-[90px] right-0 bg-gradient-to-t from-[#012E1E] to-[#060C13] rounded-2xl w-full text-center ${isOpen ? "block" : "hidden"
          } py-5`}
      >
       <Link href="#home" className="cursor-pointer">
        <h1
          onClick={() => handleClick('Home')}
          className={`${activeButton === 'Home' ? 'text-[#FFFFFF] ' : 'text-[#7A9188] transition delay-150 duration-300 ease-in-out hover:scale-130'
            } cursor-pointer py-2 font-semibold`}
        >
          Home
        </h1>
        </Link>
        <Link href="#whychoose" className="cursor-pointer">
        <h1
          onClick={() => handleClick('Why choose')}
          className={`${activeButton === 'Why choose' ? 'text-[#FFFFFF]' : 'text-[#7A9188]'
            } cursor-pointer py-2 font-semibold`}
        >
          Why choose
        </h1>
        </Link>
        <Link href="#aboutus" className="cursor-pointer">
        <h1
          onClick={() => handleClick('About Us ?')}
          className={`${activeButton === 'About Us ?' ? 'text-[#FFFFFF]' : 'text-[#7A9188]'
            } cursor-pointer py-2 font-semibold`}
        >
          About Us ?
        </h1>
        </Link>
        <Link href="#features" className="cursor-pointer">
          <h1
            onClick={() => setActiveButton('Features')}
            className={`${activeButton === 'Features' ? 'text-[#FFFFFF]' : 'text-[#7A9188]'
              } py-2 font-semibold`}
          >
            Features
          </h1>
        </Link>
        <div className="py-2">
          <button className="cursor-pointer py-2 px-4 rounded-full text-[16px] bg-[#FFFFFF] hover:bg-[#040B06] border  border-[#999D9A] hover:border-[#040B061A] text-black hover:text-white">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
