//  ------------------ NULL ------------------
/*Tipo:Null y Undefined

En Typescript, ambos "valores"
tienen sus respectivos tipos:

null
undefined

Tipo:Null y Undefined
Como subtipos

* Null y Undefined se pueden asumir como subtipos de los otros tipo de datos
* Significa que se puede asignar null u undefined a una variable de tipo string, por ejemplo
*/
// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // --> Error

// Inferido
let otherVariable = null;   // --> any
otherVariable = 'test';

console.log('nullVariable : ', nullVariable);
console.log('otherVariable : ', otherVariable);

//  ----------------- UNDEFINED -----------------
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // --> Error

let otherUndefined = undefined;     // --> any
otherUndefined = 1;

console.log('undefinedVariable : ', undefinedVariable);
console.log('otherUndefined : ', otherUndefined);

//  ------- NULL y UNDEFINED: como subtipos -------
// Tipo: Null y Undefined
// La Opción --stringNullChecks
// * Solo permite asignar null y undefined a una variable de tipo any o sus tipos respectivos
// * Ayuda a evitar errores comunes en programación de apps en el ámbito JavaScript

// --stringNullChecks


/*
 * tsc --watch src/type-null-undefined.ts --strictNullChecks
 * Podemos ver las lineas del flag --strictNullChecks: para ver el numero de linea del error
 * Archivo tsconfig.json "strictNullChecks": true
 */
let albumName: string;
// albumName = null;
// albumName = undefined;
