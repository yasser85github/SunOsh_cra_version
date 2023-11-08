import { TextBold, TextLight } from "../components/Texts";
import { Title } from "../components/Title";

import PHONE_ICON from "../assets/icons/phoneIcon.svg";
import MAIL_ICON from "../assets/icons/mailIcon.svg";
import LOCATION_ICON from "../assets/icons/locatioIcon.svg";
// import { ContactForm } from "../components/ContactForm";   //Hacer esto Yasser
import { MapRoute } from "../components/MapRoute";

export const ContactPage = () => {
  return (
    <div className="bg-[#000] pt-[5.8rem] pb-[2.5rem] px-[1.25rem] xl:px-[14%] xl:pt-[9.88rem]">
      <MapRoute />
      <div className="flex flex-col  xl:h-screen xl:grid xl:grid-cols-2 xl:place-items-start ">
        <div className=" my-[1.6rem] xl:my-0 xl:gap-[1.06rem]">
          <div className=" flex relative top-0"></div>
          {/* TITLE */}
          <div>
            <div className="ml-1">
              <Title>
                <h1 className="text-[1.875rem] xl:text-[3rem] 2xl:text-[4.375rem]">
                  Contáctanos
                </h1>
              </Title>
            </div>

            {/* CONTACT SECTION */}
            <div className="flex flex-col mt-[1.5rem] gap-[0.62rem] xl:flex xl:flex-col xl:mt-[4rem] xl:gap-[1.6rem]">
              <div className="flex gap-[0.56rem] items-center">
                <div className="w-[1.3125rem] ml-1 2xl:w-[2.1875rem]">
                  <img src={PHONE_ICON} alt="PHONE_ICON" />
                </div>

                <TextLight>
                  <p className="leading-[26.4px] text-[1rem] 2xl:text-[1.5rem] 2xl:leading-[2.475rem]">
                    +12345678
                  </p>
                </TextLight>
              </div>

              <div className="flex gap-[0.62rem] items-center">
                <div className="w-[1.3125rem] ml-1 2xl:w-[2.1875rem]">
                  <img src={MAIL_ICON} alt="MAIL_ICON" />
                </div>

                <TextLight>
                  <p className="text-[1rem] leading-[26.4px] 2xl:text-[1.5rem] 2xl:leading-[2.475rem]">
                    sunosh@gmail.com
                  </p>
                </TextLight>
              </div>

              <div className="flex gap-[0.62rem] items-top">
                <div className="min-w-[1.3125rem] max-w-[1.3125rem] ml-1 2xl:min-w-[2.1875rem] 2xl:max-w-[2.1875rem]">
                  <img src={LOCATION_ICON} alt="LOCATION_ICON" />
                </div>

                <TextLight>
                  <p className="text-[1rem] leading-[26.4px] 2xl:text-[1.5rem] 2xl:leading-[2.475rem]">
                    Via Marigonda, 3/131040 Gorgo al Monticano (TV)Italy
                  </p>
                </TextLight>
              </div>
            </div>
          </div>
          {/* HORARIO */}
          <div className="flex flex-col ml-1 mt-[1.38rem] gap-[0.63rem] xl:gap-[1.38rem] xl:mt-[3.94rem]">
            <div className="tracking-[-0.02rem] 2xl:tracking-[-0.0275rem]">
              <TextBold>
                <p className="leading-[26.4px] text-base 2xl:text-[1.375rem] 2xl:leading-[2.475rem]">
                  Servicio chat en línea:
                </p>
              </TextBold>

              <TextLight>
                <p className="leading-[26.4px] text-base 2xl:text-[1.375rem] 2xl:leading-[2.475rem]">
                  9am - 6pm. Atendemos cualquier tipo de duda o problema.
                </p>
              </TextLight>
            </div>

            <div className="flex gap-[0.56rem] items-center">
              <div className="w-[1.3125rem] ml-1 xl:w-[2.1875rem]">
                <img src={PHONE_ICON} alt="PHONE_ICON" />
              </div>

              <TextLight>
                <p className="text-base 2xl:text-[1.5rem]">+12345678</p>
              </TextLight>
            </div>
          </div>
          <div></div>
        </div>
        {/* CONTACT FORM */}
        <div className="mt-[0.37rem] xl:mt-[4.75rem] 2xl:mt-[9.5rem]">
          <div className="text-[#F4DE88] font-avertasemi text-[1.25rem] leading-[23.44px] 2xl:leading-normal 2xl:text-[1.75rem]">
            <p>
              Introduzca sus datos y envíe la solicitud: le responderemos lo
              antes posible.
            </p>
          </div>
          <div>
            {/* Hacer esto Yasser */}
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
