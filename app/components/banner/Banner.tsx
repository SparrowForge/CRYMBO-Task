"use client"
import Image from "next/image";
import Heroleft from "./Heroleft";
import HeroRight from "./HeroRight";


const Banner = () => {
    return (
        <div id="home" className="flex flex-col md:flex-row justify-between items-center">
            <div className=" lg:w-[640px]">
                <Heroleft />
            </div>
            <div className=" lg:w-[615px]">
                <HeroRight />
            </div>
        </div>
    );
};

export default Banner;