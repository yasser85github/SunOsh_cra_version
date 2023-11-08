import BANNER from "../assets/images/banner.png";
import { CollectionCarousel } from "../layouts/CollectionPage/CollectionCarousel";
import { InfoCardsWhitThreePhotos } from "../layouts/CollectionPageTwo/InfoCardsWhitThreePhotos";
import { InfoCardWhitBtn } from "../layouts/General/InfoCardWhitBtn";
export const CollectionPageTwo = () => {
  return (
    <div className="bg-[#000] pt-[4.4375rem] xl:pt-[6.5rem] ">
      {/* Banner */}
      <div className="h-[21.875rem] xl:h-full xl:w-full">
        <img
          className="object-cover h-[21.875rem] xl:h-full xl:w-full"
          src={BANNER}
          alt="BANNER"
        />
      </div>
      <div className="flex flex-col xl:flex-row xl:justify-between xl:pb-[8.6rem] xl:pl-[14%] xl:pr-[10%] xl:grid xl:grid-cols-2 ">
        <div className="xl:order-2">
          <InfoCardsWhitThreePhotos />
        </div>
        <div className="xl:order-1 xl:flex xl:w-full xl:items-center">
          <InfoCardWhitBtn />
        </div>
      </div>
      <CollectionCarousel />
    </div>
  );
};
