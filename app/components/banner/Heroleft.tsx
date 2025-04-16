import Image from "next/image";


const Heroleft = () => {
    return (
        <div className="flex flex-col justify-between text-start text-[#FFFFFF] mt-[28px] md:mt-[16px] gap-[10px]">
           <div>
           <button className='bg-[#F0FFF9]/15 py-2 px-4 rounded-full text-[16px]'>
                Crypto payment gateway
            </button>
           </div>
            <h1 className="font-semibold  text-[#FFFFFF] text-[40px] md:text-[74px] leading-[110.000001%]">Start accepting crypto payments today!
            </h1>
            <h4 className="text-[16px] md:text-[20px] md:leading-[160%]">
                No hidden fees, instant settlements, and full compliance. Whether you're an online
                store, an EMI, or a financial service provider, crymbo pay ensures seamless transactions
                across multiple blockchains.
            </h4>
            <div className="flex justify-start items-center gap-[8px]">
                <button className='bg-[#040B06] py-3 px-6 rounded-full text-[16px] text-[#FFFFFF]'>Get started now</button>
                <Image src='/asserts/HeroIcon2.png' alt='image' width={50} height={50}/>
            </div>
            
        </div>
    );
};

export default Heroleft;