import './App.css';
import React from 'react';
import MapPage from "./MapPage"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import AdminPage from './AdminPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <div class = "FilteringHeaders">
          <Link class = "ButtonLogin" to="/">Map</Link>
          <Link class = "ButtonLogin" to="/LoginPage">Login</Link>
          <Link class = "ButtonLogin" to="/RegisterPage">Register</Link>
          <Link class = "ButtonLogin" to="/AdminPage">Admin</Link>
        </div>
        <Routes>
          <Route exact path="/" element={< MapPage />}></Route>
          <Route exact path="/LoginPage" element={< LoginPage />}></Route>  
          <Route exact path="/RegisterPage" element={< RegisterPage />}></Route>
          <Route exact path="/AdminPage" element={< AdminPage />}></Route>
        </Routes>
        
      </div>
      </BrowserRouter>
    </>
  
  )

}

//This is a test comment

  /*   ***Old Snippets***

  const handleChange = () => ({target}) => {
    setDescription((prev) => {
      if (prev === target.data) {
        return 'Click on a point to view is data here';
      } else {
        return target.data;
      }
    })
  }


const handleClick = ({ target })=> {
  setDescription(target.desc)
  setActive(!active)
};

<button className='button' desc="hello" onClick={handleClick}></button>
<div id="jD1">
  <Button stateChanger={setDescription} data={jsonData1}/> 
</div>
<div id="jD2">
  <Button stateChanger={setDescription} data={jsonData2}/> 
</div>
<div id="jD3">
  <Button stateChanger={setDescription} data={jsonData3}/> 
</div>

let jD1 = {
  "Element" : "jD1",
  "Name" : "Chris",
  "Location" : "Venice",
  "Weapon" : "Gold Crossbow"
}

let jD2 = {
  "Element" : "jD2",
  "Name" : "Ben",
  "Location" : "Milan",
  "Weapon" : "Blikky"
}

let jD3 = {
  "Element" : "jD3",
  "Name" : "John",
  "Location" : "Turin",
  "Weapon" : "massive sword"
}

let jsonData = [jD1, jD2, jD3];


  axios.get(API_URL)
  .then((res) => {
        //console.log(res.data)
      //pgresponse = res.data
      buttons = res.data.map(data => {
        console.log(data.id)
        return (
          <div id={data.id}>
            <Button stateChanger={setDescription} data={data}/>
          </div>
        )
      })
  })

*/

