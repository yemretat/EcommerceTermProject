import React, { useEffect, useState } from "react";
import axios from "./axios";
import EditedProduct from "./EditedProduct";
import { useStateValue } from "./StateProvider";
import AddUpdateProduct from "./AddUpdateProduct";
import Grid from "@material-ui/core/Grid";

const ProductManager = ({ selectedOptions }) => {
  const [Products, setProducts] = useState([]);
  const [{ user }] = useStateValue();
  const [editedProduct, setEditedProduct] = useState({});
  const [addedProduct, setAddedProduct] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      debugger;
      const result = await axios.get(selectedOptions);
      setProducts(result.data);
      // setProducts(result);
      // console.log(Products);
      // console.log(Products.data[0].productImage);
      ///setIsLoading(false);
    };
    fetchItems();
  }, [selectedOptions]);
  const addedButton = () => {
    setAddedProduct(true);
    setEditedProduct({});
  };
  return (
    <Grid className="checkout" container spacing={3}>
      <Grid item xs={6}>
        <div className="checkout__left">
          {Products?.length == 0 ? (
            <div>
              <h3>Hello, {user?.loginnerMail}</h3>
              <h2>The Product List is empty</h2>
            </div>
          ) : (
            <div>
              <h3>Hello, {user?.loginnerMail}</h3>
              <h2 className="checkout__title">
                The Product List is in this category
              </h2>
              <div className="addproduct_div">
                <button onClick={(e) => addedButton()} className="addProduct">
                  Add a Product
                </button>
              </div>

              {Products.map((item) => (
                <EditedProduct
                  id={item.productID}
                  title={item.productName}
                  image={`http://localhost:58171/productpics/${item.productImage}`}
                  price={item.unitPrice}
                  rating={5}
                  seteditButton={setEditedProduct}
                  setAddedProduct={setAddedProduct}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <div className="checkout__right">
          {addedProduct || editedProduct?.productName ? (
            <AddUpdateProduct
              setAddedProduct={setAddedProduct}
              editedProduct={editedProduct}
              addedProduct={addedProduct}
              setEditedProduct={setEditedProduct}
            />
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductManager;
