/*
Verifica si la propiedad name se encuentra dentro del siguiente objeto:
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

function BuscarPropiedadObjeto(propiedad) {
  const array = Object.keys(student); //[ 'name', 'sclass', 'rollno' ]
  for (let i = 0; i < array.length; i++) {
    if (array[i] == propiedad) {
      return true;
    } else if (i == array.length - 1) {
      return false;
    }
  }
}

let x = BuscarPropiedadObjeto("name");

if (x == true) {
  console.log("Se encontro la propiedad");
} else if (x == false) {
  console.log("No se encontro la propiedad");
}
