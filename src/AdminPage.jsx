import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, loadUser } from "./actions/auth"
import { Navigate } from "react-router-dom"

const AdminPage = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onClick = () => {
    return dispatch(logout());
  }

  const authLinks = (
    <button onClick={ onClick } className="ButtonLogin">Logout</button>
    );
  
  const guestLinks = (
    <Navigate to="/"></Navigate>
  );
  

  return (
    <div class = "LoginAlign">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Admin Page</h1>
      <br></br>
      <br></br>
      <table class = "center">
        <thead>
          <tr>
            <th width="300px">data</th>
            <th width="400px">email</th>
            <th width="200px">download</th>
            <th width="300px">approve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test Data</td>
            <td>fakeemail@gmail.com</td>
            <td>download</td>
            <td>
              <button>approve data</button>
              <button>reject data</button>
            </td>
          </tr>
          <tr>
          <td>Test Data 2</td>
            <td>fakeemail@gmail.com</td>
            <td>download</td>
            <td>
              <button>approve data</button>
              <button>reject data</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isAuthenticated? authLinks : guestLinks}

    </div>
  );
};
  
export default AdminPage;