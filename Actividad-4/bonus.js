//? Bonus: Generar dos números aleatorios: uno de un dígito, otro de máximo 3 dígitos,
//? preguntar al usuario el resultado de la multiplicación de los dos números. Si contesta correctamente saldrá el mensaje de ganaste, si no le realizará
//? de nuevo la pregunta pero con dos números diferentes.
let usuario = 0;
let num1 = 0;
let num2 = 0;
let multi = 0;

do {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 999);
  multi = num1 * num2;
  alert(num1 + "x" + num2 + "=");
  usuario = Number(prompt("Cuando es el resultado de la multiplicación: "));
} while (usuario != multi);

console.log("Ganaste!!");
