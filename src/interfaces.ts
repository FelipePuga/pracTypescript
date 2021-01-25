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

// Interfaces Propiedades Opcionales

// No todas las propiedades de una interfaz podrían ser requeridas
// Establecemos una propiedad como opcional con el simbolo (?) despues del nombre

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig){
    const pic = {
        title: 'Default', date: '2020-03'
    };
    if(config.title){
        pic.title = config.title;

    }
    if(config.date){
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('pictures', picture);
picture = generatePicture({title: 'TravelPic'});
console.log('pictures', picture);
picture = generatePicture({title: 'TravelPic', date:'2021-05'});
console.log('pictures', picture);

// Interfaces Propiedades de Solo Lectura
// Algunas propiedades de la interfaz podrían no ser modificables una vez creado el objeto.
// Esto es posible usando readonly antes del nombre de propiedad.

// Interfaz: Usuario
interface User {
    readonly id: number; // Solo lectura
    username: String;
    isPro: boolean;
}

let user: User;
user = {id:10, username: 'fpt01', isPro: true};
console.log('user', user);
user.username = 'paparazzi';
// user.id = 20; // Error de compilacion
console.log('user', user);

