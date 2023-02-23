import './App.css';
import React from 'react';
import Map from './Map.jsx';

export default function App() {
  return (
    <div>
      <Map/>
      <h1>&nbsp;Mapping Violence Page</h1>
      <div class='session' id='sliderbar'>
      <h2>Year: <label id='active-year'>1700</label></h2>
      <input id='slider' name = 'sliderInput' class= "white" type='range' min='1500' max='1900' step='50' value='1700' />

      
      
    </div>

    
    <button className='Button' id="filter_weapon1"> Filter by weapon: sasso </button>
      <button className='Button' id="filter_weapon2"> Filter by weapon: pugnale </button>
      <button className='Button' id="filter_weapon3"> Filter by weapon: archibugio </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>&nbsp;Filter Data:</h2>
      {/* temp button */}
      <button className='Button' id="filter_conviction_yes"> Filter by Conviction: yes </button>
      <button className='Button' id="filter_conviction_no"> Filter by Conviction: no </button>
      <button className = 'Button' id = "reset"> Reset Data</button>
    </div> 
  
  
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

