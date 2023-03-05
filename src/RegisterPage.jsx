import React from "react";
import {
  Link,
} from "react-router-dom";
  
const RegisterPage = () => {
  return (
    <div class = "LoginAlign">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Register</h1>
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
      <button class = "Button">Create Account</button>
      <br></br>
      <Link class = "ButtonLogin" to="/LoginPage">Already have an account? Login</Link>
    </div>
  );
};
  
export default RegisterPage;