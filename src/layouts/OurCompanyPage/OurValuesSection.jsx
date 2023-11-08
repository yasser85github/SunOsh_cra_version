import { Title } from "../../components/Title";

export const OurValuesSection = () => {
  return (
    <div className="flex flex-col px-[3.25rem] text-center justify-center xl:flex xl:flex-row xl:flex-wrap xl:text-start xl:px-0">
      <div className="xl:w-full">
        <Title>
          <h1 className="text-[1.875rem] xl:text-[3.2rem] 2xl:text-[4.375rem]">
            Nuestros Valores
          </h1>
        </Title>
      </div>
      <div className="xl:flex xl:justify-between xl:w-full">
        {/* First VAlue */}
        <div className="felx flex-col justyfy-center items-center text-center mt-[2.87rem] xl:text-start ">
          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            Garantizamos 100%
          </p>

          <Title>
            <p className="text-[3.75rem] 2xl:text-[5.625rem]">Calidad</p>
          </Title>

          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            en todos nuestros productos
          </p>
        </div>

        {/* SECOUND VALUE  */}
        <div className="felx flex-col justyfy-center items-center text-center mt-[2.87rem] xl:text-start ">
          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            Garantizamos 100%
          </p>

          <Title>
            <h1 className="text-[3.75rem] 2xl:text-[5.625rem]">Calidad</h1>
          </Title>

          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            en todos nuestros productos
          </p>
        </div>

        {/* Three Value */}
        <div className="felx flex-col justyfy-center items-center text-center mt-[2.87rem] xl:text-start ">
          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            Garantizamos 100%
          </p>

          <Title>
            <h1 className="text-[3.75rem] 2xl:text-[5.625rem]">Calidad</h1>
          </Title>

          <p className="font-averta text-[#FFF] text-[1.125rem] 2xl:text-[1.75rem]">
            en todos nuestros productos
          </p>
        </div>
      </div>
    </div>
  );
};
