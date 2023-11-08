import { Title } from "./Title";
import LOSAONE from "../assets/images/losaone.jpg";

export const LinkCard = () => {
  return (
    <div className="flex flex-col text-center">
      <div>
        <img
          className=" h-[13rem] xl:object-none xl:h-[17rem] xl:w-full"
          src={LOSAONE}
          alt="LOSAONE"
        />
      </div>

      <div className=" w-full border border-[#F4DE88] xl:h-[4rem]">
        <Title>
          <h1 className="text-[1.5625rem] xl:text-[2rem] 2xl:text-[2.1875rem]">
            Pinar
          </h1>
        </Title>
      </div>
    </div>
  );
};
