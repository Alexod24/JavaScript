
funcionglobal();

function funcionglobal(){
    console.log("Hola mundo")
}

funcionglobal();

// Funcion global dentro de una variable


const funcionglocal = function(){

    console.log("Hola mundo 2")

}

funcionglocal();

// =================================================
//JavaScript: 11. Arreglos [Arrays] - #jonmircha
//En un arrelgo la posicion siempre empieza por le numero 0, 

new Number()

const array1 =[];
const array2 = [1,true,'Hola',["A","B","C",[1,2,3]]]
console.log(array1);
console.log(array2);
console.log(array2.length);
//Si solo deseas imprimir la palabra hola puedes hacerlo de esta forma
console.log(array2[2])

//Con esto se puede imprimir el numero 1 del array que esta dentro de otra array que a su ver tambien esta dentro de un array
console.log(array2[3][3][0])

//Nueva forma de declarar arrays con .off
const array3 = Array.of("X","Y","Z",1,2,3);
console.log(array3);

//Imprime 100 veces false
const array4 = Array(100).fill(false);
console.log(array4) 

//Ya nadie usa esta forma, ha esta cayendo en desuso por los programadores (e,f) no estan mal sino que ya no se suele utilizar
const e = new Array();
console.log(e)

const f = new Array(1,2,3,true,false);
console.log(f);

//Con el metodo push agregamos un nuevo color y con el pop lo eliminamos

const colores = ["Rojo", "Verde","Azul"];
console.log(colores)

colores.push("Negro");
console.log(colores)

colores.pop();
console.log(colores);

//Foreach recibe funciones como callback que se va a ejecutar por cada elemento que tenga

colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`)

})


// =================================================
//JavaScript: 12. Objetos - #jonmircha

let objeto1 = new String("Hola");
console.log(objeto1);

//Al declarar tu objeto con const evitas que se utilize mas adelante
//Los objetos de un objeto a las variables se le van a lamar atributos/propiedades y a las funciones se les llama metodos

const objeto2 = {}
    console.log(objeto2);

const objeto3 = new Object();
    console.log(objeto3)

const alex = {
    nombre: "Alex",
    apellido: "OD",
    edad: 18,
    pasatiempos: ["Existir","Comer"],
    soltero: true,
    contacto:{
        email:"alex.od408@gmail.com",
        mobile:"960700355"
    },
    
    saludar:function(){
        console.log("Hola :)")
    },


    //Tambien podemos usar el This

    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, me puedes seguir como ${this.contacto.email} en Gmail`)
    }
}

//Otra forma de llamar a los atributos de una array con corchetes o con punto

console.log(alex);
console.log(alex["nombre"])
console.log(alex["apellido"])
console.log(alex["pasatiempos"][1])
console.log(alex.edad)
console.log(alex.contacto.mobile)
alex.saludar();
alex.decirMiNombre();

//Forma una lista de todos los arreglos y hasta funciones

console.log(Object.keys(alex));

//Con el value es mas especifico
console.log(Object.values(alex));

//El hasownProperty sirve para poder verificar si la propiedad mencionada existe en la tabla
console.log(alex.hasOwnProperty("nombre"));
console.log(alex.hasOwnProperty("saludo"));

// =================================================
// JavaScript: 13. Tipos de Operadores - #jonmircha
console.log("JavaScript: 13. Tipos de Operadores");
// Operadores aritmeticos: +-*/%()*/

let ecuacion = 5 + (5-2)*2;

console.log(ecuacion); 

/* == Operadores Relacionales 
<, >, >=, <=, ==, ===, !=, !== */

// obtendras falso porque 8 no es mayor que 9
console.log(8>9); 
// obtendras true porque 9 si es mayor que 8
console.log(9>8);

// == Operadores compuestos == 
console.log(9>=8);
console.log(8>=9 );

// = 1 igual es asignacion de variable
// == 2 iguales es comparacion de valores
// === 3 iguales es comparacion mas estria porque compara valor y tipo de dato
//console.log("Operadores con los 3 iguales ===")
console.log(7==7);
console.log("7"==7);
console.log("7"===7);

// Operadores de incremento y decremento que sirve para que una variable aumente la capacidad de controlar el flujo de 
// Estamos controlando los datos dentro de la variable i
let i=1;
// i = i+2;
// i -=2;

