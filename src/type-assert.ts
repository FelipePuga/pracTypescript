export = {};
// <tipo> // Angle Bracket syntax
let username: any;
username = 'fpt01rrrrrr';

//tenemos una cadena, TS confía en mí
let message: string = (<string>username).length > 5 ?
                       `Welcome ${username}`:
                       'Username is too short';

console.log('message', message);


let usernameWithId: any = 'fpt01 1';
// Como obtener el username?

username = (<string>usernameWithId).substring(0, 10);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ?
        `Welcome ${username}`:
        'Username is too short';

let helloUSer: any;
helloUSer = 'hello paparazi';
username = (helloUSer as string).substring(6);
console.log(username);