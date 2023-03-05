import React from "react";
  
const AdminPage = () => {
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
    </div>
  );
};
  
export default AdminPage;