import { Title } from "../../components/Title";
import { TextLight } from "../../components/Texts";
import { LinkBtn } from "../../components/LinkBtn";
import FOTO_BANNOTWO from "../../assets/images/bannoTwo.png";
import GOLD_RIGHT_ARROW from "../../assets/icons/goldRightArrow.svg";

export const NewsPageMainMobile = () => {
  return (
    <div className="xl:hidden">
      <div>
        <div>
          <img src={FOTO_BANNOTWO} alt="FOTO_BANNOTWO" />
        </div>
        <div className="px-[1.25rem] py-[1.88rem]">
          <div>
            <Title>
              <h1>Idea Group</h1>
            </Title>
          </div>
          <div>
            <TextLight>
              <p>Exposición para la Semana del Diseño en Milan 2022</p>
            </TextLight>
          </div>

          <div className="w-full pt-4">
            <div className="w-2/3">
              <LinkBtn link="#">
                <p>vermas</p>
              </LinkBtn>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-6 pt-2 font-averta">
          <button className="border-none text-[#F4DE88] flex flex-col items-center">
            <p>ver todos los posts</p>
            <div className="rotate-90">
              <img src={GOLD_RIGHT_ARROW} alt="GOLD_RIGHT_ARROW" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
