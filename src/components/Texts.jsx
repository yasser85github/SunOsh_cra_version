import React from "react";

export const TextLight = ({ children }) => {
  return (
    <div className="text-base text-[#F4DE88] font-averta font-thin xl:text-[1.3rem] 2xl:text-[1.625rem]">
      {children}
    </div>
  );
};

export const TextBold = ({ children }) => {
  return (
    <div className="text-base text-[#F4DE88] font-avertab font-normal xl:text-[1.3rem] 2xl:text-[1.75rem]">
      {children}
    </div>
  );
};
