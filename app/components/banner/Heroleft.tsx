import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Heroleft = () => {
    return (
        <div className="flex flex-col justify-between text-start text-[#FFFFFF] mt-[28px] md:mt-[40px] lg:mt-[16px] gap-[10px] md:mx-10 lg:mx-0">
           <div>
           <button className='BTN bg-[#F0FFF9]/15'>
                Crypto payment gateway
            </button>
           </div>
            <h1 className="font-semibold  text-[#FFFFFF] text-[40px] md:text-[56px] xl:text-[74px] leading-[110.000001%]">Start accepting crypto payments today!
            </h1>
            <h4 className="text-[16px] md:text-[20px] md:leading-[160%]">
                No hidden fees, instant settlements, and full compliance. Whether you're an online
                store, an EMI, or a financial service provider, crymbo pay ensures seamless transactions
                across multiple blockchains.
            </h4>
            <div className="flex justify-start items-center gap-[8px]">
                <button className='BTNBlack'>Get started now</button>
               
               <div className='text-[#040B06] bg-white hover:text-white hover:bg-[#040B06] rounded-full p-3 text-2xl cursor-pointer'>
                     <MdArrowOutward />
                </div>
               
            </div>
            
        </div>
    );
};

export default Heroleft;