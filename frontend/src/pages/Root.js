import { Outlet } from "react-router-dom";
import SiteBrandingArea from "../components/SiteBrandingArea";
import MainNavigationBar from "../components/MainNavigationBar";
import FooterTopArea from "../components/footer/FooterTopArea";
const RootLayout =()=>{


    return (
        <>
        <SiteBrandingArea/>
        <MainNavigationBar />
        <Outlet/>
        <FooterTopArea/>
        </>
    );
}
export default RootLayout ;