"use strict";
console.log("Hola TypeScript con Platzi!");
//Number
//Explicito
var phone;
phone = 1;
phone = 57280035;
//phone = 'hola'; //Error por tpo de dato
//Inferido
var phonNumber = 57280035;
phonNumber = 123;
//phonNumber = true c
var hex = 0xf00d;
var binario = 5;
var octal = 484;
//Tipo: Boolean
//Tipado Explicito
var isPro;
isPro = true;
//isPro = 3333;  //Error por tpo de dato
//Inferido
var isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error por tpo de dato 
//Strings
var username = 'felipepugas';
username = "Luis";
//username = true; //Error por tpo de dato
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info: \n    username: " + username + "\n    firstName: " + (username + ' Aviles') + "\n    phone: " + isPro + "\n";
console.log('userInfo', userInfo);
