import Image from "next/image";


const BelowCard = () => {
    const data = [
        {
            id: 1,
            title: "Customer chooses crypto",
            details: "Buyers select their preferred digital asset.",
        },
        {
            id: 2,
            title: "Real-time payment processing",
            details: "Transactions are verified instantly with Iow fees.",
        },
        {
            id: 3,
            title: "Funds settled to your account",
            details: "Receive crypto or fiat seamlessly.",
        },
        {
            id: 4,
            title: "Full dashboard control",
            details: "Manage transactions, deposits, track and analyze payments",
        }
    ];
    return (
        <div className="flex flex-col justify-center lg:w-[1200px] my-10 md:my-16">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
                            {data.map((card) => (

                                <div
                                    key={card.id}
                                    className="bg-[#F5F9F7] p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-shadow
                                    duration-300 mx-6 sm:mx-0"
                                >
                                    <div className="flex justify-start items-start py-4">

                                        <div className=" ">
                                            <Image
                                                src="/Howcrymbopaywork/icon.png"
                                                alt={card.title}
                                                width={35}
                                                height={30}
                                            />
                                        </div></div>
                                   <div className="flex flex-col justify-center gap-[10px]">
                                   <h3 className="text-[20px] font-semibold text-[#000000]">{card.title}</h3>
                                   <p className="text-[16px] text-[#3E4440]">{card.details}</p>
                                   </div>
                                </div>
                            ))}
                        </div>
        </div>
    );
};

export default BelowCard;
