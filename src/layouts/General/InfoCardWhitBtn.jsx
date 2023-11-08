import { LinkBtn } from "../../components/LinkBtn";
import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";

export const InfoCardWhitBtn = () => {
  return (
    <div className="flex flex-col justify-start pt-[2rem] pb-[2.6rem] xl:pt-[1rem] 2xl:pt-[1.94rem] px-[1.25rem] xl:leading-[2rem] 2xl:px-[2.65rem]">
      <Title>
        <h1 className="font-semibold tracking-wide">Cocinas</h1>
      </Title>

      <div>
        <TextLight>
          <p className=" leading-[1.426rem] xl:leading-[1.7rem] 2xl:leading-[2.139rem] font-thin xl:text-[1rem] 2xl:text-[1.5rem]">
            Excelente colección para decoración de cocina, cree un espacio
            inteligente y elegante que complemente su estilo de vida.
          </p>
        </TextLight>
      </div>

      <div className="w-[80%] pt-5">
        <LinkBtn link="#">
          <p>Ver mas</p>
        </LinkBtn>
      </div>
    </div>
  );
};
