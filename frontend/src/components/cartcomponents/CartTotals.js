import { useSelector } from "react-redux";
import "./CartTotals.css";

const CartTotal = () => {


  const totale =useSelector((state) => state.prods.totaleAmount);
  const tax = totale-(totale*0.2);//i don't know how calculated
  return (
    <>
      <div className="cart_totals ">
        <h2>Cart Totals</h2>

        <table cellSpacing="0">
          <tbody>
            <tr className="cart-subtotal">
              <th>Cart Subtotal</th>
              <td>
                <span className="amount">{totale}€</span>
              </td>
            </tr>

            <tr className="shipping">
              <th>Taxe (20%)</th>
              <td>{tax} €</td>
            </tr>

            <tr className="order-total">
              <th>Order Total</th>
              <td>
                <strong>
                  <span className="amount">{totale}€</span>
                </strong>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CartTotal;
