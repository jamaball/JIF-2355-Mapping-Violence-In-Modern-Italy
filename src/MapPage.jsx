import React from "react";
import Map from './Map.jsx';
  
export default function MapPage() {
  return (
    <div>
      <Map/>
      <h1>&nbsp;Mapping Violence Page</h1>
      <div class = "FilteringHeaders">
      {/* <button className = "ButtonLogin" id = "login">Login</button> */}
      {/* <button className = "ButtonLogin" id = "login">Register</button> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div class = "FilteringHeaders">
      </div>


      

      <div class = "filterbox">
        <h2>&nbsp;Filter Data:</h2>
        <h4>&nbsp;Weapon:</h4>
        <button className='Button' id="filter_weapon1"> Sasso </button>
        <button className='Button' id="filter_weapon2"> Pugnale </button>
        <button className='Button' id="filter_weapon3"> Archibugio </button>
        <br></br>
        <h4>&nbsp;Conviction Type:</h4>
        <button className = 'Button' id="filter_conviction_yes"> Convicted </button>
        <button className = 'Button' id="filter_conviction_no"> Not Convicted </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className = 'ButtonLogin' id = "reset"> Submit</button>
        <button className = 'ButtonReset' id = "reset"> Reset Data</button>
        <br></br>
        <br></br>
        <br></br>
        <div class='slidecontainer session' id='sliderbar'>
         <h4>&nbsp;Year: <label id='active-year'>1700</label></h4>
            <input type="range" min="1500" max="1900" step="50" value="1700" class="slider" id = "slider" />
        </div>

      </div>

      


    </div> 
  )
}