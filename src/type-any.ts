// Tipo explicito
// Any admite cualquier tipod e dato
let idUSer: any;
idUSer = 1; //Number
idUSer = '1'; //string

console.log('idUSer', idUSer);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);

let surprise: any ='Hola typescript';
// surprise.sayHello(); // Error
const res = surprise.substring(6);  // Error
console.log('res', res);