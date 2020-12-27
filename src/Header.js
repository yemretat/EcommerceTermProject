import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import EditLoginner from "./EditLoginner";
const Header = () => {
  const [{ user, basket }] = useStateValue();
  const [authorized, setAuthorized] = useState("1");
  const [opendialog, setOpenDialog] = useState(false);
  console.log(user);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* href refresh the page , link doesnt*/}
      <Link to="/login">
        <img className="header__logo" alt="" src={Logo}></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>{" "}
      <div className="header__nav">
        {/* eğer user tanımlanmamışsa login sayfasına git yani sign in
          eğer sign out gözüküyorsa direk çıkış */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.loginnerMail}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {user && user.title == "C" ? (
          <Link
            to={user.title == "C" ? "/salesmanager" : "/productmanager"}
            className="header__link"
          >
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Authorization</span>
            </div>
          </Link>
        ) : null}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        {user ? (
          <button
            onClick={() => setOpenDialog(true)}
            className="header_circleIcon"
          >
            <AccountCircleIcon />
          </button>
        ) : null}
        <Dialog
          open={opendialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want edit your User Informations?"}
          </DialogTitle>
          <DialogContent>
            <EditLoginner />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Disagree
            </Button>
            <Button
              onClick={() => setOpenDialog(false)}
              color="primary"
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </nav>
  );
};

export default Header;
