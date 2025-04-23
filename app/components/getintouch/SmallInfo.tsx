import Image from 'next/image';

const SmallInfo = () => {
    return (
                    <div className="flex flex-col justify-between text-start text-[#FFFFFF]  gap-4 md:gap-[25px] items-start"
                    style={{
                        backgroundImage: `url('/Footer/sideimg.svg')`,
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.9
                    }}
                    >
                        <div className='pl-2'>
                            <button className='bg-[#F0FFF9]/15 py-2 px-4 rounded-full text-[16px]'>
                                Crypto payment gateway
                            </button>
                        </div>
                        <h1 className="font-semibold  text-[#FFFFFF] text-4xl leading-[110.000001%] pl-2">Get in touch request a demo today!</h1>
        
                        <div className="flex justify-start items-center gap-[8px] pl-2">
                            <button className='cursor-pointer bg-[#040B06] hover:bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px] border border-[#040B061A] hover:border-[#999D9A] text-white hover:text-black'>Get free trial</button>
                            <Image src='/asserts/HeroIcon2.svg' alt='image' width={40} height={40} />
                        </div>
                    </div>
                   

    );
};

export default SmallInfo;