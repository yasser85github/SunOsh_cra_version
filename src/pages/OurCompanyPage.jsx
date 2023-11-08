import { MapRoute } from "../components/MapRoute";
import { SectionCardRight } from "../layouts/OurCompanyPage/SectionCardRight";
import { SectionCardLeft } from "../layouts/OurCompanyPage/SectionCardLeft";
import { OurValuesSection } from "../layouts/OurCompanyPage/OurValuesSection";

export const OurCompanyPage = () => {
  return (
    <div className="bg-[#000] flex flex-col gap-[2.63rem] pt-[6.13rem] pb-[4.69rem] xl:px-[14%] xl:pb-[11%] xl:pt-[9.88rem]">
      <MapRoute />
      {/* CONTAINER 1 */}
      <SectionCardRight />
      {/* CONTAINER 2 */}
      <SectionCardLeft />

      {/* VALUES CONTAINER */}
      <OurValuesSection />
    </div>
  );
};
