import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import FOTO_RANDOM from "../../assets/images/fotoRandom.jpg";

export const SectionCardRight = () => {
  return (
    <div className="xl:pb-[11.6rem] xl:w-full xl-h-full">
      <div className="pr-[1.25rem] text-end mb-[1.5rem] xl:w-full xl:text-end xl:pl-0">
        <Title>
          <h1 className="text-[1.875rem] xl:text-[3rem] 2xl:text-[4.375rem]">
            Nuestra historia
          </h1>
        </Title>
      </div>

      <div className="xl:flex xl:justify-end">
        <div className="flex absolute  xl:right-0 xl:w-2/3">
          <img
            className=" xl:w-2/3 2xl:min-w-[51.875rem] 2xl:min-h-[35.4375rem]"
            src={FOTO_RANDOM}
            alt="FOTO_RANDOM"
          />
        </div>

        <div className="relative top-[-1.5rem] left-[3.5rem] py-[1.44rem] pl-[1.62rem] pr-[0.69rem] w-[17.6875rem] border border-[#F4DE88] bg-[#000] xl:top-[4rem] xl:left-[-35rem] xl:max-h-[20rem] xl:min-w-[25rem] 2xl:left-[50rem] 2xl:top-20 2xl:min-h-[25rem] 2xl:min-w-[39rem] ">
          <TextLight>
            <p className="text-[1rem] leading-[1.6rem] font-averta xl:text-[1.3rem] xl:leading-[1.7rem] 2xl:text-[1.5rem] 2xl:leading-[2.4rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              dolore aliquam voluptates accusantium fugit, laudantium amet
              doloribus quisquam ipsa obcaecati molestiae culpa? Eveniet
              similique quisquam dolorem unde quaerat laudantium magni.
            </p>
          </TextLight>
        </div>
      </div>
    </div>
  );
};
