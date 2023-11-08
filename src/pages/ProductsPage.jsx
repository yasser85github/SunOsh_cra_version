import { MapRoute } from "../components/MapRoute";
import { InfoCategories } from "../layouts/ProductPage/InfoCategories";
import { ProductList } from "../layouts/ProductPage/ProductList";

export const ProductsPage = () => {
  return (
    <div className="bg-[#000] xl:pt-[9.88rem]">
      <div className="hidden xl:block xl:px-[15%]">
        <MapRoute />
      </div>
      <InfoCategories />
      <ProductList />
    </div>
  );
};
