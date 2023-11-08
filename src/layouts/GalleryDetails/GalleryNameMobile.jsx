import { Title } from "../../components/Title";
import VECTOR_ARROW from "../../assets/icons/vectorArrow.svg";

export const GalleryNameMobile = () => {
  return (
    <div className="xl:hidden">
      <div className="w-full flex justify-evenly items-center pb-[1.38rem] ">
        <button>
          <img
            className="rotate-180 w-[0.5rem]"
            src={VECTOR_ARROW}
            alt="VECTOR_ARROW"
          />
        </button>
        <div className="col-span-2">
          <Title>
            <h1 className="text-[1.5625rem] text-end">PINAR DEL RIO</h1>
          </Title>
        </div>

        <button>
          <img className="w-[0.5rem]" src={VECTOR_ARROW} alt="VECTOR_ARROW" />
        </button>
      </div>
    </div>
  );
};
