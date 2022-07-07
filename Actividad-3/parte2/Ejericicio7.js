let num, num2, num3;

num = Number(prompt("Dame un numero"));
num2 = Number(prompt("Dame otro numero"));
num3 = Number(prompt("Dame otro numero"));

if (num > num2 && num > num3) {
  console.log(num + "es el mayor");
} else if (num2 > num && num2 > num3) {
  console.log(num2 + "es el mayor");
} else if (num3 > num && num3 > num2) {
  console.log(num3 + "es el mayor");
} else if (num == num2 && num2 == num3) {
  console.log("Todos los numeros son iguales en:" + num3);
} else if (num == num2) {
  console.log(num + "es igual a" + num2);
} else if (num2 == num3) {
  console.log(num2 + "es igual a" + num3);
} else if (num3 == num) {
  console.log(num3 + "es igual a" + num);
}
