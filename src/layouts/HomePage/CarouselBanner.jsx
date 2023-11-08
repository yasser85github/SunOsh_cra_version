import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bannerDesktop from "../../assets/icons/banner.png";
import bannerMovile from "../../assets/icons/bannerMovile.png";
// Hacer esto Yasser
// import { BannerBtn } from "../../components/BannerBtn";
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

export const CarouselBanner = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
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
          <SwiperSlide key={alt} className="object-cover z-0  ">
            <img className="object-cover w-full h-screen" src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="nextEl absolute top-1/2 right-0 z-10 w-[2.4375rem] xl:w-[3.25rem] xl:right-[15%]">
        <img className="rotate-180" src={GOLD_ARROW} alt="GOLD_LEFT_ARROW" />
      </button>

      <button className="prevEl absolute top-1/2 left-0 z-10 w-[2.4375rem] xl:w-[3.25rem] xl:left-[15%]">
        <img src={GOLD_ARROW} alt="GOLD_RIGHT_ARROW" />
      </button>
      <div className="pagination z-10 bg-red absolute left-1/2 bottom-[5%] "></div>
      <div className="flex items-end justify-center absolute top-0 pb-[5rem] left-0 h-screen w-screen z-[1] xl:pb-[10%]">
        {/* Hacer esto Yasser */}
        {/* <BannerBtn /> */}
      </div>
    </div>
  );
};
