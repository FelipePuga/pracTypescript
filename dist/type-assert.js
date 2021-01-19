"use strict";
// <tipo> // Angle Bracket syntax
var username;
username = 'fpt01rrrrrr';
//tenemos una cadena, TS confía en mí
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var usernameWithId = 'fpt01 1';
// Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUSer;
helloUSer = 'hello paparazi';
username = helloUSer.substring(6);
console.log(username);
module.exports = {};
