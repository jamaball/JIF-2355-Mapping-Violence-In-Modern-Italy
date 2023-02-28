import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Map.css";
import { featureCollection } from "@turf/helpers";
import api from "./Api.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiaHd5c29ja2kyMiIsImEiOiJjbGQyOG1kOTIwNWVnM3hvOW15a2syMnFqIn0.X5H6aAIVGej-R6QVWx4LVg';

const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};



const Map = () => {
  const mapContainerRef = useRef(null);
  
  
  let [responseData, setResponseData] = React.useState('')
  let [filteredData, setFilteredData] = React.useState('')

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [13, 43],
      zoom: 5,
      maxBounds: [[4.91306038378405, 36.08567211105813], [19.225508855943896, 48.79804811867416]]
    });

    //get the points from the database
    api.getData()
    .then((response) => {
      responseData = response.data
      filteredData = response.data

      //plot the points on the map

      /*
      response.data.features.forEach((feature) => {
        // Create a React ref
        const ref = React.createRef();
        // Create a new DOM node and save it to the React ref
        ref.current = document.createElement("div");
        // Render a Marker Component on our new DOM node
        ReactDOM.render(
          <Marker onClick={markerClicked} feature={feature} />,
          ref.current
        );
        console.log(feature.location)
        // Create a Mapbox Marker at our new DOM node
        new mapboxgl.Marker(ref.current)
          .setLngLat(feature.geometry.coordinates)
          .addTo(map);
      });
      */

    })
    .catch((error) => {
        console.log(error)
    });

    

    map.on('load', () => {
      map.addSource('myData', {
        type: 'geojson',
        data: responseData,
        cluster: true,
        clusterMaxZoom: 14, 
        clusterRadius: 50
      });

      

      map.addLayer({
        'id': 'clusters',
        'type': 'circle',
        'source': 'myData',
        'filter': ['has', 'point_count'],
        'paint': {
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40
          ],
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#ff4542',
            100,
            '#f19e75',
            750,
            '#ddff80'
          ],
          'circle-stroke-width': 2,
          'circle-stroke-color': 'white'
        }
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'myData',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });

      map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'myData',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#ff4542',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff'
        }

      });
      map.on('click', 'clusters', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        const clusterId = features[0].properties.cluster_id;
        map.getSource('myData').getClusterExpansionZoom(
          clusterId,
          (err, zoom) => {
            if (err) return;
              
            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          }
        );
      });

      
        
      map.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const date = e.features[0].properties.date;
        const location = e.features[0].properties.location;
        const weapon = e.features[0].properties.weapon;
        const conviction = e.features[0].properties.conviction;
        const description = e.features[0].properties.description;
        
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `
          <table classname="info-table">
            <tr>
              <td><strong>Location</strong></td>
              <td><strong>${location}</strong></td>
            </tr>
            <tr>
              <td>Date</td>
              <td>${date}</td>
            </tr>
            <tr>
              <td>Weapon</td>
              <td>${weapon}</td>
            </tr>
            <tr>
              <td>Conviction</td>
              <td>${conviction}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>${description}</td>
            </tr>
          `
        )
        .addTo(map);
      });

      document.getElementById('slider').addEventListener('input', (event) => {
        var sample = featureCollection([]);
        const date = parseInt(event.target.value);
        sample.features = filteredData.features.filter((pt => parseInt(pt.properties.date)  <= date + 49 && parseInt(pt.properties.date) >= date) );
        map.getSource('myData').setData(sample);
        document.getElementById('active-year').innerText = date;
        document.getElementById('slider').value = date;
      });

      document.getElementById('sasso').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.weapon.includes("sasso"));
        map.getSource('myData').setData(sample);
      });

      document.getElementById('pugnale').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.weapon.includes("pugnale"));
        map.getSource('myData').setData(sample);
      });

      document.getElementById('archibugio').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.weapon.includes("archibugio"));
        map.getSource('myData').setData(sample);
      });

      document.getElementById('conviction').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.conviction === "yes");
        map.getSource('myData').setData(sample);
      });

      document.getElementById('noConviction').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.conviction === "no");
        map.getSource('myData').setData(sample);
      });

      document.getElementById('reset').addEventListener('click', function() {
        var sample = featureCollection([]);
        filteredData = responseData;
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features;
        map.getSource('myData').setData(sample);
        document.getElementById('active-year').innerText = 1700;
      });

    });


    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };


  return (
  
      <div className="map-container" ref={mapContainerRef} />
  )
};



export default Map;