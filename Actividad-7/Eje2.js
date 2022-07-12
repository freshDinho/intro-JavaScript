const numbers = [1, 2, 3, 4, 10, 11];
function sumaElementos(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(`numbers[${i}] = ${numbers[i]}`);
    sum += numbers[i];
  }

  return sum;
}

console.log(sumaElementos(numbers));
