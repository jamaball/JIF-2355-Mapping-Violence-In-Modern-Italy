import './App.css';
import {useState, useEffect} from 'react';
import React from 'react'
import { API_URL } from "./constants";
import axios from "axios";

function App() {
  const [description, setDescription] = useState('Click on a point to view is data here');
  const [active, setActive] = useState(true)  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
    .then(res => setPosts(res.data))
    .catch(err => console.log(err));
  }, [])

  const buttons = posts.map(data => {
    return (
      <div id={"b" + data.id}>
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
          <div>{buttons}</div>
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

function InfoBar({desc, isActive}) {
  let output = JSON.stringify(desc, null)
  console.log(output)
  return (
    <div className="InfoBar">
      {isActive ? (
        <p>{output}</p>
      ) : (
        <p>Click on a point to view is data here</p>
      )}
    </div>
  );
}

export default App;




{/*   ***Old Snippets***

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

*/}