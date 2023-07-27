const PaymentMethod = () => {

    return (<>

        <div id="payment">
            <ul className="payment_methods methods">
                <li className="payment_method_bacs">
                    <input type="radio" data-order_button_text="" checked="checked" defaultValue="bacs" name="payment_method" className="input-radio" id="payment_method_bacs" />
                    <label htmlFor="payment_method_bacs">Direct Bank Transfer </label>
                    <div className="payment_box payment_method_bacs">
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                    </div>
                </li>
                <li className="payment_method_cheque">
                    <input type="radio" data-order_button_text="" defaultValue="cheque" name="payment_method" className="input-radio" id="payment_method_cheque" />
                    <label htmlFor="payment_method_cheque">Cheque Payment </label>
                    <div style={{ display: "none" }} className="payment_box payment_method_cheque">
                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                </li>
                <li className="payment_method_paypal">
                    <input type="radio" data-order_button_text="Proceed to PayPal" defaultValue="paypal" name="payment_method" className="input-radio" id="payment_method_paypal" />
                    <label htmlFor="payment_method_paypal">PayPal <img alt="PayPal Acceptance Mark" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" /><a title="What is PayPal?" className="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                    </label>
                    <div style={{ display: "none" }} className="payment_box payment_method_paypal">
                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                    </div>
                </li>
            </ul>

            <div className="form-row place-order">

                {/* <input type="button" data-value="Place order" defaultValue="Place order" id="place_order" name="woocommerce_checkout_place_order" className="button alt" /> */}
                <input type="button"  defaultValue="Place order" id="place_order" name="woocommerce_checkout_place_order" className="button alt" />


            </div>

            <div className="clear"></div>

        </div>
    </>);

}
export default PaymentMethod;