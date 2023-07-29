const DiffAdress = () => {


    return (<>
        <div className="shipping_address" style={{ display: "block" }}>
            <p id="shipping_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
                <label className="" htmlFor="shipping_country">Civility <abbr title="required" className="required">*</abbr>
                </label>
                <select className="country_to_state country_select" id="shipping_country" name="shipping_country">

                    <option value="AX">Mr</option>
                    <option value="AF">Mlle</option>
                    <option value="AF">Mme</option>
                </select>
            </p>

            <p id="shipping_first_name_field" className="form-row form-row-first validate-required">
                <label className="" htmlFor="shipping_first_name">First Name <abbr title="required" className="required">*</abbr>
                </label>
                <input type="text" defaultValue="" placeholder="" id="shipping_first_name" name="shipping_first_name" className="input-text " />
            </p>

            <p id="shipping_last_name_field" className="form-row form-row-last validate-required">
                <label className="" htmlFor="shipping_last_name">Last Name <abbr title="required" className="required">*</abbr>
                </label>
                <input type="text" defaultValue="" placeholder="" id="shipping_last_name" name="shipping_last_name" className="input-text " />
            </p>
            <div className="clear"></div>

            <p id="shipping_company_field" className="form-row form-row-wide">
                <label className="" htmlFor="shipping_company">Company Name</label>
                <input type="text" defaultValue="" placeholder="" id="shipping_company" name="shipping_company" className="input-text " />
            </p>

            <p id="shipping_address_1_field" className="form-row form-row-wide address-field validate-required">
                <label className="" htmlFor="shipping_address_1">Address <abbr title="required" className="required">*</abbr>
                </label>
                <input type="text" defaultValue="" placeholder="Street address" id="shipping_address_1" name="shipping_address_1" className="input-text " />
            </p>

            <p id="shipping_address_2_field" className="form-row form-row-wide address-field">
                <input type="text" defaultValue="" placeholder="Apartment, suite, unit etc. (optional)" id="shipping_address_2" name="shipping_address_2" className="input-text " />
            </p>

            <p id="shipping_city_field" className="form-row form-row-wide address-field validate-required" >
                <label className="" htmlFor="shipping_city">Town / City <abbr title="required" className="required">*</abbr>
                </label>
                <input type="text" defaultValue="" placeholder="Town / City" id="shipping_city" name="shipping_city" className="input-text " />
            </p>

            <p id="shipping_state_field" className="form-row form-row-first address-field validate-state" >
                <label className="" htmlFor="shipping_state">County</label>
                <input type="text" id="shipping_state" name="shipping_state" placeholder="State / County" defaultValue="" className="input-text " />
            </p>
            <p id="shipping_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode" >
                <label className="" htmlFor="shipping_postcode">Postcode <abbr title="required" className="required">*</abbr>
                </label>
                <input type="text" defaultValue="" placeholder="Postcode / Zip" id="shipping_postcode" name="shipping_postcode" className="input-text " />
            </p>

            <div className="clear"></div>


        </div>
    </>)
}
export default DiffAdress;