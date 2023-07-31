import { useState } from 'react';
import './GlobaleForm.css';
import OrderTable from './OrderTable';
import PaymentMethod from './PaymentMethod';
import DiffAdress from './ShipToDiffAdressForm';
import BillingDetailsForm from './BillingDetailsForm';

const GlobaleForm = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [paymentType, setPaymentType] = useState('');

    const [billingAdressData, setBillingAdressData] = useState({

        civility: "",
        firstName: "",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
        email: "",
        phone: "",
        adress: "",
    });
    const [differentAddressData, setDifferentAddressData] = useState({

        civility: "",
        firstName: "",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
        email: "",
        phone: "",
        adress: "",
    });


    const checkboxChangeHandler = (event) => {
        console.log(event.target.checked)
        setIsChecked(event.target.checked)

        ////
        console.log(billingAdressData);

    }

    const PaymentTypeHandler = (event) => {
        setPaymentType(event)
        console.log(event)
        console.log(paymentType)

    }
    return (<>



        {/* <form enctype="multipart/form-data" action="#" className="checkout" method="post" name="checkout"> */}
        <form action="#" className="checkout" name="checkout">

            <div id="customer_details" className="col2-set">
                <div className="col-6">
                    <div className="woocommerce-billing-fields">
                        <BillingDetailsForm title="Billing Details" formData={billingAdressData} setFormData={setBillingAdressData} />
                    </div>
                </div>

                <div className="col-6">
                    <div className="woocommerce-shipping-fields">
                        <h3 id="ship-to-different-address">
                            <label className="checkbox" htmlFor="ship-to-different-address-checkbox">Ship to a different address?</label>
                            <input onChange={checkboxChangeHandler} checked={isChecked} type="checkbox" defaultValue="1" name="ship_to_different_address" className="input-checkbox" id="ship-to-different-address-checkbox" />
                        </h3>
                        {/* {isChecked && <DiffAdress />} */}
                        {isChecked && <BillingDetailsForm title="shippingAdress" formData={differentAddressData} setFormData={setDifferentAddressData} />}





                        <p id="order_comments_field" className="form-row notes">
                            <label className="" htmlFor="order_comments">Order Notes</label>
                            <textarea cols="5" rows="2" placeholder="Notes about your order, e.g. special notes for delivery." id="order_comments" className="input-text " name="order_comments"></textarea>
                        </p>


                    </div>

                </div>

            </div>


            <div id="order_review" style={{ position: "relative" }}>

                <OrderTable />
                <PaymentMethod onSelectPayment={PaymentTypeHandler} />


            </div>
        </form>



    </>);
}
export default GlobaleForm;