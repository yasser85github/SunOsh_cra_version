import { CarouselBanner } from "../layouts/HomePage/CarouselBanner";
import { Title } from "../components/Title";
import { TextLight, TextBold } from "../components/Texts";
import { LinkBtn } from "../components/LinkBtn";
import { MainDesktop } from "../layouts/HomePage/MainDesktop";
import { MainMobile } from "../layouts/HomePage/MainMobile";

export const HomePage = () => {
  return (
    <>
      <CarouselBanner />

      <section className="bg-[#000] flex flex-col text-center items-center px-[2.5rem] py-[2.5rem] gap-6 xl:px-[27%] xl:py-[11rem]">
        <Title>
          <h1>Crea tu espacio</h1>
        </Title>

        <div className="flex flex-col gap-6 xl:gap-[3rem] xl:pb-[3rem]">
          <TextLight>
            <p className="xl:leading-[2rem] 2xl:leading-[2.5rem]">
              La variedad y calidad de nuestros productos, te permitirá
              construir el espacio de tus sueños atendiendo a tus gustos y
              necesidades.
            </p>
          </TextLight>

          <div className="px-[1.5rem]">
            <TextBold>
              <p className="xl:leading-[2rem] 2xl:leading-[2.5rem]">
                Si tu imaginación no tiene límites, nuestro stock tampoco. Ven y
                compruébalo por ti mismo
              </p>
            </TextBold>
          </div>
        </div>

        <LinkBtn link="#">
          <p>Contactanos</p>
        </LinkBtn>
      </section>
      <div className="hidden xl:block ">
        <MainDesktop />
      </div>
      <div className="xl:hidden">
        <MainMobile />
      </div>
    </>
  );
};
