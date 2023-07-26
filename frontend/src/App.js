//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

///
import "./App.css";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
// import BrandsArea from "./components/BrandsArea";
// import UncontrolledCarousel from "./components/Carousel";

// import MainNavigationBar from "./components/MainNavigationBar";
// //import { MDBIcon } from 'mdb-react-ui-kit';
// import PromoArea from "./components/PromoArea";
// import SiteBrandingArea from "./components/SiteBrandingArea";
/////
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import RootLayout from "./pages/Root";
import SamsungPage from "./pages/SamsungPage";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>error</p>,
    children: [
      { path: "/", element: <Home /> },
      { path: ":nameProd", element: <SamsungPage /> },
      { path: "recherche/:result", element: <SearchPage/> },
      { path: "product/:result", element: <ProductPage/> }
      
    ],
  },
  { path: "ckeckout/:result", element: <CheckoutPage/> },
  { path: "cart", element: <CartPage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
