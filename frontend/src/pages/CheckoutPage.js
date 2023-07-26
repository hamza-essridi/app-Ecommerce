import GlobaleForm from "../components/checkout/GlobalForm";
import SiteBrandingArea from "../components/SiteBrandingArea";
import BigTitle from "../components/UI/BigTitle";
import Card from "../components/UI/Card";

const CheckoutPage = () => {

    return (<>
        <SiteBrandingArea />
        <div>

        <BigTitle title="Checkout"/>

        <Card>
        <GlobaleForm/>
        <h1>CheckoutPage</h1>

        </Card>
        
        
        </div>



    </>);
}
export default CheckoutPage;