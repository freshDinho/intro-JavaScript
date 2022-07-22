let numero0 = document.getElementById("number0");
let numero1 = document.getElementById("number1");
let numero2 = document.getElementById("number2");
let numero3 = document.getElementById("number3");
let numero4 = document.getElementById("number4");
let numero5 = document.getElementById("number5");
let numero6 = document.getElementById("number6");
let numero7 = document.getElementById("number7");
let numero8 = document.getElementById("number8");
let numero9 = document.getElementById("number9");

let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let negativo = document.getElementById("negativo");
let point = document.getElementById("point");

let clear = document.getElementById("C");
let clearError = document.getElementById("CE");
let equal = document.getElementById("equal");
let borrar = document.getElementById("borrar");

let arregloDigitos = [0];
let i = 0;

let pantalla = document.getElementById("contenido-pantalla");

numero0.addEventListener("click", function () {
  arregloDigitos[i] = "0";
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero1.addEventListener("click", function () {
  arregloDigitos[i] = "1";
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero2.addEventListener("click", function () {
  arregloDigitos[i] = "2";
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero3.addEventListener("click", function () {
  arregloDigitos[i] = 3;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero4.addEventListener("click", function () {
  arregloDigitos[i] = 4;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero5.addEventListener("click", function () {
  arregloDigitos[i] = 5;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero6.addEventListener("click", function () {
  arregloDigitos[i] = 6;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero7.addEventListener("click", function () {
  arregloDigitos[i] = 7;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero8.addEventListener("click", function () {
  arregloDigitos[i] = 8;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

numero9.addEventListener("click", function () {
  arregloDigitos[i] = 9;
  i++;
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

let Total = 0;
let operacion = "";
let digito1, digito2;

clear.addEventListener("click", function () {
  console.clear();
  arregloDigitos = [];
  console.log(arregloDigitos);
  pantalla.textContent = "0";
  operacion = "";
  i = 0;
});

clearError.addEventListener("click", function () {
  arregloDigitos = [];
  pantalla.textContent = arregloDigitos.join("");
});

borrar.addEventListener("click", function () {
  console.log(arregloDigitos.length);
  arregloDigitos.pop();
  console.log(arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
});

suma.addEventListener("click", function () {
  operacion = "+";
  digito1 = Number(arregloDigitos.join(""));
  console.log("digito1:" + digito1);
  arregloDigitos = [];
  console.log(arregloDigitos);
  pantalla.textContent = "+";
  i = 0;
});

resta.addEventListener("click", function () {
  operacion = "-";
  digito1 = Number(arregloDigitos.join(""));
  console.log("digito1:" + digito1);
  arregloDigitos = [];
  console.log(arregloDigitos);
  pantalla.textContent = "-";
  i = 0;
});

multiplicacion.addEventListener("click", function () {
  operacion = "*";
  digito1 = Number(arregloDigitos.join(""));
  console.log(digito1);
  arregloDigitos = [];
  console.log(arregloDigitos);
  pantalla.textContent = "x";
  i = 0;
});

division.addEventListener("click", function () {
  operacion = "/";
  digito1 = Number(arregloDigitos.join(""));
  console.log(digito1);
  arregloDigitos = [];
  console.log(arregloDigitos);
  pantalla.textContent = "÷";
  i = 0;
});

let j = 0;

negativo.addEventListener("click", function () {
  operacion = "(-)";
  arregloDigitos[i] = "-";
  console.log(arregloDigitos);
  i++;
  digito1 = Number(arregloDigitos.join(""));
  pantalla.textContent = arregloDigitos.join("");
});

let cont = 0;
point.addEventListener("click", function () {
  console.log("arregloPointEvent:" + arregloDigitos);
  arregloDigitos[i] = ".";
  console.log("arregloPointEvent:" + arregloDigitos);
  pantalla.textContent = arregloDigitos.join("");
  i++;
  if (cont == 2) {
    digito2 = Number(arregloDigitos.join(""));
    console.log("digito1(point):" + digito2);
    pantalla.textContent = arregloDigitos.join("");
  }
  cont++;
});

equal.addEventListener("click", function () {
  if (operacion == "+") {
    digito2 = Number(arregloDigitos.join(""));
    console.log("digito2:" + digito2);
    arregloDigitos = [];
    console.log(arregloDigitos);
    Total = digito1 + digito2;
    console.log("Suma: " + Total);
    arregloDigitos = [Total];
    console.log(arregloDigitos);
    pantalla.textContent = arregloDigitos.join("");
    operacion = "";
  } else if (operacion == "-") {
    digito2 = Number(arregloDigitos.join(""));
    console.log(digito2);
    arregloDigitos = [];
    console.log(arregloDigitos);
    Total = digito1 - digito2;
    console.log("Suma: " + Total);
    arregloDigitos = [Total];
    console.log(arregloDigitos);
    pantalla.textContent = arregloDigitos.join("");
    operacion = "";
  } else if (operacion == "*") {
    digito2 = Number(arregloDigitos.join(""));
    console.log(digito2);
    arregloDigitos = [];
    console.log(arregloDigitos);
    Total = digito1 * digito2;
    console.log("Suma: " + Total);
    arregloDigitos = [Total];
    console.log(arregloDigitos);
    pantalla.textContent = arregloDigitos.join("");
    operacion = "";
  } else if (operacion == "/") {
    digito2 = Number(arregloDigitos.join(""));
    console.log(digito2);
    arregloDigitos = [];
    console.log(arregloDigitos);
    Total = digito1 / digito2;
    console.log("Suma: " + Total);
    arregloDigitos = [Total];
    console.log(arregloDigitos);
    pantalla.textContent = arregloDigitos.join("");
    operacion = "";
  } else {
  }
});
