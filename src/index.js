const mapboxgl = require('mapbox-gl')
const markerMaker = require('./marker')

mapboxgl.accessToken = "pk.eyJ1IjoiZWd1bzEiLCJhIjoiY2pnbzMyeTNnMGhkcTJxbnkyYmFpaWkyciJ9.Sxwi5wbn1DbvXsH5w9e1lw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.639, 41.8954],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

// new mapboxgl.Marker().setLngLat([-87.641, 41.895]).addTo(map);

// const markerDomEl = document.createElement(); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = markerMaker('hotel', [-87.641, 41.895])
marker.addTo(map)

// new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map)
