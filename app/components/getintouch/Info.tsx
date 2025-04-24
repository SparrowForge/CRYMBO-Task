import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from "react-icons/md";
const Info = () => {
    return (
        <div className='flex justify-between items-center md:gap-2 lg:gap-20'>
            <div className="flex flex-col justify-between text-start text-[#FFFFFF]  gap-4 lg:gap-[25px] items-start pl-4 md:pl-0">
                <div>
                    <button className='bg-[#F0FFF9]/15 py-2 px-4 rounded-full text-[16px]'>
                        Crypto payment gateway
                    </button>
                </div>
                <h1 className="hidden md:flex font-semibold  text-[#FFFFFF] md:text-[40px] lg:text-[56px] leading-[110.000001%]">Get in touch request <br />a demo today!</h1>
                <h1 className="flex md:hidden font-semibold  text-[#FFFFFF] text-4xl  leading-[110.000001%]">Get in touch request a demo today!</h1>

                <div className="flex justify-start items-center gap-[8px]">
                    <button className='cursor-pointer bg-[#040B06] hover:bg-[#FFFFFF] py-3 px-6 rounded-full text-[16px] border border-[#040B061A] hover:border-[#999D9A] text-white hover:text-black'>Get free trial</button>
                   
                    <div className='text-[#040B06] bg-white hover:text-white hover:bg-[#040B06] rounded-full p-3 text-2xl cursor-pointer'>
                     <MdArrowOutward />
                </div>
                </div>
            </div>
            <div className='lg:ml-32 hidden md:flex'>
            <Image src='/Footer/sideimg.svg' alt='image' width={300} height={300} />
            </div>
        </div>
    );
};

export default Info;