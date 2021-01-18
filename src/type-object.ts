//Tipo:object

// * object es el tipo de dato que representa un valor primitivo
// * Es el tipo para variable que no sea number, string, boolean, null, undefined, etc.
/*
    Object vs object
    * Object: instancia de la clase Object de JavaScript
    *object: tipo para valores no primitivos

    Con este tipo no se puede acceder a las propiedades del objeto
*/

let user: object;
user = {};
user ={
    id: 1,
    username: 'paparatzzi',
    firstName: 'Pablo',
    isPro: true
};

console.log('user', user);
// Object vs object(Clase JS vs Typescript)
//console.log('user', user.username);
const myObject ={
    id: 1,
    username: 'paparatzzi',
    firstName: 'Pablo',
    isPro: true
};

const isInstance = myObject instanceof Object;
console.log('isInstance', isInstance); // Clase Object de JavaScript
console.log('user', myObject.username);