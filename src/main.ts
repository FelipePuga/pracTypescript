console.log("Hola TypeScript con Platzi!");

//Number
//Explicito
let phone: number;
phone = 1;
phone = 57280035;
//phone = 'hola'; //Error por tpo de dato

//Inferido
let phonNumber = 57280035;
phonNumber = 123
//phonNumber = true c

let hex: number = 0xf00d;
let binario : number = 0b101;
let octal: number = 0o744;

//Tipo: Boolean
//Tipado Explicito
let isPro: boolean;
isPro = true;
//isPro = 3333;  //Error por tpo de dato

//Inferido
let isUserPro = false;
    isUserPro = true
    //isUserPro = 10; //Error por tpo de dato 


//Strings
let username : string = 'felipepugas';
username = "Luis";
//username = true; //Error por tpo de dato

// Template String
// Uso de back-tick `

let userInfo: string;
userInfo = `
    User Info: 
    username: ${username}
    firstName: ${username + ' Aviles'}
    phone: ${isPro}
`;

console.log('userInfo', userInfo);







   