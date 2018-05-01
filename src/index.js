const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken = "pk.eyJ1IjoiZWd1bzEiLCJhIjoiY2pnbzMyeTNnMGhkcTJxbnkyYmFpaWkyciJ9.Sxwi5wbn1DbvXsH5w9e1lw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.639, 41.8954],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});