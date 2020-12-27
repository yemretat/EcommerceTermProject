import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AddUpdateProduct.css";
import { auth } from "./firebase";
import Logo from "./img/logo4.PNG";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

const EditLoginner = ({}) => {
  const [{ user, basket }] = useStateValue();

  const history = useHistory(); // allows us
  //programitaclly change the url
  const [{}, dispatch] = useStateValue();
  const [updateDto, setFullUpdateDto] = useState({
    LoginnerMail: user.loginnerMail,
    Password: user.loginnerPassword,
  });

  return (
    <div className="editproduct">
      <div className="login__container">
        <h1>User Informations</h1>

        <form>
          <h5>LoginnerMail</h5>
          <input
            type="text"
            value={updateDto.LoginnerMail}
            onChange={(e) =>
              setFullUpdateDto({ ...updateDto, LoginnerMail: e.target.value })
            }
          />

          <h5>Password</h5>
          <input
            type="password"
            value={updateDto.Password}
            onChange={(e) =>
              setFullUpdateDto({ ...updateDto, Password: e.target.value })
            }
          />
          <button
            type="submit"
            //triggerlamamız için onClick koyduk
            className="login__signInButton"
          >
            Edit User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditLoginner;
