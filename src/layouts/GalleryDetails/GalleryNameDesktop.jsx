import { Link } from "react-router-dom";
import { Title } from "../../components/Title";
import { TextLight } from "../../components/Texts";
import VECTOR_ARROW from "../../assets/icons/vectorArrow.svg";
import GOLD_RIGHT_ARROW from "../../assets/icons/goldRightArrow.svg";

export const GalleryNameDesktop = () => {
  return (
    <div className="hidden xl:grid xl:grid-cols-4 xl:pb-[0.44rem] xl:place-items-center">
      <div className="flex w-full h-1/2 justify-start items-end">
        <Link className="flex gap-[0.19rem]" to={"/gallery"}>
          <img
            className="rotate-180"
            src={GOLD_RIGHT_ARROW}
            alt="GOLD_RIGHT_ARROW"
          />
          <TextLight>
            <p className="text-[1.25rem]">Volver a la Galería</p>
          </TextLight>
        </Link>
      </div>

      <div className="col-span-2">
        <Title>
          <h1 className="xl:text-[3.2rem] 2xl:text-[4rem]">PINAR DEL RIO</h1>
        </Title>
      </div>

      <div className="w-full h-1/2  flex justify-end items-end gap-[1.5rem]">
        <button>
          <img
            className="rotate-180 w-[0.8125rem]"
            src={VECTOR_ARROW}
            alt="VECTOR_ARROW"
          />
        </button>

        <button>
          <img
            className="w-[0.8125rem]"
            src={VECTOR_ARROW}
            alt="VECTOR_ARROW"
          />
        </button>
      </div>
    </div>
  );
};
