"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuple
// Las tuplas permiten expresar un arreglo con número fijo de elementos
// Los tipos de datos son conocidos
// Los tipo de datos son conocidos
// [1, 'user']
var user;
user = [1, 'fpt01'];
console.log('user', user);
console.log('username', user[1]);
console.log('usernamelength', user[1].length);
console.log('id', user[0]);
// Tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'paparatzzi', true];
console.log('userInfo', userInfo);
// Arreglo de Tuplas
var array = [];
array.push([1, 'fpt01']); // 0
array.push([2, 'paparazzi']); // 1
array.push([3, 'lensQueen']); // 2
console.log('Array', array);
// Uso de funciones Array
//lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('Array', array);
