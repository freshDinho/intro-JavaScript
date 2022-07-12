/*
 *split: separa el array
 *join: convierte el array a string
 *reverse: acomoda el array al revez
 */
function palindromo(word) {
  const fraseArray = word.split("").join("-");
  const fraseArrayReversed = word.split("").reverse().join("-");
  console.log(fraseArray);
  console.log(fraseArrayReversed);
  if (fraseArray == fraseArrayReversed) {
    console.log("Son iguales");
  } else {
    console.log("Son diferentes");
  }
}

let word1 = "madam";
let word2 = "computadora";

palindromo(word1);
palindromo(word2);
