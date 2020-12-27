import "./Product.css";
import React, { forwardRef } from "react";
import { useStateValue } from "./StateProvider";

const Product = forwardRef(
  ({ id, title, image, product, price, rating, setDialogOpen }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // push kullanmıyoruz çünkü slower yapıyor, dispatch
      // yani sevk kullanıyoruz.
      //when we click Add to basket button,we dispatch the action,
      //we listening the action in the reducer,oo action came in,
      // dispatch data layerda bir şey değiştirirken kullan!

      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

    return (
      <div ref={ref} className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </div>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
        <button onClick={(e) => setDialogOpen(product)}>
          Show the Details
        </button>
      </div>
    );
  }
);

export default Product;
