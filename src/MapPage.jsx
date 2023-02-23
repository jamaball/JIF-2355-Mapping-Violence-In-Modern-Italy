import React from "react";
import Map from './Map.jsx';
  
export default function MapPage() {
  return (
    <div>
      <Map/>
      <h1>&nbsp;Mapping Violence Page</h1>
      <div class='session' id='sliderbar'>
      <h2>Year: <label id='active-year'>1700</label></h2>
      <input id='slider' class='row' type='range' min='1500' max='1900' step='50' value='1700' />
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