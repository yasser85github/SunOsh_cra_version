import { MapRoute } from "../components/MapRoute";
import { CollectionCarousel } from "../layouts/CollectionPage/CollectionCarousel";
import { InfoCardWithTwoPhotos } from "../layouts/General/InfoCardWithTwoPhotos";
import { CarouselRelatedProducts } from "../layouts/ProductsDetails/CarouselRelatedProducts";

export const ProductsDetailsPage = () => {
  return (
    <div className="bg-[#000] pt-[4.4375rem] md:pt-[9.88rem]">
      <div className="hidden xl:block xl:px-[14%]">
        <MapRoute />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:pb-[8.6rem] md:pl-[13.5%] md:pr-[11%] ">
        <InfoCardWithTwoPhotos />
      </div>
      <div>
        <CollectionCarousel />
      </div>
      <div>
        <CarouselRelatedProducts />
      </div>
    </div>
  );
};
