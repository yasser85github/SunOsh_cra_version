import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./layouts/Footer/Footer";
import { ContactPage } from "./pages/ContactPage";
import { OurCompanyPage } from "./pages/OurCompanyPage";
import { NewsPage } from "./pages/NewsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { CollectionPage } from "./pages/CollectionPage";
import { ShowRoomPage } from "./pages/ShowRoomPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductsDetailsPage } from "./pages/ProductsDetailsPage";
import { GalleryDetailsPage } from "./pages/GalleryDetailsPage";
import { ProductsTwoPage } from "./pages/ProductsTwoPage";
import { CollectionPageTwo } from "./pages/CollectionPageTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/about/ourcompany" element={<OurCompanyPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/details/:id" element={<GalleryDetailsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/showroom" element={<ShowRoomPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:gallery" element={<ProductsPage />} />
        <Route path="/products/details/:id" element={<ProductsDetailsPage />} />
        <Route path="/products/two" element={<ProductsTwoPage />} />
        <Route path="/collection/two" element={<CollectionPageTwo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
