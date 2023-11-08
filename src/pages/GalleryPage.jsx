import { LinkCard } from "../components/LinkCard";
import { MapRoute } from "../components/MapRoute";

export const GalleryPage = () => {
  return (
    <div className="bg-[#000] px-[1.25rem] pt-[6.75rem] pb-[4.44rem] xl:pt-[9.88rem] xl:px-[14%] xl:pb-[5.69rem]">
      <MapRoute />
      <div className="grid grid-cols-1 gap-[1.94rem] xl:grid-cols-3 xl:gap-x-[1.44rem] xl:gap-y-[3.25rem] ">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
};
