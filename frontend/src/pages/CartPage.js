import CartCollaterals from "../components/cartcomponents/CartCollaterals";
import ShopTable from "../components/cartcomponents/ShopTable";
import FooterTopArea from "../components/footer/FooterTopArea";
import SiteBrandingArea from "../components/SiteBrandingArea";
import Card from "../components/UI/Card";

const CartPage = () => {
  return (
    <>
      <SiteBrandingArea />


      <Card>

        <ShopTable />
        <CartCollaterals />
      </Card>

      <FooterTopArea />
    </>
  );
};
export default CartPage;
