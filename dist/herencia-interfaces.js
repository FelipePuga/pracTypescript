"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Extendiendo interfaces
// Las interfaces pueden extenderse unas de otras. Esto permite 
// copiar los miembros ya definidos en un interfaz a otra, ganando flexibilidad y reusabilidad 
// de componenetes
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
