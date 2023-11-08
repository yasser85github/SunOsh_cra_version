import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bannerDesktop from "../../assets/icons/banner.png";
import bannerMovile from "../../assets/icons/bannerMovile.png";
import ArrowVector from "../../assets/icons/vectorArrow.svg";

import "swiper/css/navigation";
import "swiper/css";
import { TextLight } from "../../components/Texts";
import { useState } from "react";
import { Title } from "../../components/Title";

const swipe = [
  {
    src: bannerDesktop,
    alt: "banner",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
  {
    src: bannerMovile,
    alt: "bannermovile",
  },
];

export const CarouselRelatedProducts = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleReachEnd = () => {
    setIsBeginning(false);
    setIsEnd(true);
  };

  const handleReachBeginning = () => {
    setIsBeginning(true);
    setIsEnd(false);
  };

  const handleFromEdge = () => {
    setIsBeginning(false);
    setIsEnd(false);
  };

  return (
    <div className="pl-[1.25rem] pt-[3.20rem] pb-[1.73rem] xl:px-[11%] xl:py-[12.13rem]">
      <div className="xl:px-[2.21rem]">
        <Title>
          <h1 className="text-[1.875rem] xl:text-[3.2rem] 2xl:text-[4.375rem]">
            Productos Relacionados
          </h1>
        </Title>
      </div>
      <div className="flex flex-col w-full py-4 xl:flex-row xl:justify-evenly ">
        <button className="prevEl items-center justify-start hidden xl:flex w-[5%] z-10">
          <img
            className={isBeginning ? "hidden" : "felx rotate-180"}
            src={ArrowVector}
            alt="ArrowVector"
          />
        </button>
        <Swiper
          className="m-0 flex flex-row"
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".nextEl",
            prevEl: ".prevEl",
          }}
          onReachBeginning={handleReachBeginning}
          onReachEnd={handleReachEnd}
          onFromEdge={handleFromEdge}
          spaceBetween={25}
          breakpoints={{
            360: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {swipe.map(({ src, alt }) => (
            <SwiperSlide key={alt} className="z-0">
              <div className="flex flex-col w-[100%] h-[414.5px] xl:h-[30rem] 2xl:h-[40rem]">
                <div className="w-full h-[95%]">
                  <img
                    className="object-cover w-full h-[97%]"
                    src={src}
                    alt={alt}
                  />
                </div>
                <div className="w-full h-[5%]">
                  <TextLight>
                    <p>TEXTO</p>
                  </TextLight>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={
            "nextEl items-center justify-end hidden xl:flex w-[5%] z-10"
          }
        >
          <img
            className={isEnd ? "hidden" : "felx"}
            src={ArrowVector}
            alt="ArrowVector"
          />
        </button>
      </div>
    </div>
  );
};
