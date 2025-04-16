import Image from "next/image";
import i1 from "../../../public/AnotherWhoCrymo/1.png";
import i2 from "../../../public/AnotherWhoCrymo/2.png";
import i3 from "../../../public/AnotherWhoCrymo/3.png";
import i4 from "../../../public/AnotherWhoCrymo/4.png";
import i5 from "../../../public/AnotherWhoCrymo/5.png";
import i6 from "../../../public/AnotherWhoCrymo/6.png";
import ButtonUi from "../shared/ButtonUi";
const Card = () => {
    const data = [
        {
            id: 1,
            image: i1,
            title: "Merchants & Marketplaces",
            details: "Needing a seamless crypto payment gateway solution.",
        },
        {
            id: 2,
            image: i2,
            title: "Gaming & Digital Services",
            details: "Requiring fast and secure crypto transactions.",
        },
        {
            id: 3,
            image: i3,
            title: "EMIs & Fintech",
            details: "Expanding into blockchain payment platform solutions.",
        },
        {
            id: 4,
            image: i4,
            title: "Join Thousands of Businesses",
            details: "Already using Crymbo Pay for seamless transactions.",
        },
        {
            id: 5,
            image: i5,
            title: "E-commerce Businesses",
            details: "Looking for a powerful cryptocurrency payment gateway.",
        },
        {
            id: 6,
            image: i6,
            title: "High-Risk Industries",
            details: "Seeking alternative payment methods beyond traditional banking.",
        },
    ];

    return (
        <div className="md:py-20 md:px-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8">
                <div className="flex flex-col justify-between items-start col-span-2 ml-2 md:ml-0">
                    <button className=' py-2 px-4 rounded-full text-[16px] border border-[#040B061A]'>
                        Crymbo pay
                    </button>

                    <h2 className="text-[40px] md:text-[80px] font-semibold md:leading-24">Who is Crymbo Pay for?</h2>

                </div>

                {data.map((card) => (
                    <div
                        key={card.id}
                        className="bg-[#FCFFFD] hover:bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:mt-6"
                    >
                        <div className="flex items-start justify-center md:justify-start mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="w-[40px] h-[40px] rounded-lg"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.details}</p>
                    </div>
                ))}
                <div className="text-center md:text-start mt-8 col-span-2 md:col-span-1 mx-2 md:mx-0">
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
