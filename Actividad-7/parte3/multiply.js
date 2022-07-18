/*
Escriba una función llamada multiply que acepte dos parámetros. 
Si a la función se le pasan ambos parámetros:
- debería devolver el producto de los dos.
Si a la función solo se le pasa un parámetro:
- debería devolver una función a la que luego se le puede pasar otro parámetro para devolver el product.
*/

function multiply(a, b) {
  if (a != 0 && b == 0) {
    return pasarParametro(b) * a;
  } else if (a == 0 && b != 0) {
    return pasarParametro(a) * b;
  } else if (a != 0 && b != 0) {
    return a * b;
  }
}

function pasarParametro(x) {
  while (x == 0) {
    x = Number(prompt("Dame un numero que no sea cero."));
  }
  return x;
}

let a = Number(prompt("Dame un numero"));
let b = Number(prompt("Dame otro numero"));

let r = multiply(a, b);
alert(r);
console.log(r);
