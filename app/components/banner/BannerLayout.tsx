import Image from "next/image";
import Banner from "./Banner";
import Navbar from "./Navbar";


const BannerLayout = () => {
    return (
        <div>
            <div
                className="w-full h-[925px] relative flex flex-col items-center text-center p-6"
            >
                <div
                    className="absolute inset-0 "
                    style={{
                        backgroundImage: `url('https://i.ibb.co.com/9m3bFY4k/bgBanner.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(https://i.ibb.co.com/gZkgLq2K/Vector.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
              <div className="hidden md:flex">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/asserts/Ellipse1.png"
                            alt="Ellipse 1"
                            width={181}
                            height={10}
                            className="opacity-70 mb-24"
                        />
                        <Image
                            src="/asserts/Ellipse2.png"
                            alt="Ellipse 2"
                            width={181}
                            height={7}
                            className="opacity-70 mb-[130px]"
                        />
                        <Image
                            src="/asserts/Ellipse3.png"
                            alt="Ellipse 3"
                            width={210}
                            height={7}
                            className="opacity-70"
                        />
                        <Image
                            src="/asserts/Ellipse4.png"
                            alt="Ellipse 4"
                            width={210}
                            height={7}
                            className="opacity-70"
                        />
                        <Image
                            src="/asserts/Ellipse5.png"
                            alt="Ellipse 5"
                            width={181}
                            height={7}
                            className="opacity-70 mb-[30px]"
                        />
                    </div>
                </div>
                {/* box shadow */}
                <div
                    className="absolute  top-[186px] left-[50%] transform -translate-x-1/2"
                >
                    <Image
                        src="/asserts/Rectangleshade.png"
                        alt="Ellipse 5"
                        width={138}
                        height={143}
                        className="opacity-70 mb-[30px]"
                    />
                </div>
                <div
                    className="absolute  top-[600px] left-[50%] transform -translate-x-1/2"
                >
                    <Image
                        src="/asserts/Rectangleshade.png"
                        alt="Ellipse 5"
                        width={137}
                        height={140}
                        className="opacity-70 mb-[30px]"
                    />
                </div>
                <div
                    className="absolute  top-[325px] left-[74.5%] transform translate-x-1/2"
                >
                   
                    <Image
                        src="/asserts/Rectangleshade.png"
                        alt="Ellipse 5"
                        width={137}
                        height={140}
                        className="opacity-70 mb-[30px]"
                    />
                </div>
                <div
                    className="absolute  top-[600px] left-[74.5%] transform translate-x-1/2"
                >
                    <Image
                        src="/asserts/Rectangleshade.png"
                        alt="Ellipse 5"
                        width={137}
                        height={140}
                        className="opacity-70 mb-[30px]"
                    />
                </div>
              </div>


                <div className="relative z-10 md:px-10 py-5 lg:w-[1200px] ">

                    <Navbar />
                    <Banner />

                </div>
            </div>
        </div>
    );
};

export default BannerLayout;