import { useDispatch } from "react-redux";
import { productsActions } from "../../store";
import './ProductTable.css';


const ProductTable = (props) => {

  const { name, quantity, total, price, id, urlImage, image } = props.item;
  const dispatch = useDispatch();


  const addProductHandler = () => {
    let finaleprice = price
    dispatch(productsActions.productAdded({ name, finaleprice, image, id, urlImage }))
  }
  const removeProductHandler = () => {
    dispatch(productsActions.removeProductFromCart(id));
  }

  const removeAllQteProductHandler = () => {
    dispatch(productsActions.removeAllQteproduct(id));
  }
  return (
    <>
      <tr className="cart_item">
        <td className="product-remove">
          {/* this remove total */}
          <button onClick={removeAllQteProductHandler} className="remove" title="Remove this item">×</button>
          <a title="Remove this item" onClick={removeAllQteProductHandler}  className="remove" >
          ×
          </a>
        </td>

        <td className="product-thumbnail">
          <a href="single-product.html">
            <img
              width="145"
              height="145"
              alt="poster_1_up"
              className="shop_thumbnail"
              src={urlImage}
            />
          </a>
        </td>

        <td className="product-name">
          <a href="single-product.html">{name}</a>
        </td>

        <td className="product-price">
          <span className="amount">{total}€</span>
        </td>

        <td className="product-quantity">
          <div className="quantity buttons_added">

            <button className='minus' onClick={removeProductHandler}>-</button>
            <input
              type="number"
              size="4"
              className="input-text qty text"
              title="Qty"
              value={quantity}
              min="0"
              step="1"
              readOnly
            />
            <button className='plus' onClick={addProductHandler}>+</button>

          </div>
        </td>

        <td className="product-subtotal">
          <span className="amount">{price} €</span>
        </td>
      </tr>
    </>
  );
};
export default ProductTable;
