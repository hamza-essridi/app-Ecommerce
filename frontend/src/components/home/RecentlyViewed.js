import { useSelector, useDispatch } from "react-redux";
import "./TopSellers.css";
import SingleRecentlyProducts from "./SingleRecentlyProducts";

const RecentlyViewed = (props) => {

  const recentlyViewedIds = useSelector((state) => state.prods.newProductsViewed);
  //console.log(recentlyViewedIds);


  return (
    <>
      <div className="col-md-4">
        <div className="single-product-widget">
          <h2 className="product-wid-title">{props.name}</h2>
          {recentlyViewedIds.map((item) => (
            <SingleRecentlyProducts key={item} id={item} />
          ))}

        </div>
      </div>
    </>
  );
};
export default RecentlyViewed;
