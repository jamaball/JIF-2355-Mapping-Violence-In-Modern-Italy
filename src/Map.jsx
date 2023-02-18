import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {featureCollection} from "@turf/helpers";
import "./Map.css";
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

      document.getElementById('slider').addEventListener('input', (event) => {
        var sample = featureCollection([]);
        const date = parseInt(event.target.value);
        
        // update the map

        console.log(1800 <= 1600-10-6);

        sample.features = responseData.features.filter(pt => parseInt(pt.properties.date) <= date); 
        map.getSource('myData').setData(sample); 
        
      
        // converting 0-23 hour to AMPM format
        
      
        // update text in the UI
        document.getElementById('active-hour').innerText = date;
      });
        
      map.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = e.features[0].properties.title;
        const description = e.features[0].properties.description;
        
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `Title: ${title}<br>Description: ${description}`
        )
        .addTo(map);
      });

      document.getElementById('filter').addEventListener('click', function() {
        var sample = featureCollection([]);
        console.log(map.getSource('myData').cluster);
        sample.features = responseData.features.filter(pt => pt.properties.weapon === "arme da punta - spada pugnale");
        map.getSource('myData').setData(sample);
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