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
    [9, 40], // Southwest coordinates
    [16 , 47] // Northeast coordinates
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