import Info from "./Info";


const GetInTouch = () => {
    return (
        <div className="flex flex-col justify-center items-center my-[20px] md:my-[50px] sm:my-[100px] ">
        <div
       className="w-full md:w-[1200px] md:h-[380px] relative flex flex-col items-center text-center p-3 md:p-6 bg-gradient-to-t from-[#033716CF] via-[#012E1E] to-[#060C13] md:rounded-[30px]"
   >
       {/* <div
           className="absolute inset-0 "
           style={{
               backgroundImage: `url('https://i.ibb.co.com/9m3bFY4k/bgBanner.png)`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",    
               borderRadius:"30px"
           }}
       ></div> */}
       <div
           className="absolute inset-0 "
           style={{
               backgroundImage: `url(https://i.ibb.co.com/gZkgLq2K/Vector.png)`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",    
           }}
       ></div>
   
       <div className="relative z-10  px-10 py-5  ">
          <Info/>
       </div>
   </div>
   </div>
    );
};

export default GetInTouch;
