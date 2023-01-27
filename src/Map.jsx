import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import geoJson from "./geoJsonTest.json";
import "./Map.css";

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

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [13, 43],
      zoom: 5,
      maxBounds: [[4.91306038378405, 36.08567211105813], [19.225508855943896, 48.79804811867416]]
    });

    /*
    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node
      ReactDOM.render(
        <Marker onClick={markerClicked} feature={feature} />,
        ref.current
      );

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
    });
    */

    map.on('load', () => {
      map.addSource('myData', {
        type: 'geojson',
        data: geoJson,
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

    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;