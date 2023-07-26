import "./ProductWidgetArea.css";
import RecentlyViewed from "./RecentlyViewed";
import TopSellers from "./TopSellers";

const ProductWidgetArea = () => {
  return (
    <>
      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <TopSellers typeApi="top-sellers-products" name="Top Sellers" />
            <RecentlyViewed typeApi="top-sellers-products" name="Recently Viewed"/>
         
            <TopSellers typeApi="top-new-products" name="Top New" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductWidgetArea;
