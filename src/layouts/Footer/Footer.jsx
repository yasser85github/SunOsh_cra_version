import SUNOSH_LOGO_BLACK from "../../assets/icons/sunoshLogoBlack.png";

import { Link } from "react-router-dom";
import { FooterNav } from "../../components/FooterNav";
import { FooterSocialMedia } from "../../components/FooterSocialMedia";
import { TextLight } from "../../components/Texts";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center bg-[#F4DE88] xl:flex-row justify-evenly">
        <Link to={"/"} className="flex justify-center py-[1.19rem]">
          <img
            className=" xl:w-[8rem] 2xl:w-[11.5625rem]"
            src={SUNOSH_LOGO_BLACK}
            alt="sunosh logo black"
          />
        </Link>
        <nav>
          <FooterNav />
        </nav>
      </div>
      <div className="flex flex-col bg-[#000000] items-center pt-[1.19rem] xl:py-[2.88rem] xl:flex xl:flex-row xl:justify-evenly">
        <TextLight>
          <p className=" xl:text-base 2xl:text-[1.375rem]">
            © 2023 SunOsh. Todos los derechos reservados.
          </p>
        </TextLight>

        <div className="flex py-[0.94rem]">
          <FooterSocialMedia />
        </div>
      </div>
    </footer>
  );
};
