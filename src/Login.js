import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const history = useHistory(); // allows us
  //programitaclly change the url
  const [{}, dispatch] = useStateValue();

  const [loginDto, setFullLoginDto] = useState({
    Email: "",
    Password: "",
  });
  // const signIn = (e) => {
  //   e.preventDefault(); //prevent page from refreshing

  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((error) => alert(error.message));
  // };
  const signIn2 = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post("api/auth/login", loginDto)
      .then(function (response) {
        debugger;
        console.log(response);
        dispatch({
          type: "SET_USER",
          user: response.data,
        });
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  // const register = (e) => {
  //   e.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       // it successfully created a new user with email and password
  //       if (auth) {
  //         history.push("/");
  //       }
  //       console.log(auth);
  //     })
  //     .catch((error) => alert(error.message));
  //   // register user with email and password then it come back with auth object
  //   //if everything is good
  // };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={loginDto.Email}
            onChange={(e) =>
              setFullLoginDto({ ...loginDto, Email: e.target.value })
            }
          />

          <h5>Password</h5>
          <input
            type="password"
            value={loginDto.Password}
            onChange={(e) =>
              setFullLoginDto({ ...loginDto, Password: e.target.value })
            }
          />
          <h5>Loginner Type</h5>
          <div className="checkboxs">
            <label>
              <input type="checkbox" /> Customer
            </label>
            <label>
              <input type="checkbox" /> Product Manager
            </label>
            <label>
              <input type="checkbox" /> Sales Manager
            </label>
          </div>

          <button
            type="submit"
            onClick={signIn2} //triggerlamamız için onClick koyduk
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the FOODIET Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={() => {
            history.push("/register");
          }}
          className="login__registerButton"
        >
          Create your Foodıet Account
        </button>
      </div>
    </div>
  );
};

export default Login;
