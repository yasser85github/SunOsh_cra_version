import Fotorandom from "../../assets/images/fotoRandom.jpg";
import FOTOCOCINA from "../../assets/images/fotoCocina.jpg";
import Fotobanno from "../../assets/images/fotoBannoOne.jpg";

export const ProductList = () => {
  return (
    <div className="grid grid-cols-1 text-white w-full place-center xl:place-content-evenly xl:grid-cols-2 xl:pt-[7.56rem] xl:gap-[1rem] 2xl:gap-[2rem] xl:px-[9rem] xl:pb-[14.75rem]">
      <div className="flex flex-col items-end xl:gap-[1rem] 2xl:gap-[2rem]">
        <div>
          <img className="xl:max-h-[46rem]" src={Fotorandom} alt="Fotorandom" />
        </div>

        <div>
          <img className="xl:max-h-[46rem]" src={FOTOCOCINA} alt="Fotorandom" />
        </div>

        <div>
          <img className="xl:max-h-[46rem]" src={Fotobanno} alt="Fotorandom" />
        </div>
      </div>
      {/* col right */}
      <div className="flex flex-col xl:gap-[1rem] 2xl:gap-[2rem] items-start">
        <div>
          <img className="xl:max-h-[46rem]" src={Fotorandom} alt="Fotorandom" />
        </div>
        <div>
          <img className="xl:max-h-[46rem]" src={Fotobanno} alt="Fotorandom" />
        </div>

        <div>
          <img className="xl:max-h-[46rem]" src={Fotorandom} alt="" />
        </div>

        <div>
          <img className="xl:max-h-[46rem]" src={FOTOCOCINA} alt="Fotorandom" />
        </div>
      </div>
    </div>
  );
};
