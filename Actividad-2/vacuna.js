const residencia = [
  //Estados norte
  "Baja California",
  "Sonora",
  "Chihuahua",
  "Coahuila",
  "Nuevo León",
  "Tamaulipas",
  //Demas estados
  "Aguascalientes",
  "BajaCaliforniaSur",
  "Campeche",
  "Colima",
  "Chiapas",
  "Durango",
  "DistritoFederal",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "QuintanaRoo",
  "SanLuisPotosí",
  "Sinaloa",
  "Tabasco",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

const d = new Date();

let añoActual = d.getFullYear();
//Datos del Usuario
let añoNacimiento = 2001;
let embarazada = false;
let semanaGestacion = 10;
let residenciaActual = residencia[31];
let index = residencia.indexOf("Zacatecas");

let vacuna = false;
let edad = añoActual - añoNacimiento;
// let length = residencia.length;
// console.log(length);

if (embarazada == false) {
  semanaGestacion = 0;
}

console.log("AñoActual:" + añoActual);
console.log("Edad:" + edad);
console.log("Embarazada:" + embarazada);
console.log("Semana de Gestacion:" + semanaGestacion);
console.log("Residencia:" + residenciaActual);
console.log("index:" + index);
// console.log("lenght array:" + length);

if (edad >= 18 && embarazada == true && semanaGestacion >= 9) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Embarazadas");
} else if (edad >= 30 && embarazada == false) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Adultos");
} else if (
  edad >= 18 &&
  edad < 30 &&
  embarazada == false &&
  (residenciaActual == residencia[0] ||
    residenciaActual == residencia[1] ||
    residenciaActual == residencia[2] ||
    residenciaActual == residencia[3] ||
    residenciaActual == residencia[4] ||
    residenciaActual == residencia[5])
) {
  vacuna = true;
  console.log("Puedes Vacunarte, grupo: Jovenes");
} else {
  console.log("No Puedes Vacunarte");
}
