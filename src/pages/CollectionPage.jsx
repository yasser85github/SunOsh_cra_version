import BANNER from "../assets/images/banner.png";
import { CollectionCarousel } from "../layouts/CollectionPage/CollectionCarousel";
import { BigInfoCardWhitBtn } from "../layouts/General/BigInfoCardWhitBtn";

export const CollectionPage = () => {
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

      <div className="flex flex-col pt-[2.87rem] gap-y-[2rem]  ">
        <BigInfoCardWhitBtn />

        <div>
          <CollectionCarousel />
        </div>
      </div>
    </div>
  );
};
