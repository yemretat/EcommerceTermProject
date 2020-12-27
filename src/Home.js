import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import axios from "./axios";
import * as requests from "./requests";
import HomeImage from "./img/homeimage.png";
import FlipMove from "react-flip-move";
import { Flip } from "@material-ui/icons";
import Comment from "./Comment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Home = ({ selectedOptions }) => {
  const [Products, setProducts] = useState([]);
  const [open, setdialogOpen] = useState(false);
  const [product, setDialogProduct] = useState({});
  const setDialogOpen = (product) => {
    setdialogOpen(true);
    setDialogProduct(product);
  };
  const Comments = [
    { id: 1, user: "Ahmet Dursun", comment: "Çok niceee" },
    { id: 2, user: "Ahmet Dursun2", comment: "Çok niceee2" },
    { id: 3, user: "Ahmet Dursun3", comment: "Çok niceee3" },
    { id: 4, user: "Ahmet Dursun4", comment: "Çok niceee4" },
    { id: 5, user: "Ahmet Dursun5", comment: "Çok niceee5" },
  ];
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(selectedOptions);
      setProducts(result.data);
      // setProducts(result);
      // console.log(Products);
      // console.log(Products.data[0].productImage);
      ///setIsLoading(false);
    };
    fetchItems();
  }, [selectedOptions]);
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="" />
        <div className="home__row">
          <FlipMove>
            {Products.map((product) => (
              <Product
                id={product.productID}
                title={product.productName}
                price={product.unitPrice}
                rating={5}
                setDialogOpen={setDialogOpen}
                image={`http://localhost:58171/productpics/${product.productImage}`}
                product={product}
              />
            ))}
          </FlipMove>
          <Dialog
            open={open}
            onClose={() => setdialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Product Details"}
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {" "}
                  <img
                    className="productimg"
                    src={`http://localhost:58171/productpics/${product.productImage}`}
                  />
                  <div className="product__info">
                    <p>{product.productName}</p>
                    <p className="product__price">
                      <small>$</small>
                      <strong>{product.unitPrice}</strong>
                    </p>
                    <div className="product__rating">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <p>⭐️</p>
                        ))}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <h2>Comments</h2>
                  {Comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      user={comment.user}
                      comment={comment.comment}
                    />
                  ))}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setdialogOpen(false)} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => setdialogOpen(true)}
                color="primary"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Home;
