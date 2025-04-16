"use client"
import Image from 'next/image';
import  { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full h-[71px] rounded-full  bg-[#030C07]/20 flex justify-between items-center">
            <div className='flex md:hidden ml-[20px]'>
                <Image src='/asserts/logo.png' alt='image' width={149} height={35.28} />
            </div>
            <div className='hidden md:flex md:ml-[20px]'>
                <Image src='/asserts/logo.png' alt='image' width={189} height={35.28} />
            </div>
            <div className='hidden md:flex justify-between items-center text-[#FFFFFF] gap-[40px] font-semibold text-[16px]'>
                <a href="#">Home</a>
                <a href="#">Why choose</a>
                <a href="#">About Us ?</a>
                <a href="#">Features</a>
            </div>
            <div className='hidden md:flex mx-4'>
                <button className='bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px]'>Request Demo</button>
            </div>

            <div className='md:hidden flex items-center mr-4' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            <div className={`md:hidden absolute top-[90px] right-0 bg-green-950 rounded-b-2xl w-full text-center ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="text-[#FFFFFF] py-2 font-semibold block">Home</a>
                <a href="#"  className="text-[#FFFFFF] py-2 font-semibold block">Why choose</a>
                <a href="#"  className="text-[#FFFFFF] py-2 font-semibold block">About Us ?</a>
                <a href="#"  className="text-[#FFFFFF] py-2 font-semibold block">Features</a>
                <div className='py-2'>
                    <button className='bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px] '>Request Demo</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
