// alert("Good morining to the World")
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'map', // container id
    // style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: 'https://tiles.openfreemap.org/styles/liberty', 
    center: [0.1276,51.5072], // starting position [lng, lat]  51.5072° N, 0.1276° W
    zoom: 10 // starting zoom
});