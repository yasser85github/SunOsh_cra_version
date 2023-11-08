import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import ArrowVector from "../../assets/icons/vectorArrow.svg";

export const InfoCategories = () => {
  return (
    <div className="px-[1.25rem] py-[1.88rem] pt-[6.12rem] xl:pt-0 xl:px-[15%]">
      <div className="flex flex-row items-center justify-center gap-[0.82rem] xl:gap-[3rem]">
        <div>
          <img
            className="rotate-180 h-[0.9375rem] xl:h-[2rem] 2xl:h-[2.3125rem]"
            src={ArrowVector}
            alt="ArrowVector"
          />
        </div>

        <div>
          <Title>
            <h1 className="text-[1.5625rem] leading-normal xl:text-[4rem] 2xl:text-[6.25rem]">
              Categorías
            </h1>
          </Title>
        </div>

        <div>
          <img
            className="h-[0.9375rem] xl:h-[2rem] 2xl:h-[2.3125rem]"
            src={ArrowVector}
            alt="ArrowVector"
          />
        </div>
      </div>
      <div className="pt-[1rem]">
        <TextLight>
          <p className="text-base font-extralight xl:text-[1.3rem] xl:leading-[2rem] 2xl:text-[1.75rem] 2xl:leading-[2.4955rem]">
            Descubra lo que está pasando en SunOsh. Visite con frecuencia para
            conocer las últimas noticias sobre grandes inauguraciones y eventos
            que tendrán lugar en nuestras ubicaciones.
          </p>
        </TextLight>
      </div>
    </div>
  );
};
