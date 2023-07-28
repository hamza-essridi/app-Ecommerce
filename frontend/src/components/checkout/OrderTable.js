import { useSelector } from 'react-redux';
import './GlobaleForm.css';


const OrderTable = () => {


    const qteTotale = useSelector((state) => state.prods.totalQuantity);
    const totale = useSelector((state) => state.prods.totaleAmount);
    // const tax = 20;//i don't know how calculated
    const tax = totale-(totale*0.2);//i don't know how calculated

    return (<>

        <h3 id="order_review_heading">Your order</h3>
        <table className="shop_table">
            <thead>
                <tr>
                    <th className="product-name">Product</th>
                    <th className="product-total">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className="cart_item">
                    <td className="product-name">
                        Ship Your Idea <strong className="product-quantity">× {qteTotale}</strong> </td>
                    <td className="product-total">
                        <span className="amount">£{totale}</span> </td>
                </tr>
            </tbody>
            <tfoot>

                <tr className="cart-subtotal">
                    <th>Cart Subtotal</th>
                    <td><span className="amount">£{totale}</span>
                    </td>
                </tr>

                <tr className="shipping">
                    <th>Taxe (20%)</th>
                    <td>
                        {tax}€
                    </td>
                </tr>


                <tr className="order-total">
                    <th>Order Total</th>
                    <td><strong><span className="amount">{totale}€ </span></strong> </td>
                </tr>

            </tfoot>
        </table>
    </>);
}
export default OrderTable;