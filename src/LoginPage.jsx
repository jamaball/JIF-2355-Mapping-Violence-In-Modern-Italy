import React, { useState } from "react";

import {
  Link,
} from "react-router-dom";
  
export default function LoginPage() {
  const [state, setState] = useState ({
    username: '',
    password: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  const onChange = (e) => {
    setState({...state, [e.target.name]:[e.target.value]});
  }
  return (
      <div className = "col-md-4 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form className="center" onSubmit={onSubmit}>
            <div className="form=group">
            <label>Username</label>
              <input
                className="form-control inputRoundedEdge"
                placeholder="Username"
                type="text"
                name="username"
                onChange={onChange}
                value={state.username}
              />
            </div>
            <div className="form=group">
            <label>Password</label>
              <input 
                className="form-control inputRoundedEdge"
                placeholder="Password"
                type="password"
                name="password"
                onChange={onChange}
                value={state.password}
              />
            </div>
            <br></br>
          </form>
          <div className="form-group center">
              <button type="submit" className="Button">Login</button>
            </div>
            <br></br>
          <p text="text-center" className="center">
              Need an account?
            </p>
            <Link class = "ButtonLogin center" to="/RegisterPage">Register</Link>
        </div>
      </div>
    )
};