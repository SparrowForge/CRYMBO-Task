import Image from "next/image";


const Table = () => {
    const data = [
        {
            feature: "Supports Multiple Blockchains & Coins",
            crymboPay: "Yes",
            otherGateways: "Limited",
        },
        {
            feature: "Instant Settlements",
            crymboPay: "Yes",
            otherGateways: "Manual verification",
        },
        {
            feature: "Compliance-Ready",
            crymboPay: "Yes",
            otherGateways: "No",
        },
        {
            feature: "API’s White-Label",
            crymboPay: "Yes",
            otherGateways: "Manual verification",
        },
        {
            feature: "Compliance Ready",
            crymboPay: "Yes",
            otherGateways: "High Costs",
        },
        {
            feature: "No Hidden Fees",
            crymboPay: "Yes",
            otherGateways: "Hidden Fees",
        },
    ];
    return (
        <div className="flex flex-col justify-center lg:w-[1200px] lg:h-[579px]">
            <div className="text-center mb-12">
                <h2 className="text-[30px] md:text-[60px] font-bold  mb-4">Competitive advantage</h2>
            </div>

            <div className="overflow-x-auto">
            <table className="table-fixed w-full">
                    <thead>
                        <tr className=" mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <th className="px-4 md:px-6 py-3 text-left text-[18px] font-semibold md:w-[380px]">Feature</th>
                            <th className="px-4 md:px-6 py-3 text-left text-[18px] font-semibold md:w-[409px]">Crymbo Pay</th>
                            <th className="px-4 md:px-6 py-3 text-left text-[18px] font-semibold md:w-[409px]">Other Payment Gateways</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b-4 border-white text-[16px]">
                                <td className="px-4 md:px-6  py-4 text-[16px]  bg-[#F5F9F7] md:w-[175px]">{item.feature}</td>
                                <td className="px-4 md:px-6  py-4 text-[16px]  bg-[#F5F9F7]">
                                    <div className="flex justify-start items-center gap-1">
                                        <Image
                                            src="/right.png"
                                            alt="Right"
                                           width={16}
                                           height={16}
                                        />
                                        {item.crymboPay}
                                    </div>

                                    </td>
                                <td className="px-4 md:px-6  py-4 text-[16px]  bg-[#F5F9F7]"> <div className="flex justify-start items-center gap-1">
                                        <Image
                                            src="/cross.png"
                                            alt="Cross"
                                           width={16}
                                           height={16}
                                        />
                                      {item.otherGateways}
                                    </div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;