import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const MainFooter = () => {
    return (
        <div className='lg:w-[1200px]'>
            <div className=" flex flex-col-reverse md:flex-row justify-between text-center md:text-start">

                <div className="mb-6 md:mb-0">
                    <h3 className="text-[16px] font-bold mb-6">Company</h3>
                    <p className="text-[10px] md:text-[16px]">3rd Floor 86-90 Paul Street, London, England, EC2A 4NE</p>
                    <div className="flex justify-center md:justify-start mt-4 text-white gap-2">
                        <a href="https://www.facebook.com/" ><MdOutlineMailOutline className="w-10 h-10 bg-[#040B06] rounded-full p-2"></MdOutlineMailOutline></a>
                        <a href="https://twitter.com/"><FaXTwitter className="w-10 h-10 bg-[#040B06] rounded-full  p-2"></FaXTwitter></a>
                        <a href="https://twitter.com/"><FaLinkedinIn className="w-10 h-10 bg-[#040B06] rounded-full  p-2"></FaLinkedinIn></a>
                    </div>
                    <p className="text-[16px] mt-4">© 2024 Cymbro Ltd.</p>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="text-[16px] font-bold mb-6">Products</h3>
                    <ul className="space-y-2 text-[16px]">
                        <li><a href="#" className="text-[#3E4440]">Cymbro Oracle</a></li>
                        <li><a href="#" className="text-[#3E4440]">Cymbro Connect</a></li>
                    </ul>
                </div>


                <div className="mb-6 md:mb-0">
                    <h3 className="text-[16px] font-bold mb-6">Use Cases</h3>
                    <ul className="space-y-2 text-[16px]">
                        <li><a href="#" className="text-[#3E4440]">Launch crypto products, fast</a></li>
                        <li><a href="#" className="text-[#3E4440]">Scale operations & tech with ease</a></li>
                        <li><a href="#" className="text-[#3E4440]">Control multiple wallets & custodians</a></li>
                        <li><a href="#" className="text-[#3E4440]">Improve Capital Efficiency</a></li>
                        <li><a href="#" className="text-[#3E4440]">Intelligent Risk Management</a></li>
                        <li><a href="#" className="text-[#3E4440]">Know your data</a></li>
                    </ul>
                </div>


                <div className="mb-6 md:mb-0">
                    <h3 className="text-[16px] font-bold mb-6">Developer</h3>
                    <ul className="space-y-2 text-[16px]">
                        <li><a href="#" className="text-[#3E4440]">Docs</a></li>
                        <li><a href="#" className="text-[#3E4440]">API Reference</a></li>
                        <li><a href="#" className="text-[#3E4440]">On Cymbro Marketplace</a></li>
                        <li><a href="#" className="text-[#3E4440]">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MainFooter;