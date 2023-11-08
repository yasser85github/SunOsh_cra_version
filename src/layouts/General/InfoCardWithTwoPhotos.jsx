import { LinkBtn } from "../../components/LinkBtn";
import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import FOTOPRODUCTO from "../../assets/images/productdeta.jpg";

export const InfoCardWithTwoPhotos = () => {
  return (
    <>
      <div className="flex flex-col  xl:gap-[1.06rem] xl:order-2 ">
        <div className="flex justify-end">
          <img className="w-[80%]" src={FOTOPRODUCTO} alt="FOTOPRODUCTO" />
        </div>

        <div className="xl:translate-x-[-1rem] 2xl:translate-x-[-15rem]">
          <img className="w-[80%]" src={FOTOPRODUCTO} alt="FOTOPRODUCTO" />
        </div>
      </div>
      <div className="xl:order-1 xl:pt-[2rem] pb-[2.44rem]">
        <div className="px-[1.25rem] xl:max-w-[32.1875rem] xl:gap-y-[2.25rem] xl:pt-0 2xl:pt-20">
          <div>
            <Title>
              <h1>Idea Group</h1>
            </Title>
          </div>
          <div>
            <TextLight>
              <p className=" text-base xl:pt-[1rem] 2xl:pt-[2.5rem] xl:text-[1.3rem] 2xl:text-[1.5rem] xl:-leading-[2rem] 2xl:leading-[2.139rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam nulla veniam iste quibusdam nostrum aliquid maiores
                necessitatibus quisquam est, numquam pariatur explicabo
                molestiae praesentium! Assumenda harum delectus provident unde
                veniam?
              </p>
            </TextLight>
          </div>

          <div className="w-full pt-[1.5rem] xl:pt-[2.5rem]">
            <div className="w-3/4">
              <LinkBtn link="#">
                <p>vermas</p>
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
