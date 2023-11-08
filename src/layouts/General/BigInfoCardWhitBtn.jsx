import { TextLight } from "../../components/Texts";
import { Title } from "../../components/Title";
import BANNOSCOLECTION from "../../assets/images/bannnocolection.jpg";
import { LinkBtn } from "../../components/LinkBtn";

export const BigInfoCardWhitBtn = () => {
  return (
    <div className="flex flex-col gap-y-[2rem] xl:flex-row xl:justify-center xl:py-[8.75rem] xl:px[13%] 2xl:px-[15%] gap-[4.20rem]">
      <div className="flex">
        <div className="w-[20%]">
          <Title>
            <h1 className="rotate-[270deg] translate-x-3 translate-y-[3.2rem] xl:translate-x-[2rem] xl:translate-y-[5.5rem]">
              Bannos
            </h1>
          </Title>
        </div>

        <div className="w-[80%] ">
          <img
            className="xl:h-[47.5625rem]"
            src={BANNOSCOLECTION}
            alt="BANNOSCOLECTION"
          />
        </div>
      </div>

      <div className=" px-[1.25rem] xl:max-w-[32.1875rem] xl:gap-y-[2.25rem] xl:pt-20">
        <div>
          <Title>
            <h1>Idea Group</h1>
          </Title>
        </div>
        <div className=" xl:pt-[3rem]">
          <TextLight>
            <p className=" leading-[1.426rem] xl:text-[1.3rem] xl:leading-[2rem] 2xl:text-[1.5rem] 2xl:leading-[2.139rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nulla veniam iste quibusdam nostrum aliquid maiores
              necessitatibus quisquam est, numquam pariatur explicabo molestiae
              praesentium! Assumenda harum delectus provident unde veniam?
            </p>
          </TextLight>
        </div>

        <div className="w-full pt-[2rem] xl:pt-[3rem]">
          <div className="w-3/4">
            <LinkBtn link="#">
              <p>vermas</p>
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
