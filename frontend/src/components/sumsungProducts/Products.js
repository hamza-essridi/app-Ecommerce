import ProductItem from "./ProductItem";
const Product = (props) => {
  //console.log(props.products);
  return (
    <>
      {props.products.map((item) => (
        <div className="col-md-3 col-sm-6" key={item.id}>
          <ProductItem
            id={item.id}
            name={item.name}
            image={item.imageName}
            price={item.price}
            discountRate={item.discountRate}
            review={item.review}
          />
        </div>
      ))}
    </>
  );
};
export default Product;
