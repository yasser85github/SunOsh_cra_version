import { MapRoute } from "../components/MapRoute";
import { CarouselGalleryDetails } from "../layouts/GalleryDetails/CarouselGalleryDetails";
import { GalleryNameDesktop } from "../layouts/GalleryDetails/GalleryNameDesktop";
import { GalleryNameMobile } from "../layouts/GalleryDetails/GalleryNameMobile";

export const GalleryDetailsPage = () => {
  return (
    <div className=" bg-[rgb(0,0,0)] pt-[6.8rem] pb-[9.69rem] px-[1.25rem] xl:px-[13.7%] xl:pb-[12.06rem] xl:pt-[9.88rem]">
      <MapRoute />
      <div className="hidden xl:block">
        <GalleryNameDesktop />
      </div>
      <div className="xl:hidden block">
        <GalleryNameMobile />
      </div>
      <div>
        <CarouselGalleryDetails />
      </div>
    </div>
  );
};
