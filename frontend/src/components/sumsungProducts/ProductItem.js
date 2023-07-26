import { useDispatch ,useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import { productsActions } from "../../store";
import Button from "../UI/Button";
import "./ProductItem.css";

const ProductItem = (props) => {

  
  // const navigate = useNavigate();

  const { name, id, image } = props;
  const dispatch = useDispatch();

  const finaleprice = (
    props.price -
    props.price * (props.discountRate / 100)
  ).toFixed(2);
  let srcImage = props.image.split("-")[0];
  let urlImage = `produts-img/${srcImage}/${props.image}`;
  //console.log(urlImage);
  const addProductHandler = () => {
    console.log("helllllo");
    dispatch(
      productsActions.productAdded({ name, finaleprice, image, id, urlImage })
    );
   

  };

  const viewProductHandler = () => {
    console.log("storage");
    
   // localStorage.setItem('key',`${name}`);
    
  };
  return (
    <>
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={urlImage} alt={props.name} />
        </div>
        <h2>
          <NavLink to={`/product/${props.name}`} onClick={viewProductHandler}>
            {props.name}
          </NavLink>
        </h2>
        <div className="product-carousel-price">
          <ins>${finaleprice}</ins> <del>${props.price}</del>
        </div>
        <Button onClick={addProductHandler}>Add to cart</Button>
      </div>
    </>
  );
};
export default ProductItem;
