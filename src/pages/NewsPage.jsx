import { MapRoute } from "../components/MapRoute";
import { HeaderPages } from "../layouts/General/HeaderPages";
import { NewsPageMainDesktop } from "../layouts/NewsPage/NewsPageMainDesktop";
import { NewsPageMainMobile } from "../layouts/NewsPage/NewsPageMainMobile";

export const NewsPage = () => {
  return (
    <div className="bg-[#000] md:pt-[9.88rem]">
      <div className="hidden md:block px-[15%]">
        <MapRoute />
      </div>
      <HeaderPages />
      <NewsPageMainMobile />
      <NewsPageMainDesktop />
    </div>
  );
};
