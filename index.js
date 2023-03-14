// Import stylesheets
import './style.css';

const L = require("leaflet");

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<div id="map"></div>`;

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon2 = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);