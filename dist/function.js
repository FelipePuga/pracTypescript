"use strict";
// Funciones en TypeScript
// Los parametros en las funciones son tipados
// Se pueden definir parámetros opcionales
// El tipo de retorno puede ser un tipo básico, enum, alias, tipo literal o una combinación de ellos 
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
