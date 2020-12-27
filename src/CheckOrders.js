import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import axios from "./axios";
import Order from "./Order";
const CheckOrders = () => {
  const [Orders, setOrders] = useState([]);
  const [{ user, basket }] = useStateValue();

  useEffect(() => {
    debugger;
    if (user) {
      const fetchItems = async () => {
        const result = await axios.get("api/User/getbyid?userId=" + user.id);
        setOrders(result.data);
        console.log(Orders);
      };
      fetchItems();
    }
  }, [user]);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://localhost:58171/advertisementpics/category2.png"
          alt=""
        />
        {!user ? (
          <div>
            <h3>Hello , Please if you have an account , login the account.</h3>
            <h3>Please write your e-mail to check your order.</h3>
            <input
              placeholder="Please Enter Your Mail !"
              className="searchInput"
              type="text"
            />
          </div>
        ) : Orders?.length == 0 ? (
          <div>
            <h3>Hello, {user ? user.loginnerMail : null}</h3>
            <h2>No items in your previous orders</h2>
            <p>You have not bought any product</p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.loginnerMail}</h3>
            <h2 className="checkout__title">Your Order List</h2>
            {Orders.map((item) => (
              <Order
                id={item.productID}
                title={item.productName}
                image={`http://localhost:58171/productpics/${item.productImage}`}
                price={item.unitPrice}
                rating={5}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOrders;
