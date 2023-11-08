import { Link } from "react-router-dom";

import WHATSAPP_ICON from "../assets/icons/whatsappIcon.svg";
import FACEBOOK_ICON from "../assets/icons/facebookIcon.svg";
import INSTAGRAM_ICON from "../assets/icons/instagramIcon.svg";

const SocialMediaItems = [
  {
    src: WHATSAPP_ICON,
    link: "#",
    alt: "Whatsapp",
  },
  {
    src: FACEBOOK_ICON,
    link: "#",
    alt: "Facebook",
  },
  {
    src: INSTAGRAM_ICON,
    link: "#",
    alt: "Instagram",
  },
];

export const FooterSocialMedia = () => {
  return (
    <ul className="flex">
      {SocialMediaItems.map(({ src, link, alt }) => (
        <li
          key={alt}
          className=" relative pr-[1.31rem] xl:pr-[1.56rem] last:pr-0 group"
        >
          <p className="hidden xl:text-[#F4DE88] transition duration-300 font-averta xl:text-[1.375rem] xl:block xl:absolute xl:bottom-[2.5rem] opacity-0 group-hover:opacity-100 left-[-50%]">
            {alt}
          </p>
          <Link to={link}>
            <img className="xl:w-[1.5rem] 2xl:w-[2rem]" src={src} alt={alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
