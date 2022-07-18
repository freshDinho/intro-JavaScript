let sentence = "Hola mundo";
let word = "mundo";

let resultado;

function buscadorPalabraDada(oracion, palabra) {
  const array = oracion.split(" "); // funcion split --> const array = ["Hola", "mundo"];
  let status = false;
  let index = array.indexOf(palabra); //Busca palabra en el array
  if (palabra == " ") {
    status = false;
    console.log(`El caracter [${palabra}] no es valido`);
  } else if (index != -1) {
    // Si indexOf regresa -1 entonces no encontro el elemento
    status = true;
    console.log(
      `La palabra [${palabra}] se encuentra en el index [${index}] del array [${array.join(
        " "
      )}]`
    );
    for (let i = 0; i < array.length; i++) {
      console.log(`Array[${i}] = ['${array[i]}']`);
    }
  } else if (index == -1) {
    status = false;
    console.log(
      `La palabra [${palabra}] no se encuentra en el array [${array.join(" ")}]`
    );
    for (let i = 0; i < array.length; i++) {
      console.log(`Array[${i}] = ['${array[i]}']`);
    }
  }
  return status;
}

resultado = buscadorPalabraDada(sentence, word);

console.log("resultado: " + resultado);
