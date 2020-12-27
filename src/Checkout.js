import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://localhost:58171/advertisementpics/category2.png"
          alt=""
        />
        {basket?.length == 0 ? (
          <div>
            <h3>Hello, {user?.loginnerMail}</h3>
            <h2>Your shopping is empty</h2>
            <p>No items in your basket</p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.loginnerMail}</h3>
            <h2 className="checkout__title">Your shopping is basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
