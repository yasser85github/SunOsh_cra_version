import { MapRoute } from "../components/MapRoute";
import { Title } from "../components/Title";
import { HeaderPages } from "../layouts/General/HeaderPages";
import { ShowRoomCarousel } from "../layouts/ShowRoomPage/ShowRoomCarousel";

export const ShowRoomPage = () => {
  return (
    <div className="bg-[#000] xl:pt-[9.88rem]">
      <div className="px-[15%] hidden xl:block">
        <MapRoute />
      </div>
      <HeaderPages />
      <div className="pl-[1.25rem] xl:px-[13%]">
        <div className="xl:px-[3.21rem]">
          <Title>
            <p>Bannos</p>
          </Title>
        </div>
        <div>
          {/* TO FIX BOTTONS SLIDERS */}
          <ShowRoomCarousel />
        </div>
      </div>
    </div>
  );
};
