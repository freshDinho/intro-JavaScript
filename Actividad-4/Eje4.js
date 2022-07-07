let limite = 50;
let inicio = 1;

console.log("Del " + inicio + " hasta el " + '"' + limite + '"');
for (let inicio = 1; inicio <= limite; inicio++) {
  if (!(inicio % 2 == 0)) {
    console.log(inicio);
  }
}
