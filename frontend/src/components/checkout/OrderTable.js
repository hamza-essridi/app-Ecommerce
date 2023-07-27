import './GlobaleForm.css';

const OrderTable = () => {

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
                        Ship Your Idea <strong className="product-quantity">× 1</strong> </td>
                    <td className="product-total">
                        <span className="amount">£15.00</span> </td>
                </tr>
            </tbody>
            <tfoot>

                <tr className="cart-subtotal">
                    <th>Cart Subtotal</th>
                    <td><span className="amount">£15.00</span>
                    </td>
                </tr>

                <tr className="shipping">
                    <th>Taxe (20%)</th>
                    <td>
                        12.12 €
                    </td>
                </tr>


                <tr className="order-total">
                    <th>Order Total</th>
                    <td><strong><span className="amount">15.00 € </span></strong> </td>
                </tr>

            </tfoot>
        </table>
    </>);
}
export default OrderTable;