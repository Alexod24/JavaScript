import saludar, {Saludar, PI,usuario} from "./constantes.js"
import{aritmetica as calculos} from "./aritmetica.js"

//TODO Solamente puedes usar un default una ves y llamarlo antes antes de los corchetes de forma independiente
//*Vamos a dar un alias a aritmetica

console.log("Hola modulo");
console.log(PI,usuario);

console.log(calculos.sumar(4,1));
console.log(calculos.restar(4,1));

//TODO DEFAULT 
//* Con solo llamarlo el nombre de la funcion aparece arriba en el import y lo autocompleta
saludar();
let saludo = new Saludar();
saludo;

//! Para hacer modulos en tu html tienes que usar el type

// import React, {Component } from 'react'

