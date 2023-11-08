import { LinkBtn } from "../../components/LinkBtn";
import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import FOTOPRODUCTO from "../../assets/images/productdeta.jpg";

export const InfoCardProductsTwo = () => {
  return (
    <>
      <div className="xl:flex xl:flex-col hidden xl:gap-[1.06rem] xl:order-2 ">
        <div className="flex justify-end">
          <img className="xl:w-[80%]" src={FOTOPRODUCTO} alt="FOTOPRODUCTO" />
        </div>

        <div className="xl:translate-x-[-1rem] 2xl:translate-x-[-15rem]">
          <img className="xl:w-[80%]" src={FOTOPRODUCTO} alt="FOTOPRODUCTO" />
        </div>
      </div>
      <div className="xl:order-1 2xl:pt-[2rem] pb-[2.44rem]">
        <div className="px-[1.25rem] xl:max-w-[32.1875rem] xl:gap-y-[2.25rem] xl:pt-[5rem] 2xl:pt-[1rem]">
          <div>
            <Title>
              <h1>Idea Group</h1>
            </Title>
          </div>
          <div>
            <TextLight>
              <p className=" xl:pt-[1rem] 2xlpt-[2.5rem] xl:text-[1.3rem] 2xl:text-[1.5rem] leading-[2.139rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam nulla veniam iste quibusdam nostrum aliquid maiores
                necessitatibus quisquam est, numquam pariatur explicabo
                molestiae praesentium! Assumenda harum delectus provident unde
                veniam?
              </p>
            </TextLight>
          </div>

          <div className="w-full pt-[2.5rem]">
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
