import "./index.css";
function Mainpage() {
  return (
    <>
      <div className="w-full h-screen bg-[#F4D04E] flex justify-center items-center ">
        <div className="px-[24px] shadow w-[384px] h-[522px] p-8 bg-white border  rounded-[20px] border-solid border-black md:max-w-[384px] sm:max-w-[384px]">
          <div>
            <img src="src\assets\images\image.png" alt="" />
          </div>
          <div className="mt-6 flex flex-col gap-[12px]">
            <div className="w-[82px] h-[29px] bg-[#F4D04E] text-center font-bold rounded-[4px]">
              Learning
            </div>
            <div className=" h-[21px]">Published 21 Dec 2023</div>
            <div className="font-extrabold text-2xl">
              HTML & CSS foundations
            </div>
            <div className="text-grey ">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </div>
          </div>
          <div className="mt-[24px] flex gap-[12px]">
            <img
              src="./src/assets/images/image-avatar.webp"
              alt=""
              className="w-[32px] h-[32px] rounded-full"
            />
            <div className="font-bold self-center">Greg Hooper</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
