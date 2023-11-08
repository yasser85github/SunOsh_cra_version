import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../assets/icons/ArrowRight";

export const LinkBtn = ({ children, link }) => {
  return (
    <Link
      to={link}
      className={`px-5 py-1 flex justify-between items-center border-[2px] h-[2.875rem] border-[#F4DE88] bg-[#000000] text-[#F4DE88] transition duration-300 text-base xl:px-[2rem] 2xl:px-[4.4rem] xl:gap-5 xl:h-[3.2rem] 2xl:h-[4.375rem] hover:bg-[#F4DE88] hover:text-[#000]`}
    >
      <div className="pr-2 font-semibold xl:text-[1.3rem] 2xl:text-[1.625rem]">
        <>{children}</>
      </div>
      <div className="fill-[#F4DE88]">
        <ArrowRight />
      </div>
    </Link>
  );
};
