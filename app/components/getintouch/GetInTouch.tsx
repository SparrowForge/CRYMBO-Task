import Info from "./Info";
import SmallInfo from "./SmallInfo";


const GetInTouch = () => {
    return (
        <div className="flex flex-col justify-center items-center my-[60px] md:my-[100px] mx-4 md:mx-3 lg:mx-0">
            <div
                className="w-full lg:w-[1200px] relative  p-3 md:p-6 rounded-2xl" 
                style={{
                    backgroundImage: `url('/svg/bg1.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    
                }}
            >


                <div className="relative flex md:px-14 py-6">
                    <Info />
                </div>
               
            </div>
        </div>
    );
};

export default GetInTouch;