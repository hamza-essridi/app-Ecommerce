import { useState, useEffect } from "react";

import "./ProductsList.css";

import Product from "./Products";

const ProductsList = (props) => {
  const [products, setProducts] = useState();
 // console.log(props.name);

  useEffect(() => {
    const fecthProductsSamsung = async () => {
      const response = await fetch(
        `http://localhost:3000/products-lists?name=${props.name}`
      );
      const data = await response.json();

      setProducts(data[0].items);
     // console.log(data[0].items);
    };

    fecthProductsSamsung();
  }, [props.name]);

  return (
    <>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products && <Product products={products} />}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsList;
