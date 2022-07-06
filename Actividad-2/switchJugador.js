let velocidad = 40,
  altura = 190,
  edad = 15;

if (velocidad >= 30 && altura >= 175 && edad >= 18) {
  console.log("Puedes ingresar al equipo de mayores");
} else if (velocidad >= 30 && altura >= 175 && (edad >= 15 || edad <= 18)) {
  console.log("Puedes ingresar al equipo de menores");
} else {
  console.log("No puedes ingresar al equipo");
}
