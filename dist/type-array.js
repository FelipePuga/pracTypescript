"use strict";
// Array
// Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjuntode valores
// Usa dosnotaciones:[] y Array<tipo>
// Corchetes []
// Tipo expilicito
var users;
users = ['Federico', 'Luis', 'Pedro'];
// user = [1, true, 'test']; // Error
// Tipo Inferido
var otherUsers = ['Federico', 'Luis', 'Pedro'];
//otherUsers = [1, true, 'test']; // Error
// Array<TIPO>
var picturesTitles;
picturesTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores em un Array
console.log('first user', users[0]);
console.log('first title', picturesTitles[0]);
// Prppiedades en Array
console.log('users.length', users.length);
users.push('aPlatziUser');
users.sort();
console.log('users', users);
