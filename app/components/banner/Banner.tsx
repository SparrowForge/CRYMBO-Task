"use client"
import Image from "next/image";
import Heroleft from "./Heroleft";
import HeroRight from "./HeroRight";


const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-[640px]">
                <Heroleft />
            </div>
            <div className=" md:w-[615px]">
                <HeroRight />
            </div>
        </div>
    );
};

export default Banner;