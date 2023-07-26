import { useState, useCallback, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import "./TopSellers.css";

const TopSellers = (props) => {
  const [topSellersProducts, setTopSellersProducts] = useState([]);

  const chaine = props.typeApi;

  const fetchHandler = useCallback(async () => {
    const response = await fetch(`http://localhost:3000/${chaine}`);
    const data = await response.json();

    const TopSellersProducts = data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        discountRate: item.discountRate,
        review: item.review,
        image: item.imageName,
      };
    });
    setTopSellersProducts(TopSellersProducts);
  }, [chaine]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <>
      <div className="col-md-4">
        <div className="single-product-widget">
          <h2 className="product-wid-title">{props.name}</h2>
          <a className="wid-view-more">View All</a>
          {topSellersProducts &&
            topSellersProducts.map((item) => (
              <SingleProduct
                key={item.id}
                name={item.name}
                price={item.price}
                discountRate={item.discountRate}
                image={item.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export default TopSellers;
