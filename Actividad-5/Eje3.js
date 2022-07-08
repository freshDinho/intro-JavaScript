let array = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for (let i = 0; i < array.length; i++) {
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array[i]);
}
