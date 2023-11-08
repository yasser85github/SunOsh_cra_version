import { Link, useLocation } from "react-router-dom";
import { navItems } from "../assets/features/navItems";

export const FooterNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-y-[0.75rem] gap-x-[1rem] place-items-start pb-[1.37rem] xl:flex xl:gap-[2.6rem] xl:pb-0 ">
      {
        <>
          <li
            key={navItems[0].name || "Sobre Nosotros"}
            className={`${
              path.includes("about")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } col-span-2 order-2 xl:order-1`}
          >
            <Link
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
              to={"/about/ourcompany"}
            >
              {navItems[0].name || "Sobre Nosotros"}
            </Link>
          </li>

          <li
            key={navItems[1].name || "Nuevo"}
            className={`${
              path.includes("news")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } order-1 xl:order-2`}
          >
            <Link
              to={"/news"}
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
            >
              {navItems[1].name || "Nuevo"}
            </Link>
          </li>

          <li
            key={navItems[2].name || "Colección"}
            className={`${
              path.includes("collection")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } order-3`}
          >
            <Link
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
              to={"/collection"}
            >
              {navItems[2].name || "Colección"}
            </Link>
          </li>

          <li
            key={navItems[3].name || "Galería"}
            className={`${
              path.includes("gallery")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } order-4`}
          >
            <Link
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
              to={"/gallery"}
            >
              {navItems[3].name || "Galería"}
            </Link>
          </li>

          <li
            key={navItems[4].name || "Sala de Expocición"}
            className={`${
              path.includes("showroom")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } order-5 col-span-2`}
          >
            <Link
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
              to={"/showroom"}
            >
              {navItems[4].name || "Sala de Expocición"}
            </Link>
          </li>

          <li
            key={navItems[5].name || "Productos"}
            className={`${
              path.includes("products")
                ? "border-b-2 border-b-[#000]"
                : "border-b-2 border-b-transparent"
            } order-6`}
          >
            <Link
              className="font-normal font-avertab text-[0.9375rem] xl:text-base 2xl:text-[1.375rem]"
              to={"/products"}
            >
              {navItems[5].name || "Productos"}
            </Link>
          </li>
        </>
      }
    </ul>
  );
};
