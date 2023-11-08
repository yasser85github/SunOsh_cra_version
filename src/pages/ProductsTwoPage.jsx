import { BottomCarouselProductsTwo } from "../layouts/ProductsTwo/BottomCarouselProductsTwo";
import { CarouselProductsTwo } from "../layouts/ProductsTwo/CarouselProductsTwo";
import { InfoCardProductsTwo } from "../layouts/ProductsTwo/InfoCardsProductsTwo";

export const ProductsTwoPage = () => {
  return (
    <div className="bg-[#000] pt-[4.4375rem] xl:pt-[6.5rem]">
      <div>
        <CarouselProductsTwo />
      </div>
      <div className="flex flex-col xl:flex-row xl:justify-between xl:pt-[10.5%] xl:pb-[8.6rem] xl:pl-[14%] xl:pr-[10.5%] ">
        <InfoCardProductsTwo />
        <BottomCarouselProductsTwo />
      </div>
    </div>
  );
};
