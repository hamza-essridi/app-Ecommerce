import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ShopTable.css";
import ProductTable from "./ProductTable";
import Button from "../UI/Button";

const ShopTable = () => {
  const product = useSelector((state) => state.prods.products);
  const navigate =useNavigate();

const checkoutHandler =()=>{

  navigate("/ckeckout/result");
}
  
  return (
    <>
      <table cellSpacing="0" className="shop_table cart">
        <thead>
          <tr>
            <th className="product-remove">&nbsp;</th>
            <th className="product-thumbnail">&nbsp;</th>
            <th className="product-name">Product</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {product &&
            product.map((item) => (
              <ProductTable
                key={item.ProductId}
                item={{
                  id: item.ProductId,
                  name: item.name,
                  quantity: item.quantity,
                  total: item.totalePrice,
                  price: item.price,
                  urlImage: item.urlImage,
                  image:item.image
                }}
              />
            ))}
          <tr>
            <td className="actions" colSpan="6">
              
              <Button onClick={checkoutHandler}>CHECKOUT</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default ShopTable;
