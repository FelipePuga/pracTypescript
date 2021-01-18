"use strict";
// Tipo explicito
// Any admite cualquier tipod e dato
var idUSer;
idUSer = 1; //Number
idUSer = '1'; //string
console.log('idUSer', idUSer);
// Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprise = 'Hola typescript';
// surprise.sayHello(); // Error
var res = surprise.substring(6); // Error
console.log('res', res);
