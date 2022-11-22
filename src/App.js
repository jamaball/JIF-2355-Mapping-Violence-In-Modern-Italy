import './App.css';
import {useState} from 'react';
import React from 'react'
import { API_URL } from "./constants";
import axios from "axios";

function App() {
  const [description, setDescription] = useState('Click on a point to view is data here');
  const [active, setActive] = useState(true)
  let jsonData = [];
  const handleClick = ({ target })=> {
    setDescription(target.desc)
    setActive(!active)
  };
  axios
  .get(API_URL)
  .then((res) => {
      jsonData.push.apply(jsonData, res.data);
      console.log(res.data);
  })
  console.log(jsonData)
  const buttons = jsonData.map(data => {
    return (
      <div id={data.Element}>
        <Button stateChanger={setDescription} data={data}/> 
      </div>
    )
  })

  return (
    <div className="App">
      <header className='header'>
        <p>GMU History Dept. Mapping Volience In Italy</p>
      </header>
      <div className="Map">
        <div id="italyImg"/>
          <div class="ButtonClass">{buttons}</div>
          {/*<button className='button' desc="hello" onClick={handleClick}></button>
          <div id="jD1">
            <Button stateChanger={setDescription} data={jsonData1}/> 
          </div>
          <div id="jD2">
            <Button stateChanger={setDescription} data={jsonData2}/> 
          </div>
          <div id="jD3">
            <Button stateChanger={setDescription} data={jsonData3}/> 
          </div>*/}
        </div>    
      <div className='DataInfo'>
        <InfoBar isActive={active === true} desc={description}/>
      </div>
    </div>
  );
}

function Button({stateChanger, data}) {
  return (
    <button className='Button' onClick={event => {stateChanger(data)}}></button> 
  )
}

let jD1 = {
  "Name" : "Chris",
  "Location" : "Venice",
  "Weapon" : "Gold Crossbow"
}

let jD2 = {
  "Name" : "Ben",
  "Location" : "Milan",
  "Weapon" : "Blikky"
}

let jD3 = {
  "Name" : "John",
  "Location" : "Turin",
  "Weapon" : "massive sword"
}

//let jsonData = [jD1, jD2, jD3];


function InfoBar({desc, isActive}) {
  return (
    <div classname="InfoBar">
      {isActive ? (
        <p>{JSON.stringify(desc)}</p>
      ) : (
        <p>Click on a point to view is data here</p>
      )}
    </div>
  );
}



//<p>The description is {description}</p>
//<button className='button' onClick={() => setDescription("No Data")}>Click Me 2</button> 

export default App;
