/*
Una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false
*/

function validar(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad);
}

let objeto = {
  marca: "logitech",
  tipo: "mouse",
  modelo: "G502 HERO",
  color: "negro",
};
let propiedad = "color";

console.log(validar(objeto, propiedad));
