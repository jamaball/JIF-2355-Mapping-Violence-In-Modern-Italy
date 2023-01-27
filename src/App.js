import './App.css';

import React, { useRef, useEffect, useState } from 'react';
import { API_URL } from "./constants";
import axios from "axios";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHd5c29ja2kyMiIsImEiOiJjbGQyOG1kOTIwNWVnM3hvOW15a2syMnFqIn0.X5H6aAIVGej-R6QVWx4LVg';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(10.8441);
  const [lat, setLat] = useState(42.1466);
  const [zoom, setZoom] = useState(4.5);
  const bounds = [
      [8, 37], // Southwest coordinates
      [17, 47] // Northeast coordinates
    ];
   
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: bounds
    });
  });
   
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
   
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

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

