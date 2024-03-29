import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Map.css";
import { featureCollection, lineString } from "@turf/helpers";
import api from "./Api.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiaHd5c29ja2kyMiIsImEiOiJjbGQyOG1kOTIwNWVnM3hvOW15a2syMnFqIn0.X5H6aAIVGej-R6QVWx4LVg';

const Map = () => {
  const mapContainerRef = useRef(null);
  
  let [responseData, setResponseData] = React.useState('')
  let [filteredData, setFilteredData] = React.useState('')

  const combineGeoJsons = (gj1, gj2) => {
    if (gj1 === null) {
      return gj2;
    } else if (gj1.features === null) {

    } else if (gj2 === null) {
      return gj1;
    }
    console.log(gj2);

    gj2.features.forEach((feature) => {
      gj1.features.push(feature);
    });
    return gj1;
  }

  // Initialize map when component mounts
  const coordinates = document.getElementById('coordinates');

  useEffect(() => {
    const map = new mapboxgl.Map({
      
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [13, 43],
      zoom: 5,
      maxBounds: [[4.91306038378405, 36.08567211105813], [19.225508855943896, 48.79804811867416]]
    });

   
    document.getElementById('marker').addEventListener('click', function() {
      const marker = new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([12.5, 42.5])
        .addTo(map);
        function onDragEnd() {
        const lngLat = marker.getLngLat();
        
        }
        marker.on('dragend', onDragEnd);
        document.getElementById('clearMarker').addEventListener('click', function() {
        marker.remove();
        });
    });

    
      
  
   
    const geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      placeholder: 'Search for a city',
      bbox: [6.626556, 35.4122073, 18.6201843, 47.092146],
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false // Do not use the default marker style
    });
    
    // Add the geocoder to the map
    map.addControl(geocoder);

    //get the points from the database
    api.getData()
    .then((response) => {
      let data = combineGeoJsons(response.data, JSON.parse(localStorage.getItem("uploadedData")));
      // responseData = response.data
      // filteredData = response.data
      responseData = data;
      filteredData = data;


    })
    .catch((error) => {
      console.log(error)
    });

   
    const Map = new mapboxgl.Map({
      container: 'map',
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });


    map.on('load', () => {
      map.addSource('italy', {
        'type': 'raster',
        'url': 'mapbox://chernandez67.cs501xk0'
      });

      map.addSource('italy2', {
        'type': 'raster',
        'url': 'mapbox://chernandez67.d4808ng3'
      });

      map.addSource('italy3', {
        'type': 'raster',
        'url': 'mapbox://chernandez67.avkgpxbd'
      });

      map.addSource('myData', {
        type: 'geojson',
        data: responseData,
        cluster: true,
        clusterMaxZoom: 14, 
        clusterRadius: 50
      });

      map.addLayer({
        'id': 'italy',
        'source': 'italy',
        'type': 'raster',
        'layout': {
          'visibility': 'none'
        },
      });

      map.addLayer({
        'id': 'italy2',
        'source': 'italy2',
        'type': 'raster',
        'layout': {
          'visibility': 'none'
        },
      });

      map.addLayer({
        'id': 'italy3',
        'source': 'italy3',
        'type': 'raster',
        'layout': {
          'visibility': 'none'
        },
      });

      map.addLayer({
        'id': 'clusters',
        'type': 'circle',
        'source': 'myData',
        'filter': ['has', 'point_count'],
        layout: {
          // Make the layer visible by default.
          'visibility': 'visible'
          },
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
          'text-size': 12,
          'visibility': 'visible'
        }
        
      });


      let layers = document.getElementById("menu");
      function ResetList() {
        while (layers.firstChild) {
          layers.removeChild(layers.firstChild);
        }
      }

      // After the last frame rendered before the map enters an "idle" state.
      let toggleableLayerIds = [];
      let weaponList = [];
      let convictionList = "y/n"
      let timeList = [];
      let descriptionSearchString = "";
      var sample = featureCollection([]);
      sample.features = responseData.features;
      var list = featureCollection([]);
      list.features = responseData.features;
     

      function Filter() {
        sample = featureCollection([]);
        sample.features = responseData.features;
        list = featureCollection([]);
        list.features = responseData.features;
        const date = timeList.at(0);
        
        if(convictionList == "y") {
          sample.features = sample.features.filter((pt => pt.properties.conviction === "yes" || Array.from(pt.properties.conviction)[0].toLowerCase() == 'y'));
          list.features = list.features.filter((pt => pt.properties.conviction === "yes" || Array.from(pt.properties.conviction)[0].toLowerCase() == 'y'));
        } else if (convictionList == "n") {
          sample.features = sample.features.filter((pt =>  pt.properties.conviction === "no" || Array.from(pt.properties.conviction)[0].toLowerCase() == 'n'));
          list.features = list.features.filter((pt =>  pt.properties.conviction === "no" || Array.from(pt.properties.conviction)[0].toLowerCase() == 'n'));
        }

        if (timeList.length != 0) {
          sample.features = sample.features.filter(pt => (parseInt(pt.properties.date)  <= date + 49 && parseInt(pt.properties.date) >= date)); 
          list.features = list.features.filter(pt => (parseInt(pt.properties.date)  <= date + 49 && parseInt(pt.properties.date) >= date));           
        }

        if (weaponList.length != 0) {
          sample.features = sample.features.filter(pt => weaponList.includes(pt.properties.weapon));
        }

        if (descriptionSearchString !== "") {
          sample.features = sample.features.filter(pt => pt.properties.description.includes(descriptionSearchString));
          list.features = list.features.filter(pt => pt.properties.description.includes(descriptionSearchString));
        }
        
        map.getSource('myData').setData(sample);
      }

      document.getElementById('slider').addEventListener('input', (event) => {
        timeList.pop(); 
        const date = parseInt(event.target.value);
        timeList.push(date);
        document.getElementById('active-year').innerText = date;
        document.getElementById('active-year-range').innerText = date + 49;
        document.getElementById('slider').value = date;
        Filter(); 
        ResetList();

      });
      

      map.on('idle', () => {
        toggleableLayerIds = []
        
        for (let feature of list.features) {
          let symbol = feature.properties.weapon;
          if (!toggleableLayerIds.includes(symbol)) {
            toggleableLayerIds.push(symbol);
          }
        }
       
        toggleableLayerIds.sort();
       
          
        // Set up the corresponding toggle button for each layer.
        for (const id of toggleableLayerIds) {
          // Skip layers that already have a button set up.
          if (document.getElementById(id)) {
            continue;
          }

          map.addLayer({
            id: id,
            type: 'circle',
            source: 'myData',
            filter: ['!', ['has', 'point_count']],
            layout: {
              // Make the layer visible by default.
              'visibility': 'visible'
              },
            
            paint: {
              'circle-color': '#ff4542',
              'circle-radius': 8,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
            }
            
          });

          map.on('click', id, (e) => {
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
          
          // Create a link.
          let link = document.createElement('a');
          link.id = id;
          link.href = '#';
          link.textContent = id;
          link.className = 'active';

          // Show or hide layer when the toggle is clicked.
          link.onclick = function (e) {
            // link.className = "active clicked"
            let clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();
            let visibility = map.getLayoutProperty(
            clickedLayer,
            'visibility'
            );
            
            
            // Toggle layer visibility by changing the layout object's visibility property.
            if (visibility === 'visible') {
              map.setLayoutProperty(clickedLayer, 'visibility', 'none');
              weaponList.push(clickedLayer)
              link.className = 'active clicked';
              Filter(); 
              
              } else {
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                var index = weaponList.indexOf(clickedLayer); // Let's say it's Bob.
                weaponList.splice(index, 1);
                link.className = "active"
                Filter();
                
              }
          };
          
          layers.appendChild(link);
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

      document.getElementById("descriptionSearch").addEventListener("input", function(e) {
        descriptionSearchString = e.target.value;
        Filter();
        ResetList();
      });

      document.getElementById('conviction').addEventListener('click', function() {
        convictionList = "y";
        Filter(); 
        ResetList();

      });

      document.getElementById('noConviction').addEventListener('click', function() {
        convictionList = "n";
        Filter();
        ResetList();

      });

      document.getElementById('noSelectionConviction').addEventListener('click', function() {
        convictionList = "y/n";
        Filter();
        ResetList();

      });

      document.getElementById('reset').addEventListener('click', function() {
        var sample = featureCollection([]);
        var list = featureCollection([]);
        filteredData = responseData;
        sample.features = responseData.features;
        list.features = responseData.features;

        toggleableLayerIds = [];
        weaponList.forEach(function (w) {
          document.getElementById(w).className="active";
        })
        weaponList = [];
        convictionList = "y/n"; 
        timeList = []; 
        
        map.getSource('myData').setData(sample);
        
        document.getElementById('noSelectionConvictionRadio').checked = true;
        document.getElementById('active-year').innerText = 1500;
        document.getElementById('active-year-range').innerText = 1800;
        document.getElementById('slider').value = 1700;
        document.getElementById('descriptionSearch').value = "";
        Filter();

      });

      document.getElementById('download').addEventListener('click', function() {
        const element = document.createElement("a");
        var jsonse = JSON.stringify(responseData);
        console.log(jsonse)
        const file = new Blob([jsonse], {type: 'application/json'});
        element.href = URL.createObjectURL(file);
        element.download = "data.json";
        document.body.appendChild(element);
        element.click();
      });

      document.getElementById('center').addEventListener('click', function() {
        const center = new mapboxgl.LngLat(13, 43)
        map.setCenter(center)
        map.setZoom(5)
      });

      document.getElementById('demomap1').addEventListener('click', function() {
        const visibility = map.getLayoutProperty('italy', 'visibility');
        if (visibility === 'visible') {
          map.setLayoutProperty('italy', 'visibility', 'none');
        } else {
          map.setLayoutProperty('italy', 'visibility', 'visible');
        }
      });

      document.getElementById('demomap2').addEventListener('click', function() {
        const visibility = map.getLayoutProperty('italy2', 'visibility');
        if (visibility === 'visible') {
          map.setLayoutProperty('italy2', 'visibility', 'none');
        } else {
          map.setLayoutProperty('italy2', 'visibility', 'visible');
        }
      });

      document.getElementById('demomap3').addEventListener('click', function() {
        const visibility = map.getLayoutProperty('italy3', 'visibility');
        if (visibility === 'visible') {
          map.setLayoutProperty('italy3', 'visibility', 'none');
        } else {
          map.setLayoutProperty('italy3', 'visibility', 'visible');
          const pos = new mapboxgl.LngLat(11.545, 45.545)
          map.setZoom(15)
          map.setCenter(pos)
        }
      });
    
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
      <div className="map-container" ref={mapContainerRef} />
  )
};


export default Map;