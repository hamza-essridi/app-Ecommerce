import Button from "../UI/Button";
import { useDispatch} from "react-redux";
import { productsActions } from "../../store";
import { useEffect, useCallback, useState } from "react";
import "./ProductDetails.css";
import { NavLink } from "react-router-dom";

const ProductDetails = (props) => {
  const [isOk,setIsOk ]=useState(false);
  
  const [product, setProduct] = useState({});
  const [isViewed, setIsViewed] = useState(true);
  const dispatch = useDispatch();

  const fetchProductByNameHandler = useCallback(async () => {
    // const response = await fetch(`http://localhost:3000/products?q=${props.name}`);
    const response = await fetch(
      `http://localhost:3000/products?q=${props.name}`
    );
    const data = await response.json();

    console.log(data[0]);

    setProduct({
      id: data[0].id,
      name: data[0].name,
      description: data[0].description,
      discountRate: data[0].discountRate,
      srcImage: data[0].imageName.split("-")[0],
      image: data[0].imageName,
      price: data[0].price,
    });
    setIsOk(true);

  }, [props.name]);

  useEffect(() => {
    fetchProductByNameHandler();
  }, [fetchProductByNameHandler]);
  
  /////
  if (isViewed) {
    console.log("newProd");
    setIsViewed(false);
  }
  

  const finaleprice = (
    product.price -
    product.price * (product.discountRate / 100)
  ).toFixed(2);

  let urlImage = `/produts-img/${product.srcImage}/${product.image}`;

  const { name, id, imageName } = product;

if(isOk){
  
  dispatch(productsActions.productsViewAdd(product.id));
}
  
  const addProductHandler = () => {
    dispatch(
      productsActions.productAdded({
        name,
        finaleprice,
        imageName,
        id,
        urlImage,
      })
    );
  };
  //let upper = product.srcImage.charAt(0).toUpperCase() + product.srcImage.slice(1);

  return (
    <>
      <div className="col-md-8">
        <div className="product-content-right">
          <div className="product-breadcroumb">
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/${product.srcImage}`}>{product.srcImage}</NavLink>
            <NavLink>{product.name}</NavLink>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="product-images">
                <div className="product-main-img">
                  <img src={urlImage} alt={product.name} />
                </div>

                <div className="product-gallery">
                  <img src="/img/product-thumb-1.jpg" alt="" />
                  <img src="/img/product-thumb-2.jpg" alt="" />
                  <img src="/img/product-thumb-3.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="product-inner">
                <h2 className="product-name">{product.name}</h2>
                <div className="product-inner-price">
                  <ins>${finaleprice}</ins> <del>${product.price}</del>
                </div>

                <form className="cart">
                  <div className="quantity">
                    <input
                      type="number"
                      size="4"
                      className="input-text qty text"
                      title="Qty"
                      name="quantity"
                      min="1"
                      step="1"
                    />
                  </div>
                  <Button onClick={addProductHandler}>Add to cart</Button>
                </form>

                <div className="product-inner-category">
                  <h2>Product Description</h2>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
