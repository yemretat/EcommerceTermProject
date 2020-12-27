import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const RegisterCustomer = ({ loginnerType, setLoginnerType }) => {
  const history = useHistory(); // allows us
  //programitaclly change the url
  const [{}, dispatch] = useStateValue();

  const [registerDto, setFullRegisterDto] = useState({
    Email: "",
    Password: "",
    Phone: "",
    Title: "",
    ContactName: "",
    CustomerAddress: "",
    CreditCardNo: "",
    City: "",
    PostalCode: "",
    Title: loginnerType,
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
  const register2 = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post("api/auth/registerCustomer", registerDto)
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
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} />
      </Link>
      <div className="login__container">
        <h1>Sign-up</h1>

        <form>
          <h5>Select the Loginner Type</h5>
          <select
            type="select"
            name="loginner"
            id="loginner"
            value={loginnerType}
            onChange={(e) => setLoginnerType(e.target.value)}
          >
            <option>Customer</option>
            <option>Employee</option>
          </select>
          <h5>E-mail</h5>
          <input
            type="text"
            value={registerDto.Email}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, Email: e.target.value })
            }
          />

          <h5>Password</h5>
          <input
            type="password"
            value={registerDto.Password}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, Password: e.target.value })
            }
          />
          <h5>Phone</h5>
          <input
            type="text"
            value={registerDto.Phone}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, Phone: e.target.value })
            }
          />
          <h5>ContactName</h5>
          <input
            type="text"
            value={registerDto.ContactName}
            onChange={(e) =>
              setFullRegisterDto({
                ...registerDto,
                ContactName: e.target.value,
              })
            }
          />
          <h5>CustomerAddress</h5>
          <input
            type="text"
            value={registerDto.CustomerAddress}
            onChange={(e) =>
              setFullRegisterDto({
                ...registerDto,
                CustomerAddress: e.target.value,
              })
            }
          />
          <h5>CreditCardNo</h5>
          <input
            type="text"
            value={registerDto.CreditCardNo}
            onChange={(e) =>
              setFullRegisterDto({
                ...registerDto,
                CreditCardNo: e.target.value,
              })
            }
          />
          <h5>City</h5>
          <input
            type="text"
            value={registerDto.City}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, City: e.target.value })
            }
          />
          <h5>PostalCode</h5>
          <input
            type="text"
            value={registerDto.PostalCode}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, PostalCode: e.target.value })
            }
          />

          <button
            type="submit"
            //   onClick={signIn} //triggerlamamız için onClick koyduk
            className="login__signInButton"
            onClick={register2}
          >
            Create your Foodiet Account
          </button>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="login__registerButton"
          >
            Retun Sign-in Page
          </button>
        </form>

        <p>
          By signing-in you agree to the FOODIET Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
};

export default RegisterCustomer;
