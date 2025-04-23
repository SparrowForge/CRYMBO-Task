import Image from 'next/image';
import React from 'react';
const Info = () => {
    return (
        <div className='flex justify-between items-center gap-20'>
            <div className="flex flex-col justify-between text-start text-[#FFFFFF]  gap-4 md:gap-[25px] items-start">
                <div>
                    <button className='bg-[#F0FFF9]/15 py-2 px-4 rounded-full text-[16px]'>
                        Crypto payment gateway
                    </button>
                </div>
                <h1 className="font-semibold  text-[#FFFFFF] text-4xl md:text-[56px] leading-[110.000001%]">Get in touch request <br />a demo today!</h1>

                <div className="flex justify-start items-center gap-[8px]">
                    <button className='cursor-pointer bg-[#040B06] hover:bg-[#FFFFFF] py-3 px-6 rounded-full text-[16px] border border-[#040B061A] hover:border-[#999D9A] text-white hover:text-black'>Get free trial</button>
                    <Image src='/asserts/HeroIcon2.svg' alt='image' width={50} height={50} />
                </div>
            </div>
            <div className='ml-32'>
            <Image src='/Footer/sideimg.svg' alt='image' width={300} height={300} />
            </div>
        </div>


    );
};

export default Info;