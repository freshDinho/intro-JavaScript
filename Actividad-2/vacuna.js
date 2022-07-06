let añoActual = 2022; //agregar funcion date para el añoActual.
let añoNacimiento = 1990;
let edad = añoActual - añoNacimiento;
// let edad = 29;
let embarazada = true;
let semanaGestacion = 10;
let residenciaNorte = true; // agregar array.
let vacuna = false;

if (
  edad >= 18 &&
  embarazada == true &&
  residenciaNorte == true &&
  semanaGestacion >= 9
) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Embarazadas");
} else if (edad >= 18 && embarazada == false && residenciaNorte == true) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Jovenes");
} else if (edad >= 30 && embarazada == false && residenciaNorte == true) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Adultos");
} else {
  console.log("No Puedes Vacunarte");
}
