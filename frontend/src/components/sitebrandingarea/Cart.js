import { useSelector, useDispatch } from "react-redux";
import { MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import './Cart.css';



const Cart = () => {

    const product = useSelector((state) => state.prods);
   
    const showProductHandler =()=>{
        console.log(product)
    } 
  return (
    <>
      <div className="shopping-item" >
      <NavLink to="/cart" >

          Cart : <span className="cart-amunt">{product.totaleAmount}€</span>
          <MDBIcon fas icon="shopping-cart" />
          <span className="product-count">{product.totalQuantity}</span>

      </NavLink>
        
      </div>
    </>
  );
};
export default Cart;
