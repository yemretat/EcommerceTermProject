import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const RegisterEmployee = ({ setLoginnerType, loginnertype }) => {
  const history = useHistory(); // allows us
  //programitaclly change the url
  const [{}, dispatch] = useStateValue();

  const [registerDto, setFullRegisterDto] = useState({
    Email: "",
    Password: "",
    Phone: "",
    FirstName: "",
    LastName: "",
    HireDate: "",
    PostalCode: "",
    Title: "",
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
  const register = (e) => {
    debugger;
    e.preventDefault();
    axios
      .post("api/auth/registerEmployee", registerDto)
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
            name="loginnertype"
            id="loginner"
            value={loginnertype}
            onChange={(e) => setLoginnerType(e.target.value)}
          >
            <option>Employee</option>
            <option>Customer</option>
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
          <h5>FirstName</h5>
          <input
            type="text"
            value={registerDto.FirstName}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, FirstName: e.target.value })
            }
          />
          <h5>LastName</h5>
          <input
            type="text"
            value={registerDto.LastName}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, LastName: e.target.value })
            }
          />
          <h5>HireDate</h5>
          <input
            type="text"
            value={registerDto.HireDate}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, HireDate: e.target.value })
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

          <h5>Select the Employee Type</h5>
          <select
            type="select"
            value={registerDto.Type}
            onChange={(e) =>
              setFullRegisterDto({ ...registerDto, Title: e.target.value })
            }
          >
            <option>Product Manager</option>
            <option>Sales Manager</option>
          </select>
          <button
            type="submit"
            //   onClick={signIn} //triggerlamamız için onClick koyduk
            className="login__signInButton"
            onClick={register}
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

export default RegisterEmployee;
