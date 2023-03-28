import React from "react";
import Map from './Map.jsx';
  
export default function MapPage() {
  return (
    <div>
      <Map/>
      <div id="map"></div>
      <div className = "filterbox">
        <h2>&nbsp;Filter Data:</h2>
        {/* <h4>&nbsp;Weapon:</h4> */}

        <div class="dropdown">
            <button class="dropbtn">Filter Weapons</button>
              <div class="dropdown-content">
              <nav id="menu"></nav>
              </div>
          </div>
        <br></br>
        <h4>&nbsp;Conviction Type:</h4>
        <label className="container" id = "noSelectionConviction">&nbsp; &nbsp;No Selection
          <input type="radio" name="radio"/>
          <span className="checkmark"></span>
        </label>
        <label className="container" id = "conviction">&nbsp; &nbsp;Convicted
          <input type="radio" name="radio"/>
          <span className="checkmark"></span>
        </label>
        <label className="container" id = "noConviction">&nbsp; &nbsp;Not Convicted
          <input type="radio" name="radio"/>
          <span className="checkmark"></span>
        </label>
        
        <br></br>
        <button className = 'ButtonReset' id = "reset"> Reset Data</button>
        <button className = 'ButtonLogin' id = "download"> Download Dataset</button>
        <br></br>
        <br></br>
        <div className="timeline">
          <div class='slidecontainer session' id='sliderbar'>
          <h4>&nbsp;Years: <label id='active-year'>1700</label> - <label id='active-year-range'>1749</label></h4>
              <input type="range" min="1500" max="1800" step="50" value="1700" class="slider" id = "slider" />
          </div>
        </div>
        
      </div>

    </div> 
  )
}