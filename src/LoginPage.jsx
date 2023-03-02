import React from "react";

import {
  Link,
} from "react-router-dom";
  
const LoginPage = () => {
  return (
    <div class = "LoginAlign">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Admin Login</h1>
      <br></br>
      <br></br>
      <h2>Email</h2>
      <input id = "inputRoundedEdge"/>
      <br></br>
      <br></br>
      <h2>Password</h2>
      <input id = "inputRoundedEdge"/>
      <br></br>
      <br></br>
      <Link class = "Button" to="/AdminPage">Login</Link>
      <br></br>
      {/*<button class = "Button">New Account</button>*/}
      <Link class = "ButtonLogin" to="/RegisterPage">Need an account? Register</Link>
    </div>
  );
};
  
export default LoginPage;