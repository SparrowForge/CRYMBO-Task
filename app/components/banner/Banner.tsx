"use client"
import Image from "next/image";
import Heroleft from "./Heroleft";
import HeroRight from "./HeroRight";


const Banner = () => {
    return (
        <div id="home" className="flex flex-col lg:flex-row justify-between items-center">
            <div className=" xl:w-[650px]">
                <Heroleft />
            </div>
            <div className=" xl:w-[500px]">
                <HeroRight />
            </div>
        </div>
    );
};

export default Banner;