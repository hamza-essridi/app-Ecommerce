import './GlobaleForm.css';
const BillingDetailsForm = (props) => {


    const ChangeFirstNameHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            firstName: value,
        }));
    };
    const ChangeLastNameHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            lastName: value,
        }));

    };
    const ChangeCompanyNameHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            companyName: value,
        }));

    };
    const ChangeAdresseHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            adress: value,
        }));

    };
    const ChangeAdresseApartmentHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            street: value,
        }));

    };
    const ChangeCityHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            city: value,
        }));

    };
    const ChangeCountyHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            county: value,
        }));

    };
    const ChangePostCodeHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            zipCode: value,
        }));

    };
    const ChangeEmailHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            email: value,
        }));

    };
    const ChangePhoneHandler = (event) => {
        const { value } = event.target;

        props.setFormData((prevState) => ({
            ...prevState,
            phone: value,
        }));

    };
    const selectHandler = (event) => {
        // setSelectedValue(event.target.value);
        // console.log(event.target.value);
        const { value } = event.target;
        props.setFormData((prevState) => ({
            ...prevState,
            civility: value,
        }));
    };

    return (<>
       
                <h3>{props.title}</h3>
                <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                    <label className="" htmlFor="billing_country">Civility <abbr title="required" className="required">*</abbr>
                    </label>
                    <select onChange={selectHandler} className="country_to_state country_select" id="shipping_country" name="shipping_country">

                        <option value="Mr">Mr</option>
                        <option value="Mlle">Mlle</option>
                        <option value="Mme">Mme</option>
                    </select>
                </p>

                <p id="billing_first_name_field" className="form-row form-row-first validate-required">
                    <label className="" htmlFor="billing_first_name">First Name <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangeFirstNameHandler} type="text" defaultValue="" placeholder="" id="billing_first_name" name="billing_first_name" className="input-text " />
                </p>

                <p id="billing_last_name_field" className="form-row form-row-last validate-required">
                    <label className="" htmlFor="billing_last_name">Last Name <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangeLastNameHandler} type="text" defaultValue="" placeholder="" id="billing_last_name" name="billing_last_name" className="input-text " />
                </p>
                <div className="clear"></div>

                <p id="billing_company_field" className="form-row form-row-wide">
                    <label className="" htmlFor="billing_company">Company Name</label>
                    <input onChange={ChangeCompanyNameHandler} type="text" defaultValue="" placeholder="" id="billing_company" name="billing_company" className="input-text " />
                </p>

                <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
                    <label className="" htmlFor="billing_address_1">Address <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangeAdresseHandler} type="text" defaultValue="" placeholder="Street address" id="billing_address_1" name="billing_address_1" className="input-text " />
                </p>

                <p id="billing_address_2_field" className="form-row form-row-wide address-field">
                    <input onChange={ChangeAdresseApartmentHandler} type="text" defaultValue="" placeholder="Apartment, suite, unit etc. (optional)" id="billing_address_2" name="billing_address_2" className="input-text " />
                </p>

                <p id="billing_city_field" className="form-row form-row-wide address-field validate-required" >
                    <label className="" htmlFor="billing_city">Town / City <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangeCityHandler} type="text" defaultValue="" placeholder="Town / City" id="billing_city" name="billing_city" className="input-text " />
                </p>

                <p id="billing_state_field" className="form-row form-row-first address-field validate-state" >
                    <label className="" htmlFor="billing_state">County</label>
                    <input onChange={ChangeCountyHandler} type="text" id="billing_state" name="billing_state" placeholder="State / County" defaultValue="" className="input-text " />
                </p>
                <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" >
                    <label className="" htmlFor="billing_postcode">Postcode <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangePostCodeHandler} type="text" defaultValue="" placeholder="Postcode / Zip" id="billing_postcode" name="billing_postcode" className="input-text " />
                </p>

                <div className="clear"></div>

                <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
                    <label className="" htmlFor="billing_email">Email Address <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangeEmailHandler} type="text" defaultValue="" placeholder="" id="billing_email" name="billing_email" className="input-text " />
                </p>

                <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
                    <label className="" htmlFor="billing_phone">Phone <abbr title="required" className="required">*</abbr>
                    </label>
                    <input onChange={ChangePhoneHandler} type="text" defaultValue="" placeholder="" id="billing_phone" name="billing_phone" className="input-text " />
                </p>
                <div className="clear"></div>




          


    </>);
}
export default BillingDetailsForm;