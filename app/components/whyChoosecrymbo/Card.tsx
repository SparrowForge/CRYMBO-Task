import Image from "next/image";
import i1 from "../../../public/whyChoose/1.png";
import i2 from "../../../public/whyChoose/2.png";
import i3 from "../../../public/whyChoose/3.png";
import i4 from "../../../public/whyChoose/4.png";
import i5 from "../../../public/whyChoose/5.png";
import i6 from "../../../public/whyChoose/6.png";

const Card = () => {
    const data = [
        {
            id: 1,
            image: i1,
            title: "Fully Integrated crypto payment gateway",
            details: "Accept payments in bitcoin, ethereum, stablecoins, and more.",
        },
        {
            id: 2,
            image: i2,
            title: "Instant settlements",
            details: "Receive funds within seconds with real-time validation.",
        },
        {
            id: 3,
            image: i3,
            title: "KYC & KYT Compliant",
            details: "Built-in security ensures safe and regulatory-compliant processing.",
        },
        {
            id: 4,
            image: i4,
            title: "Multiple payment methods",
            details: "Enable crypto to fiat payment gateway for easy conversions.",
        },
        {
            id: 5,
            image: i5,
            title: "Developer-friendly API",
            details: "Simple integration with crypto payment API support.",
        },
        {
            id: 6,
            image: i6,
            title: "White-label solutions",
            details: "Launch your white label crypto payment gateway under your own brand.",
        },
    ];

    return (
        <div className="flex flex-col justify-center lg:w-[1200px] lg:h-[872px] md:gap-[60px]">
            <h1 className="text-[30px] md:text-[60px] text-center font-semibold">
                Why choose crymbo pay?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[30px]">
                {data.map((card) => (

                    <div
                        key={card.id}
                        className=" bg-[#F5F9F7] m-6 md:m-0 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-shadow duration-300 md:w-[380px] md:h-[358px]"
                    >
                        <div className="relative flex justify-center items-center py-4">
                            <div
                                className="absolute inset-0 "
                                style={{
                                    backgroundImage: `url('https://i.ibb.co.com/LXCW1DkD/bg.png')`,

                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",


                                }}
                            ></div>

                            <div className="relative z-10 ">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className="md:w-[137px] md:h-[137px] rounded-lg"
                                />
                            </div></div>
                       <div className="flex flex-col justify-center gap-[2px]">
                       <h3 className="text-[20px] md:text-[24px] font-semibold text-[#040B06] mb-2">{card.title}</h3>
                       <p className="text-[16px] text-[#3E4440]">{card.details}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
