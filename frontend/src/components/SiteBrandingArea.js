import { MDBIcon } from "mdbreact";
import "./SiteBrandingArea.css";
import Cart from "./sitebrandingarea/Cart";
import Search from "./UI/Search";

const SiteBrandingArea = () => {
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="logo" style={{ width: "100px", height: "100px" }}>
              <h1>
                <a href="index.html">
                  <img src="/img/logo.png" alt="Logo" />
                </a>
              </h1>
            </div>
          </div>
          <div className="col-sm-4">
            
            <Search/>
          </div>

          <div className="col-sm-4">
            <Cart/>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiteBrandingArea;
