import { Title } from "../../components/Title";
import FotoRandom from "../../assets/images/fotoRandom.jpg";

export const InfoCardsWhitThreePhotos = () => {
  return (
    <div className="grid grid-rows-3 pt-[2.87rem] gap-[0.5rem] 2xl:gap-[1rem] 2xl:place-items-end">
      <div className="flex w-full 2xl:h-[21.5625rem]">
        <div className="flex">
          <Title>
            <h1 className="rotate-[270deg] translate-x-6 translate-y-3.5 xl:translate-y-6">
              Salon
            </h1>
          </Title>
        </div>
        <div className="flex w-full xl:w-full ">
          <img className="w-full" src={FotoRandom} alt="FotoRandom" />
        </div>
      </div>

      <div className="flex w-full pl-[1.5rem] xl:pl-0 2xl:h-[21.5625rem]">
        <div className="flex w-full xl:w-full">
          <img className="w-[80%]" src={FotoRandom} alt="FotoRandom" />
        </div>
      </div>

      <div className="flex w-full justify-end 2xl:h-[21.5625rem]">
        <div className="flex w-full xl:w-full justify-end">
          <img className="w-[80%]" src={FotoRandom} alt="FotoRandom" />
        </div>
      </div>
    </div>
  );
};
