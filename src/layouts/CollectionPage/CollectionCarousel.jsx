import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bannerDesktop from "../../assets/icons/banner.png";
import bannerMovile from "../../assets/icons/bannerMovile.png";
import GOLD_ARROW from "../../assets/icons/arrowBannerCarousel.svg";

import "swiper/css/navigation";
import "swiper/css";

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

export const CollectionCarousel = () => {
  return (
    <div className="flex flex-col w-full h-100%">
      <Swiper
        className="m-0"
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        slidesPerView={1}
      >
        {swipe.map(({ src, alt }) => (
          <SwiperSlide key={alt} className="z-0">
            <img
              className="object-cover w-full h-[14rem] xl:h-screen "
              src={src}
              alt={alt}
            />
          </SwiperSlide>
        ))}
        <div className="absolute pagination h-[1.2rem] bottom-[1rem] z-10 left-1/2 xl:bottom-[2.56rem]"></div>

        <button className="prevEl hidden xl:w-[3.25rem] xl:flex xl:absolute xl:left-0 xl: top-1/2 z-10">
          <img src={GOLD_ARROW} alt="GOLD_RIGHT_ARROW" />
        </button>

        <button className="nextEl hidden xl:w-[3.25rem] xl:flex xl:absolute xl:right-0 xl:top-1/2 z-10">
          <img className="rotate-180" src={GOLD_ARROW} alt="GOLD_LEFT_ARROW" />
        </button>
      </Swiper>
    </div>
  );
};
