import { useParams } from "react-router-dom";
import RecentlyViewed from "../components/home/RecentlyViewed";
//import TopSellers from "../components/home/TopSellers";
import ProductDetails from "../components/productcomponents/ProductDetails";

const ProductPage = () => {

    const param =useParams();

  return (
    <>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <RecentlyViewed typeApi="top-sellers-products" name="Recently Viewed"/>
          
            <ProductDetails name={param.result} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
