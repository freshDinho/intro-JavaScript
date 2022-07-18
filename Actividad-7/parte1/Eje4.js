let text = "hola mundo como estan";
let word = "o";

function ocurrencias(cadena, letra) {
  let ocurrencias = 0;
  const array = cadena.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] == letra) {
      console.log(`${array[i]} = ${letra} <--`);
      ocurrencias++;
    } else {
      console.log(`${array[i]} = ${letra}`);
    }
  }
  return ocurrencias;
}

console.log("ocurrencias: " + ocurrencias(text, word));
