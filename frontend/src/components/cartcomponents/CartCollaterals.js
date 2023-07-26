import "./CartCollaterals.css";
import CartTotal from "./CartTotals";
import CrossSells from "./CrossSells";

const CartCollaterals = (props) => {
  return (
    <div className="cart-collaterals">
      <CrossSells />
      <CartTotal />
    </div>
  );
};
export default CartCollaterals;
