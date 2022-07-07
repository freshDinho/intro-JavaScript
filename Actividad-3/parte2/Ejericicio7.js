let mayor = 0;
num1 = Number(prompt("Primer Numero"));
num2 = Number(prompt("Segundo Numero"));
num3 = Number(prompt("Tercero Numero"));
// let num1 = 2;
// let num2 = 1;
// let num3 = 2;
if (num1 > num2 && num1 > num3) {
  mayor = num1;
  if (num2 > num3) {
    console.log(`${mayor} > ${num2} > ${num3}`);
  } else if (num2 == num3) {
    console.log(`${mayor} > (${num2} == ${num3})`);
  } else {
    console.log(`${mayor} > ${num3} > ${num2}`);
  }
} else if (num2 > num1 && num2 > num3) {
  mayor = num2;
  if (num1 > num3) {
    console.log(`${mayor} > ${num1} > ${num3}`);
  } else if (num1 == num3) {
    console.log(`${mayor} > (${num1} == ${num3})`);
  } else {
    console.log(`${mayor} > ${num3} > ${num1}`);
  }
} else if (num3 > num1 && num3 > num2) {
  mayor = num3;
  if (num1 > num2) {
    console.log(`${mayor} > ${num1} > ${num2}`);
  } else if (num1 == num2) {
    console.log(`${mayor} > (${num1} == ${num2})`);
  } else {
    console.log(`${mayor} > ${num2} > ${num1}`);
  }
} else if (num1 > num2 && num1 == num3) {
  mayor = num1;
  console.log(`${mayor} se repite y ${mayor} > ${num2}`);
} else if (num2 > num3 && num2 == num1) {
  mayor = num2;
  console.log(`${mayor} se repite y ${mayor} > ${num3}`);
} else if (num3 > num1 && num2 == num3) {
  mayor = num3;
  console.log(`${mayor} se repite y ${mayor} > ${num1}`);
} else if (num1 == num2 && num2 == num3) {
  mayor = num1;
  console.log(`Todos los numeros son iguales y son ${mayor}`);
} else {
  console.log("Error:");
}

/*Casos:
----->No se repite
1-2-3
1-3-2
2-1-3
2-3-1
3-1-2
3-2-1
----->Se repite
1-2-2
2-2-1
2-1-2
----->Todo se repite
1-1-1
*/
