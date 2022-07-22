/*  PROBLEMA 3

Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.
Caso de prueba:
const input = 6;
Result: `720`

*/

function factorial(n) {
  let sum = 6;
  for (let i = n - 1; i >= 1; i--) {
    sum = sum * i;
  }
  return sum;
}

const input = 6;
console.log(factorial(input));
