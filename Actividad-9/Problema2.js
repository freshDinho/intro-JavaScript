/*  PROBLEMA 2

Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.
const input = [12, 46, 32, 64];
Resultado esperado:
{ mean: 38.5, median: 32 }

*/

function obtenerMedia(array) {
  const initialValue = 0;
  const sumaArreglo = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const mean = sumaArreglo / array.length;
  return mean;
}

function ordenarArray(array) {
  let ArrayOrdenado = array.sort(function (a, b) {
    return a - b;
  });
  return ArrayOrdenado;
}

function obtenerMediana(array) {
  //   console.log("---------------");
  //   for (let i = 0; i < array.length; i++)
  //     console.log(`array[${i}] = ${array[i]}`);
  //   console.log("---------------");
  let arreglo = [];
  let arrayOrdenado = ordenarArray(array);
  //   console.log(arrayOrdenado);
  //   console.log("---------------");
  //   for (let i = 0; i < arrayOrdenado.length; i++)
  //     console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
  //   console.log("---------------");
  let contadorMediana = Math.trunc(arrayOrdenado.length / 2);
  //   console.log("arrayOrdenado.length: " + arrayOrdenado.length);
  //   console.log("contadorMediana: " + contadorMediana);
  //   console.log(` Tamaño-array: ${arrayOrdenado.length}`);

  if (arrayOrdenado.length % 2 == 0) {
    //Es par
    console.log(
      "<-----------------------distribucion sesgada--------------------------->"
    );
    for (let i = 0; i < contadorMediana - 1; i++) {
      //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
      arreglo[i] = arrayOrdenado[i];
    }
    //   console.log("---------------");

    for (let i = arrayOrdenado.length - 1; i > contadorMediana; i--) {
      //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
      arreglo[i] = arrayOrdenado[i];
    }
    //   console.log("---------------");

    let indexVacio, indexVacio2;
    let var_i, var_j;

    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == undefined) {
        arreglo[i] = `vacio${i}`;
        var_i = i;
        for (let j = i; j < arreglo.length; j++) {
          if (arreglo[j] == undefined) {
            arreglo[j] = `vacio${j}`;
            var_j = j;
          }
        }
      }
      // console.log(`arreglo[${i}] = ${arreglo[i]}`);
    }

    //   console.log(`i:${var_i} j:${var_j}`);

    let CreadorFrase = [arreglo[var_i], arreglo[var_j]];

    //   console.log(CreadorFrase);

    indexVacio = arreglo.indexOf(CreadorFrase[0]);
    indexVacio2 = arreglo.indexOf(CreadorFrase[1]);

    //   console.log(indexVacio, indexVacio2);

    let valor1, valor2;
    for (let i = 0; i < arrayOrdenado.length; i++) {
      if (i == indexVacio) {
        //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
        valor1 = arrayOrdenado[i];
      }
      if (i == indexVacio2) {
        //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
        valor2 = arrayOrdenado[i];
      }
    }

    //   console.log(`valor1:${valor1} valor2:${valor2}`);

    let media = (valor1 + valor2) / 2;

    //   console.log("media:" + media);

    let mediana = media;

    return mediana;
  } else {
    //impar
    console.log(
      "<-----------------------distribucion normal--------------------------->"
    );
    for (let i = 0; i < contadorMediana; i++) {
      //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
      arreglo[i] = arrayOrdenado[i];
    }
    // console.log("---------------");

    for (let i = arrayOrdenado.length - 1; i > contadorMediana; i--) {
      //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
      arreglo[i] = arrayOrdenado[i];
    }
    // console.log("---------------");

    let indexVacio;

    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] == undefined) {
        arreglo[i] = `vacio`;
      }
      // console.log(`arreglo[${i}] = ${arreglo[i]}`);
    }

    indexVacio = arreglo.indexOf("vacio");

    // console.log("indexVacio:" + indexVacio);

    let valor;
    for (let i = 0; i < arrayOrdenado.length; i++) {
      if (i == indexVacio) {
        //   console.log(`arrayOrdenado[${i}] = ${arrayOrdenado[i]}`);
        valor = arrayOrdenado[i];
      }
    }

    // console.log(`valor:${valor}`);

    let mediana = valor;

    return mediana;
  }
  //Termina funcion
}

//FUNCIONA CON CUALQUIER DISTRIBUCION SESGADA O NORMAL
const input = [12, 46, 32, 64]; //distribucion sesgada
// const input = [2, 3, 3, 5, 8, 10, 11]; //distribucion normal
// const input = [2, 2, 3, 3, 5, 7, 8, 130]; //distribucion sesgada

const Calculos = { media: obtenerMedia(input), mediana: obtenerMediana(input) };
console.log(Calculos);
