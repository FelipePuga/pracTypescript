// Void


// Tipo expilcito


function showInfo(user: any): any{
    console.log('User Info', user.id, user.username, user.firsName);

}


showInfo( { id:1, username:'fpt01', firstName:'Felipe'} );


// Tipo inferido
function showFormattedInfo(user: any){
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `
    );

}

showFormattedInfo( { id:1, username:'fpt01', firstName:'Felipe'} );

// tipo void, como tipo de dato en variable
let unusable: void;
//unusable = null; //Error por que en el archivo de configuracion tenemos "strict": true, /* Enable all strict type-checking options. */
unusable = undefined;

// Tipo:Never
// Representa el tipo de valor que nunca ocurre -> Funciones que lanzan excepciones -> Funciones que nunca retornan un valor
function handleError(code: number, message: string): never{
    // Process your code here
    // Genramos un mensaje

    throw new Error(`${message}. Code: ${code}`);
}

try{
    handleError(404, 'Not Foud');
}catch(error){

}

function sunNumbers(limit: number): never{
    let suma = 0;
    while(true){
        suma++;
        console.log(suma);
    }
    // return sum;
}
    
sunNumbers(10);
// ciclo infinito, nunca termina
