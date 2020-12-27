import React from "react";
import "./SalesManagerOrderDetails.css";
import { useStateValue } from "./StateProvider";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import "./Order.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "#42cf2f",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

function SalesManagerOrderDetails({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
}) {
  const classes = useStyles();

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SalesManagerOrderDetails;
