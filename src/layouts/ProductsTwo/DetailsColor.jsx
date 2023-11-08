import { useState } from "react";
import { ColorPalette } from "../../assets/icons/ColorPalette";
import { ColorPaletteBlack } from "../../assets/icons/ColorPaletteBlack";
import { VectorArrow } from "../../assets/icons/VectorArrow";

export const DetailsColor = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      className={`absolute bottom-0 left-0 rounded-se-[2rem] z-10 w-[3rem] ${
        isOpen ? "bg-[#F4DE88]" : "bg-black"
      } `}
    >
      <div className="xl:hidden">
        <div
          className={`pr-[0.88rem] pl-[0.63rem] pt-[0.94rem] pb-[0.5rem] cursor-pointer flex flex-col justify-between items-center ${
            isOpen ? "" : ""
          }`}
          onClick={() => setisOpen(!isOpen)}
        >
          <div className={`rotate-[270deg] ${isOpen && `hidden`}`}>
            <VectorArrow />
          </div>

          <div className={`${isOpen && `hidden`}`}>
            <ColorPalette />
          </div>
          <div className={`${!isOpen && `hidden`}`}>
            <ColorPaletteBlack />
          </div>
        </div>
        {isOpen && <div className="p-4 bg-black h-[11.3125rem]">123</div>}
      </div>
      <div className="hidden xl:block bg-black xl:h-[4rem] xl:w-[27rem] 2xl:h-[6.625rem] 2xl:w-[33.5rem] rounded-se-[4rem]"></div>
    </div>
  );
};
