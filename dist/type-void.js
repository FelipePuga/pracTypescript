"use strict";
// Void
// Tipo expilcito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firsName);
}
showInfo({ id: 1, username: 'fpt01', firstName: 'Felipe' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'fpt01', firstName: 'Felipe' });
// tipo void, como tipo de dato en variable
var unusable;
//unusable = null; //Error por que en el archivo de configuracion tenemos "strict": true, /* Enable all strict type-checking options. */
unusable = undefined;
// Tipo:Never
// Representa el tipo de valor que nunca ocurre -> Funciones que lanzan excepciones -> Funciones que nunca retornan un valor
function handleError(code, message) {
    // Process your code here
    // Genramos un mensaje
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Foud');
}
catch (error) {
}
function sunNumbers(limit) {
    var suma = 0;
    while (true) {
        suma++;
        console.log(suma);
    }
    // return sum;
}
sunNumbers(10);
// ciclo infinito, nunca termina
