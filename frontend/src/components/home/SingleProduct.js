import "./SingleProduct.css";

const SingleProduct = (props) => {
  const finaleprice = (
    props.price -
    props.price * (props.discountRate / 100)
  ).toFixed(2);

  let srcImage = props.image.split("-")[0];
  
  return (
    <>
      <div className="single-wid-product">
        <a href="single-product.html">
          <img
            src={`/produts-img/${srcImage}/${props.image}`}
            alt={props.name}
            className="product-thumb"
          />
        </a>
        <h2>
          <a href="single-product.html">{props.name}</a>
        </h2>
        <div className="product-wid-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="product-wid-price">
          <ins>${finaleprice}</ins>
          <del>${props.price}</del>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
