import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Navbar from "./Navbar";
import requests from "./requests";
import CheckOrders from "./CheckOrders";
import ProductManager from "./ProductManager";
import SalesManager from "./SalesManager";
function App() {
  const [{}, dispatch] = useStateValue();
  const [selectedOption, setSelectedOption] = useState(requests.fetchBeverages);
  useEffect(() => {
    // will only run once when the app component loads...
    // it is listener this things listen if we login or logout
    // when authentication changes ,
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out,set user Null value
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/orders">
            <Header />
            <CheckOrders />
          </Route>
          <Route path="/productManager">
            <Header />
            <Navbar setSelectedOption={setSelectedOption} />
            <ProductManager selectedOptions={selectedOption} />
          </Route>
          <Route path="/salesManager">
            <Header />
            <SalesManager />
          </Route>
          <Route path="/">
            <Header></Header>
            <Navbar setSelectedOption={setSelectedOption}></Navbar>
            <Home selectedOptions={selectedOption} />
          </Route>
        </Switch>
        <h1> </h1>
      </div>
    </Router>
  );
}

export default App;
