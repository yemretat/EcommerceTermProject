import React from "react";
import "./Navbar.css";
import requests from "./requests";
const Navbar = ({ setSelectedOption }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchBeverages)}>
        Beverages
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchCondiments)}>
        Condiments
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchConfections)}>
        Confections
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchDairyProducts)}>
        Daily Products
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchGrainsCereals)}>
        Grains/Cereals
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMeatPoultry)}>
        Meat/Poultry
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchProduce)}>Produce</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSeafood)}>Seafood</h2>
    </div>
  );
};

export default Navbar;
