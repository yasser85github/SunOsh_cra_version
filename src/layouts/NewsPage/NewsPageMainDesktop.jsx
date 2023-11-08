import { LinkBtn } from "../../components/LinkBtn";
import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import LOSA_ONE from "../../assets/images/losaone.jpg";
import FOTO_COCINA from "../../assets/images/fotoCocina.jpg";
import BANNO_ONE from "../../assets/images/fotoBannoOne.jpg";

export const NewsPageMainDesktop = () => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-[8.13rem] xl:pb-[9rem]">
      <div className="xl:grid xl:grid-cols-4 xl:grid-rows-4 xl:pt-[5rem] xl:gap-2">
        <div>
          <img src={LOSA_ONE} alt={LOSA_ONE} />
        </div>

        <div className="flex flex-col justify-start xl:px-[1rem] 2xl:gap-[1.31rem] 2xl:pb-[2.6rem] 2xl:pt-[1.94rem] 2xl:px-[2.65rem]">
          <Title>
            <h1>Losas</h1>
          </Title>
          <div>
            <TextLight>
              <p className=" xl:leading-[1.7rem] 2xl:leading-[2.139rem]">
                Excelente colección de losas coloniales y de estilo geométrico,
                defina su estilo y complemente su decoración.
              </p>
            </TextLight>
          </div>

          <div className="w-[80%] pt-5">
            <LinkBtn link="#">
              <p>Ver mas</p>
            </LinkBtn>
          </div>
        </div>

        <div>
          <img src={LOSA_ONE} alt={LOSA_ONE} />
        </div>

        <div className="flex flex-col justify-start xl:px-[1rem] 2xl:gap-[1.31rem] 2xl:pb-[2.6rem] 2xl:pt-[1.94rem] 2xl:px-[2.65rem]">
          <Title>
            <h1>Losas</h1>
          </Title>
          <div>
            <TextLight>
              <p className="xl:leading-[1.7rem]  2xl:leading-[2.139rem]">
                Excelente colección de losas coloniales y de estilo geométrico,
                defina su estilo y complemente su decoración.
              </p>
            </TextLight>
          </div>

          <div className="w-[80%] pt-5">
            <LinkBtn link="#">
              <p>Ver mas</p>
            </LinkBtn>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-2">
          <img className="h-full" src={BANNO_ONE} alt="BANNO_ONE" />
        </div>

        <div className="flex flex-col justify-start xl:px-[1rem] 2xl:gap-[1.31rem] 2xl:pb-[2.6rem] 2xl:pt-[1.94rem] 2xl:px-[2.65rem]">
          <Title>
            <h1>Losas</h1>
          </Title>
          <div>
            <TextLight>
              <p className="xl:leading-[1.7rem]  2xl:leading-[2.139rem]">
                Excelente colección de losas coloniales y de estilo geométrico,
                defina su estilo y complemente su decoración.
              </p>
            </TextLight>
          </div>

          <div className="w-[80%] pt-5">
            <LinkBtn link="#">
              <p>Ver mas</p>
            </LinkBtn>
          </div>
        </div>

        <div>
          <img className="h-full" src={LOSA_ONE} alt={LOSA_ONE} />
        </div>
        {/* Row 3 */}
        <div className="flex flex-col justify-start xl:px-[1rem] 2xl:gap-[1.31rem] 2xl:pb-[2.6rem] 2xl:pt-[1.94rem] 2xl:px-[2.65rem]">
          <Title>
            <h1>Losas</h1>
          </Title>
          <div>
            <TextLight>
              <p className="xl:leading-[1.7rem] 2xl:leading-[2.139rem]">
                Excelente colección de losas coloniales y de estilo geométrico,
                defina su estilo y complemente su decoración.
              </p>
            </TextLight>
          </div>

          <div className="w-[80%] pt-5">
            <LinkBtn link="#">
              <p>Ver mas</p>
            </LinkBtn>
          </div>
        </div>

        <div>
          <img className="h-full" src={LOSA_ONE} alt={LOSA_ONE} />
        </div>

        <div className="col-span-2 row-span-2">
          <img className="h-full" src={FOTO_COCINA} alt="FOTO_COCINA" />
        </div>
        {/* Row 4 */}

        <div>
          <img className="h-full" src={LOSA_ONE} alt={LOSA_ONE} />
        </div>

        <div className="flex flex-col justify-start xl:px-[1rem] 2xl:gap-[1.31rem] 2xl:pb-[2.6rem] 2xl:pt-[1.94rem] 2xl:px-[2.65rem]">
          <Title>
            <h1>Losas</h1>
          </Title>
          <div>
            <TextLight>
              <p className="xl:leading-[1.7rem] 2xl:leading-[2.139rem]">
                Excelente colección de losas coloniales y de estilo geométrico,
                defina su estilo y complemente su decoración.
              </p>
            </TextLight>
          </div>

          <div className="w-[80%] pt-5">
            <LinkBtn link="#">
              <p>Ver mas</p>
            </LinkBtn>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button className="text-[#F4DE88] border-[#F4DE88] border-[2px] text-[1.625rem] font-avertasemi h-[4.375rem] w-[25.375rem]">
          Ver todos los Post
        </button>
      </div>
    </div>
  );
};
