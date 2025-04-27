import Image from "next/image";
import i1 from "../../../public/AnotherWhoCrymo/1.svg";
import i2 from "../../../public/AnotherWhoCrymo/2.svg";
import i3 from "../../../public/AnotherWhoCrymo/3.svg";
import i4 from "../../../public/AnotherWhoCrymo/4.svg";
import i5 from "../../../public/AnotherWhoCrymo/5.svg";
import i6 from "../../../public/AnotherWhoCrymo/6.svg";
import ButtonUi from "../shared/ButtonUi";
const Card = () => {
    const data = [
        {
            id: 1,
            image: i1,
            // title: "Merchants & Marketplaces",
            details: "Needing a seamless crypto payment gateway solution.",
        },
        {
            id: 2,
            image: i2,
            //title: "Gaming & Digital Services",
            details: "Requiring fast and secure crypto transactions.",
        },
        {
            id: 3,
            image: i3,
            //title: "EMIs & Fintech",
            details: "Expanding into blockchain payment platform solutions.",
        },
        {
            id: 4,
            image: i4,
            //title: "Join Thousands of Businesses",
            details: "Already using Crymbo Pay for seamless transactions.",
        },
        {
            id: 5,
            image: i5,
            //title: "E-commerce Businesses",
            details: "Looking for a powerful cryptocurrency payment gateway.",
        },
        {
            id: 6,
            image: i6,
            //title: "High-Risk Industries",
            details: "Seeking alternative payment methods beyond traditional banking.",
        },
    ];

    return (
        <div className="py-14 md:px-14">
            <div className="flex  md:hidden flex-col justify-between items-start mx-6 md:mx-0 lg:mx-6 lg:gap-[20px] mb-10">
                <button className=' BTN'>
                    Crymbo pay
                </button>
                <h2 className="text-[40px] md:text-[60px] font-semibold md:leading-[110.00000001%]">Who is Crymbo <br />Pay for?</h2>
                <p className="text-lg text-[#3E4440] mb-1">Whether you're an online store, an EMI, or a financial service provider, Crymbo Pay ensures seamless transactions.</p>
                <div className="flex justify-center md:justify-start gap-4">
                    <ButtonUi />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-6 md:mx-0">
                <div className="hidden md:flex flex-col justify-start items-start gap-[20px] lg:col-span-2">
                    <button className=' BTN'>
                        Crymbo pay
                    </button>
                    <h2 className="text-[40px] md:text-[44px] lg:text-[60px] font-semibold md:leading-[110.00000001%]">Who is Crymbo <br />Pay for?</h2>

                </div>

                {data.map((card) => (
                    <div
                        key={card.id}
                        className="bg-[#FCFFFD] hover:bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 md:mt-6"
                    >
                        <div className="flex items-start justify-start mb-6">
                            <Image
                                src={card.image}
                                alt="image"
                                className="w-[40px] h-[40px] rounded-lg"
                            />
                        </div>
                        {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3> */}
                        <p className="text-gray-600">{card.details}</p>
                    </div>
                ))}
                <div className="hidden md:flex flex-col  text-center md:text-start mt-8 col-span-2 md:col-span-1 mx-2 md:mx-0">
                    <p className="text-lg text-[#3E4440] mb-4">Whether you're an online store, an EMI, or a financial service provider, Crymbo Pay ensures seamless transactions.</p>
                    <div className="flex justify-center md:justify-start gap-4">
                        <ButtonUi />
                    </div>
                </div>
            </div>


        </div>
    );
};


export default Card;