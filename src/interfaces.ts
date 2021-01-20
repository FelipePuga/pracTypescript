export {};
// Entendiendo las Interfaces

// Las interfaces en TypeScript constituyen una forma poderosa de definir "contratos"
// tanto para tu proyecto, como para el código externo del mismo


// Funcion para mostrar una fotografia

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Pictures{
    title: string;
    date: string;
    orientation: PhotoOrientation

}
function showPictures(pictures:Pictures){
    console.log(`[tilte: ${pictures.title},
                 date: ${pictures.date}, 
                 orientacion: ${pictures.orientation}]`);

}

let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPictures(myPic);
showPictures({
        title: 'Test title',
        date: '2020-03',
        orientation: PhotoOrientation.Portrait,
        // extra: 'test' // Error
});

