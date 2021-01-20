"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Entendiendo las Interfaces
// Las interfaces en TypeScript constituyen una forma poderosa de definir "contratos"
// tanto para tu proyecto, como para el código externo del mismo
// Funcion para mostrar una fotografia
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPictures(pictures) {
    console.log("[tilte: " + pictures.title + ",\n                 date: " + pictures.date + ", \n                 orientacion: " + pictures.orientation + "]");
}
var myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPictures(myPic);
showPictures({
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
});
