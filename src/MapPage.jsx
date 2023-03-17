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
          <h4>&nbsp;Year: <label id='active-year'>1700</label></h4>
              <input type="range" min="1500" max="1800" step="50" value="1700" class="slider" id = "slider" />
          </div>
          <div className="timeline-axis">
            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1500-1549</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1550-1599</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1600-1649</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1650-1699</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1700-1749</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1750-1799</p>
            </div>

            <div className="axis-marker">
              <div className="vertical"></div>
              <p>1800</p>
            </div>
        </div>
        </div>
        
      </div>

    </div> 
  )
}