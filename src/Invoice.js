import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Invoice = ({ selectedCustomer, length, value }) => {
  const history = useHistory();
  // give browser history

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({length} items): <strong>{value}</strong>
            </p>
            <p>Customer is : {selectedCustomer}</p>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/*When I click button,literally pushing page into browser,redirecting
      If we want programatically any point push to somewhere we can use history.push
      to do so.*/}
    </div>
  );
};

export default Invoice;