// operador unario, hay mucha diferencia en el orden pero como recomendacion primero usa la variable y luego el ++

i++;
i--;
++i;
--i;
console.log(i);

// Operadores logicos: 
// "! - Not(Lo que es verdadero lo vuelva falaso y viceversa)
// || - Or(Si una de las condiciones se cumple lo validara , si tengo dos solo basta que una sea correcta)
// && - and(Cuando tengo 2 o mas condiciones ambas tiene que cumplirse para que valide)
console.log(!true);
console.log(("9"==="9")||(9==="9"));
console.log(("9"==="9") && ("9"==="9"));

//? =================================================
//?    JavaScript: 14. Condicionales - #jonmircha
//? =================================================

console.log("JavaScript: 14. Condicionales");

//Que es una estructura de control? es aquel mecanismo que permite controlar el flujo de tu programacion

//* Estructuras condicionales:
//? Estructuras condicionales:
//! Estructuras condicionales:
//TODO Estructuras condicionales:
 
// If - Else

let edad = 20;
if(edad <= 17){
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad")
}
//TODO if- else if - else
// Dejame dormir - 0hrs - 5hrs 
// Buenos dias - 6hrs - 11hrs
// Buenas tardes 12hrs - 18hrs
// Buenas noches 19hrs - 23hrs

let hora = 25;
if (hora >= 0 & hora <=5){
    console.log("Dejame dormir miercoles");
}else if(hora >= 6 & hora <=11){
    console.log("Buenos dias causa");
}else if(hora >= 12 & hora <=18){
    console.log("Buenas tardes causa");
}else if(hora >= 19 & hora <=23){
    console.log("Buenas noches causa");
}else{
    console.log("Esa hora no existe oe tremenda llama jaja")
};

//TODO Operador Ternario(Condicion) ? verdadero : falsa 
//! Interesante

console.log("Operador Ternario");
let eresMayor = (edad >= 18)?"Eres mayor de edad": "Eres menor de dedad";
console.log(eresMayor)

//TODO Switch - case

// domingo - 0 
// Lunes - 1 
// martes - 2 
// Miercoles - 3
// Jueves - 4
// Viernes - 5 
// Sabado - 6

let dia = 5;

switch (dia) {
    case 0:
        console.log("Domingo")
    break;
    case 1:
        console.log("Lunes")
    break;
    case 2:
        console.log("Martes")
    break;
    case 3:
        console.log("Miercoles")
    break;
    case 4:
        console.log("Jueves")
    break;
    case 5:
        console.log("Viernes")
    break;
    case 6:
        console.log("Sabado")
    break;
    default:
     console.log("El dia no existe maldito imbecil jkeje")
     break;
}
//? =================================================
//?    JavaScript: 15. Ciclos (Loops) - #jonmircha
//? =================================================

//TODO Cada vuelta se le llama iteracion
//Este es un gran ejemplo de como funcion el While y el Do ya que el while primero 
//verifica si el numero es 10 y si no lo es va a imprimir +1 hasta llegar a 10
//mientras que do primero imprime y si cumple la condicion se sale de la iteracion 
//! Estas estructuras son cada ves menos usadas en Js
//TODO While - do - for

let contador = 0;
while (contador < 10){
    console.log(contador);
    contador++;
}

do {
    console.log("do while" + contador);
    contador++;
} while (contador < 10);

//TODO ciclo for
// for (inicializacion de variable; condicion;
// decremento o incremento ){
//     sentencias que ejecuta el for
//     sentencias que ejecuta el for
// }

for (let i= 0; i < 10; i++) {
    console.log("for " + i);
    
}

let numero = [10,20,30,40,50,60,70,80,90];
for (let i= 0; i < numero.length;i++){
    console.log(numero[i])
}

//Todo variantes del for - forin sirve para recorrer propiedades de un objeto(Imprime los datos de la lista)

const objeto = {
    nombre:"alex",
    apellido:"Od",
    edad:20
} 

for (const propiedad in objeto) {
    console.log(`Key:${propiedad}, Value:${propiedad}`)
   
}
for (const propiedad in objeto) {
    console.log(`Key:${propiedad}, Value:${alex[propiedad]}`)
   
}

//Todo variantes del for - forof sirve para imprimir listas( va a impirimir hola mudno letra por letra)

