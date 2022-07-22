const input = [12, 32, 46, 64];
input.sort((a, b) => a - b); //[ 12, 32, 46, 64 ]
let value1, value2;
for (let i = 0; i < input.length; i++) {
  if (input[i] > 38.5) {
    value1 = input[i];
    break;
  }
}
for (let i = input.length; i > 0; i--) {
  if (input[i] < 38.5) {
    value2 = input[i];
    break;
  }
}

console.log(value1, value2);
