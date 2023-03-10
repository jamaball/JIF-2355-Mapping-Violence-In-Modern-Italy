import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions/auth";
import { Navigate } from "react-router-dom"
import AdminPage from './AdminPage';

import {
  Link,
} from "react-router-dom";
  
const LoginPage = () => {
  const [state, setState] = useState ({
    username: '',
    password: ''
  })

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    return dispatch(login(state.username[0], state.password[0]));
  }

  const onChange = (e) => {
    setState({...state, [e.target.name]:[e.target.value]});
  }
  if (isAuthenticated) {
    return <Navigate to="/AdminPage"></Navigate>;
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
            <div className="form-group center">
              <button type="submit" className="Button">Login</button>
            </div>
          </form>

            <br></br>
          <p text="text-center" className="center">
              Need an account?
            </p>
            <Link class = "ButtonLogin center" to="/RegisterPage">Register</Link>
        </div>
      </div>
    )
};

export default LoginPage;