// Funciones en TypeScript
// Los parametros en las funciones son tipados
// Se pueden definir parámetros opcionales
// El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos 

// Crear un fotgrafia
//function createPictures(title, date, size){}

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usamos TS, definimos tipos para parametros
function createPictures(title: string, date: string, size: SquareSize){
    // Se crea la fotografia
    console.log('Create Picture using', title, date, size);
}

createPictures('My Bithday', '2020-03-10', '100x100');

// Parametros Opcionales
function createPictures2(title?: string, date?: string, size?: SquareSize){
    // Se crea la fotografia
    console.log('Create Picture using', title, date, size);
}

createPictures2('Colombia Trip', '2020-03-10', '100x100');
createPictures2('Colombia Trip', '2020-03-10');
createPictures2('Colombia Trip');

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object =>{

    return {title, date, size };

}

const picture = createPic('Pugas session', '2020-03-10', '100x100');
console.log('picture', picture);