import React, { useState, useEffect } from "react";
import RegisterEmployee from "./RegisterEmployee";
import RegisterCustomer from "./RegisterCustomer";
const Register = () => {
  const [loginnertype, setLoginnerType] = useState("Employee");
  return (
    <div>
      {loginnertype == "Employee" ? (
        <RegisterEmployee
          loginnertype={loginnertype}
          setLoginnerType={setLoginnerType}
        />
      ) : (
        <RegisterCustomer
          loginnerType={loginnertype}
          setLoginnerType={setLoginnerType}
        />
      )}
    </div>
  );
};

export default Register;
