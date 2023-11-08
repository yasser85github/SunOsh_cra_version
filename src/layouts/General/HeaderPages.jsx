import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";

export const HeaderPages = () => {
  return (
    <div className="px-[1.25rem] py-[1.88rem] pt-[6.12rem] xl:pt-0 xl:px-[22%]">
      <div>
        <Title>
          <h1 className="text-[1.875rem] leading-normal xl:text-[3rem] 2xl:text-[4.0625rem]">
            Manténgase actualizado con nosotros
          </h1>
        </Title>
      </div>
      <div className="pt-[1rem]">
        <TextLight>
          <p className="text-base xl:text-[1.3rem] xl:leading-[2rem] 2xl:text-[1.75rem] 2xl:leading-[2.4955rem]">
            Descubra lo que está pasando en SunOsh. Visite con frecuencia para
            conocer las últimas noticias sobre grandes inauguraciones y eventos
            que tendrán lugar en nuestras ubicaciones.
          </p>
        </TextLight>
      </div>
    </div>
  );
};
