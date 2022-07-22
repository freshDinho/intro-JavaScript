let btnRegresar = document.getElementById("btn-regresar");
let usuario = localStorage.getItem("usuario");
let contraseña = localStorage.getItem("contraseña");

let text = "Bienvenido! " + usuario;
document.getElementById("paragraph").innerHTML = text;

btnRegresar.addEventListener("click", function () {
  window.location.replace("index.html");
});
