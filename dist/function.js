"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usamos TS, definimos tipos para parametros
function createPictures(title, date, size) {
    // Se crea la fotografia
    console.log('Create Picture using', title, date, size);
}
createPictures('My Bithday', '2020-03-10', '100x100');
// Parametros Opcionales
function createPictures2(title, date, size) {
    // Se crea la fotografia
    console.log('Create Picture using', title, date, size);
}
createPictures2('Colombia Trip', '2020-03-10', '100x100');
createPictures2('Colombia Trip', '2020-03-10');
createPictures2('Colombia Trip');
// Flat Array Function
var createPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
var picture = createPic('Pugas session', '2020-03-10', '100x100');
console.log('picture', picture);
//Tipo de retorno con TypeScript
function handleError(code, message) {
    //Pocesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurrio un error';
    }
}
try {
    var result = handleError(200, 'ok');
    console.log('result', result);
    result = handleError(400, 'error');
    console.log('result', result);
    console.log('PASE');
}
catch (error) {
    console.log("Entre al error");
}
