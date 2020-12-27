import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AddUpdateProduct.css";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const AddUpdateProduct = ({
  editedProduct,
  setAddedProduct,
  addedProduct,
  setEditedProduct,
}) => {
  const history = useHistory(); // allows us
  //programitaclly change the url
  const [{}, dispatch] = useStateValue();
  console.log(editedProduct.ProductName);
  const [updateDto, setFullUpdateDto] = useState({
    ProductName: "",
    UnitPrice: "",
    Active_Passive: "",
  });

  return (
    <div className="editproduct">
      <div className="login__container">
        <h1>
          {!editedProduct.productName
            ? "Add a Product"
            : "Edit Product " + editedProduct.productName}
        </h1>

        <form>
          <h5>ProductName</h5>
          <input
            type="text"
            value={editedProduct.productName}
            onChange={(e) =>
              setFullUpdateDto({ ...updateDto, ProductName: e.target.value })
            }
          />

          <h5>UnitPrice</h5>
          <input
            type="text"
            value={editedProduct.unitPrice}
            onChange={(e) =>
              setFullUpdateDto({ ...updateDto, UnitPrice: e.target.value })
            }
          />
          {editedProduct.productName ? (
            <div>
              {" "}
              <h5>Active-Passive</h5>
              <input
                className="active_passivetext"
                type="text"
                value={updateDto.Active_Passive}
                onChange={(e) =>
                  setFullUpdateDto({
                    ...updateDto,
                    Active_Passive: e.target.value,
                  })
                }
              />
            </div>
          ) : null}
          {editedProduct.productName ? (
            <button
              type="submit"
              //triggerlamamız için onClick koyduk
              className="login__signInButton"
            >
              Edit the Product
            </button>
          ) : (
            <button
              type="submit"
              //triggerlamamız için onClick koyduk
              className="login__signInButton"
            >
              Add the Product
            </button>
          )}
          {addedProduct ? (
            <button
              className="edit_cancelButton"
              onClick={(e) => setAddedProduct(false)}
            >
              Cancel Add{" "}
            </button>
          ) : editedProduct.productName ? (
            <button
              className="edit_cancelButton"
              onClick={(e) => setEditedProduct({})}
            >
              Cancel Edit
            </button>
          ) : null}
        </form>

        <p>
          By adding and editing the Product you agree to the FOODIET Conditions
          of Manage & Edit. Please see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
};

export default AddUpdateProduct;
