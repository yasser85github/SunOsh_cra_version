import FOTO_COCINA from "../../assets/images/fotoCocina.jpg";
import FOTO_LOSAONE from "../../assets/images/losaone.jpg";
import FOTO_LOSATWO from "../../assets/images/losaTwo.jpg";
import FOTO_BANNOONE from "../../assets/images/fotoBannoOne.jpg";
import FOTO_BANNOTWO from "../../assets/images/bannoTwo.png";
import { InfoCardWhitBtn } from "../General/InfoCardWhitBtn";

export const MainDesktop = () => {
  return (
    <main className="bg-[#000]">
      <div className="xl:grid xl:grid-cols-4 xl:grid-rows-3">
        <div className="xl:col-span-2 xl:row-span-2">
          <img
            className="w-full object-cover xl:object-fill"
            src={FOTO_COCINA}
            alt="FOTO_COCINA"
          />
        </div>

        <InfoCardWhitBtn />

        <div>
          <img src={FOTO_LOSAONE} alt="FOTO_LOSAONE" />
        </div>

        <div>
          <img src={FOTO_LOSATWO} alt="FOTO_LOSATWO" />
        </div>

        <InfoCardWhitBtn />

        <div>
          <img src={FOTO_BANNOTWO} alt="FOTO_BANNOTWO" />
        </div>

        <InfoCardWhitBtn />

        <div className="xl:col-span-2">
          <img src={FOTO_BANNOONE} alt="FOTO_BANNOONE" />
        </div>
      </div>
    </main>
  );
};