let cadena = "Hola mundo"

for (const elemento of numero) {
    console.log(elemento);
}

for (const caracter of cadena) {
    console.log(caracter);
}

//? =================================================
//?    JavaScript: 16. Manejo de Errores - #jonmircha
//? =================================================

//TODO trycatch - estructura de control al manejo de errores

try{
    console.log("En el try se agrega el codigo a evaluar")
    noExiste;
    console.log("Segundo mensaje en el try")

} catch (error){
    console.log("Catch, captura cualquier error surgido o lanzado en el try")
    console.log(error)

    
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")

}

//TODO Finally
//! Finally dato interesante
//*Utilice un ejemplo con try catch y entendi el valor de finally
//*En este caso para no repetir la funcion de cerrar el modal lo colocamos en finally
//*Ya que finally se ejecutara siempre ya sea try o catch quien se ejecute

try{
    const destructuracion = [1,2,3 ];

    let d1 = destructuracion[0],
        d2 = destructuracion[1],
        d3 = destructuracion[2]; 
    
        console.log(d6);
    console.log("Abrimos modal exitoso");
    
    
} catch (error){
    console.log("Abrimos modal error")

    
}finally{

          console.log("Cerrar modal");
}

//todo Saboteando con throw 
try {
    let tryerror="y";

//* Levanta un error y con el new error lo especificas     

    if(isNaN(tryerror)){
        throw new Error("El caracater introducido no es un Numero");

    }    
    console.log(tryerror*tryerror);
} catch(error){
    console.log(`Se produjo el siguiente error: ${error}`);

}

//? =================================================
//?    JavaScript: 17. break & continue - #jonmircha
//? =================================================

//TODO Break

const numerosbreak = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
for (let i=0; i < numerosbreak.length; i++){
    if (i===5){
        break;
    }
    console.log(numerosbreak[i]);
}

//* Break rompe el ciclo
//Se rompe el ciclo cuando se cumpla la condicion

//TODO Continue

const numerosbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
for (let i=0; i < numerosbreak.length; i++){
    if (i===5){
        continue;
    }
    console.log(numerosbreak[i]);
}

//* Continue Salta el ciclo
// Cuando llega al valor 5 se salta porque cumple el if pero sigue todo el ciclo


//const numerosbreak1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,"Hola mundo"];
//for (let i=0; i < numerosbreak.length; i++){
//    console.log(i);
//}  

//? =================================================
//?    JavaScript: 18. Destructuración - #jonmircha
//? =================================================

//todo SIN DESTRUCTURACION
        const destructuracion = [1,2,3,4 ];

        let uno = destructuracion[0],
            dos = destructuracion[1],
            tres = destructuracion[2], 
            cuatro = destructuracion[3];

        console.log(uno,dos,tres,cuatro);

        //*================================

        const vocalesd = ["a","b","c"];
        let primera = vocalesd[0],
            segundo = vocalesd[1],
            tercero = vocalesd[2];

        console.log(primera,segundo,tercero);

        //*================================





//todo CON DESTRUCTURACION
        const [one,two,three,four] = destructuracion;
        console.log(one,two,three,four);

        const [a,b,c] = vocalesd;
        console.log(a,b,c)

        //*================================

        const persona = {
            Nombre: "alex",
            Apellido: "od",
            Edad: 35,
        }
        //* Recordemos que las varaibles se tienen que llamar igual o sino 
        //* Tener en cuenta que el orden de las variables no afectara el resultado
        const {Nombre,Edad,Apellido} = persona;
        console.log(Nombre,Apellido,Edad);
        
            
        
//Ejemplo de Harvey 
//class Carro{

//}
//let aaa = new Carro() 
//console.log(typeof aaa)

// Azucar sintactico es el mejor termino al referirse lo que es poo en JS segun stackoverflow

//? =================================================
//?    JavaScript: 19. Objetos literales - #jonmircha
//? =================================================

    let nombre19 = "kEnAi",
        edad19 = 7;

    const perro19 = {
        nombre19:nombre19,
        edad19:edad19,
        ladrar:function(){
            console.log("Guau guau auuuuu")
        }
    }

    const perro20={
        nombre19:nombre19,
        edad19:edad19,
        ladrar:function(){
            console.logwe("Miau miauuu")
        }
    }

    console.log(perro19,perro20);


