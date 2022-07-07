let num, num2;

num = Number(prompt("Dame un numero"));
num2 = Number(prompt("Dame otro numero"));

if (num > num2) {
  console.log(num + "es mayor que" + num2);
} else if (num2 > num) {
  console.log(num2 + " es mayor que" + num);
}
