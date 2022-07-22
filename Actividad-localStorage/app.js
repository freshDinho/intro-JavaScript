let btnEnviar = document.getElementById("btn-enviar");
let btnBorrar = document.getElementById("btn-borrar");

btnEnviar.addEventListener("click", function () {
  window.location.replace("saludo.html");
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  console.log(usuario, contraseña);
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("contraseña", contraseña);
});

btnBorrar.addEventListener("click", function () {
  localStorage.clear();
});
