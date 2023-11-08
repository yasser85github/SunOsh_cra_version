import { useState } from "react";
import { SizeIcon } from "../../assets/icons/SizeIcon";
import { SizeIconBlack } from "../../assets/icons/SizeIconBlack";
import { VectorArrow } from "../../assets/icons/VectorArrow";

export const DetailsSize = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div>
      <div
        className={`absolute bottom-0 right-0 border-0 rounded-ss-[2rem] z-10 w-[3rem] ${
          isOpen ? "bg-[#F4DE88]" : "bg-black"
        } xl:hidden `}
      >
        <div
          className={`pr-[0.64rem] pl-[0.93rem] pb-[0.56rem] pt-[0.75rem] cursor-pointer flex flex-col justify-between items-center gap-[0.5rem] ${
            isOpen ? "" : ""
          }`}
          onClick={() => setisOpen(!isOpen)}
        >
          <div className={`rotate-[270deg] ${isOpen && "hidden"}`}>
            <VectorArrow />
          </div>
          <div className={`${isOpen && "hidden"}`}>
            <SizeIcon />
          </div>
          <div className={`${!isOpen && "hidden"}`}>
            <SizeIconBlack />
          </div>
        </div>
        {isOpen && (
          <div className="p-4 bg-black h-[11.3125rem] border-0">123</div>
        )}
      </div>
      <div className="hidden xl:block absolute bottom-0 right-0 bg-black xl:h-[4rem] xl:w-[24rem] 2xl:h-[6.625rem] 2xl:w-[33.5rem] rounded-ss-[4rem] z-10"></div>
    </div>
  );
};
