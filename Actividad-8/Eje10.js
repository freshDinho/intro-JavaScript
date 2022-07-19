/*
* Hacer una función para que reciba ese arreglo de objetos
* y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
* al String "name" para que devuelva algo así:
? ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
*/

var simpleExercise = [
  { a: 11, b: 224, name: "M48 Bulldog" },
  { a: 23, b: 56, name: "Object 140" },
  { a: 32, b: 75, name: "T57 Heavy" },
];

function myFunction(array) {
  let result = [];
  let sum;
  let nombre;
  for (let i = 0; i < array.length; i++) {
    sum = array[i].a + array[i].b;
    nombre = array[i].name;
    result[i] = sum + " " + nombre;
  }
  let string = "[" + '"' + result.join("-=-") + '"' + "]";
  return string;
}
console.log(myFunction(simpleExercise));
