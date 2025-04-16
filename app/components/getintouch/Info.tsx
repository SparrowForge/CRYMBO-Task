import Image from 'next/image';
import React from 'react';
const Info = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex flex-col justify-between text-start text-[#FFFFFF]  gap-4 md:gap-[10px]">
                <div>
                    <button className='bg-[#F0FFF9]/15 py-2 px-4 rounded-full text-[16px]'>
                        Crypto payment gateway
                    </button>
                </div>
                <h1 className="font-semibold  text-[#FFFFFF] text-4xl md:text-[60px] leading-[110.000001%]">Get in touch request a demo today!</h1>

                <div className="flex justify-start items-center gap-[8px]">
                    <button className='bg-[#040B06] py-3 px-6 rounded-full text-[16px] text-[#FFFFFF]'>Get free trial</button>
                    <Image src='/asserts/HeroIcon2.png' alt='image' width={50} height={50} />
                </div>

            </div>
            <div className='hidden md:flex'>
            <Image src='/Footer/1.png' alt='image' width={445} height={334}/>
            </div>
        </div>
    );
};

export default Info;