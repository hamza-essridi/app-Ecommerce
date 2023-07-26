import UncontrolledCarousel from "../components/Carousel";
import PromoArea from "../components/PromoArea";
import BrandsArea from "../components/BrandsArea";
import ProductWidgetArea from "../components/home/ProductWidgetArea";
const Home = () => {
  return (
    <>
      <UncontrolledCarousel />

      <PromoArea />
      <BrandsArea />
      <ProductWidgetArea/>
    </>
  );
};
export default Home;
