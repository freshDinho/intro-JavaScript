let limite = 0;
let inicio = 1;
limite = Number(prompt("Dame un numero:"));

console.log("Del " + inicio + " hasta el " + '"' + limite + '"');
do {
  if (inicio % 5 == 0) {
    console.log(inicio + " es multiplo de 5.");
  }
  inicio++;
} while (inicio <= limite);
