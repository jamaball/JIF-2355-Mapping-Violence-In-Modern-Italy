import React from "react";
import Map from './Map.jsx';

export default function MapPage() {




  return (
    
    <div>
      <Map/>
      <div class="LoginAlign">
        <h1>&nbsp;Mapping Violence Page</h1>
      </div>
      <div class = "FilteringHeaders">
      </div>
      <br></br>
      <br></br>
      <div class = "FilteringHeaders">
      </div>
       
      <div id="map"></div>


      <div class = "filterbox">
        <h2>&nbsp;Filter Data:</h2>

        <h4>Weapon:</h4>

        {/* <nav id="menu"></nav> */}

          <div class="dropdown">
            <button class="dropbtn">Filter Weapons</button>
              <div class="dropdown-content">
              <nav id="menu"></nav>
              </div>
          </div>


        <br></br>
        <h4>&nbsp;Conviction Type:</h4>
        <label class="container" id = "noSelectionConviction">&nbsp; &nbsp;No Selection
          <input type="radio" name="radio"/>
          <span class="checkmark"></span>
        </label>
        <label class="container" id = "conviction">&nbsp; &nbsp;Convicted
          <input type="radio" name="radio"/>
          <span class="checkmark"></span>
        </label>
        <label class="container" id = "noConviction">&nbsp; &nbsp;Not Convicted
          <input type="radio" name="radio"/>
          <span class="checkmark"></span>
        </label>
        
        {/* <button className = 'Button' id="filter_conviction_yes"> Convicted </button> */}
        {/* <button className = 'Button' id="filter_conviction_no"> Not Convicted </button> */}
        <br></br>
        <button className = 'ButtonLogin' id = "submit"> Submit</button>
        <button className = 'ButtonReset' id = "reset"> Reset Data</button>
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