

const ButtonUi = () => {
    return (
        <div className="flex justify-between items-center gap-[10px]">
        <button className='cursor-pointer bg-[#040B06] hover:bg-[#FFFFFF] py-2 px-4 rounded-full text-[16px] border border-[#040B061A] hover:border-[#999D9A] text-white hover:text-black'>
            Try it now
        </button>
        <button className='cursor-pointer py-2 px-4 rounded-full text-[16px] bg-[#FFFFFF] hover:bg-[#040B06] border  border-[#999D9A] hover:border-[#040B061A] text-black hover:text-white  '>
            See a demo
        </button>
    </div>
    );
};

export default ButtonUi;