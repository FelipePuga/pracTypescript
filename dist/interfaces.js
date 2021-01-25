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
function generatePicture(config) {
    var pic = {
        title: 'Default', date: '2020-03'
    };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('pictures', picture);
picture = generatePicture({ title: 'TravelPic' });
console.log('pictures', picture);
picture = generatePicture({ title: 'TravelPic', date: '2021-05' });
console.log('pictures', picture);
var user;
user = { id: 10, username: 'fpt01', isPro: true };
console.log('user', user);
user.username = 'paparazzi';
// user.id = 20; // Error de compilacion
console.log('user', user);
