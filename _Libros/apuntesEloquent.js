//vinculaciones o variables: atrapa y mantiene valores
let atrapado = 5 * 5;
console.log(atrapado); // 25

let diez = 10;
console.log(diez * diez); // 100

//vinculacion vacia
let vinculacion; // undefined
typeof vinculacion;

// Const define una vinculación constante, que apunta al mismo valor por el tiempo que viva.

var nombre = "Ayda"; // var =  variable se usab en el 2015
const saludo = "Hola ";
console.log(saludo + nombre);
// Hola Ayda
/* 
* Lista palabras reservadas:
? break case catch class const continue debugger default
? delete do else enum export extends false finally for
? function if implements import interface in instanceof let
? new package private protected public return static super
? switch this throw true try typeof var void while with yield
*/

console.log(Math.max(2, 4, 5, 6));
console.log(Math.min(2, 4) + 100);

/*
* La funcion Number(); 
? convierte un valor a un numero
* La funcion prompt();
? Regresa un valor de string
* otras funciones como String(); o Boolean();
*/

let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " + elNumero * elNumero);
} else {
  console.log("Ey. Por qué no me diste un número?");
}

/*
La función Number.isNaN es una función estándar de JavaScript que retorna true solo si el argumento que se le da es NaN. Resulta que la función Number devuelve NaN cuando le pasas un string que no representa un número válido. Por lo tanto, la condición se traduce a “a menos que elNumero no sea un número, haz esto”.
*/

let string = "hola";
true;
let string2 = "";
false;

!string;
false;

string2;
false;

!string2;
true;

//? Ciclo for
//? for(contador ; ciclo while; actualiza el ciclo)
//? cada vuelta se le conoce como iteracion
for (let numero = 0; numero <= 12; numero = numero + 2) {
  console.log(numero);
}
//? break: rompe el ciclo
//? continue: salta una inteacion
