const arreglo = [45, 56, 32, 98, 1000, 5, 23];

function ElementoMayorArreglo(array) {
  const arrayOrdenado = array.sort(function (a, b) {
    return b - a;
  });
  return arrayOrdenado[0];
}

console.log("El numero mayor es:" + ElementoMayorArreglo(arreglo));
