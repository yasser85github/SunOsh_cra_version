import HOME_ICON from "../assets/icons/homeIcon.svg";
import VECTOR_ARROW from "../assets/icons/vectorArrow.svg";

export const MapRoute = () => {
  return (
    <div className=" hidden xl:flex flex-row items-center xl:pb-[3.5rem] 2xlpb-[6.44rem]">
      <div className="flex gap-[0.69rem] items-center">
        <div>
          <img src={HOME_ICON} alt="HOME_ICON" />
        </div>
        <div className="font-averta xl:text-base  2xl:text-[1.25rem] text-[#F4DE88] leading-[1.7825rem]">
          <p>Home</p>
        </div>
      </div>
      <div className=" flex items-center">
        <div>
          <img
            className="h-[0.875rem] pl-[0.5rem]"
            src={VECTOR_ARROW}
            alt="VECTOR_ARROW"
          />
        </div>
        <div className="pl-[0.75rem] font-averta  xl:text-base 2xl:text-[1.25rem] text-[#F4DE88] leading-[1.7825rem]">
          <p>Sobre Nosotros</p>
        </div>
        <div>
          <img
            className="h-[0.875rem] pl-[0.5rem]"
            src={VECTOR_ARROW}
            alt="VECTOR_ARROW"
          />
        </div>
        <div className="pl-[0.75rem] font-averta xl:text-base 2xl:text-[1.25rem] text-[#F4DE88] leading-[1.7825rem]">
          <p>Contacto</p>
        </div>
      </div>
    </div>
  );
};
