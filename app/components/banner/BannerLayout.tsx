import Image from "next/image";
import Banner from "./Banner";
import Navbar from "./Navbar";


const BannerLayout = () => {
    return (
        <div>
            <div
                className="w-full relative flex flex-col items-center text-center p-6 bg-white "
            >
                <div
                    className="absolute inset-0 h-[1100px] md:h-[1300px] lg:h-[800px] xl:h-[925px]"
                    style={{
                        backgroundImage: `url('/svg/bgBanner.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
              


                <div className="relative z-10 lg:px-10 py-5 xl:w-[1200px] ">

                    <Navbar />
                    <Banner />

                </div>
            </div>
        </div>
    );
};

export default BannerLayout;