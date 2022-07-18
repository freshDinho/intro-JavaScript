// Crea una funcion para calcular la sucesion Fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(x) {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  console.log(n1);
  console.log(n2);
  for (let i = 1; i <= x - 2; i++) {
    sum = n1 + n2;
    console.log(sum);
    n1 = n2;
    n2 = sum;
  }
}

fibonacci(10);
