import React from "react";
import "./EditedProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  item,
  id,
  image,
  title,
  price,
  rating,
  seteditButton,
  setAddedProduct,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const edittheProduct = () => {
    seteditButton(item);
    setAddedProduct(false);
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div className="checkoutProduct__buttons">
          <button onClick={(e) => removeFromBasket}>
            Remove from Product List
          </button>
          <button onClick={(e) => edittheProduct()}>Edit the Product</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
