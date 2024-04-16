export const PI = Math.PI;

export let usuario="Alex";


//TODO DEFAULT 
//* Quiere decir que cuando se usa default todo el proceso se automatiza

// No se puede usar el default con una const o let
// export default const password= "123";
const password = "123";
// export default password;

const hello = () => console.log("Hola")


//TODOS Solo puedes crear profile a las funciones  las clases

export default function saludar(){
    console.log("Hola modulos +ES6")
}



export class Saludar{
    constructor(){
       console.log("Hola Clases +ES6") 
    }
}

//! SOLO PUEDES USAR UNA UNICA VES EL DEFAULT

// export default function saludar2(){
//     console.log("Hola modulos +ES6")
//}

