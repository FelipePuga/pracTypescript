export {};
// Union de Tipos
// En TypeScript se puede definir una variable con múltiples tipos de datos: Union Type
// Se usa el simbolo de pipe("|") entre los tipos

/*
// 10, '10'
let idUser: number | string;
idUser  = 10;
idUser  = '10';


// Buscar username dado un ID
function getUSernameById(id: number | string){
    // logica de negocio, find the user
    return 'fpt01';

}

getUSernameById(20);
getUSernameById('20');
*/
// Alias de Tipos
// TypeScript permite crear un alias como nuevo nombre para tipos
// El alias se puede aplicar tambén a un conjunto o combinación de tipos
// Se usa la palabra reservada type

type IdUser = number | string;
type Username = string;

let idUser: IdUser;
idUser  = 10;
idUser  = '10';


// Buscar username dado un ID
function getUSernameById(id: IdUser): Username{
    // logica de negocio, find the user
    return 'fpt01';

}

getUSernameById(20);
getUSernameById('20');

// Tipos Literales
// Una variable con un tipo literal puede contener únicamente una cadena del conjunto
// Se usan cadenas como "tipos", combinados con el simbolo de pipe ('|') entre ellos

// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; // No esta asignada por lo que nos envia un error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';