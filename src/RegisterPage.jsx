import React, { useState } from "react";
import {
  Link,
} from "react-router-dom";
  
export default function RegisterPage() {
  const [state, setState] = useState ({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  const onChange = (e) => {
    setState({...state, [e.target.name]:[e.target.value]});
  }

  return(
      <div className = "col-md-4 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form className="center" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                className="form-control inputRoundedEdge"
                placeholder="name@example.com"
                type="email"
                name="email"
                onChange={onChange}
                value={state.email}
              />
            </div>
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
            <div className="form=group">
              <label>Confirm password</label>
              <input
                className="form-control inputRoundedEdge"
                placeholder="Password"
                type="password"
                name="password2"
                onChange={onChange}
                value={state.password2}
              />
            </div>
            <br></br>
            <div className="form-group center">
              <button type="submit" className="Button">Create Account</button>
            </div>
            <br></br>
          </form>
          
          <p text="text-center" className="center">
              Already have an account?
            </p>
            <Link class = "ButtonLogin center" to="/LoginPage">Login</Link>
        </div>
      </div>
  );
}