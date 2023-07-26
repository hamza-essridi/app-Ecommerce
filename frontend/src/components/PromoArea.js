import { MDBIcon } from "mdbreact";
import "./PromoArea.css";

const PromoArea = () => {
  return (
    <>
      <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
            <div className="single-promo promo1">
              <MDBIcon fas icon="sync-alt" size="10x" />
              <p>30 Days return</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div className="single-promo promo2">
              <MDBIcon fas icon="truck" size="10x" />
              <p>Free shipping</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
            <div className="single-promo promo3">
              <MDBIcon fas icon="lock" size="10x" />
              <p>Secure payments</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <MDBIcon fas icon="gift" size="10x" />
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PromoArea;
