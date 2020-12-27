import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "./axios";
import SalesManagerOrderDetails from "./SalesManagerOrderDetails";
import "./SalesManager.css";
import ReactToPrint from "react-to-print";
import Invoice from "./Invoice";
const SalesManager = () => {
  const componentRef = useRef();

  const [Users, setUsers] = useState([]);
  const [selectedCustomer, setCustomer] = useState({});
  const [Orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ordercat, setOrderCat] = useState({});
  const [totalmoney, setTotalMoney] = useState();
  function handleInputChange(event, value) {
    setCustomer(value);
  }

  function handleInputChangeCategory(event, value) {
    setOrderCat(value);
  }
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get("api/User/getallusers");
      setUsers(result.data);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (selectedCustomer) {
      const fetchItems = async () => {
        const result = await axios.get(
          "api/User/getOrders?userId=" + selectedCustomer.id
        );
        setCategories(result.data);
      };
      fetchItems();
    }
  }, [selectedCustomer]);
  useEffect(() => {
    if (selectedCustomer && ordercat != null) {
      const fetchItems = async () => {
        const result = await axios.get(
          "api/User/getDetailsoforders?userId=" +
            selectedCustomer.id +
            "&orderId=" +
            ordercat.orderID
        );
        debugger;
        setOrders(result.data);
        console.log(Orders);
        var sum = result.data.reduce(function (a, b) {
          return a + b.unitPrice;
        }, 0);
        setTotalMoney(sum);

        console.log(sum);
        console.log(Orders);
      };
      fetchItems();
    }
  }, [selectedCustomer, ordercat]);

  return (
    <div>
      <div>
        <Autocomplete
          id="combo-box-demo"
          options={Users}
          getOptionLabel={(option) => option.loginnerMail}
          style={{
            width: "60%",
            marginTop: "30px",
            background: "rgb(177, 214, 101)",
            marginLeft: "10px",
          }}
          getOptionSelected={handleInputChange}
          renderInput={(params) => (
            <TextField {...params} label="Select Customer" variant="outlined" />
          )}
        />
        <Autocomplete
          id="combo-box-demo"
          options={categories}
          getOptionLabel={(option) =>
            option.orderID +
            ` order id, created by ${selectedCustomer.loginnerMail}`
          }
          style={{
            width: "60%",
            marginTop: "30px",
            background: "rgb(177, 214, 101)",
            marginLeft: "10px",
          }}
          getOptionSelected={handleInputChangeCategory}
          renderInput={(params) => (
            <TextField {...params} label="Select Customer" variant="outlined" />
          )}
        />
        <button className="deleteOrder">Delete the Order</button>

        <div ref={componentRef}>
          {Orders.map((item) => (
            <SalesManagerOrderDetails
              id={item.productID}
              title={item.productName}
              image={`http://localhost:58171/productpics/${item.productImage}`}
              price={item.unitPrice}
              rating={5}
            />
          ))}
          <Invoice
            selectedCustomer={selectedCustomer.loginnerMail}
            length={Orders.length}
            value={totalmoney}
          />
        </div>

        {Orders?.length == 0 ? null : (
          <div>
            {" "}
            <ReactToPrint
              trigger={() => (
                <button className="printerVoice">Print This Invoice!</button>
              )}
              content={() => componentRef.current}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesManager;
