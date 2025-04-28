import Card from "./Card";

const WhoIsCrymboPayFor = () => {
    return (
        <div className="flex flex-col justify-center items-center md:my-[100px] relative ">
            <div className="relative wapper ">
                <div
                    className="absolute inset-0  md:bg-[#F5F9F7]"
                    style={{
                        backgroundImage: `url('https://i.ibb.co.com/84064ZZB/bg.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="relative z-10"><Card /></div>
            </div>


        </div>
    );
};

export default WhoIsCrymboPayFor;