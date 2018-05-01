const mapboxgl = require('mapbox-gl')

// const markerDomEl = document.createElement(); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

let markerMaker = function(type, coords) {
    let marker = document.createElement('div');
    marker.style.width = "32px";
    marker.style.height = "39px";
    if (type === 'activity') {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    } else if ( type === 'hotel') {
        marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    } else {
        marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }
    return new mapboxgl.Marker(marker).setLngLat(coords)
}

module.exports = markerMaker
