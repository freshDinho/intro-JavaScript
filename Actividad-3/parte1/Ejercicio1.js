let nombre = 0,
  edad = 0;
nombre = prompt("Nombre:" + nombre);
edad = prompt("Edad:" + edad);

if (edad >= 18) {
  console.log("Puedes ingresar a la discoteca...");
  if (nombre == "Mario" || nombre == "Carlos")
    console.log("Puedes ingresar al VIP...");
} else {
  console.log("No Puedes ingresar a la discoteca...");
}
