import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import GOLD_ARROW from "../../assets/icons/arrowBannerCarousel.svg";
import "swiper/css/navigation";
import "swiper/css";

import bannerDesktop from "../../assets/icons/banner.png";
import bannerMovile from "../../assets/icons/bannerMovile.png";

const swipe = [
  {
    src: bannerDesktop,
    alt: "banner",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
];

export const CarouselGalleryDetails = () => {
  return (
    <div className="relative">
      <div className="flex flex-col xl:h-[53.1875rem]">
        <Swiper
          className="m-0"
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".nextEl",
            prevEl: ".prevEl",
          }}
          pagination={{
            el: ".dots",
            clickable: true,
          }}
          slidesPerView={1}
        >
          {swipe.map(({ src, alt }) => (
            <SwiperSlide key={alt} className="object-cover z-0  ">
              <img
                className="object-cover w-full h-[13.1875rem] xl:h-[53.1875rem]"
                src={src}
                alt={alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="nextEl hidden xl:absolute xl:block xl:top-1/2 xl:right-0 xl:z-10 xl:w-[3.25rem]">
          <img className="rotate-180" src={GOLD_ARROW} alt="GOLD_LEFT_ARROW" />
        </button>

        <button className="prevEl hidden xl:absolute xl:block xl:top-1/2 xl:left-0 xl:z-10  xl:w-[3.25rem] ">
          <img src={GOLD_ARROW} alt="GOLD_RIGHT_ARROW" />
        </button>
        <div className="xl:hidden w-full flex justify-center">
          <div className=" flex dots mt-[0.69rem]"></div>
        </div>
      </div>
    </div>
  );
};
