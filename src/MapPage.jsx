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
        
        <input class="descriptionSearch" type="text" placeholder="Search Description" id = "descriptionSearch">
        </input>

        <br></br>
        <h4>&nbsp;Conviction Type:</h4>
        <label className="container" id = "noSelectionConviction">&nbsp; &nbsp;No Selection
          <input type="radio" name="radio" id="noSelectionConvictionRadio" defaultChecked/>
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
        <button className = 'ButtonReset' id = "reset"> Reset Filters</button>
        <button className = 'ButtonReset' id = "marker"> Marker</button>
        <button className = 'ButtonReset' id = "clearMarker"> Clear Marker</button>
        <button className = 'ButtonLogin' id = "download"> Download Dataset</button>
        <button className = 'ButtonLogin' id = "center">Center Map</button>
        <br></br>
        <br></br>
        <div className="timeline">
          <div class='slidecontainer session' id='sliderbar'>
          <h4>&nbsp;Years: <label id='active-year'>1500</label> - <label id='active-year-range'>1800</label></h4>
              <input type="range" min="1500" max="1800" step="50" value="1700" class="slider" id = "slider" />
          </div>
        </div>
        <br></br>
        <br></br>
        <h4>&nbsp;Map Layers:</h4>
        <button className = 'ButtonLogin' id = "demomap1">Map 1</button>
        <button className = 'ButtonLogin' id = "demomap2">Map 2</button>
      </div>

    </div> 
  )
}